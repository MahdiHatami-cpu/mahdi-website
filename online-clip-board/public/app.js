(() => {
  'use strict';

  const API = '/api';
  const DEFAULT_EXPIRE = 15;
  const MAX_TEXT = 2000;
  const MAX_FILE = 50 * 1024 * 1024;

  let selectedFile = null;
  let selectedExpire = DEFAULT_EXPIRE;
  let countdownTimer = null;

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // DOM refs
  const themeToggle = $('#theme-toggle');
  const themeIcon = $('#theme-icon');
  const tabs = $$('.tab');
  const tabSend = $('#tab-send');
  const tabRetrieve = $('#tab-retrieve');
  const textInput = $('#text-input');
  const charCount = $('#char-count');
  const dropZone = $('#drop-zone');
  const dropZoneContent = $('#drop-zone-content');
  const filePreview = $('#file-preview');
  const fileNameEl = $('#file-name');
  const fileSizeEl = $('#file-size');
  const removeFileBtn = $('#remove-file');
  const fileInput = $('#file-input');
  const filePickerBtn = $('#file-picker-btn');
  const expireBtns = $$('.expire-btn');
  const uploadBtn = $('#upload-btn');
  const codeInput = $('#code-input');
  const retrieveBtn = $('#retrieve-btn');
  const successScreen = $('#success-screen');
  const resultCode = $('#result-code');
  const copyCodeBtn = $('#copy-code-btn');
  const qrContainer = $('#qr-container');
  const countdownEl = $('#countdown');
  const newUploadBtn = $('#new-upload-btn');
  const resultScreen = $('#result-screen');
  const textResult = $('#text-result');
  const retrievedText = $('#retrieved-text');
  const copyTextBtn = $('#copy-text-btn');
  const downloadTxtBtn = $('#download-txt-btn');
  const fileResult = $('#file-result');
  const resultFileName = $('#result-file-name');
  const resultFileSize = $('#result-file-size');
  const resultFileType = $('#result-file-type');
  const downloadFileBtn = $('#download-file-btn');
  const resultExpires = $('#result-expires');
  const newRetrieveBtn = $('#new-retrieve-btn');
  const pasteOverlay = $('#paste-overlay');

  // Theme
  const savedTheme = localStorage.getItem('clipboard_theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon();

  themeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('clipboard_theme', next);
    updateThemeIcon();
  });

  function updateThemeIcon() {
    themeIcon.textContent = document.body.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }

  // Tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  function switchTab(tab) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    tabSend.classList.toggle('active', tab === 'send');
    tabRetrieve.classList.toggle('active', tab === 'retrieve');
    successScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
  }

  // Text input
  textInput.addEventListener('input', () => {
    const len = textInput.value.length;
    charCount.textContent = len;
    charCount.parentElement.classList.toggle('warning', len > MAX_TEXT * 0.9);
    updateUploadBtn();
    if (len > 0) clearFile();
  });

  // File upload
  dropZone.addEventListener('click', (e) => {
    if (e.target === removeFileBtn || e.target.closest('.remove-file')) return;
    fileInput.click();
  });

  filePickerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) handleFile(fileInput.files[0]);
  });

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });

  removeFileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    clearFile();
  });

  function handleFile(file) {
    if (file.size > MAX_FILE) {
      showError('File exceeds 50MB limit');
      return;
    }
    selectedFile = file;
    fileNameEl.textContent = file.name;
    fileSizeEl.textContent = formatSize(file.size);
    dropZoneContent.style.display = 'none';
    filePreview.style.display = 'flex';
    textInput.value = '';
    charCount.textContent = '0';
    updateUploadBtn();
  }

  function clearFile() {
    selectedFile = null;
    fileInput.value = '';
    dropZoneContent.style.display = '';
    filePreview.style.display = 'none';
    updateUploadBtn();
  }

  function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  // Expiration
  expireBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      expireBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedExpire = parseInt(btn.dataset.minutes, 10);
    });
  });

  // Upload button state
  function updateUploadBtn() {
    uploadBtn.disabled = !(textInput.value.trim() || selectedFile);
  }

  // Upload
  uploadBtn.addEventListener('click', doUpload);

  async function doUpload() {
    const text = textInput.value.trim();
    if (!text && !selectedFile) return;

    uploadBtn.disabled = true;
    uploadBtn.innerHTML = '<span class="loading-spinner"></span>';

    try {
      const formData = new FormData();
      if (text) formData.append('text', text);
      if (selectedFile) formData.append('file', selectedFile);
      formData.append('expire_minutes', String(selectedExpire));

      const res = await fetch(`${API}/upload`, { method: 'POST', body: formData });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Upload failed');

      showSuccess(data);
    } catch (err) {
      showError(err.message);
    } finally {
      uploadBtn.disabled = false;
      uploadBtn.textContent = 'Upload';
    }
  }

  function showSuccess(data) {
    tabSend.style.display = 'none';
    successScreen.style.display = 'block';
    resultCode.textContent = data.code;

    // QR code
    qrContainer.innerHTML = '';
    if (typeof QRCode !== 'undefined') {
      const url = `${window.location.origin}/?code=${data.code}`;
      QRCode.toDataURL(url, { width: 180, margin: 2 }, (err, src) => {
        if (!err) {
          const img = document.createElement('img');
          img.src = src;
          img.alt = 'QR Code';
          qrContainer.appendChild(img);
        }
      });
    }

    // Countdown
    startCountdown(data.expires_at);
  }

  function startCountdown(expiresAt) {
    if (countdownTimer) clearInterval(countdownTimer);
    const end = new Date(expiresAt).getTime();

    function update() {
      const remaining = end - Date.now();
      if (remaining <= 0) {
        countdownEl.textContent = 'Expired';
        countdownEl.classList.remove('urgent');
        clearInterval(countdownTimer);
        return;
      }
      const mins = Math.floor(remaining / 60000);
      const secs = Math.floor((remaining % 60000) / 1000);
      countdownEl.textContent = `Expires in ${mins}:${String(secs).padStart(2, '0')}`;
      countdownEl.classList.toggle('urgent', remaining < 60000);
    }

    update();
    countdownTimer = setInterval(update, 1000);
  }

  // Copy code
  copyCodeBtn.addEventListener('click', () => {
    copyToClipboard(resultCode.textContent);
    copyCodeBtn.textContent = 'Copied!';
    copyCodeBtn.classList.add('copied');
    setTimeout(() => {
      copyCodeBtn.textContent = 'Copy';
      copyCodeBtn.classList.remove('copied');
    }, 2000);
  });

  // New upload
  newUploadBtn.addEventListener('click', () => {
    successScreen.style.display = 'none';
    tabSend.style.display = '';
    textInput.value = '';
    charCount.textContent = '0';
    clearFile();
    if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
  });

  // Retrieve
  retrieveBtn.addEventListener('click', doRetrieve);
  codeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doRetrieve();
  });

  async function doRetrieve() {
    const code = codeInput.value.trim();
    if (!/^\d{5}$/.test(code)) {
      showError('Enter a valid 5-digit code');
      return;
    }

    retrieveBtn.disabled = true;
    retrieveBtn.innerHTML = '<span class="loading-spinner"></span>';

    try {
      const res = await fetch(`${API}/retrieve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Retrieve failed');

      showResult(data, code);
    } catch (err) {
      showError(err.message);
    } finally {
      retrieveBtn.disabled = false;
      retrieveBtn.textContent = 'Retrieve';
    }
  }

  function showResult(data, code) {
    resultScreen.style.display = 'block';
    $('.retrieve-section').style.display = 'none';

    if (data.type === 'text') {
      textResult.style.display = 'block';
      fileResult.style.display = 'none';
      retrievedText.textContent = data.text_content;

      copyTextBtn.onclick = () => {
        copyToClipboard(data.text_content);
        copyTextBtn.textContent = 'Copied!';
        setTimeout(() => { copyTextBtn.textContent = 'Copy Text'; }, 2000);
      };

      downloadTxtBtn.onclick = () => {
        const blob = new Blob([data.text_content], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `clipboard-${code}.txt`;
        a.click();
      };
    } else {
      textResult.style.display = 'none';
      fileResult.style.display = 'block';
      resultFileName.textContent = data.file_name || 'File';
      resultFileSize.textContent = data.file_size ? formatSize(data.file_size) : '';
      resultFileType.textContent = data.mime_type || '';

      downloadFileBtn.onclick = () => {
        window.open(`${API}/download/${code}`, '_blank');
      };
    }

    const expires = new Date(data.expires_at);
    resultExpires.textContent = `Expires: ${expires.toLocaleTimeString()}`;
  }

  // New retrieve
  newRetrieveBtn.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    $('.retrieve-section').style.display = '';
    codeInput.value = '';
  });

  // Copy to clipboard
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
  }

  // Paste handler
  document.addEventListener('paste', (e) => {
    if (document.body.getAttribute('data-tab') !== 'send' && !tabSend.classList.contains('active')) return;

    const items = e.clipboardData?.items;
    if (!items) return;

    for (const item of items) {
      if (item.kind === 'file') {
        e.preventDefault();
        const file = item.getAsFile();
        if (file) {
          handleFile(file);
          showPasteOverlay();
        }
        return;
      }
    }
  });

  function showPasteOverlay() {
    pasteOverlay.style.display = 'flex';
    setTimeout(() => { pasteOverlay.style.display = 'none'; }, 500);
  }

  // Error display
  function showError(msg) {
    const existing = document.querySelector('.error-msg');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.className = 'error-msg';
    div.textContent = msg;

    const activeTab = document.querySelector('.tab-content.active');
    activeTab.insertBefore(div, activeTab.firstChild);

    setTimeout(() => div.remove(), 4000);
  }

  // Direct link with code
  const urlParams = new URLSearchParams(window.location.search);
  const directCode = urlParams.get('code');
  if (directCode && /^\d{5}$/.test(directCode)) {
    switchTab('retrieve');
    codeInput.value = directCode;
    doRetrieve();
  }

  // Init
  updateUploadBtn();
})();

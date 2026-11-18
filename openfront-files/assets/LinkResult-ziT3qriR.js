import{aa as e,bn as t,gi as n,go as r,qi as i,vt as a}from"./index-1p1K5IL0.js";var o=(t,n=`account_modal.link_google`)=>e`
  <button
    @click=${t}
    class="w-full px-6 py-3 text-[#1f1f1f] bg-white hover:bg-[#f7f8f8] border border-[#dadce0] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg"
  >
    <img
      src=${r(`images/GoogleLogo.svg`)}
      alt=${i(`account_modal.google_alt`)}
      class="w-5 h-5"
    />
    <span class="font-bold tracking-wide">${i(n)}</span>
  </button>
`,s={google:`account_modal.link_google_success`,already_linked:`account_modal.link_google_already_linked`,steam:`account_modal.link_steam_success`,account_already_has_steam:`steam_link_modal.reason_account_already_has_steam`,steam_linked_elsewhere:`steam_link_modal.reason_steam_linked_elsewhere`,steam_has_progress:`steam_link_modal.reason_steam_has_progress`,error:`account_modal.link_google_error`,steam_error:`account_modal.link_steam_error`};async function c(){let e=()=>void n(i(`steam_link_modal.reason_steam_has_progress`)),r=await a();if(!r.ok){if(r.reason===`rate_limited`){n(i(`steam_link_modal.reason_rate_limited`,{seconds:r.retryAfterSeconds??0}));return}return e()}let o=r.conflict;if(o===null)return e();if(!o.discardable){n(i(o.block===`paid`?`steam_link_modal.reason_discard_blocked_paid`:`steam_link_modal.reason_discard_blocked`));return}await t(`steam-link-modal`).catch(()=>{});let s=document.querySelector(`steam-link-modal`);if(s===null||typeof s.openForConflict!=`function`)return console.warn(`offerSteamConflictDiscard: steam-link-modal unavailable`),e();await s.openForConflict(o.account)}function l(e){let t=typeof e?.link==`string`?e.link:void 0;if(t===void 0)return;let r=new URLSearchParams(window.location.hash.slice(1));r.delete(`link`);let a=r.toString();if(history.replaceState(null,``,a?`#${a}`:window.location.pathname+window.location.search),!Object.prototype.hasOwnProperty.call(s,t))return;if(t===`steam_has_progress`){c();return}let o=s[t];n(i(o))}export{o as n,l as t};
import{$i as e,Hi as t,Ji as n,Ur as r,Wi as i,Xi as a,Yi as o,Zi as s,dr as c,fi as l,fr as u,hi as d,mi as f,na as p,pi as m,wo as h}from"./index-CvHDv5oc.js";import{n as g}from"./UsernameText-DXhJEl41.js";import{t as _}from"./ProfileMenuModal-Bz7OpRkl.js";var v=class extends s{constructor(...e){super(...e),this.draft=``,this.busy=!1,this.error=``}createRenderRoot(){return this}willUpdate(e){e.has(`player`)&&(this.draft=this.player?.usernameBase??``,this.error=``,this.draft===``&&!this.player?.username&&this.seedFromPersona())}async seedFromPersona(){let e=c(await l.getUser().then(e=>e?.name??null).catch(()=>null));e!==null&&this.draft===``&&(this.player?.usernameBase||this.player?.username||(this.draft=e))}cooldownEnd(){let e=this.player.nextUsernameChangeAt;if(!e)return null;let t=new Date(e);return t.getTime()>Date.now()?t:null}isTemporary(){let e=this.player.usernameStatus;return(e===`premium`||e===`indefinite`)&&h(this.player.usernameBase)}formatDate(e){return e.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}handleInput(e){this.draft=e.target.value;let t=this.draft.trim();if(t.length===0){this.error=``;return}let n=u(t);this.error=n.isValid?``:n.error??``}async handleSave(){if(this.busy)return;let e=this.draft.trim(),t=u(e);if(!t.isValid){this.error=t.error??``;return}let n=this.player.usernameBase,a=[i(`account_modal.username_confirm_body`)];n!=null&&(e.toLowerCase()===n.toLowerCase()&&a.push(i(`account_modal.username_confirm_case_only`)),this.player.usernameStatus===`claimed`&&a.push(i(`account_modal.username_confirm_abandon`,{name:n}))),await f(a.join(` `),{heading:i(`account_modal.username_confirm_heading`),variant:`warning`,confirmText:i(`account_modal.username_confirm_button`)})&&(this.busy=!0,await this.finishSave(e,await r(e),!1))}async finishSave(e,n,a){if(n.ok){a||await this.warnBareClaimUnavailable(e,n.data),t(i(`account_modal.username_saved`)),history.replaceState(history.state,``,window.location.pathname+window.location.search),window.location.reload();return}if(n.code===`bare_taken`&&!a){if(!await f(i(`account_modal.username_bare_taken_body`,{requested:n.base}),{heading:i(`account_modal.username_bare_taken_heading`),variant:`warning`,confirmText:i(`account_modal.username_bare_taken_confirm`)})){this.busy=!1;return}await this.finishSave(e,await r(e,{acceptSuffixed:!0}),!0);return}this.busy=!1,this.error=this.errorMessage(n)}async warnBareClaimUnavailable(e,t){if(t.bareClaim!==`unavailable`)return;let n=t.nextUsernameChangeAt;await m(n===null?i(`account_modal.username_bare_unavailable_no_date`,{requested:e,name:t.username}):i(`account_modal.username_bare_unavailable`,{requested:e,name:t.username,date:this.formatDate(new Date(n))}))}errorMessage(e){switch(e.code){case`profane`:return i(`account_modal.username_error_profane`);case`taken`:return i(`account_modal.username_error_taken`);case`bare_taken`:return i(`account_modal.username_error_taken`);case`cooldown`:return e.retryAfterSeconds===null?i(`account_modal.username_error_failed`):i(`account_modal.username_error_cooldown`,{days:Math.max(1,Math.ceil(e.retryAfterSeconds/86400))});case`invalid`:return e.message??i(`account_modal.username_error_failed`);default:return i(`account_modal.username_error_failed`)}}renderNotices(){if(this.isTemporary())return this.renderNotice(i(`account_modal.username_temporary_notice`));let t=this.player.usernameClaimExpiresAt;return this.player.usernameStatus===`claimed`&&t?this.renderNotice(i(`account_modal.username_grace_warning`,{name:this.player.usernameBase??``,date:this.formatDate(new Date(t))})):e}renderNotice(e){return p`
      <div
        class="flex items-start gap-2.5 px-3 py-2.5 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-200 text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 shrink-0 mt-0.5"
          aria-hidden="true"
        >
          <path
            d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
          />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span>${e}</span>
      </div>
    `}renderCooldownPill(e){let t=`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border shrink-0`;return e===null?p`<span
        class="${t} bg-green-500/10 border-green-500/30 text-green-300"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-green-400"></span>
        ${i(`account_modal.username_change_ready`)}
      </span>`:p`<span
      class="${t} bg-amber-500/10 border-amber-500/30 text-amber-300"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
      ${i(`account_modal.username_locked_until`,{date:this.formatDate(e)})}
    </span>`}render(){if(!this.player||this.player.usernameStatus===void 0)return e;let t=this.cooldownEnd(),n=t!==null,r=this.draft.trim(),a=!n&&!this.busy&&r.length>=3&&this.error===``;return p`
      <div class="flex flex-col gap-4">
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-1 min-w-0">
              <span
                class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
              >
                ${i(`account_modal.username_current_label`)}
              </span>
              ${this.player.username?p`<div
                      class="text-xl font-bold text-white leading-tight break-all"
                    >
                      ${g(this.player.username,`text-white`)}
                    </div>`:p`<div class="text-sm text-white/50">
                      ${i(`account_modal.username_not_set`)}
                    </div>`}
            </div>
            ${this.renderCooldownPill(t)}
          </div>
          ${this.renderNotices()}

          <div class="border-t border-white/10 pt-4 flex flex-col gap-2">
            <label
              for="username-panel-input"
              class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
            >
              ${i(`account_modal.username_new_label`)}
            </label>
            <input
              id="username-panel-input"
              type="text"
              .value=${this.draft}
              @input=${this.handleInput}
              @keydown=${e=>{e.key===`Enter`&&a&&this.handleSave()}}
              placeholder=${i(`account_modal.username_placeholder`)}
              maxlength=${20}
              ?disabled=${n||this.busy}
              class="w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 transition-all font-medium hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-white/5 ${this.error?`border-red-500/50 focus:ring-red-500/40 focus:border-red-500/50`:`border-white/10 focus:ring-malibu-blue/50 focus:border-malibu-blue/50`}"
            />
            <div class="flex items-start justify-between gap-3 min-h-[1.25rem]">
              <span class="text-sm text-red-400">${this.error}</span>
              <span
                class="text-xs text-white/30 tabular-nums shrink-0 leading-5"
              >
                ${r.length}/${20}
              </span>
            </div>
            <o-button
              variant="primary"
              width="block"
              size="md"
              translationKey="account_modal.username_save"
              .disable=${!a}
              @click=${this.handleSave}
            ></o-button>
          </div>
        </div>
      </div>
    `}};d([o({attribute:!1})],v.prototype,`player`,void 0),d([n()],v.prototype,`draft`,void 0),d([n()],v.prototype,`busy`,void 0),d([n()],v.prototype,`error`,void 0),v=d([a(`username-panel`)],v);var y=class extends _{constructor(...e){super(...e),this.routerName=`change-username`,this.titleKey=`change_username_modal.title`}renderSignedIn(e){let t=e.player;return t.usernameStatus===void 0?p`
        <div class="p-6">
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
          >
            <p class="text-white/60 text-sm">
              ${i(`change_username_modal.unavailable`)}
            </p>
          </div>
        </div>
      `:p`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <username-panel .player=${t}></username-panel>
        </div>
      </div>
    `}};y=d([a(`change-username-modal`)],y);export{y as ChangeUsernameModal};
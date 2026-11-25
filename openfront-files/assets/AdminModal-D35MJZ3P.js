import{$i as e,$t as t,Qt as n,Xr as r,Zi as i,Zr as a,aa as o,li as s,qi as c,vi as l}from"./index-DAKbNxz9.js";var u=class extends t{constructor(...e){super(...e),this.routerName=`admin`,this.active=r()===`root`,this.submitting=!1,this.errorKey=null}modalConfig(){return{maxWidth:`520px`}}renderHeaderSlot(){return n({title:c(`admin_modal.title`),onBack:()=>this.close()})}onOpen(){this.active=r()===`root`,this.errorKey=null}async submit(e){if(e.preventDefault(),this.submitting)return;let t=e.currentTarget,n=new FormData(t).get(`password`);if(typeof n!=`string`||n.length===0)return;this.submitting=!0,this.errorKey=null;let r=await s(n);if(this.submitting=!1,r.ok){t.reset(),this.active=!0;return}this.errorKey=`admin_modal.error_${r.reason}`}logout(){a(),this.active=!1,this.errorKey=null}renderBody(){return this.active?o`
        <div class="p-6 space-y-5">
          <div
            class="rounded-lg border border-green-500/40 bg-green-950/30 p-4 text-green-100"
          >
            ${c(`admin_modal.active`)}
          </div>
          <p class="text-sm text-gray-300">
            ${c(`admin_modal.active_description`)}
          </p>
          <button
            type="button"
            class="w-full rounded-lg border border-red-500/50 bg-red-950/30 px-4 py-3 font-semibold text-red-100 hover:bg-red-900/40"
            @click=${this.logout}
          >
            ${c(`admin_modal.logout`)}
          </button>
        </div>
      `:o`
      <form class="p-6 space-y-5" @submit=${this.submit}>
        <p class="text-sm text-gray-300">
          ${c(`admin_modal.description`)}
        </p>
        <label class="block space-y-2">
          <span class="text-sm font-semibold text-gray-100"
            >${c(`admin_modal.password`)}</span
          >
          <input
            name="password"
            type="password"
            autocomplete="current-password"
            required
            maxlength="1024"
            class="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-400"
          />
        </label>
        ${this.errorKey?o`<p class="text-sm text-red-300" role="alert">
                ${c(this.errorKey)}
              </p>`:null}
        <button
          type="submit"
          ?disabled=${this.submitting}
          class="w-full rounded-lg bg-blue-600 px-4 py-3 font-bold text-white hover:bg-blue-500 disabled:cursor-wait disabled:opacity-60"
        >
          ${c(this.submitting?`admin_modal.signing_in`:`admin_modal.sign_in`)}
        </button>
      </form>
    `}};l([i()],u.prototype,`active`,void 0),l([i()],u.prototype,`submitting`,void 0),l([i()],u.prototype,`errorKey`,void 0),u=l([e(`admin-modal`)],u);export{u as AdminModal};
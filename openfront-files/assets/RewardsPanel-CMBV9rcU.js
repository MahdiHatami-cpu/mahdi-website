import{$i as e,Nr as t,Pr as n,Qi as r,To as i,Zi as a,aa as o,ea as s,gi as c,gr as l,hr as u,qi as d,sa as f,v as p,vi as m}from"./index-1p1K5IL0.js";import"./CapIcon-BhZTufsO.js";import"./PlutoniumIcon-Da-nzCmg.js";var h=class extends s{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(e){if(!this.claiming){this.claiming=!0;try{let r=await l(e.id);if(r===!1){await c(d(`account_modal.claim_failed`));return}if(n(),r!==`not_found`&&`held`in r){let n=await t(),a=n===!1?this.rewards:n.player.rewards??[];this.emitChanged({currency:n===!1?null:n.player.currency??null,rewards:a.map(t=>t.id===e.id&&i(t)?{...t,held:r.held}:t)});return}if(r===`not_found`){let n=await t();this.emitChanged({currency:n===!1?null:n.player.currency??null,rewards:n===!1?this.rewards.filter(t=>t.id!==e.id):n.player.rewards??[]});return}this.emitChanged({currency:r.currency,rewards:this.rewards.filter(t=>t.id!==e.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let e=await u();if(e===!1){await c(d(`account_modal.claim_failed`));return}n(),this.emitChanged({currency:e.currency,rewards:e.held})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(e){let t=p(e.reason);return t===void 0?e.note?e.note:e.reason===`subscription_signup_bonus`?d(`account_modal.reward_signup_bonus`):e.reason===`subscription_monthly_bonus`?d(`account_modal.reward_monthly_bonus`):e.reason===`subscription_daily`?d(`account_modal.reward_daily`):e.reason:d(t)}renderReward(e){let t=e.currencyType===`hard`;return o`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${t?o`<plutonium-icon .size=${20}></plutonium-icon>`:o`<cap-icon .size=${20}></cap-icon>`}
          <div class="flex flex-col min-w-0">
            <span
              class="text-sm font-bold ${t?`text-green-400`:`text-amber-700`}"
              >+${this.formatAmount(e.amount)}</span
            >
            <span class="text-xs text-white/60 truncate"
              >${this.rewardLabel(e)}</span
            >
          </div>
        </div>
        ${i(e)?o`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim"
                .disable=${this.claiming}
                @click=${()=>this.handleClaim(e)}
              ></o-button>`:o`<span
                data-reward-held
                class="shrink-0 text-xs font-bold text-white/60 text-right"
                >${e.held===`trust`?d(`account_modal.reward_held_trust`):``}</span
              >`}
      </div>
    `}trustNoteKey(){let e=f.isOnGamePortal();return this.signedIn?e?`account_modal.reward_held_trust_info_crazygames`:`account_modal.reward_held_trust_info`:e?`account_modal.reward_held_trust_info_signed_out_crazygames`:`account_modal.reward_held_trust_info_signed_out`}otherHoldNoteKey(){return`account_modal.reward_held_other_info`}renderHeldNotes(){let e=this.rewards.filter(e=>!i(e)),t=new Set;return e.some(e=>e.held===`trust`)&&t.add(this.trustNoteKey()),e.some(e=>e.held!==`trust`)&&t.add(this.otherHoldNoteKey()),[...t].map(e=>o`<p data-reward-held-note class="mt-3 text-xs text-white/60">
          ${d(e)}
        </p>`)}render(){if(this.rewards.length===0)return o``;let e=this.rewards.filter(i);return o`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${d(`account_modal.unclaimed_rewards`)}
          </h3>
          ${e.length>1?o`<o-button
                  variant="primary"
                  size="xs"
                  translationKey="account_modal.claim_all"
                  .disable=${this.claiming}
                  @click=${this.handleClaimAll}
                ></o-button>`:``}
        </div>
        <div class="flex flex-col gap-2">
          ${this.rewards.map(e=>this.renderReward(e))}
        </div>
        ${this.renderHeldNotes()}
      </div>
    `}};m([r({type:Array})],h.prototype,`rewards`,void 0),m([r({type:Boolean})],h.prototype,`signedIn`,void 0),m([a()],h.prototype,`claiming`,void 0),h=m([e(`rewards-panel`)],h);
import{$i as e,Eo as t,Fr as n,Ji as r,Pr as i,Qi as a,_i as o,_r as s,ca as c,ea as l,gr as u,oa as d,ta as f,v as p,yi as m}from"./index-Cv-L6ZYS.js";import"./CapIcon-BjNqGPDJ.js";import"./PlutoniumIcon-GjaZU5e1.js";var h=class extends f{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(e){if(!this.claiming){this.claiming=!0;try{let a=await s(e.id);if(a===!1){await o(r(`account_modal.claim_failed`));return}if(n(),a!==`not_found`&&`held`in a){let n=await i(),r=n===!1?this.rewards:n.player.rewards??[];this.emitChanged({currency:n===!1?null:n.player.currency??null,rewards:r.map(n=>n.id===e.id&&t(n)?{...n,held:a.held}:n)});return}if(a===`not_found`){let t=await i();this.emitChanged({currency:t===!1?null:t.player.currency??null,rewards:t===!1?this.rewards.filter(t=>t.id!==e.id):t.player.rewards??[]});return}this.emitChanged({currency:a.currency,rewards:this.rewards.filter(t=>t.id!==e.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let e=await u();if(e===!1){await o(r(`account_modal.claim_failed`));return}n(),this.emitChanged({currency:e.currency,rewards:e.held})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(e){let t=p(e.reason);return t===void 0?e.note?e.note:e.reason===`subscription_signup_bonus`?r(`account_modal.reward_signup_bonus`):e.reason===`subscription_monthly_bonus`?r(`account_modal.reward_monthly_bonus`):e.reason===`subscription_daily`?r(`account_modal.reward_daily`):e.reason:r(t)}renderReward(e){let n=e.currencyType===`hard`;return d`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${n?d`<plutonium-icon .size=${20}></plutonium-icon>`:d`<cap-icon .size=${20}></cap-icon>`}
          <div class="flex flex-col min-w-0">
            <span
              class="text-sm font-bold ${n?`text-green-400`:`text-amber-700`}"
              >+${this.formatAmount(e.amount)}</span
            >
            <span class="text-xs text-white/60 truncate"
              >${this.rewardLabel(e)}</span
            >
          </div>
        </div>
        ${t(e)?d`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim"
                .disable=${this.claiming}
                @click=${()=>this.handleClaim(e)}
              ></o-button>`:d`<span
                data-reward-held
                class="shrink-0 text-xs font-bold text-white/60 text-right"
                >${e.held===`trust`?r(`account_modal.reward_held_trust`):``}</span
              >`}
      </div>
    `}trustNoteKey(){let e=c.isOnGamePortal();return this.signedIn?e?`account_modal.reward_held_trust_info_crazygames`:`account_modal.reward_held_trust_info`:e?`account_modal.reward_held_trust_info_signed_out_crazygames`:`account_modal.reward_held_trust_info_signed_out`}otherHoldNoteKey(){return`account_modal.reward_held_other_info`}renderHeldNotes(){let e=this.rewards.filter(e=>!t(e)),n=new Set;return e.some(e=>e.held===`trust`)&&n.add(this.trustNoteKey()),e.some(e=>e.held!==`trust`)&&n.add(this.otherHoldNoteKey()),[...n].map(e=>d`<p data-reward-held-note class="mt-3 text-xs text-white/60">
          ${r(e)}
        </p>`)}render(){if(this.rewards.length===0)return d``;let e=this.rewards.filter(t);return d`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${r(`account_modal.unclaimed_rewards`)}
          </h3>
          ${e.length>1?d`<o-button
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
    `}};m([e({type:Array})],h.prototype,`rewards`,void 0),m([e({type:Boolean})],h.prototype,`signedIn`,void 0),m([a()],h.prototype,`claiming`,void 0),h=m([l(`rewards-panel`)],h);
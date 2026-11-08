import{$t as e,Ji as t,Qt as n,So as r,Wi as i,Xi as a,hi as o,na as s}from"./index-BUHAHxGn.js";import"./RewardsPanel-C2IesODe.js";var c=class extends e{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.hasClaimable()||this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e,t){this.rewards=e,this.signedIn=t,this.open()}hasClaimable(){return this.rewards.some(r)}open(e){this.hasClaimable()&&super.open(e)}renderHeaderSlot(){return n({title:i(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:i(`common.back`)})}renderBody(){return s`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          .signedIn=${this.signedIn}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};o([t()],c.prototype,`rewards`,void 0),o([t()],c.prototype,`signedIn`,void 0),c=o([a(`rewards-modal`)],c);export{c as RewardsModal};
import{$t as e,Eo as t,Ji as n,Qi as r,Qt as i,ea as a,oa as o,yi as s}from"./index-Cv-L6ZYS.js";import"./RewardsPanel-C0VhT5bB.js";var c=class extends e{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.hasClaimable()||this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e,t){this.rewards=e,this.signedIn=t,this.open()}hasClaimable(){return this.rewards.some(t)}open(e){this.hasClaimable()&&super.open(e)}renderHeaderSlot(){return i({title:n(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:n(`common.back`)})}renderBody(){return o`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          .signedIn=${this.signedIn}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};s([r()],c.prototype,`rewards`,void 0),s([r()],c.prototype,`signedIn`,void 0),c=s([a(`rewards-modal`)],c);export{c as RewardsModal};
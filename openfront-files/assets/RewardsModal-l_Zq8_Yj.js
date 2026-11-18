import{$i as e,$t as t,Qt as n,To as r,Zi as i,aa as a,qi as o,vi as s}from"./index-C2GUdQUt.js";import"./RewardsPanel-ChuhXzxB.js";var c=class extends t{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.hasClaimable()||this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e,t){this.rewards=e,this.signedIn=t,this.open()}hasClaimable(){return this.rewards.some(r)}open(e){this.hasClaimable()&&super.open(e)}renderHeaderSlot(){return n({title:o(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:o(`common.back`)})}renderBody(){return a`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          .signedIn=${this.signedIn}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};s([i()],c.prototype,`rewards`,void 0),s([i()],c.prototype,`signedIn`,void 0),c=s([e(`rewards-modal`)],c);export{c as RewardsModal};
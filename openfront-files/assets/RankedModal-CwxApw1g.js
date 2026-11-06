import{$t as e,En as t,Ji as n,Nr as r,On as i,Qt as a,Tn as o,Wi as s,Xi as c,di as l,hi as u,ia as d,ja as f,na as p}from"./index-rCDaHnQd.js";var m=class extends e{isRankedEligible(){return f(this.userMeResponse)||this.portalSignedIn}constructor(){super(),this.routerName=`ranked`,this.elo=`...`,this.elo2v2=`...`,this.eloFfa=`...`,this.userMeResponse=!1,this.errorMessage=null,this.loading=!0,this.showTrustRequired=!1,this.portalSignedIn=!1,this.handleUserMeResponse=e=>{this.errorMessage=null,this.userMeResponse=e.detail,this.updateElo()},this.id=`page-ranked`}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse)}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}updateElo(){if(this.errorMessage){this.elo=s(`map_component.error`),this.elo2v2=s(`map_component.error`),this.eloFfa=s(`map_component.error`);return}if(this.isRankedEligible()){let e=this.userMeResponse?this.userMeResponse.player.leaderboard:void 0,t=s(`matchmaking_modal.no_elo`);this.elo=e?.oneVone?.elo??t,this.elo2v2=e?.twoVtwo?.elo??t,this.eloFfa=e?.ffa?.elo??t}}async onOpen(){this.loading=!0,this.showTrustRequired=!1,this.elo=`...`,this.elo2v2=`...`,this.eloFfa=`...`,this.errorMessage=null;try{let e=await r();this.userMeResponse=e,this.portalSignedIn=d.isOnGamePortal()&&await d.getUserProfile()!==null}catch(e){console.warn(`Failed to fetch user profile for ranked modal`,e),this.userMeResponse=!1,this.errorMessage=s(`map_component.error`),this.elo=s(`map_component.error`),this.elo2v2=s(`map_component.error`),this.eloFfa=s(`map_component.error`)}finally{this.loading=!1,this.updateElo()}}createRenderRoot(){return this}renderHeaderSlot(){return a({title:s(`mode_selector.ranked_title`),onBack:()=>this.close(),ariaLabel:s(`common.back`)})}renderBody(){return p`
      <div class="custom-scrollbar p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderCard(s(`mode_selector.ranked_1v1_title`),this.errorMessage??(this.isRankedEligible()?s(`matchmaking_modal.elo`,{elo:this.elo}):s(`mode_selector.ranked_title`)),()=>this.handleRanked(`1v1`))}
          ${this.renderCard(s(`mode_selector.ranked_2v2_title`),this.errorMessage??(this.isRankedEligible()?s(`matchmaking_modal.elo`,{elo:this.elo2v2}):s(`mode_selector.ranked_title`)),()=>this.handleRanked(`2v2`))}
          ${this.renderCard(s(`mode_selector.ranked_ffa_title`),this.errorMessage??(this.isRankedEligible()?s(`matchmaking_modal.elo`,{elo:this.eloFfa}):s(`mode_selector.ranked_title`)),()=>this.handleRanked(`ffa`))}
          ${this.renderCard(s(`mode_selector.ranked_clanwars_title`),this.errorMessage??s(`mode_selector.ranked_clanwars_subtitle`),()=>this.handleRanked(`clanwars`))}
        </div>
        <p class="mt-6 text-xs text-white/60 leading-relaxed text-center">
          ${s(`mode_selector.ranked_pairing_note`)}
        </p>
        ${this.showTrustRequired?t(this.isRankedEligible(),()=>this.showTrustRequired=!1,`ranked`):``}
      </div>
    `}renderCard(e,t,n){return p`
      <button
        @click=${n}
        class="relative flex flex-col w-full h-28 sm:h-32 rounded-2xl bg-malibu-blue border-0 transition-all duration-200 hover:bg-aquarius hover:scale-[1.03] hover:shadow-[var(--shadow-action-card-hover)] active:bg-malibu-blue/80 active:scale-[0.98] p-6 items-center justify-center gap-3"
      >
        <div class="flex flex-col items-center gap-1 text-center">
          <h3
            class="text-lg sm:text-xl font-bold text-white uppercase tracking-widest leading-tight"
          >
            ${e}
          </h3>
          <p
            class="text-xs text-white/80 uppercase tracking-wider whitespace-pre-line leading-tight"
          >
            ${t}
          </p>
        </div>
        ${this.trustKnown()?o(i(this.userMeResponse),{tooltipTitle:s(`mode_selector.ranked_trust_tooltip_title`)}):``}
      </button>
    `}trustKnown(){return!this.loading&&this.errorMessage===null}async handleRanked(e){if(this.trustKnown()&&!i(this.userMeResponse)){this.showTrustRequired=!0;return}if(await l()===!1){this.close(),window.showPage?.(`page-account`);return}document.dispatchEvent(new CustomEvent(`open-matchmaking`,{detail:{mode:e}}))}};u([n()],m.prototype,`elo`,void 0),u([n()],m.prototype,`elo2v2`,void 0),u([n()],m.prototype,`eloFfa`,void 0),u([n()],m.prototype,`userMeResponse`,void 0),u([n()],m.prototype,`errorMessage`,void 0),u([n()],m.prototype,`loading`,void 0),u([n()],m.prototype,`showTrustRequired`,void 0),u([n()],m.prototype,`portalSignedIn`,void 0),m=u([c(`ranked-modal`)],m);export{m as RankedModal};
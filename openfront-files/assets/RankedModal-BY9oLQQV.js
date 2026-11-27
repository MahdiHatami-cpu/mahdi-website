import{$t as e,En as t,Fa as n,Ji as r,On as i,Pr as a,Qi as o,Qt as s,Tn as c,ca as l,ea as u,hi as d,oa as f,yi as p}from"./index-Cv-L6ZYS.js";var m=class extends e{isRankedEligible(){return n(this.userMeResponse)||this.portalSignedIn}constructor(){super(),this.routerName=`ranked`,this.elo=`...`,this.elo2v2=`...`,this.eloFfa=`...`,this.userMeResponse=!1,this.errorMessage=null,this.loading=!0,this.showTrustRequired=!1,this.portalSignedIn=!1,this.handleUserMeResponse=e=>{this.errorMessage=null,this.userMeResponse=e.detail,this.updateElo()},this.id=`page-ranked`}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse)}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}updateElo(){if(this.errorMessage){this.elo=r(`map_component.error`),this.elo2v2=r(`map_component.error`),this.eloFfa=r(`map_component.error`);return}if(this.isRankedEligible()){let e=this.userMeResponse?this.userMeResponse.player.leaderboard:void 0,t=r(`matchmaking_modal.no_elo`);this.elo=e?.oneVone?.elo??t,this.elo2v2=e?.twoVtwo?.elo??t,this.eloFfa=e?.ffa?.elo??t}}async onOpen(){this.loading=!0,this.showTrustRequired=!1,this.elo=`...`,this.elo2v2=`...`,this.eloFfa=`...`,this.errorMessage=null;try{let e=await a();this.userMeResponse=e,this.portalSignedIn=l.isOnGamePortal()&&await l.getUserProfile()!==null}catch(e){console.warn(`Failed to fetch user profile for ranked modal`,e),this.userMeResponse=!1,this.errorMessage=r(`map_component.error`),this.elo=r(`map_component.error`),this.elo2v2=r(`map_component.error`),this.eloFfa=r(`map_component.error`)}finally{this.loading=!1,this.updateElo()}}createRenderRoot(){return this}renderHeaderSlot(){return s({title:r(`mode_selector.ranked_title`),onBack:()=>this.close(),ariaLabel:r(`common.back`)})}renderBody(){return f`
      <div class="custom-scrollbar p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderCard(r(`mode_selector.ranked_1v1_title`),this.errorMessage??(this.isRankedEligible()?r(`matchmaking_modal.elo`,{elo:this.elo}):r(`mode_selector.ranked_title`)),()=>this.handleRanked(`1v1`))}
          ${this.renderCard(r(`mode_selector.ranked_2v2_title`),this.errorMessage??(this.isRankedEligible()?r(`matchmaking_modal.elo`,{elo:this.elo2v2}):r(`mode_selector.ranked_title`)),()=>this.handleRanked(`2v2`))}
          ${this.renderCard(r(`mode_selector.ranked_ffa_title`),this.errorMessage??(this.isRankedEligible()?r(`matchmaking_modal.elo`,{elo:this.eloFfa}):r(`mode_selector.ranked_title`)),()=>this.handleRanked(`ffa`))}
          ${this.renderCard(r(`mode_selector.ranked_clanwars_title`),this.errorMessage??r(`mode_selector.ranked_clanwars_subtitle`),()=>this.handleRanked(`clanwars`))}
        </div>
        <p class="mt-6 text-xs text-white/60 leading-relaxed text-center">
          ${r(`mode_selector.ranked_pairing_note`)}
        </p>
        ${this.showTrustRequired?t(this.isRankedEligible(),()=>this.showTrustRequired=!1,`ranked`):``}
      </div>
    `}renderCard(e,t,n){return f`
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
        ${this.trustKnown()?c(i(this.userMeResponse),{tooltipTitle:r(`mode_selector.ranked_trust_tooltip_title`)}):``}
      </button>
    `}trustKnown(){return!this.loading&&this.errorMessage===null}async handleRanked(e){if(this.trustKnown()&&!i(this.userMeResponse)){this.showTrustRequired=!0;return}if(await d()===!1){this.close(),window.showPage?.(`page-account`);return}document.dispatchEvent(new CustomEvent(`open-matchmaking`,{detail:{mode:e}}))}};p([o()],m.prototype,`elo`,void 0),p([o()],m.prototype,`elo2v2`,void 0),p([o()],m.prototype,`eloFfa`,void 0),p([o()],m.prototype,`userMeResponse`,void 0),p([o()],m.prototype,`errorMessage`,void 0),p([o()],m.prototype,`loading`,void 0),p([o()],m.prototype,`showTrustRequired`,void 0),p([o()],m.prototype,`portalSignedIn`,void 0),m=p([u(`ranked-modal`)],m);export{m as RankedModal};
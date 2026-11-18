import{$i as e,$o as t,$t as n,Ca as r,Cn as i,Dn as a,En as o,Go as ee,Mi as s,Oi as c,On as te,Qt as ne,Sn as re,Uo as l,Vi as ie,Zi as u,aa as d,as as f,cn as ae,ln as oe,na as p,on as m,qi as h,sa as g,sn as _,ti as se,va as v,vi as y,wa as ce,wn as le,xi as ue,xn as de}from"./index-C2GUdQUt.js";import{t as b}from"./StyledSelect-Bd8uEnA7.js";import{t as x}from"./repeat-DEXPNDR2.js";var S=[`ffa`,`teams`,`hvn`],C=[`public`,`hosted`],w=[l,f,t],T=[`2`,`3`,`4`,`5`,`6`,`7`,`8`],fe=[...w,...T],E={modes:[],sources:[],teamConfigs:[],hideEmpty:!1,minJoined:null,maxJoined:null,minCapacity:null,maxCapacity:null,minTeamSize:null,maxTeamSize:null},pe={[l]:2,[f]:3,[t]:4};function me(e){let t=e.gameConfig,n=t?.maxPlayers??null,r=t?.playerTeams,i=e.publicGameType===`hosted`?`hosted`:`public`,a=e.numClients??0;if(t?.gameMode!==ee.Team)return{mode:`ffa`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};if(r===`Humans Vs Nations`)return{mode:`hvn`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};let o=null,s=null,c=null;if(typeof r==`number`)o=String(r),s=r,c=n!==null&&r>0?Math.floor(n/r):null;else if(typeof r==`string`){let e=pe[r];e!==void 0&&(o=r,c=e,s=n===null?null:Math.floor(n/e))}return{mode:`teams`,source:i,joined:a,capacity:n,teamConfig:o,teamCount:s,teamSize:c}}function D(e){return e?Object.values(e).flat().filter(e=>e!==void 0):[]}function O(e,t,n){return t===null&&n===null?!0:!(e===null||t!==null&&e<t||n!==null&&e>n)}function he(e,t){let n=me(e);return!(t.modes.length>0&&!t.modes.includes(n.mode)||t.sources.length>0&&!t.sources.includes(n.source)||t.teamConfigs.length>0&&(n.teamConfig===null||!t.teamConfigs.includes(n.teamConfig))||t.hideEmpty&&n.joined===0||!O(n.joined,t.minJoined,t.maxJoined)||!O(n.capacity,t.minCapacity,t.maxCapacity)||!O(n.teamSize,t.minTeamSize,t.maxTeamSize))}function ge(e,t){return e.startsAt===void 0&&t.startsAt===void 0?0:e.startsAt===void 0?1:t.startsAt===void 0?-1:e.startsAt-t.startsAt}function _e(e,t){return e.filter(e=>he(e,t)).sort(ge)}function k(e){let t=v.currentPlayerId();return t===null?e:`${e}:${t}`}function A(){if(v.currentPlayerId()===null)return;let e=k(j);if(localStorage.getItem(e)!==null)return;let t=localStorage.getItem(j);if(t===null)return;let n=localStorage.getItem(M),r=k(M);try{localStorage.setItem(e,t),n!==null&&localStorage.setItem(r,n)}catch(t){throw localStorage.removeItem(e),n!==null&&localStorage.removeItem(r),t}localStorage.removeItem(j),n!==null&&localStorage.removeItem(M)}var j=`detailed-view-filter-profiles`,M=`detailed-view-default-filter-profile`,ve=32;function N(e,t){return Array.isArray(e)?[...new Set(e.filter(e=>typeof e==`string`))].filter(e=>t.includes(e)).sort((e,n)=>t.indexOf(e)-t.indexOf(n)):[]}function P(e){if(typeof e!=`number`||!Number.isFinite(e))return null;let t=Math.floor(e);return t<0?null:t}function F(e){if(typeof e!=`object`||!e)return{...E};let t=e;return{modes:N(t.modes,S),sources:N(t.sources,C),teamConfigs:N(t.teamConfigs,fe),hideEmpty:t.hideEmpty===!0,minJoined:P(t.minJoined),maxJoined:P(t.maxJoined),minCapacity:P(t.minCapacity),maxCapacity:P(t.maxCapacity),minTeamSize:P(t.minTeamSize),maxTeamSize:P(t.maxTeamSize)}}function I(){return Object.create(null)}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(){let e;try{A();let t=localStorage.getItem(k(j));if(t===null)return I();e=JSON.parse(t)}catch(e){return console.warn(`Failed to read saved lobby filter profiles`,e),I()}if(typeof e!=`object`||!e||Array.isArray(e))return I();let t=I();for(let[n,r]of Object.entries(e))t[n]=F(r);return t}function z(e){try{localStorage.setItem(k(j),JSON.stringify(e))}catch(e){console.warn(`Failed to save lobby filter profiles`,e)}}function ye(e,t){let n=e.trim().slice(0,ve),r=R();return n===``||!L(r,n)&&Object.keys(r).length>=20?r:(r[n]=F(t),z(r),r)}function be(e){let t=R();return L(t,e)?(delete t[e],z(t),B()===e&&H(``),t):t}function B(){try{return A(),localStorage.getItem(k(`detailed-view-default-filter-profile`))??``}catch(e){return console.warn(`Failed to read default lobby filter profile`,e),``}}function V(e){let t=B();return L(e,t)?t:``}function H(e){try{e===``?localStorage.removeItem(k(M)):localStorage.setItem(k(M),e)}catch(e){console.warn(`Failed to save default lobby filter profile`,e)}}var U=[`ffa`,`team`,`special`],W=6,G=`all`,K=`h-40`,xe=220,Se=`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border transition-colors`,Ce=`bg-malibu-blue text-white border-malibu-blue`,we=`bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white`,q=`block text-sm font-bold uppercase tracking-widest text-white`,J=`block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5`,Y=`px-2 py-1.5 rounded-lg bg-black/30 border border-white/10 text-white text-xs focus:outline-none focus:border-malibu-blue`,X=`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors`,Z=class extends n{constructor(){super(),this.routerName=`detailed-view`,this.lobbies=null,this.filters={...E},this.showFilters=!1,this.profiles={},this.selectedProfile=``,this.defaultProfile=``,this.profileName=``,this.desktopUpdateState=null,this.viewerTrusted=!1,this.viewerSignedIn=!1,this.showTrustRequired=!1,this.desktopSessionState=null,this.serverTimeOffset=0,this.countdownTimer=null,this.lobbySocket=new oe(e=>{this.lobbies=e,this.serverTimeOffset=ue(e.serverTime);for(let t of D(e.games))le.ensure(t.gameConfig?.gameMap,()=>this.requestUpdate())}),this.appliedForAccount=void 0,this.onDesktopUpdateState=e=>{this.desktopUpdateState=e.detail},this.onUserMe=e=>{this.applyUserMe(e.detail)},this.onDesktopSessionState=e=>{this.desktopSessionState=e.detail},this.slotTops=new Map,this.id=`page-detailed-view`,this.activeTab=G}modalConfig(){return{tabs:[...U.map(e=>({key:e,label:h(`detailed_view.pane_${e}`)})),{key:G,label:h(`detailed_view.tab_all`)}]}}loadAccountProfiles(){this.profiles=R(),this.defaultProfile=V(this.profiles);let e=v.currentPlayerId();this.appliedForAccount!==e&&(this.appliedForAccount=e,this.filters={...E},this.selectedProfile=``,this.profileName=``,this.applyProfile(this.defaultProfile))}onOpen(){this.loadAccountProfiles(),this.lobbySocket.start(),this.countdownTimer??=window.setInterval(()=>this.requestUpdate(),1e3)}onClose(){this.lobbySocket.stop(),this.lobbies=null,this.countdownTimer!==null&&(clearInterval(this.countdownTimer),this.countdownTimer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.addEventListener(`userMeResponse`,this.onUserMe);let e=ae();e!==null&&this.applyUserMe(e.response),ce()&&(this.desktopUpdateState=r(),this.desktopSessionState=se()),document.addEventListener(`desktop-session-state`,this.onDesktopSessionState)}disconnectedCallback(){document.removeEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.removeEventListener(`userMeResponse`,this.onUserMe),document.removeEventListener(`desktop-session-state`,this.onDesktopSessionState),this.onClose(),super.disconnectedCallback()}applyUserMe(e){this.viewerSignedIn=a(e),this.viewerTrusted=te(e),this.loadAccountProfiles(),g.isOnGamePortal()&&g.getUserProfile().then(e=>{e!==null&&(this.viewerSignedIn=!0)})}slotElements(){return Array.from(this.querySelectorAll(`[data-lobby-slot]`))}willUpdate(){super.willUpdate(),this.slotTops=new Map(this.slotElements().map(e=>[e.dataset.lobbySlot??``,e.getBoundingClientRect().top]))}updated(){if(!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches)for(let e of this.slotElements()){let t=this.slotTops.get(e.dataset.lobbySlot??``);if(t===void 0)continue;let n=t-e.getBoundingClientRect().top;Math.abs(n)<1||(e.style.transition=`none`,e.style.transform=`translateY(${n}px)`,requestAnimationFrame(()=>{e.style.transition=`transform ${xe}ms ease-out`,e.style.transform=``}))}}createRenderRoot(){return this}renderHeaderSlot(){let e=this.activeFilterCount();return ne({title:h(`detailed_view.title`),onBack:()=>this.close(),ariaLabel:h(`common.back`),rightContent:d`<o-button
        variant=${this.showFilters?`primary`:`secondary`}
        size="sm"
        title=${e>0?h(`detailed_view.filters_with_count`,{count:e}):h(`detailed_view.filters`)}
        @click=${()=>this.showFilters=!this.showFilters}
      ></o-button>`})}renderBody(e){if(this.lobbies===null)return this.renderLoadingSpinner();let t=D(this.lobbies.games),n=_e(t,this.filters),r=(e,t)=>e.filter(e=>e.publicGameType===t);return d`
      <div class="custom-scrollbar p-4 lg:p-6 flex flex-col gap-4">
        ${this.showTrustRequired?o(this.viewerSignedIn,()=>this.showTrustRequired=!1):p}
        ${this.showFilters?this.renderFilterPanel():p}
        ${n.length===0?d`<p class="py-12 text-center text-sm text-white/50">
                ${h(`detailed_view.no_lobbies`)}
              </p>`:e===G?d`
                  <!-- One pane per scheduled bucket, cards stacked within it. -->
                  <div
                    class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start"
                  >
                    ${U.map(e=>this.renderPane(h(`detailed_view.pane_${e}`),r(n,e),r(t,e).length))}
                  </div>
                  ${this.renderHostedPane(r(n,`hosted`))}
                `:this.renderTypeTab(r(n,e),r(t,e).length)}
      </div>
    `}renderTypeTab(e,t){let n=Math.max(0,W-t);return e.length===0&&n===0?d`<p class="py-12 text-center text-sm text-white/50">
        ${h(`detailed_view.pane_empty`)}
      </p>`:d`
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${this.renderSlots(e,n)}
      </div>
    `}paneHeading(e,t){return h(`detailed_view.pane_heading`,{name:e,count:t})}renderPane(e,t,n){let r=Math.max(0,W-n);return d`
      <section class="flex flex-col gap-2 min-w-0">
        <h3 class="${q}">
          ${this.paneHeading(e,t.length)}
        </h3>
        <div class="flex flex-col gap-4">
          ${t.length===0&&r===0?d`<p
                  class="py-6 text-center text-xs text-white/30 rounded-xl border border-dashed border-white/10"
                >
                  ${h(`detailed_view.pane_empty`)}
                </p>`:p}
          ${this.renderSlots(t,r)}
        </div>
      </section>
    `}renderSlots(e,t){return d`
      ${x(e,e=>e.gameID,e=>d`<div class="${K}" data-lobby-slot=${e.gameID}>
            ${this.renderCard(e)}
          </div>`)}
      ${Array.from({length:t},()=>this.renderSpawningSlot())}
    `}renderSpawningSlot(){return d`
      <div
        class="${K} flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface border border-white/10"
      >
        <span
          class="w-8 h-8 border-[3px] border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
        ></span>
        <span class="text-xs uppercase tracking-widest text-white/50">
          ${h(`detailed_view.spawning`)}
        </span>
      </div>
    `}renderHostedPane(e){return e.length===0?p:d`
      <section class="flex flex-col gap-2">
        <h3 class="${q}">
          ${this.paneHeading(h(`detailed_view.pane_hosted`),e.length)}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderSlots(e,0)}
        </div>
      </section>
    `}renderCard(e){let t=e.gameConfig;if(!t)return p;let n=e.startsAt??e.autoStartAt;return i({lobby:e,subtitle:c(t),timeDisplay:this.timeDisplay(e,n),timeDisplayUppercase:n===void 0,heightClass:`h-full`,blocked:_(this.desktopUpdateState,this.desktopSessionState),viewerTrusted:this.viewerTrusted,onClick:()=>this.join(e)})}timeDisplay(e,t){if(t===void 0)return e.publicGameType===`hosted`?h(`public_lobby.waiting_for_players`):h(`detailed_view.queue_position`,{position:((this.lobbies?.games[e.publicGameType]?.filter(e=>e.startsAt===void 0))?.findIndex(t=>t.gameID===e.gameID)??-1)+1});let n=s(t,this.serverTimeOffset);return n>0?ie(n):h(`public_lobby.starting_game`)}renderFilterPanel(){return d`
      <div
        class="flex flex-col gap-4 p-4 rounded-2xl bg-black/20 border border-white/10"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(h(`detailed_view.mode`),S.map(e=>({value:e,label:h(`detailed_view.mode_${e}`),active:this.filters.modes.includes(e)})),e=>this.patchFilters({modes:Q(this.filters.modes,e)}))}
          ${this.renderChipGroup(h(`detailed_view.source`),C.map(e=>({value:e,label:h(`detailed_view.source_${e}`),active:this.filters.sources.includes(e)})),e=>this.patchFilters({sources:Q(this.filters.sources,e)}))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(h(`detailed_view.per_team`),w.map(e=>({value:e,label:h(`detailed_view.layout_${e.toLowerCase()}`),active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
          ${this.renderChipGroup(h(`detailed_view.team_count`),T.map(e=>({value:e,label:e,active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderRange(h(`detailed_view.joined_players`),`minJoined`,`maxJoined`)}
          ${this.renderRange(h(`detailed_view.capacity`),`minCapacity`,`maxCapacity`)}
          ${this.renderRange(h(`detailed_view.team_size`),`minTeamSize`,`maxTeamSize`)}
        </div>

        <div class="flex items-center justify-between gap-3 flex-wrap">
          <label
            class="flex items-center gap-2 text-xs text-white/70 cursor-pointer"
          >
            <input
              type="checkbox"
              class="w-4 h-4 accent-malibu-blue"
              .checked=${this.filters.hideEmpty}
              @change=${e=>this.patchFilters({hideEmpty:e.target.checked})}
            />
            ${h(`detailed_view.hide_empty`)}
          </label>
          <button @click=${()=>this.resetFilters()} class="${X}">
            ${h(`detailed_view.reset`)}
          </button>
        </div>

        ${this.renderProfiles()}
      </div>
    `}renderChipGroup(e,t,n){return d`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex flex-wrap gap-1.5">
          ${t.map(e=>d`<button
                @click=${()=>n(e.value)}
                aria-pressed=${e.active?`true`:`false`}
                class="${Se} ${e.active?Ce:we}"
              >
                ${e.label}
              </button>`)}
        </div>
      </div>
    `}renderRange(e,t,n){return d`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex items-center gap-2">
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${h(`detailed_view.min`)}"
            placeholder=${h(`detailed_view.min`)}
            .value=${$(this.filters[t])}
            @change=${e=>this.setBound(t,e)}
          />
          <span class="text-xs text-white/30">–</span>
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${h(`detailed_view.max`)}"
            placeholder=${h(`detailed_view.max`)}
            .value=${$(this.filters[n])}
            @change=${e=>this.setBound(n,e)}
          />
        </div>
      </div>
    `}renderProfiles(){let e=Object.keys(this.profiles).sort((e,t)=>e.localeCompare(t));return d`
      <div class="pt-3 border-t border-white/10">
        <span class="${J}"
          >${h(`detailed_view.profiles`)}</span
        >
        <div class="flex flex-wrap items-center gap-2">
          ${b({options:[{value:``,label:h(`detailed_view.no_profile`)},...e.map(e=>({value:e,label:e}))],value:this.selectedProfile,onChange:e=>this.applyProfile(e),ariaLabel:h(`detailed_view.profiles`),className:`flex-1 min-w-[8rem]`})}
          <input
            type="text"
            maxlength="32"
            class="${Y} flex-1 min-w-[8rem]"
            placeholder=${h(`detailed_view.profile_name`)}
            aria-label=${h(`detailed_view.profile_name`)}
            .value=${this.profileName}
            @input=${e=>this.profileName=e.target.value}
          />
          <button @click=${()=>this.saveProfile()} class="${X}">
            ${h(`detailed_view.save_profile`)}
          </button>
          <button
            @click=${()=>this.deleteProfile()}
            ?disabled=${this.selectedProfile===``}
            class="${X} ${this.selectedProfile===``?`opacity-40 cursor-not-allowed`:``}"
          >
            ${h(`detailed_view.delete_profile`)}
          </button>
        </div>
        <span class="${J} mt-3"
          >${h(`detailed_view.default_profile`)}</span
        >
        ${b({options:[{value:``,label:h(`detailed_view.no_default_profile`)},...e.map(e=>({value:e,label:e}))],value:this.defaultProfile,onChange:e=>this.setDefaultProfile(e),ariaLabel:h(`detailed_view.default_profile`),className:`w-full sm:w-1/2`})}
      </div>
    `}activeFilterCount(){let e=this.filters,t=[e.minJoined,e.maxJoined,e.minCapacity,e.maxCapacity,e.minTeamSize,e.maxTeamSize];return+(e.modes.length>0)+ +(e.sources.length>0)+ +(e.teamConfigs.length>0)+ +!!e.hideEmpty+t.filter(e=>e!==null).length}toggleTeamConfig(e){this.patchFilters({teamConfigs:Q(this.filters.teamConfigs,e)})}patchFilters(e){this.filters={...this.filters,...e}}setBound(e,t){let n=t.target.value.trim();if(n===``){this.patchFilters({[e]:null});return}let r=Number(n);this.patchFilters({[e]:Number.isFinite(r)&&r>=0?Math.floor(r):null})}resetFilters(){this.filters={...E},this.selectedProfile=``}applyProfile(e){if(this.selectedProfile=e,e===``)return;let t=L(this.profiles,e)?this.profiles[e]:void 0;t&&(this.filters={...t},this.profileName=e)}saveProfile(){let e=this.profileName.trim();e!==``&&(this.profiles=ye(e,this.filters),this.selectedProfile=L(this.profiles,e)?e:this.selectedProfile)}deleteProfile(){this.selectedProfile!==``&&(this.profiles=be(this.selectedProfile),this.selectedProfile=``,this.defaultProfile=V(this.profiles))}setDefaultProfile(e){H(e),this.defaultProfile=V(this.profiles)}canPlay(){let e=document.querySelector(`username-input`);return e?e.canPlay():!0}blockedFromLobbyJoin(){return _(this.desktopUpdateState,this.desktopSessionState)?(m(!1),!0):!1}join(e){if(this.canPlay()&&!this.blockedFromLobbyJoin()){if(!re(e,this.viewerTrusted)){this.showTrustRequired=!0;return}if(this.close(),e.publicGameType===`hosted`){de(`join-lobby-modal`,()=>document.querySelector(`join-lobby-modal`)?.open({lobbyId:e.gameID}));return}this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e.gameID,source:`public`,publicLobbyInfo:e},bubbles:!0,composed:!0}))}}};y([u()],Z.prototype,`lobbies`,void 0),y([u()],Z.prototype,`filters`,void 0),y([u()],Z.prototype,`showFilters`,void 0),y([u()],Z.prototype,`profiles`,void 0),y([u()],Z.prototype,`selectedProfile`,void 0),y([u()],Z.prototype,`defaultProfile`,void 0),y([u()],Z.prototype,`profileName`,void 0),y([u()],Z.prototype,`desktopUpdateState`,void 0),y([u()],Z.prototype,`viewerTrusted`,void 0),y([u()],Z.prototype,`viewerSignedIn`,void 0),y([u()],Z.prototype,`showTrustRequired`,void 0),y([u()],Z.prototype,`desktopSessionState`,void 0),Z=y([e(`detailed-view-modal`)],Z);function Q(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}function $(e){return e===null?``:String(e)}export{Z as DetailedGameViewModal};
import{$i as e,$o as t,Hn as n,Ho as r,Ii as i,Ji as a,Ko as o,Qi as s,Qo as c,Wi as l,ea as u,fo as d,jo as f,ls as p,oa as m,oo as h,ta as g,ya as _,yi as v}from"./index-Cv-L6ZYS.js";import{n as y,t as b}from"./OwnLevelBadge-CEFbTRpm.js";import{n as x,r as S}from"./ThemeProvider-CQJvjitO.js";import{t as C}from"./repeat-BORLOlOd.js";function w(e,n,r,i=E(e.length,n.length)){let a=new Map,o=new Map,s=[];for(let t of e){let e=t.teamIndex===null?void 0:n[t.teamIndex];if(e===void 0){s.push(t);continue}a.set(t,e),o.set(e,(o.get(e)??0)+1)}let c=new Map,l=[];for(let e of s)e.clanTag?(c.has(e.clanTag)||c.set(e.clanTag,[]),c.get(e.clanTag).push(e)):l.push(e);let u=Array.from(c.values()).sort((e,t)=>t.length-e.length);for(let e of u){let t=null,r=0;for(let e of n){let n=o.get(e)??0;t!==null&&r<=n||(r=n,t=e)}if(t!==null){for(let n of e)r<i?(r++,a.set(n,t)):a.set(n,`kicked`);o.set(t,r)}}let f=new Set;for(let t of e)t.clientID!==null&&f.add(t.clientID);let p=new Map,m=(e,t)=>{let n=p.get(e);n===void 0&&(n=new Set,p.set(e,n)),n.add(t)};for(let t of e)if(t.clientID!==null)for(let e of t.friends)f.has(e)&&(m(t.clientID,e),m(e,t.clientID));let h=new Map;for(let[e,t]of a.entries())e.clientID!==null&&t!==`kicked`&&h.set(e.clientID,t);let g=e=>{let t=e.clientID===null?void 0:p.get(e.clientID),s=null,c=-1,l=r?-1:1/0;for(let e of n){let n=o.get(e)??0;if(n>=i)continue;let a=0;if(t!==void 0)for(let n of t)h.get(n)===e&&a++;(a>c||a===c&&(r?n>l:n<l))&&(c=a,l=n,s=e)}if(s===null){a.set(e,`kicked`);return}o.set(s,(o.get(s)??0)+1),a.set(e,s),e.clientID!==null&&h.set(e.clientID,s)},_=l.filter(e=>e.playerType===t.Nation);_.length>0&&(_=new S(d(_[0].id)).shuffleArray(_));let v=l.filter(e=>e.playerType!==t.Nation);for(let e of v.concat(_))g(e);return a}function T(e,t,n,r){let i=E(e.length+r,t.length);return w(e,t,n===`Duos`||n===`Trios`||n===`Quads`,i)}function E(e,t){return Math.ceil(e/t)}function D(e,t){return e===t||e!==void 0&&t!==void 0&&e.level===t.level&&e.prestige===t.prestige&&e.legend===t.legend}var O=class extends g{constructor(...e){super(...e),this.gameMode=o.FFA,this.clients=[],this.teamPreview=[],this.teamMaxSize=0,this.lobbyCreatorClientID=``,this.currentClientID=``,this.teamCount=2,this.nameReveals=[],this.anonymizeNames=!1,this.nationCount=0,this.isPublicGame=!1,this.showTeamColors=!1,this._clanUpdateTimeout=null,this._teamClanTags=new Map,this._viewerFriends=new Set,this._ownHiddenBadge=b(),this.userSettings=new _}get theme(){return x.current()}get activePlayers(){return this.clients.filter(e=>!e.spectator)}get spectators(){return this.clients.filter(e=>e.spectator===!0)}get effectiveNationCount(){return this.isPublicGame&&this.teamCount===`Humans Vs Nations`?this.activePlayers.length:this.nationCount}willUpdate(e){if(e.has(`clients`)||e.has(`currentClientID`)){let e=this.currentClientID?this.clients.find(e=>e.clientID===this.currentClientID):void 0;this._viewerFriends=new Set(e?.friends??[])}if((e.has(`currentClientID`)||e.has(`clients`))&&this.currentClientID){let e=this.currentClientID;y().then(t=>{this.currentClientID===e&&(D(t,this._ownHiddenBadge)||(this._ownHiddenBadge=t))})}if(e.has(`gameMode`)||e.has(`clients`)||e.has(`teamCount`)||e.has(`nationCount`)||e.has(`isPublicGame`)){let e=this.getTeamList();this.computeTeamPreview(e),this.showTeamColors=e.length<=7}}disconnectedCallback(){super.disconnectedCallback(),this._clanUpdateTimeout!==null&&(window.clearTimeout(this._clanUpdateTimeout),this._clanUpdateTimeout=null)}render(){return m`
      <div class="border-t border-white/10 pt-6">
        <div class="flex justify-between items-center mb-4">
          <div
            class="text-xs font-bold text-white/40 uppercase tracking-widest"
          >
            ${this.activePlayers.length}
            ${this.activePlayers.length===1?a(`host_modal.player`):a(`host_modal.players`)}
            <span style="margin: 0 8px;">•</span>
            ${this.effectiveNationCount}
            ${this.effectiveNationCount===1?a(`host_modal.nation_player`):a(`host_modal.nation_players`)}
          </div>
        </div>
        <div
          class="players-list block rounded-lg border border-white/10 bg-white/5 p-2"
        >
          ${this.gameMode===o.Team?this.renderTeamMode():this.renderFreeForAll()}
        </div>
        ${this.renderSpectators()}
      </div>
    `}renderSpectators(){let e=this.spectators;return e.length===0?m``:m`
      <div class="mt-4">
        <div
          class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4"
        >
          ${e.length}
          ${e.length===1?a(`host_modal.spectator`):a(`host_modal.spectators`)}
        </div>
        <div
          class="players-list block rounded-lg border border-white/10 bg-white/5 p-2"
        >
          ${C(e,e=>e.clientID??e.username,e=>m`<span
                class="player-tag ${this.isCurrentPlayer(e)?`current-player`:``}"
              >
                <span class="text-white"
                  >${this.renderLevelBadge(e,!1)}${this.getClientDisplayName(e)}
                  ${this.renderVerifiedBadge(e)}</span
                >
              </span>`)}
        </div>
      </div>
    `}createRenderRoot(){return this}renderTeamMode(){let e=this.teamPreview.filter(e=>e.players.length>0||e.team===r.Nations),t=this.teamPreview.filter(e=>e.players.length===0&&e.team!==r.Nations),n=this.anyVisibleLevelBadge(this.activePlayers);return m` <div
      class="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch"
    >
      <div
        class="w-full md:w-60 bg-gray-800 p-2 border border-gray-700 rounded-lg"
      >
        <div class="font-bold mb-1.5 text-gray-300 text-sm">
          ${a(`host_modal.players`)}
        </div>
        ${C(this.activePlayers,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return m`<div
              class="px-2 py-1 rounded-sm mb-1 text-xs text-white border break-words
                ${this.isCurrentPlayer(e)?`bg-malibu-blue/20 border-sky-500/40`:`bg-gray-700/70 border-transparent`}"
            >
              ${this.renderLevelBadge(e,n)}${t}
              ${this.renderVerifiedBadge(e)}
              ${this.renderFriendBadge(e)}
            </div>`})}
      </div>
      <div class="flex-1 flex flex-col gap-3 md:gap-4 md:pr-1">
        <div>
          <div class="font-semibold text-gray-200 mb-1 text-sm">
            ${a(`host_modal.assigned_teams`)}
          </div>
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            ${C(e,e=>e.team,e=>this.renderTeamCard(e,!1))}
          </div>
        </div>
        <div>
          ${t.length>0?m`<div class="font-semibold text-gray-200 mb-1 text-sm">
                  ${a(`host_modal.empty_teams`)}
                </div>`:``}
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            ${C(t,e=>e.team,e=>this.renderTeamCard(e,!0))}
          </div>
        </div>
      </div>
    </div>`}renderRevealToggle(e){if(!this.onToggleNameReveal||!this.anonymizeNames)return m``;let t=this.nameReveals.includes(e);return m`<button
      @click=${()=>this.onToggleNameReveal?.(e)}
      title=${a(`host_modal.toggle_name_reveal`)}
      style="background:none;border:none;cursor:pointer;font-size:13px;line-height:1;margin-left:4px;opacity:${t?`1`:`0.35`};"
    >
      👁
    </button>`}renderFreeForAll(){return m`${C(this.activePlayers,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return m`<span
          class="player-tag ${this.isCurrentPlayer(e)?`current-player`:``}"
        >
          <span class="text-white"
            >${this.renderLevelBadge(e,!1)}${t}
            ${this.renderVerifiedBadge(e)}
            ${this.renderFriendBadge(e)}</span
          >
          ${this.renderRevealToggle(e.clientID)}
          ${e.clientID===this.lobbyCreatorClientID?m`<span class="host-badge"
                  >(${a(`host_modal.host_badge`)})</span
                >`:this.onKickPlayer?m`<button
                    class="remove-player-btn"
                    @click=${()=>this.onKickPlayer?.(e.clientID)}
                    aria-label=${a(`host_modal.remove_player`,{username:t})}
                  >
                    <svg
                      class="h-2.5 w-2.5 stroke-white"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <line x1="4" y1="4" x2="12" y2="12" />
                      <line x1="12" y1="4" x2="4" y2="12" />
                    </svg>
                  </button>`:m``}
        </span>`})} `}renderTeamCard(e,t=!1){let n=e.team===r.Nations?this.effectiveNationCount:e.players.length,o=e.team===r.Nations?this.effectiveNationCount:this.teamMaxSize,s=this._teamClanTags.get(e.team)??null,c=i(e.team,s),l=this.anyVisibleLevelBadge(e.players);return m`
      <div
        class="bg-gray-800 border rounded-xl flex flex-col
          ${this.teamContainsCurrentPlayer(e)?`border-sky-500/60`:`border-gray-700`}"
      >
        <div
          class="px-2 py-1 font-bold flex items-center justify-between text-white rounded-t-xl text-[13px] gap-2 bg-gray-700/70"
        >
          <div class="flex items-center gap-1.5 min-w-0">
            ${this.showTeamColors?m` <span
                    class="inline-block w-2.5 h-2.5 rounded-full border-2 border-white/90 shadow-inner bg-(--bg) shrink-0"
                    style="--bg:${this.teamHeaderColor(e.team)};"
                  ></span>`:null}
            <span class="truncate">${c}</span>
          </div>
          <span class="text-white/90 font-bold text-[13px] shrink-0"
            >${n}/${o}</span
          >
        </div>
        <div class="p-2 ${t?``:`flex flex-col gap-1.5`}">
          ${t?m`<div class="text-[11px] italic text-gray-400">
                  ${a(`host_modal.empty_team`)}
                </div>`:C(e.players,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return m` <div
                      class="px-2 py-1 rounded-sm text-xs flex items-center justify-between border
                      ${this.isCurrentPlayer(e)?`bg-malibu-blue/20 border-sky-500/40`:`bg-gray-700/70 border-transparent`}"
                    >
                      <span class="flex items-center gap-1 min-w-0">
                        ${this.renderLevelBadge(e,l)}
                        <span class="truncate text-white">${t}</span>
                        ${this.renderVerifiedBadge(e)}
                        ${this.renderFriendBadge(e)}
                      </span>
                      ${this.renderRevealToggle(e.clientID)}
                      ${e.clientID===this.lobbyCreatorClientID?m`<span class="ml-2 text-[11px] text-green-300"
                              >(${a(`host_modal.host_badge`)})</span
                            >`:this.onKickPlayer?m`<button
                                class="remove-player-btn ml-2"
                                @click=${()=>this.onKickPlayer?.(e.clientID)}
                                aria-label=${a(`host_modal.remove_player`,{username:t})}
                              >
                                <svg
                                  class="h-2.5 w-2.5 stroke-white"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2.5"
                                  stroke-linecap="round"
                                >
                                  <line x1="4" y1="4" x2="12" y2="12" />
                                  <line x1="12" y1="4" x2="4" y2="12" />
                                </svg>
                              </button>`:m``}
                    </div>`})}
        </div>
      </div>
    `}getTeamList(){if(this.gameMode!==o.Team)return[];let e=this.activePlayers.length+this.effectiveNationCount,t=this.teamCount;if(t===`Humans Vs Nations`)return[r.Humans,r.Nations];let n;return n=typeof t==`number`?Math.max(2,t):Math.max(2,Math.ceil(e/(t===`Duos`?2:t===`Trios`?3:t===`Quads`?4:2))),n<8?[r.Red,r.Blue,r.Yellow,r.Green,r.Purple,r.Orange,r.Teal].slice(0,n):Array.from({length:n},(e,t)=>`Team ${t+1}`)}teamHeaderColor(e){try{return this.theme.teamColor(e).toHex()}catch{return`#3b3f46`}}computeTeamPreview(e=[]){if(this.gameMode!==o.Team){this.teamPreview=[],this.teamMaxSize=0,this._teamClanTags.clear(),this._clanUpdateTimeout!==null&&(window.clearTimeout(this._clanUpdateTimeout),this._clanUpdateTimeout=null);return}if(this.teamCount===`Humans Vs Nations`){this.teamMaxSize=this.activePlayers.length,this.teamPreview=[{team:r.Humans,players:[...this.activePlayers]},{team:r.Nations,players:[]}],this.triggerClanUpdate();return}let n=T(this.activePlayers.map(e=>new c(e.username,t.Human,e.clientID,e.clientID,!1,e.clanTag,e.friends??[],e.teamIndex??null)),e,this.teamCount,this.effectiveNationCount),i=new Map;for(let t of e)i.set(t,[]);for(let[e,t]of n.entries()){if(t===`kicked`)continue;let n=i.get(t);if(!n)continue;let r=this.clients.find(t=>t.clientID===e.clientID);r&&n.push(r)}this.teamCount===`Duos`?this.teamMaxSize=2:this.teamCount===`Trios`?this.teamMaxSize=3:this.teamCount===`Quads`?this.teamMaxSize=4:this.teamMaxSize=Math.max(1,Math.ceil((this.activePlayers.length+this.effectiveNationCount)/e.length)),this.teamPreview=e.map(e=>({team:e,players:i.get(e)??[]})),this.triggerClanUpdate()}triggerClanUpdate(){this._teamClanTags.size===0?this.updateTeamClanTags():this.scheduleClanUpdate()}scheduleClanUpdate(){this._clanUpdateTimeout===null&&(this._clanUpdateTimeout=window.setTimeout(()=>{this.updateTeamClanTags(),this._clanUpdateTimeout=null,this.requestUpdate()},500))}updateTeamClanTags(){this._teamClanTags.clear();for(let e of this.teamPreview){let t=l(e.players);this._teamClanTags.set(e.team,t)}}isCurrentPlayer(e){return!!this.currentClientID&&e.clientID===this.currentClientID}teamContainsCurrentPlayer(e){return e.players.some(e=>this.isCurrentPlayer(e))}getClientDisplayName(e){let n=p(e.username,e.clanTag);return!this.userSettings.anonymousNames()||this.currentClientID&&e.clientID===this.currentClientID?n:p(h(e.username,t.Human)??e.username,e.clanTag)}renderVerifiedBadge(e){let t=this.userSettings.anonymousNames()&&!this.isCurrentPlayer(e);return e.verified!==!0||t?m``:m`<svg
      viewBox="0 0 24 24"
      class="inline-block w-3.5 h-3.5 align-[-2px] text-blue-400 shrink-0"
      aria-label=${a(`username.verified_heading`)}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor"></circle>
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="white"
        stroke-width="2.2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>`}visibleLevelBadge(e){return this.isCurrentPlayer(e)?f(e.levelBadge)??this._ownHiddenBadge:this.userSettings.anonymousNames()?void 0:f(e.levelBadge)}anyVisibleLevelBadge(e){return e.some(e=>this.visibleLevelBadge(e)!==void 0)}renderLevelBadge(e,t){let n=this.visibleLevelBadge(e);return n===void 0?t?m`<span
            class="lobby-level-slot inline-block w-6 h-6 align-[-7px] shrink-0 mr-1.5"
            aria-hidden="true"
          ></span>`:m``:m`<level-badge
      stagger
      class="inline-block align-[-7px] shrink-0 mr-1.5"
      .level=${n.level}
      .prestige=${n.prestige}
      ?legend=${n.legend}
      size="24"
    ></level-badge>`}renderFriendBadge(e){return!this._viewerFriends.has(e.clientID)||this.isCurrentPlayer(e)||this.anonymizeNames||this.userSettings.anonymousNames()?m``:m`<svg
      viewBox="0 0 24 24"
      class="lobby-friend-badge inline-block w-4 h-4 align-[-3px] text-emerald-400 shrink-0"
      fill="currentColor"
      aria-label=${a(`friends.lobby_marker`)}
    >
      <title>${a(`friends.lobby_marker`)}</title>
      <circle cx="9" cy="8" r="3.6"></circle>
      <path
        d="M9 13.2c-3.4 0-6.3 1.7-6.3 3.9V20h12.6v-2.9c0-2.2-2.9-3.9-6.3-3.9z"
      ></path>
      <circle cx="17.4" cy="8.6" r="2.9"></circle>
      <path
        d="M17.4 13.4c-.7 0-1.3.06-1.9.18 1.2 1 1.9 2.24 1.9 3.52V20h5.4v-2.6c0-1.9-2.4-4-5.4-4z"
      ></path>
    </svg>`}};v([e({type:String})],O.prototype,`gameMode`,void 0),v([e({type:Array})],O.prototype,`clients`,void 0),v([s()],O.prototype,`teamPreview`,void 0),v([s()],O.prototype,`teamMaxSize`,void 0),v([e({type:String})],O.prototype,`lobbyCreatorClientID`,void 0),v([e({type:String})],O.prototype,`currentClientID`,void 0),v([e({attribute:`team-count`})],O.prototype,`teamCount`,void 0),v([e({type:Function})],O.prototype,`onKickPlayer`,void 0),v([e({type:Function})],O.prototype,`onToggleNameReveal`,void 0),v([e({type:Array})],O.prototype,`nameReveals`,void 0),v([e({type:Boolean})],O.prototype,`anonymizeNames`,void 0),v([e({type:Number})],O.prototype,`nationCount`,void 0),v([e({type:Boolean})],O.prototype,`isPublicGame`,void 0),v([s()],O.prototype,`showTeamColors`,void 0),v([s()],O.prototype,`_ownHiddenBadge`,void 0),O=v([u(`lobby-player-view`)],O);function k(){if(!n.isAvailable())return;let e=a(`public_lobby.invite_friends`);return m`<button
    data-test-invite-friends
    type="button"
    @click=${()=>void n.openInviteDialog()}
    class="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 rounded-lg px-2 py-1 border border-white/10 text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
    title=${e}
    aria-label=${e}
  >
    <svg
      class="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM16 7a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2V7z"
      ></path>
    </svg>
    ${e}
  </button>`}export{k as t};
import{$i as e,Ao as t,Fi as n,Go as r,Hn as i,Qi as a,Qo as o,Ui as s,Vo as c,Zi as l,Zo as u,aa as d,ao as f,cs as p,do as m,ea as h,qi as g,va as _,vi as v}from"./index-1p1K5IL0.js";import{n as y,t as b}from"./OwnLevelBadge-DDp_FqGW.js";import{n as x,r as S}from"./ThemeProvider-DlcS3I_e.js";import{t as C}from"./repeat-Be6QsGWY.js";function w(e,t,n,r=E(e.length,t.length)){let i=new Map,a=new Map,s=[];for(let n of e){let e=n.teamIndex===null?void 0:t[n.teamIndex];if(e===void 0){s.push(n);continue}i.set(n,e),a.set(e,(a.get(e)??0)+1)}let c=new Map,l=[];for(let e of s)e.clanTag?(c.has(e.clanTag)||c.set(e.clanTag,[]),c.get(e.clanTag).push(e)):l.push(e);let u=Array.from(c.values()).sort((e,t)=>t.length-e.length);for(let e of u){let n=null,o=0;for(let e of t){let t=a.get(e)??0;n!==null&&o<=t||(o=t,n=e)}if(n!==null){for(let t of e)o<r?(o++,i.set(t,n)):i.set(t,`kicked`);a.set(n,o)}}let d=new Set;for(let t of e)t.clientID!==null&&d.add(t.clientID);let f=new Map,p=(e,t)=>{let n=f.get(e);n===void 0&&(n=new Set,f.set(e,n)),n.add(t)};for(let t of e)if(t.clientID!==null)for(let e of t.friends)d.has(e)&&(p(t.clientID,e),p(e,t.clientID));let h=new Map;for(let[e,t]of i.entries())e.clientID!==null&&t!==`kicked`&&h.set(e.clientID,t);let g=e=>{let o=e.clientID===null?void 0:f.get(e.clientID),s=null,c=-1,l=n?-1:1/0;for(let e of t){let t=a.get(e)??0;if(t>=r)continue;let i=0;if(o!==void 0)for(let t of o)h.get(t)===e&&i++;(i>c||i===c&&(n?t>l:t<l))&&(c=i,l=t,s=e)}if(s===null){i.set(e,`kicked`);return}a.set(s,(a.get(s)??0)+1),i.set(e,s),e.clientID!==null&&h.set(e.clientID,s)},_=l.filter(e=>e.playerType===o.Nation);_.length>0&&(_=new S(m(_[0].id)).shuffleArray(_));let v=l.filter(e=>e.playerType!==o.Nation);for(let e of v.concat(_))g(e);return i}function T(e,t,n,r){let i=E(e.length+r,t.length);return w(e,t,n===`Duos`||n===`Trios`||n===`Quads`,i)}function E(e,t){return Math.ceil(e/t)}function D(e,t){return e===t||e!==void 0&&t!==void 0&&e.level===t.level&&e.prestige===t.prestige&&e.legend===t.legend}var O=class extends h{constructor(...e){super(...e),this.gameMode=r.FFA,this.clients=[],this.teamPreview=[],this.teamMaxSize=0,this.lobbyCreatorClientID=``,this.currentClientID=``,this.teamCount=2,this.nameReveals=[],this.anonymizeNames=!1,this.nationCount=0,this.isPublicGame=!1,this.showTeamColors=!1,this._clanUpdateTimeout=null,this._teamClanTags=new Map,this._viewerFriends=new Set,this._ownHiddenBadge=b(),this.userSettings=new _}get theme(){return x.current()}get activePlayers(){return this.clients.filter(e=>!e.spectator)}get spectators(){return this.clients.filter(e=>e.spectator===!0)}get effectiveNationCount(){return this.isPublicGame&&this.teamCount===`Humans Vs Nations`?this.activePlayers.length:this.nationCount}willUpdate(e){if(e.has(`clients`)||e.has(`currentClientID`)){let e=this.currentClientID?this.clients.find(e=>e.clientID===this.currentClientID):void 0;this._viewerFriends=new Set(e?.friends??[])}if((e.has(`currentClientID`)||e.has(`clients`))&&this.currentClientID){let e=this.currentClientID;y().then(t=>{this.currentClientID===e&&(D(t,this._ownHiddenBadge)||(this._ownHiddenBadge=t))})}if(e.has(`gameMode`)||e.has(`clients`)||e.has(`teamCount`)||e.has(`nationCount`)||e.has(`isPublicGame`)){let e=this.getTeamList();this.computeTeamPreview(e),this.showTeamColors=e.length<=7}}disconnectedCallback(){super.disconnectedCallback(),this._clanUpdateTimeout!==null&&(window.clearTimeout(this._clanUpdateTimeout),this._clanUpdateTimeout=null)}render(){return d`
      <div class="border-t border-white/10 pt-6">
        <div class="flex justify-between items-center mb-4">
          <div
            class="text-xs font-bold text-white/40 uppercase tracking-widest"
          >
            ${this.activePlayers.length}
            ${this.activePlayers.length===1?g(`host_modal.player`):g(`host_modal.players`)}
            <span style="margin: 0 8px;">•</span>
            ${this.effectiveNationCount}
            ${this.effectiveNationCount===1?g(`host_modal.nation_player`):g(`host_modal.nation_players`)}
          </div>
        </div>
        <div
          class="players-list block rounded-lg border border-white/10 bg-white/5 p-2"
        >
          ${this.gameMode===r.Team?this.renderTeamMode():this.renderFreeForAll()}
        </div>
        ${this.renderSpectators()}
      </div>
    `}renderSpectators(){let e=this.spectators;return e.length===0?d``:d`
      <div class="mt-4">
        <div
          class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4"
        >
          ${e.length}
          ${e.length===1?g(`host_modal.spectator`):g(`host_modal.spectators`)}
        </div>
        <div
          class="players-list block rounded-lg border border-white/10 bg-white/5 p-2"
        >
          ${C(e,e=>e.clientID??e.username,e=>d`<span
                class="player-tag ${this.isCurrentPlayer(e)?`current-player`:``}"
              >
                <span class="text-white"
                  >${this.renderLevelBadge(e,!1)}${this.getClientDisplayName(e)}
                  ${this.renderVerifiedBadge(e)}</span
                >
              </span>`)}
        </div>
      </div>
    `}createRenderRoot(){return this}renderTeamMode(){let e=this.teamPreview.filter(e=>e.players.length>0||e.team===c.Nations),t=this.teamPreview.filter(e=>e.players.length===0&&e.team!==c.Nations),n=this.anyVisibleLevelBadge(this.activePlayers);return d` <div
      class="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch"
    >
      <div
        class="w-full md:w-60 bg-gray-800 p-2 border border-gray-700 rounded-lg"
      >
        <div class="font-bold mb-1.5 text-gray-300 text-sm">
          ${g(`host_modal.players`)}
        </div>
        ${C(this.activePlayers,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return d`<div
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
            ${g(`host_modal.assigned_teams`)}
          </div>
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            ${C(e,e=>e.team,e=>this.renderTeamCard(e,!1))}
          </div>
        </div>
        <div>
          ${t.length>0?d`<div class="font-semibold text-gray-200 mb-1 text-sm">
                  ${g(`host_modal.empty_teams`)}
                </div>`:``}
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            ${C(t,e=>e.team,e=>this.renderTeamCard(e,!0))}
          </div>
        </div>
      </div>
    </div>`}renderRevealToggle(e){if(!this.onToggleNameReveal||!this.anonymizeNames)return d``;let t=this.nameReveals.includes(e);return d`<button
      @click=${()=>this.onToggleNameReveal?.(e)}
      title=${g(`host_modal.toggle_name_reveal`)}
      style="background:none;border:none;cursor:pointer;font-size:13px;line-height:1;margin-left:4px;opacity:${t?`1`:`0.35`};"
    >
      👁
    </button>`}renderFreeForAll(){return d`${C(this.activePlayers,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return d`<span
          class="player-tag ${this.isCurrentPlayer(e)?`current-player`:``}"
        >
          <span class="text-white"
            >${this.renderLevelBadge(e,!1)}${t}
            ${this.renderVerifiedBadge(e)}
            ${this.renderFriendBadge(e)}</span
          >
          ${this.renderRevealToggle(e.clientID)}
          ${e.clientID===this.lobbyCreatorClientID?d`<span class="host-badge"
                  >(${g(`host_modal.host_badge`)})</span
                >`:this.onKickPlayer?d`<button
                    class="remove-player-btn"
                    @click=${()=>this.onKickPlayer?.(e.clientID)}
                    aria-label=${g(`host_modal.remove_player`,{username:t})}
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
                  </button>`:d``}
        </span>`})} `}renderTeamCard(e,t=!1){let r=e.team===c.Nations?this.effectiveNationCount:e.players.length,i=e.team===c.Nations?this.effectiveNationCount:this.teamMaxSize,a=this._teamClanTags.get(e.team)??null,o=n(e.team,a),s=this.anyVisibleLevelBadge(e.players);return d`
      <div
        class="bg-gray-800 border rounded-xl flex flex-col
          ${this.teamContainsCurrentPlayer(e)?`border-sky-500/60`:`border-gray-700`}"
      >
        <div
          class="px-2 py-1 font-bold flex items-center justify-between text-white rounded-t-xl text-[13px] gap-2 bg-gray-700/70"
        >
          <div class="flex items-center gap-1.5 min-w-0">
            ${this.showTeamColors?d` <span
                    class="inline-block w-2.5 h-2.5 rounded-full border-2 border-white/90 shadow-inner bg-(--bg) shrink-0"
                    style="--bg:${this.teamHeaderColor(e.team)};"
                  ></span>`:null}
            <span class="truncate">${o}</span>
          </div>
          <span class="text-white/90 font-bold text-[13px] shrink-0"
            >${r}/${i}</span
          >
        </div>
        <div class="p-2 ${t?``:`flex flex-col gap-1.5`}">
          ${t?d`<div class="text-[11px] italic text-gray-400">
                  ${g(`host_modal.empty_team`)}
                </div>`:C(e.players,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return d` <div
                      class="px-2 py-1 rounded-sm text-xs flex items-center justify-between border
                      ${this.isCurrentPlayer(e)?`bg-malibu-blue/20 border-sky-500/40`:`bg-gray-700/70 border-transparent`}"
                    >
                      <span class="flex items-center gap-1 min-w-0">
                        ${this.renderLevelBadge(e,s)}
                        <span class="truncate text-white">${t}</span>
                        ${this.renderVerifiedBadge(e)}
                        ${this.renderFriendBadge(e)}
                      </span>
                      ${this.renderRevealToggle(e.clientID)}
                      ${e.clientID===this.lobbyCreatorClientID?d`<span class="ml-2 text-[11px] text-green-300"
                              >(${g(`host_modal.host_badge`)})</span
                            >`:this.onKickPlayer?d`<button
                                class="remove-player-btn ml-2"
                                @click=${()=>this.onKickPlayer?.(e.clientID)}
                                aria-label=${g(`host_modal.remove_player`,{username:t})}
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
                              </button>`:d``}
                    </div>`})}
        </div>
      </div>
    `}getTeamList(){if(this.gameMode!==r.Team)return[];let e=this.activePlayers.length+this.effectiveNationCount,t=this.teamCount;if(t===`Humans Vs Nations`)return[c.Humans,c.Nations];let n;return n=typeof t==`number`?Math.max(2,t):Math.max(2,Math.ceil(e/(t===`Duos`?2:t===`Trios`?3:t===`Quads`?4:2))),n<8?[c.Red,c.Blue,c.Yellow,c.Green,c.Purple,c.Orange,c.Teal].slice(0,n):Array.from({length:n},(e,t)=>`Team ${t+1}`)}teamHeaderColor(e){try{return this.theme.teamColor(e).toHex()}catch{return`#3b3f46`}}computeTeamPreview(e=[]){if(this.gameMode!==r.Team){this.teamPreview=[],this.teamMaxSize=0,this._teamClanTags.clear(),this._clanUpdateTimeout!==null&&(window.clearTimeout(this._clanUpdateTimeout),this._clanUpdateTimeout=null);return}if(this.teamCount===`Humans Vs Nations`){this.teamMaxSize=this.activePlayers.length,this.teamPreview=[{team:c.Humans,players:[...this.activePlayers]},{team:c.Nations,players:[]}],this.triggerClanUpdate();return}let t=T(this.activePlayers.map(e=>new u(e.username,o.Human,e.clientID,e.clientID,!1,e.clanTag,e.friends??[],e.teamIndex??null)),e,this.teamCount,this.effectiveNationCount),n=new Map;for(let t of e)n.set(t,[]);for(let[e,r]of t.entries()){if(r===`kicked`)continue;let t=n.get(r);if(!t)continue;let i=this.clients.find(t=>t.clientID===e.clientID);i&&t.push(i)}this.teamCount===`Duos`?this.teamMaxSize=2:this.teamCount===`Trios`?this.teamMaxSize=3:this.teamCount===`Quads`?this.teamMaxSize=4:this.teamMaxSize=Math.max(1,Math.ceil((this.activePlayers.length+this.effectiveNationCount)/e.length)),this.teamPreview=e.map(e=>({team:e,players:n.get(e)??[]})),this.triggerClanUpdate()}triggerClanUpdate(){this._teamClanTags.size===0?this.updateTeamClanTags():this.scheduleClanUpdate()}scheduleClanUpdate(){this._clanUpdateTimeout===null&&(this._clanUpdateTimeout=window.setTimeout(()=>{this.updateTeamClanTags(),this._clanUpdateTimeout=null,this.requestUpdate()},500))}updateTeamClanTags(){this._teamClanTags.clear();for(let e of this.teamPreview){let t=s(e.players);this._teamClanTags.set(e.team,t)}}isCurrentPlayer(e){return!!this.currentClientID&&e.clientID===this.currentClientID}teamContainsCurrentPlayer(e){return e.players.some(e=>this.isCurrentPlayer(e))}getClientDisplayName(e){let t=p(e.username,e.clanTag);return!this.userSettings.anonymousNames()||this.currentClientID&&e.clientID===this.currentClientID?t:p(f(e.username,o.Human)??e.username,e.clanTag)}renderVerifiedBadge(e){let t=this.userSettings.anonymousNames()&&!this.isCurrentPlayer(e);return e.verified!==!0||t?d``:d`<svg
      viewBox="0 0 24 24"
      class="inline-block w-3.5 h-3.5 align-[-2px] text-blue-400 shrink-0"
      aria-label=${g(`username.verified_heading`)}
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
    </svg>`}visibleLevelBadge(e){return this.isCurrentPlayer(e)?t(e.levelBadge)??this._ownHiddenBadge:this.userSettings.anonymousNames()?void 0:t(e.levelBadge)}anyVisibleLevelBadge(e){return e.some(e=>this.visibleLevelBadge(e)!==void 0)}renderLevelBadge(e,t){let n=this.visibleLevelBadge(e);return n===void 0?t?d`<span
            class="lobby-level-slot inline-block w-6 h-6 align-[-7px] shrink-0 mr-1.5"
            aria-hidden="true"
          ></span>`:d``:d`<level-badge
      stagger
      class="inline-block align-[-7px] shrink-0 mr-1.5"
      .level=${n.level}
      .prestige=${n.prestige}
      ?legend=${n.legend}
      size="24"
    ></level-badge>`}renderFriendBadge(e){return!this._viewerFriends.has(e.clientID)||this.isCurrentPlayer(e)||this.anonymizeNames||this.userSettings.anonymousNames()?d``:d`<svg
      viewBox="0 0 24 24"
      class="lobby-friend-badge inline-block w-4 h-4 align-[-3px] text-emerald-400 shrink-0"
      fill="currentColor"
      aria-label=${g(`friends.lobby_marker`)}
    >
      <title>${g(`friends.lobby_marker`)}</title>
      <circle cx="9" cy="8" r="3.6"></circle>
      <path
        d="M9 13.2c-3.4 0-6.3 1.7-6.3 3.9V20h12.6v-2.9c0-2.2-2.9-3.9-6.3-3.9z"
      ></path>
      <circle cx="17.4" cy="8.6" r="2.9"></circle>
      <path
        d="M17.4 13.4c-.7 0-1.3.06-1.9.18 1.2 1 1.9 2.24 1.9 3.52V20h5.4v-2.6c0-1.9-2.4-4-5.4-4z"
      ></path>
    </svg>`}};v([a({type:String})],O.prototype,`gameMode`,void 0),v([a({type:Array})],O.prototype,`clients`,void 0),v([l()],O.prototype,`teamPreview`,void 0),v([l()],O.prototype,`teamMaxSize`,void 0),v([a({type:String})],O.prototype,`lobbyCreatorClientID`,void 0),v([a({type:String})],O.prototype,`currentClientID`,void 0),v([a({attribute:`team-count`})],O.prototype,`teamCount`,void 0),v([a({type:Function})],O.prototype,`onKickPlayer`,void 0),v([a({type:Function})],O.prototype,`onToggleNameReveal`,void 0),v([a({type:Array})],O.prototype,`nameReveals`,void 0),v([a({type:Boolean})],O.prototype,`anonymizeNames`,void 0),v([a({type:Number})],O.prototype,`nationCount`,void 0),v([a({type:Boolean})],O.prototype,`isPublicGame`,void 0),v([l()],O.prototype,`showTeamColors`,void 0),v([l()],O.prototype,`_ownHiddenBadge`,void 0),O=v([e(`lobby-player-view`)],O);function k(){if(!i.isAvailable())return;let e=g(`public_lobby.invite_friends`);return d`<button
    data-test-invite-friends
    type="button"
    @click=${()=>void i.openInviteDialog()}
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
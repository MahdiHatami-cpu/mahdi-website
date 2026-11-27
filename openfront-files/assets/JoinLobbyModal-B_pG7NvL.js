import{$i as e,$t as t,Aa as n,An as r,Bi as i,Gr as a,Ha as o,Hi as s,Ia as c,In as l,Ji as u,Jt as d,Ko as f,Mn as p,Ni as m,Nn as h,No as g,Pi as _,Qi as v,Qt as y,Ra as b,Si as x,Yr as S,Zi as C,Zt as w,_o as T,ca as E,ea as D,hs as O,ji as k,jn as A,ki as j,kn as M,ln as N,oa as P,pt as F,qo as I,qr as L,yi as R}from"./index-Cv-L6ZYS.js";import"./CopyButton-X-iKdV9k.js";import{a as z,d as B,p as V}from"./GameConfigHelpers-D2mmI_eh.js";import{t as H}from"./InviteFriendsButton-BPdJS7Jz.js";import{t as U}from"./GameStartAlertController-CR_oSuh6.js";var W=class extends t{constructor(...e){super(...e),this.eventBus=null,this.players=[],this.playerCount=0,this.gameConfig=null,this.currentLobbyId=``,this.currentClientID=``,this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.isConnecting=!0,this.lobbyCreatorClientID=null,this.hostedLobbies=[],this.hostedLobbiesLoaded=!1,this.hostedServerTimeOffset=0,this.gameStartAlert=new U(this,()=>this.currentLobbyId!==``),this.leaveLobbyOnClose=!0,this.countdownTimerId=null,this.handledJoinTimeout=!1,this.hostedLobbySocket=new N(e=>{this.hostedServerTimeOffset=x(e.serverTime),this.hostedLobbies=e.games?.hosted??[],this.hostedLobbiesLoaded=!0}),this.handleLobbyInfo=e=>{let t=e.lobby;this.currentClientID=e.myClientID,this.isConnecting&&t.clients&&(this.isConnecting=!1),this.updateFromLobby({...t,startsAt:t.startsAt??void 0})}}isPrivateLobby(){return this.gameConfig?.gameType===I.Private}get isSpectating(){return this.players.find(e=>e.clientID===this.currentClientID)?.spectator===!0}setSpectating(e){this.eventBus?.emit(new d(e))}renderHeaderSlot(){if(!this.currentLobbyId)return y({title:u(`private_lobby.title`),onBack:()=>this.closeAndLeave(),ariaLabel:u(`common.close`)});let e=this.gameConfig?.gameType===I.Public&&this.gameConfig.gameMode!==f.Team,t=this.gameConfig!==null&&!e,n=t?P`<copy-button .lobbyId=${this.currentLobbyId}></copy-button>`:void 0,r=t?H():void 0;return y({titleContent:P`<span class="${w}"
          >${u(`public_lobby.title`)}</span
        >
        ${this.gameStartAlert.renderBell()}`,onBack:()=>this.closeAndLeave(),ariaLabel:u(`common.close`),rightContent:r?P`<div class="flex items-center gap-2">${n}${r}</div>`:n})}renderSpectateToggle(){if(this.isConnecting)return P``;let e=this.isSpectating,t=e=>`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest transition ${e?`bg-white text-black`:`text-white/60 hover:text-white`}`;return P`
      <div class="flex items-center gap-1 rounded-xl bg-white/5 p-1">
        <button
          class=${t(!e)}
          ?disabled=${!e}
          @click=${()=>this.setSpectating(!1)}
        >
          ${u(`private_lobby.play`)}
        </button>
        <button
          class=${t(e)}
          ?disabled=${e}
          @click=${()=>this.setSpectating(!0)}
        >
          ${u(`private_lobby.spectate`)}
        </button>
      </div>
    `}renderConnectingState(){let e=u(`public_lobby.connecting`);return P`
      <style>
        @keyframes lobby-signal-ring {
          0% {
            opacity: 0.65;
            transform: scale(0.55);
          }
          75%,
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        @keyframes lobby-radar-sweep {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes lobby-connection-flow {
          0% {
            transform: translateX(-110%);
          }
          100% {
            transform: translateX(280%);
          }
        }

        @keyframes lobby-waiting-dot {
          0%,
          60%,
          100% {
            opacity: 0.35;
            transform: translateY(0);
          }
          30% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        .lobby-signal-ring {
          animation: lobby-signal-ring 2.4s ease-out infinite;
        }

        .lobby-radar-sweep {
          animation: lobby-radar-sweep 2.8s linear infinite;
        }

        .lobby-connection-flow {
          animation: lobby-connection-flow 1.8s ease-in-out infinite;
        }

        .lobby-waiting-dot {
          animation: lobby-waiting-dot 1.25s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .lobby-signal-ring,
          .lobby-radar-sweep,
          .lobby-connection-flow,
          .lobby-waiting-dot {
            animation-duration: 4s;
          }
        }
      </style>

      <div
        class="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-sky-500/10 via-white/[0.03] to-transparent flex flex-col items-center justify-center px-6 py-8"
        role="status"
        aria-live="polite"
        aria-label=${e}
      >
        <div
          class="pointer-events-none absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl"
        ></div>

        <div class="relative mb-6 h-36 w-36" aria-hidden="true">
          <div
            class="lobby-signal-ring absolute inset-0 rounded-full border border-sky-300/40"
          ></div>
          <div
            class="lobby-signal-ring absolute inset-0 rounded-full border border-sky-300/30"
            style="animation-delay: 0.8s"
          ></div>
          <div
            class="lobby-signal-ring absolute inset-0 rounded-full border border-sky-300/20"
            style="animation-delay: 1.6s"
          ></div>

          <div
            class="absolute inset-4 rounded-full border border-white/10 bg-black/30 shadow-[0_0_45px_rgba(56,189,248,0.16)] backdrop-blur-sm"
          >
            <div
              class="lobby-radar-sweep absolute inset-1 rounded-full opacity-75"
              style="background: conic-gradient(from 90deg, transparent 0deg, transparent 285deg, rgba(125,211,252,.5) 340deg, transparent 360deg);"
            ></div>
            <div
              class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border border-sky-300/30 bg-sky-400/15 text-sky-100 shadow-[0_0_24px_rgba(56,189,248,0.35)]"
            >
              <svg
                class="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <path d="M12 20h.01"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center gap-1.5 text-center">
          <p class="text-sm font-bold tracking-wide text-white/90">
            ${e.replace(/\.{3}|…/g,``)}
          </p>
          <span class="flex items-end gap-1" aria-hidden="true">
            <span
              class="lobby-waiting-dot h-1 w-1 rounded-full bg-sky-300"
            ></span>
            <span
              class="lobby-waiting-dot h-1 w-1 rounded-full bg-sky-300"
              style="animation-delay: 0.15s"
            ></span>
            <span
              class="lobby-waiting-dot h-1 w-1 rounded-full bg-sky-300"
              style="animation-delay: 0.3s"
            ></span>
          </span>
        </div>

        <div
          class="relative mt-5 h-1.5 w-full max-w-64 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-label=${e}
        >
          <div
            class="lobby-connection-flow absolute inset-y-0 left-0 w-2/5 rounded-full bg-gradient-to-r from-transparent via-sky-300 to-transparent shadow-[0_0_12px_rgba(125,211,252,0.8)]"
          ></div>
        </div>

        <div
          class="mt-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55"
          aria-hidden="true"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-emerald-300"
            ></span>
          </span>
          ${u(`multi_tab.please_wait`)}
        </div>
      </div>
    `}renderBody(){if(!this.currentLobbyId)return this.renderJoinForm();let e=this.lobbyStartAt===null?null:m(this.lobbyStartAt,this.serverTimeOffset),t=this.isConnecting?u(`public_lobby.connecting`):e===null?this.isPrivateLobby()?u(`private_lobby.joined_waiting`):u(`public_lobby.waiting_for_players`):e>0?u(`public_lobby.starting_in`,{time:s(e)}):u(`public_lobby.started`),n=this.gameConfig?.maxPlayers??0,r=this.players?.filter(e=>!e.spectator).length??0,i=this.isPrivateLobby()?this.lobbyCreatorClientID??``:``;return P`
      <div class="flex flex-col h-full">
        <div class="flex-1 custom-scrollbar p-6 space-y-4 mr-1">
          ${this.isConnecting?this.renderConnectingState():P`
                  ${this.gameConfig?this.renderGameConfig():P``}
                  ${this.players.length>0?P`
                          <lobby-player-view
                            class="mt-6"
                            .gameMode=${this.gameConfig?.gameMode??f.FFA}
                            .clients=${this.players}
                            .lobbyCreatorClientID=${i}
                            .currentClientID=${this.currentClientID}
                            .anonymizeNames=${this.gameConfig?.anonymizeNames??!1}
                            .teamCount=${this.gameConfig?.playerTeams??2}
                            .isPublicGame=${this.gameConfig?.gameType===I.Public}
                            .nationCount=${z(this.gameConfig?.nations??`default`,this.nationCount)}
                          ></lobby-player-view>
                        `:``}
                `}
        </div>

        ${P`
          <div
            class="p-6 lg:p-6 border-t border-white/10 bg-black/60 backdrop-blur-md shrink-0 sticky bottom-0 z-10"
          >
            <div
              class="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between gap-3"
            >
              <div class="flex flex-col">
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-white/40"
                  >${u(`public_lobby.status`)}</span
                >
                <span
                  class="flex items-center gap-2 text-sm font-bold text-white"
                >
                  ${this.isConnecting?P`<span
                          class="relative flex h-2 w-2 shrink-0"
                          aria-hidden="true"
                        >
                          <span
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-60"
                          ></span>
                          <span
                            class="relative inline-flex h-2 w-2 rounded-full bg-sky-300"
                          ></span>
                        </span>`:P``}
                  ${t}
                </span>
              </div>
              ${this.renderSpectateToggle()}
              ${n>0?P`
                      <div
                        class="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest"
                      >
                        <span>${r}/${n}</span>
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.972 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                          ></path>
                        </svg>
                      </div>
                    `:P``}
            </div>
          </div>
        `}
      </div>
    `}renderJoinForm(){return P`
      <div class="custom-scrollbar p-6 space-y-4 mr-1">
        <form @submit=${this.joinLobbyFromInput}>
          <div class="flex flex-col gap-3">
            <div class="flex gap-2">
              <input
                type="text"
                id="lobbyIdInput"
                placeholder=${u(`private_lobby.enter_id`)}
                @keyup=${this.handleChange}
                class="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-mono text-sm tracking-wider"
              />
              <o-button
                variant="ghost"
                size="md"
                iconPosition="only"
                .title=${u(`common.paste`)}
                .icon=${P`<svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 32 32"
                  height="18px"
                  width="18px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 15 3 C 13.742188 3 12.847656 3.890625 12.40625 5 L 5 5 L 5 28 L 13 28 L 13 30 L 27 30 L 27 14 L 25 14 L 25 5 L 17.59375 5 C 17.152344 3.890625 16.257813 3 15 3 Z M 15 5 C 15.554688 5 16 5.445313 16 6 L 16 7 L 19 7 L 19 9 L 11 9 L 11 7 L 14 7 L 14 6 C 14 5.445313 14.445313 5 15 5 Z M 7 7 L 9 7 L 9 11 L 21 11 L 21 7 L 23 7 L 23 14 L 13 14 L 13 26 L 7 26 Z M 15 16 L 25 16 L 25 28 L 15 28 Z"
                  ></path>
                </svg>`}
                @click=${this.pasteFromClipboard}
              ></o-button>
            </div>
            <div class="flex gap-2">
              <div class="flex-[2]">
                <o-button
                  title=${u(`private_lobby.join_lobby`)}
                  width="block"
                  submit
                ></o-button>
              </div>
              <div class="flex-1">
                <o-button
                  variant="ghost"
                  title=${u(`private_lobby.spectate`)}
                  width="block"
                  @click=${this.spectateLobbyFromInput}
                ></o-button>
              </div>
            </div>
          </div>
        </form>
        ${this.renderHostedLobbies()}
      </div>
    `}renderHostedLobbies(){let e;return e=this.hostedLobbiesLoaded?this.hostedLobbies.length===0?P`<p class="text-sm text-white/50">
        ${u(`private_lobby.no_open_lobbies`)}
      </p>`:P`<div class="flex flex-col gap-2">
        ${this.hostedLobbies.map(e=>this.renderHostedLobbyRow(e))}
      </div>`:P`<div class="flex justify-center py-3">
        <div
          class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"
        ></div>
      </div>`,P`
      <div class="pt-2">
        <div
          class="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2"
        >
          ${u(`private_lobby.open_lobbies`)}
        </div>
        ${e}
      </div>
    `}renderHostedLobbyRow(e){let t=e.gameConfig,n=t?k(t.gameMap)??t.gameMap:``,r=t?T(`maps/${encodeURIComponent(i(t.gameMap))}/thumbnail.webp`):``,a=t?h(t,null):[],o=t?.disabledUnits?.length??0,c=e.featured?e.label:void 0,l=c===void 0?`text-white`:{gold:`text-amber-300`,blue:`text-sky-300`,green:`text-emerald-300`,red:`text-rose-300`}[e.accent??`gold`],d=t?j(t):``,f=c?[n,d].filter(Boolean).join(` · `):d,g=e.startsAt??e.autoStartAt,_=g===void 0?void 0:m(g,this.hostedServerTimeOffset);return P`
      <button
        type="button"
        @click=${()=>this.joinHostedLobby(e)}
        class="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all flex items-center gap-3 text-left"
      >
        <img
          src=${r}
          alt=${n}
          class="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
          @error=${e=>{e.target.style.display=`none`}}
        />
        <div class="flex flex-col flex-1 min-w-0">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-sm font-bold truncate ${l}"
              >${c??n}</span
            >
            ${e.custom?P`<span
                    class="px-1.5 py-0.5 bg-orange-500 text-white text-[10px] rounded font-bold uppercase tracking-wider shrink-0"
                    >${u(`public_lobby.custom`)}</span
                  >`:``}
          </div>
          <span class="text-xs text-white/60">${f}</span>
          ${a.length>0||o>0?P`<div class="flex flex-wrap gap-1 mt-1">
                  ${a.map(e=>P`<span
                      class="px-1.5 py-0.5 bg-white/10 text-white/70 text-[10px] rounded font-bold"
                      >${p(e)}</span
                    >`)}
                  ${o>0?P`<span
                          class="px-1.5 py-0.5 bg-red-500/20 text-red-200 text-[10px] rounded font-bold border border-red-500/30"
                          >${u(`private_lobby.disabled_units`)}:
                          ${o}</span
                        >`:``}
                </div>`:``}
        </div>
        <div class="flex flex-col items-end gap-1 shrink-0">
          <div class="flex items-center gap-1 text-white/80 text-xs font-bold">
            ${e.numClients}${t?.maxPlayers?`/${t.maxPlayers}`:``}
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.972 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              ></path>
            </svg>
          </div>
          ${_===void 0?``:P`<span
                  class="text-amber-300 text-xs font-bold tabular-nums"
                  title=${u(`host_modal.auto_start_timer`)}
                  >${_>0?s(_):u(`public_lobby.starting_game`)}</span
                >`}
        </div>
      </button>
    `}async joinHostedLobby(e){let t=e.gameID;this.startTrackingLobby(t,e);try{await this.checkActiveLobby(t)||(this.resetTrackingState(),this.showMessage(u(`private_lobby.not_found`),`red`))}catch(e){console.error(`Error joining hosted lobby:`,e),this.resetTrackingState(),this.showMessage(u(`private_lobby.error`),`red`)}}onOpen(e){this.leaveLobbyOnClose=!0,this.hostedLobbiesLoaded=!1,this.hostedLobbySocket.start();let t=typeof e?.lobbyId==`string`?e.lobbyId:``,n=e?.lobbyInfo;t&&(this.startTrackingLobby(t,n),n||this.handleUrlJoin(t,e?.spectate===!0))}async handleUrlJoin(e,t=!1){try{if(await this.checkActiveLobby(e,t))return;switch(await this.checkArchivedGame(e)){case`success`:return;case`redirected`:return;case`not_found`:this.resetTrackingState(),this.showMessage(u(`private_lobby.not_found`),`red`);return;case`version_mismatch`:this.resetTrackingState(),this.showMessage(u(`private_lobby.version_mismatch`),`red`);return;case`error`:this.resetTrackingState(),this.showMessage(u(`private_lobby.error`),`red`);return}}catch(e){console.warn(`Error checking lobby from URL:`,e),this.resetTrackingState(),this.showMessage(u(`private_lobby.error`),`red`)}}startTrackingLobby(e,t){this.currentLobbyId=e,this.currentClientID=``,this.gameConfig=null,this.players=[],this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.lobbyCreatorClientID=null,this.gameStartAlert.reset(),this.isConnecting=!0,this.handledJoinTimeout=!1,this.startLobbyUpdates(),t&&(this.updateFromLobby(t),`clients`in t&&t.clients&&(this.isConnecting=!1))}resetTrackingState(){this.stopLobbyUpdates(),this.currentLobbyId=``,this.currentClientID=``,this.isConnecting=!1}leaveLobby(){this.currentLobbyId&&this.dispatchEvent(new CustomEvent(`leave-lobby`,{detail:{lobby:this.currentLobbyId},bubbles:!0,composed:!0}))}confirmBeforeClose(){return this.currentLobbyId?this.confirmClose(u(`host_modal.leave_confirmation`)):!0}onClose(){this.hostedLobbySocket.stop(),this.hostedLobbies=[],this.hostedLobbiesLoaded=!1,this.clearCountdownTimer(),this.stopLobbyUpdates(),this.leaveLobbyOnClose&&(this.leaveLobby(),this.updateHistory(`/`)),this.lobbyIdInput&&(this.lobbyIdInput.value=``),this.gameConfig=null,this.players=[],this.currentLobbyId=``,this.currentClientID=``,this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.lobbyCreatorClientID=null,this.gameStartAlert.reset(),this.isConnecting=!0}disconnectedCallback(){this.hostedLobbySocket.stop(),this.clearCountdownTimer(),this.stopLobbyUpdates(),super.disconnectedCallback()}closeAndLeave(){this.leaveLobby();try{this.updateHistory(`/`)}catch(e){console.warn(`Failed to restore URL on leave:`,e)}this.leaveLobbyOnClose=!1,this.close()}disarmLeaveOnClose(){this.leaveLobbyOnClose=!1}closeWithoutLeaving(){this.disarmLeaveOnClose(),this.close()}updateHistory(e){E.isOnGamePortal()||history.replaceState(null,``,e)}renderGameConfig(){if(!this.gameConfig)return P``;let e=this.gameConfig,t=k(e.gameMap),n=i(e.gameMap),a=T(`maps/${encodeURIComponent(n)}/thumbnail.webp`),o=j(e),s=h(e,this.nationCount).map(e=>P`<span class="${M}"
          >${p(e)}</span
        >`),c=O.find(t=>t.type===e.gameMap),l=B(c);return P`
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <span class="text-lg font-bold text-white">${t}</span>
        <span class="text-sm text-white/60">${o}</span>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mb-6">
        <div
          data-test-map-preview
          class="flex items-center justify-center w-full ${s.length>0||l?`sm:w-3/5`:``} shrink-0 rounded-lg border border-white/10 bg-black/20 overflow-hidden"
        >
          <img
            src=${a}
            alt=${t??e.gameMap}
            class="block w-full max-h-60 object-contain"
            @error=${e=>{let t=e.target.parentElement;t&&(t.style.display=`none`)}}
          />
        </div>
        ${s.length>0||l?P`<div class="flex flex-col gap-3 min-w-0 flex-1">
                ${s.length>0?P`<div
                        data-test-lobby-settings
                        class="flex flex-wrap content-start gap-1 uppercase"
                      >
                        ${s}
                      </div>`:P``}
                ${l?P`<div
                        data-test-map-details
                        class="flex flex-col gap-1 text-xs text-white/80"
                      >
                        ${V(c)}
                      </div>`:P``}
              </div>`:P``}
      </div>
      ${r(e,`mt-4 mb-6`)} ${A(e,`mt-4 mb-6`)}
    `}updateFromLobby(e){if(this.players=`clients`in e?e.clients??[]:[],`serverTime`in e&&typeof e.serverTime==`number`&&(this.serverTimeOffset=x(e.serverTime)),this.lobbyStartAt=e.startsAt??null,this.syncCountdownTimer(),e.gameConfig){let t=this.gameConfig?.gameMap!==e.gameConfig.gameMap;this.gameConfig=e.gameConfig,t&&this.loadNationCount()}this.lobbyCreatorClientID=`lobbyCreatorClientID`in e?e.lobbyCreatorClientID??null:null}startLobbyUpdates(){if(this.stopLobbyUpdates(),!this.eventBus){console.warn(`JoinLobbyModal: eventBus not set, cannot subscribe to lobby updates`);return}this.eventBus.on(o,this.handleLobbyInfo)}stopLobbyUpdates(){this.eventBus?.off(o,this.handleLobbyInfo)}syncCountdownTimer(){if(this.lobbyStartAt===null){this.clearCountdownTimer();return}this.countdownTimerId===null&&(this.countdownTimerId=window.setInterval(()=>{this.checkForJoinTimeout(),this.requestUpdate()},1e3))}clearCountdownTimer(){this.countdownTimerId!==null&&(clearInterval(this.countdownTimerId),this.countdownTimerId=null)}checkForJoinTimeout(){this.handledJoinTimeout||!this.isConnecting||this.lobbyStartAt===null||!this.isModalOpen||_(this.serverTimeOffset)<this.lobbyStartAt||(this.handledJoinTimeout=!0,window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:u(`public_lobby.join_timeout`),color:`red`,duration:3500}})),this.closeAndLeave())}async loadNationCount(){if(!this.gameConfig){this.nationCount=0;return}let e=this.gameConfig.gameMap;try{let t=await l.getMapData(e).manifest();this.gameConfig?.gameMap===e&&(this.nationCount=t.nations.length)}catch(t){console.warn(`Failed to load nation count`,t),this.gameConfig?.gameMap===e&&(this.nationCount=0)}}isValidLobbyId(e){return g.test(e)}normalizeLobbyId(e){let t=e.trim();if(!t)return null;let n=this.extractLobbyIdFromUrl(t).trim();return this.isValidLobbyId(n)?n:null}sanitizeForLog(e){return e.replace(/[\r\n]/g,``)}extractLobbyIdFromUrl(e){if(!e.startsWith(`http`))return e;try{let t=new URL(e);for(let e of[`gdgameId`,`gameId`]){let n=t.searchParams.get(e);if(n&&g.test(n))return n}let n=t.pathname.match(/game\/([^/]+)/)?.[1];return n&&g.test(n)?n:e}catch(t){return console.warn(`Failed to parse lobby URL`,t),e}}setLobbyId(e){this.lobbyIdInput&&(this.lobbyIdInput.value=this.extractLobbyIdFromUrl(e))}handleChange(e){let t=e.target.value.trim();this.setLobbyId(t)}async pasteFromClipboard(){try{let e=await navigator.clipboard.readText();this.setLobbyId(e)}catch(e){console.warn(`Failed to read clipboard contents: `,e)}}joinLobbyFromInput(e){return e.preventDefault(),this.enterLobbyFromInput(!1)}spectateLobbyFromInput(){return this.enterLobbyFromInput(!0)}async enterLobbyFromInput(e){let t=this.normalizeLobbyId(this.lobbyIdInput.value);if(!t){this.showMessage(u(`private_lobby.not_found`),`red`);return}this.lobbyIdInput.value=t,console.log(`Joining lobby with ID: ${this.sanitizeForLog(t)}`),this.startTrackingLobby(t);try{if(await this.checkActiveLobby(t,e))return;switch(await this.checkArchivedGame(t)){case`success`:return;case`redirected`:return;case`not_found`:this.resetTrackingState(),this.showMessage(u(`private_lobby.not_found`),`red`);return;case`version_mismatch`:this.resetTrackingState(),this.showMessage(u(`private_lobby.version_mismatch`),`red`);return;case`error`:this.resetTrackingState(),this.showMessage(u(`private_lobby.error`),`red`);return}}catch(e){console.warn(`Error checking lobby existence:`,e),this.resetTrackingState(),this.showMessage(u(`private_lobby.error`),`red`)}}showMessage(e,t=`green`){window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:e,duration:3e3,color:t}}))}async checkActiveLobby(e,t=!1){if(await a(),L(e,t))return!0;let n;try{let t=`${c.gameHttpBase(e)}/${c.gameWorkerPath(e)}/api/game/${e}/exists`;n=await fetch(t,{method:`GET`,headers:{"Content-Type":`application/json`}})}catch{return!1}if(!n.ok||!(n.headers.get(`content-type`)??``).includes(`application/json`))return!1;let r;try{r=await n.json()}catch(e){return console.warn(`Failed to parse active lobby response`,e),!1}return r.exists?(this.showMessage(u(t?`private_lobby.spectating`:`private_lobby.joined_waiting`)),this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e,source:`private`,spectator:t},bubbles:!0,composed:!0})),!0):!1}async checkArchivedGame(e){let t=await fetch(`${n()}/game/${e}`,{method:`GET`,headers:{"Content-Type":`application/json`}});if(t.status===404)return`not_found`;if(t.status!==200)return`error`;let r=await t.json(),i=b.safeParse(r);if(!i.success)return`version_mismatch`;let a=c.gitCommit();if(a!==`DEV`&&i.data.gitCommit!==a){let t=this.sanitizeForLog(e);return console.warn(`Git commit hash mismatch for game ${t}`,r.details),await this.redirectToVersionedShell(e)?`redirected`:`version_mismatch`}return this.leaveLobbyOnClose=!1,F(e,i.data)?(this.close(),`success`):(this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e,gameRecord:i.data,source:`private`},bubbles:!0,composed:!0})),`success`)}async redirectToVersionedShell(e){let t=await S(c.jwtAudience(),e,window.location.hostname);return t===null?!1:(window.location.href=t,!0)}};R([C(`#lobbyIdInput`)],W.prototype,`lobbyIdInput`,void 0),R([e({attribute:!1})],W.prototype,`eventBus`,void 0),R([v()],W.prototype,`players`,void 0),R([v()],W.prototype,`playerCount`,void 0),R([v()],W.prototype,`gameConfig`,void 0),R([v()],W.prototype,`currentLobbyId`,void 0),R([v()],W.prototype,`currentClientID`,void 0),R([v()],W.prototype,`nationCount`,void 0),R([v()],W.prototype,`lobbyStartAt`,void 0),R([v()],W.prototype,`serverTimeOffset`,void 0),R([v()],W.prototype,`isConnecting`,void 0),R([v()],W.prototype,`lobbyCreatorClientID`,void 0),R([v()],W.prototype,`hostedLobbies`,void 0),R([v()],W.prototype,`hostedLobbiesLoaded`,void 0),W=R([D(`join-lobby-modal`)],W);export{W as JoinLobbyModal};
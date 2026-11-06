const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./WorkerClient-tTYJOPw1.js","./index-DDjp_E-y.js","./vendor-DPAo4oW-.js","./rolldown-runtime-BpQH8Ho1.js","./index-ASoATpZ8.css"])))=>i.map(i=>d[i]);
import{$i as e,$t as t,Bn as n,Di as r,Ho as i,In as a,Ji as o,Jn as s,Ma as c,Qn as l,Qt as u,Ri as ee,Uo as d,Vi as f,Vo as p,Wi as m,Xi as h,Yi as g,Zi as te,an as _,cn as ne,ha as v,hi as y,ia as b,io as x,ja as S,ls as C,mi as w,na as T,pi as E,po as re,rs as D,ss as O,ur as k,yi as ie,zo as A}from"./index-DDjp_E-y.js";import{a as j,i as M,n as N,r as P,t as ae}from"./SavedGamesApi-D16mqTFK.js";import{a as oe,i as se}from"./ToggleInputCard-D06EkzYY.js";import{c as F,i as ce,l as I,n as L,o as R,r as z,s as B,t as V,u as H}from"./GameConfigHelpers-CF7Ma2ol.js";var U=/^[A-Za-z0-9_-]{1,64}$/;function W(e){let t=e.trim();if(U.test(t))return t;try{let e=new URL(t),n=new URLSearchParams(e.hash.slice(1)).get(`save`);return n!==null&&U.test(n)?n:null}catch{return null}}function le(e){return`${c.shareOrigin()}/#modal=single-player&save=${encodeURIComponent(e)}`}var G=class extends te{constructor(...e){super(...e),this.signedIn=!1,this.sharedId=null,this.busy=!1,this.expanded=!1,this.saves=`loading`,this.shared=null,this.renamingId=null,this.renameValue=``,this.pendingId=null,this.rowError=null,this.codeValue=``,this.codeInvalid=!1}createRenderRoot(){return this}willUpdate(e){e.has(`signedIn`)&&e.get(`signedIn`)!==void 0&&this.refresh(),e.has(`sharedId`)&&(this.sharedId!==null&&this.expand(),this.loadShared())}expand(){this.expanded||(this.expanded=!0,this.refresh())}toggle(){this.expanded?this.expanded=!1:this.expand()}async refresh(){if(!this.signedIn||!this.expanded)return;this.saves=`loading`;let e=await M();this.saves=e===!1?`error`:e}async loadShared(){let e=this.sharedId;if(e===null){this.shared=null;return}this.shared=`loading`;let t=await P(e);this.sharedId===e&&(this.shared=t)}load(e,t){this.dispatchEvent(new CustomEvent(`load-saved-game`,{detail:{id:e,shared:t},bubbles:!0,composed:!0}))}openCode(e){e?.preventDefault();let t=W(this.codeValue);if(this.codeInvalid=t===null,t!==null){if(this.codeValue=``,t===this.sharedId){this.loadShared();return}this.dispatchEvent(new CustomEvent(`open-shared-save`,{detail:t,bubbles:!0,composed:!0}))}}async pasteCode(){try{this.codeValue=(await navigator.clipboard.readText()).trim(),this.codeInvalid=!1}catch(e){console.warn(`Failed to read clipboard contents: `,e)}}replace(e){Array.isArray(this.saves)&&(this.saves=this.saves.map(t=>t.id===e.id?e:t))}errorText(e,t){return m(e===`rejected`?t?`saved_games.error.name_not_shareable`:`saved_games.error.name_invalid`:e===`not_found`?`saved_games.error.not_found`:`saved_games.error.request_failed`)}async run(e,t,n){this.pendingId=e.id,this.rowError=null;try{let r=await t();return typeof r==`string`?(this.rowError={id:e.id,message:this.errorText(r,n)},!1):(this.replace(r),!0)}finally{this.pendingId=null}}async toggleShared(e){let t=!e.public;await this.run(e,()=>j(e.id,{public:t}),t)&&t&&await this.copyLink(e.id)}async copyLink(e){try{await ie(le(e)),f(m(`saved_games.link_copied`),`green`)}catch{f(m(`saved_games.error.copy_failed`),`red`)}}startRename(e){this.renamingId=e.id,this.renameValue=e.name,this.rowError=null}async submitRename(e){let t=this.renameValue.trim();if(t===``||t===e.name){this.renamingId=null;return}await this.run(e,()=>j(e.id,{name:t}),e.public)&&(this.renamingId=null)}async deleteSave(e){if(await w(m(`saved_games.delete_confirm`,{name:e.name}))){this.pendingId=e.id,this.rowError=null;try{let t=await ae(e.id);if(t===!0||t===`not_found`){Array.isArray(this.saves)&&(this.saves=this.saves.filter(t=>t.id!==e.id));return}this.rowError={id:e.id,message:this.errorText(t,!1)}}finally{this.pendingId=null}}}details(e){return[r(e.map)??e.map,ee(e.tick/10),new Date(e.createdAt).toLocaleDateString()].join(` · `)}button(e,t,n={}){return T`<button
      type="button"
      class="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${n.primary?`bg-blue-600 hover:bg-blue-500 text-white`:`bg-white/5 hover:bg-white/10 text-white/80 border border-white/10`}"
      data-action=${n.attr??``}
      ?disabled=${n.disabled??!1}
      @click=${t}
    >
      ${e}
    </button>`}renderCodeForm(){return T`<form class="flex flex-col gap-1" @submit=${this.openCode}>
      <div class="flex gap-2">
        <input
          type="text"
          class="flex-1 min-w-0 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
          placeholder=${m(`saved_games.code_placeholder`)}
          aria-label=${m(`saved_games.code_placeholder`)}
          data-save-code
          aria-invalid=${this.codeInvalid?`true`:`false`}
          aria-errormessage=${this.codeInvalid?`saved-game-code-error`:e}
          .value=${this.codeValue}
          @input=${e=>{this.codeValue=e.target.value,this.codeInvalid=!1}}
        />
        ${this.button(m(`common.paste`),()=>void this.pasteCode(),{attr:`paste-code`})}
        ${this.button(m(`saved_games.open`),()=>this.openCode(),{primary:!0,disabled:this.codeValue.trim()===``,attr:`open-code`})}
      </div>
      ${this.codeInvalid?T`<div
              id="saved-game-code-error"
              class="text-xs text-red-400"
              data-code-error
            >
              ${m(`saved_games.error.code_invalid`)}
            </div>`:null}
    </form>`}renderShared(){let e=this.shared;if(e===null)return null;let t;return t=e===`loading`?T`<div class="text-sm text-white/50">
        ${m(`saved_games.loading`)}
      </div>`:typeof e==`string`?T`<div class="text-sm text-red-400" data-shared-error>
        ${m(e===`not_found`?`saved_games.error.shared_not_found`:`saved_games.error.request_failed`)}
      </div>`:T`<div class="flex items-center gap-3">
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-white truncate">${e.name}</div>
          <div class="text-xs text-white/50">${this.details(e)}</div>
        </div>
        ${this.button(m(`saved_games.play`),()=>this.load(e.id,!0),{primary:!0,disabled:this.busy,attr:`play-shared`})}
      </div>`,T`<div
      class="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4"
      data-shared-save
    >
      <div
        class="mb-2 text-[11px] font-bold uppercase tracking-wider text-blue-300/80"
      >
        ${m(`saved_games.shared_title`)}
      </div>
      ${t}
    </div>`}renderRow(e){let t=this.pendingId===e.id,n=this.renamingId===e.id,r=this.rowError?.id===e.id?this.rowError.message:null;return T`<li
      class="flex flex-col gap-2 rounded-lg bg-white/5 border border-white/10 p-3"
      data-save-id=${e.id}
    >
      <div class="flex items-center gap-3">
        <div class="flex-1 min-w-0">
          ${n?T`<input
                  class="w-full rounded-md bg-black/30 border border-white/20 px-2 py-1 text-sm text-white"
                  maxlength="64"
                  aria-label=${m(`saved_games.rename`)}
                  .value=${this.renameValue}
                  @input=${e=>this.renameValue=e.target.value}
                  @keydown=${t=>{t.key===`Enter`&&this.submitRename(e),t.key===`Escape`&&(t.stopPropagation(),this.renamingId=null)}}
                />`:T`<div class="flex items-center gap-2">
                  <span class="font-semibold text-white truncate"
                    >${e.name}</span
                  >
                  ${e.public?T`<span
                          class="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-green-500/20 text-green-300"
                          >${m(`saved_games.shared_badge`)}</span
                        >`:null}
                </div>`}
          <div class="text-xs text-white/50">${this.details(e)}</div>
        </div>
        ${this.button(m(`saved_games.play`),()=>this.load(e.id,!1),{primary:!0,disabled:this.busy||t,attr:`play`})}
      </div>
      <div class="flex flex-wrap gap-2">
        ${n?T`${this.button(m(`saved_games.rename_save`),()=>void this.submitRename(e),{disabled:t,attr:`rename-save`})}
              ${this.button(m(`common.cancel`),()=>this.renamingId=null,{disabled:t})}`:this.button(m(`saved_games.rename`),()=>this.startRename(e),{disabled:t,attr:`rename`})}
        ${this.button(m(e.public?`saved_games.unshare`:`saved_games.share`),()=>void this.toggleShared(e),{disabled:t,attr:`toggle-share`})}
        ${e.public?this.button(m(`saved_games.copy_link`),()=>void this.copyLink(e.id),{attr:`copy-link`}):null}
        ${this.button(m(`saved_games.delete`),()=>void this.deleteSave(e),{disabled:t,attr:`delete`})}
      </div>
      ${r===null?null:T`<div class="text-xs text-red-400" data-row-error>
              ${r}
            </div>`}
    </li>`}renderOwn(){if(!this.signedIn)return null;let e=this.saves,t;return t=e===`loading`?T`<div class="text-sm text-white/50">
        ${m(`saved_games.loading`)}
      </div>`:e===`error`?T`<div class="text-sm text-red-400">
        ${m(`saved_games.error.list_failed`)}
      </div>`:e.length===0?T`<div class="text-sm text-white/50" data-saves-empty>
        ${m(`saved_games.empty`)}
      </div>`:T`<ul class="flex flex-col gap-2">
        ${e.map(e=>this.renderRow(e))}
      </ul>`,T`<div data-own-saves>${t}</div>`}render(){let e=this.expanded;return T`<div class="w-full">
      <button
        type="button"
        aria-expanded=${e}
        data-saved-games-toggle
        @click=${this.toggle}
        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-bold text-white uppercase tracking-wider transition-all duration-200 active:scale-[0.99] ${e?`bg-malibu-blue/20 border-malibu-blue/50`:`bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20`}"
      >
        <svg
          class="w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${e?`rotate-90`:``}"
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4 2l5 4-5 4z" />
        </svg>
        ${m(`saved_games.title`)}
      </button>
      ${e?T`<div class="mt-4 flex flex-col gap-4">
              ${this.renderCodeForm()}${this.renderShared()}${this.renderOwn()}
            </div>`:null}
    </div>`}};y([g({type:Boolean})],G.prototype,`signedIn`,void 0),y([g({attribute:!1})],G.prototype,`sharedId`,void 0),y([g({type:Boolean})],G.prototype,`busy`,void 0),y([o()],G.prototype,`expanded`,void 0),y([o()],G.prototype,`saves`,void 0),y([o()],G.prototype,`shared`,void 0),y([o()],G.prototype,`renamingId`,void 0),y([o()],G.prototype,`renameValue`,void 0),y([o()],G.prototype,`pendingId`,void 0),y([o()],G.prototype,`rowError`,void 0),y([o()],G.prototype,`codeValue`,void 0),y([o()],G.prototype,`codeInvalid`,void 0),G=y([h(`saved-games-panel`)],G);var K=15e3,q=6e4;function J(e,t,n){let r,i=new Promise(e=>{r=setTimeout(()=>e(n()),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var Y=class extends Error{constructor(e){super(e),this.messageKey=e}},ue=[D.City,D.DefensePost,D.Factory,D.SAMLauncher,D.HydrogenBomb,D.MIRV],X={selectedMap:C.World,selectedDifficulty:A.Easy,bots:400,infiniteGold:!1,infiniteTroops:!1,compactMap:!1,maxTimer:!1,maxTimerValue:void 0,instantBuild:!1,randomSpawn:!1,useRandomMap:!1,gameMode:i.FFA,teamCount:2,goldMultiplier:!1,goldMultiplierValue:void 0,startingGold:!1,startingGoldValue:void 0,disabledUnits:[],customAlliances:!1,customAllianceMinutes:void 0,waterNukes:!1,doomsdayClock:!1,doomsdayClockSpeed:`normal`,overtime:!1,overtimeStartMinutes:void 0},Z=null,Q=null;async function de(){return Z||(Q??=(async()=>{let e=new Set,t=!1;return await Promise.all(O.map(async n=>{try{(await a.getMapData(n.type).manifest()).nations.length>0&&e.add(n.type)}catch{t=!0}})),t?(Q=null,null):(Z=e,e)})(),Q)}var $=class extends t{constructor(...e){super(...e),this.routerName=`single-player`,this.selectedMap=X.selectedMap,this.selectedDifficulty=X.selectedDifficulty,this.nations=0,this.defaultNationCount=0,this.bots=X.bots,this.infiniteGold=X.infiniteGold,this.infiniteTroops=X.infiniteTroops,this.compactMap=X.compactMap,this.maxTimer=X.maxTimer,this.maxTimerValue=X.maxTimerValue,this.instantBuild=X.instantBuild,this.randomSpawn=X.randomSpawn,this.useRandomMap=X.useRandomMap,this.gameMode=X.gameMode,this.teamCount=X.teamCount,this.showAchievements=!1,this.mapWins=new Map,this.eligibleMaps=null,this.userMeResponse=!1,this.goldMultiplier=X.goldMultiplier,this.goldMultiplierValue=X.goldMultiplierValue,this.startingGold=X.startingGold,this.startingGoldValue=X.startingGoldValue,this.disabledUnits=[...X.disabledUnits],this.customAlliances=X.customAlliances,this.customAllianceMinutes=X.customAllianceMinutes,this.waterNukes=X.waterNukes,this.doomsdayClock=X.doomsdayClock,this.doomsdayClockSpeed=X.doomsdayClockSpeed,this.overtime=X.overtime,this.overtimeStartMinutes=X.overtimeStartMinutes,this.starting=!1,this.sharedSaveId=null,this.startAttempt=0,this.overlayAttempt=0,this.mapLoader=a,this.toggleAchievements=()=>{this.showAchievements=!this.showAchievements,this.showAchievements&&this.ensureEligibleMaps()},this.handleUserMeResponse=e=>{this.userMeResponse=e.detail,this.applyAchievements(e.detail)},this.handleConfigRandomMapSelected=()=>{this.handleSelectRandomMap()},this.handleConfigMapSelected=e=>{let t=e;this.handleMapSelection(t.detail.map)},this.handleConfigDifficultySelected=e=>{let t=e;this.handleDifficultySelection(t.detail.difficulty)},this.handleConfigDoomsdayClockSpeedSelected=e=>{let t=e;this.doomsdayClockSpeed=t.detail.speed},this.handleConfigGameModeSelected=e=>{let t=e;this.handleGameModeSelection(t.detail.mode)},this.handleConfigTeamCountSelected=e=>{let t=e;this.handleTeamCountSelection(t.detail.count)},this.handleConfigOptionToggleChanged=e=>{let{labelKey:t,checked:n}=e.detail;switch(t){case`game_settings.instant_build`:this.instantBuild=n;break;case`game_settings.random_spawn`:this.randomSpawn=n;break;case`game_settings.infinite_gold`:this.infiniteGold=n;break;case`game_settings.infinite_troops`:this.infiniteTroops=n;break;case`game_settings.compact_map`:this.handleCompactMapChange(n);break;case`game_settings.water_nukes`:this.waterNukes=n;break;case`game_settings.doomsday_clock`:this.doomsdayClock=n;break;default:break}},this.handleConfigUnitToggleChanged=e=>{let{unit:t,checked:n}=e.detail;this.disabledUnits=ce(this.disabledUnits,t,n)},this.handleBotsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.bots=t)},this.handleNationsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.nations=t)},this.handleMaxTimerToggle=(e,t)=>{this.maxTimer=e,this.maxTimerValue=H(t)},this.handleGoldMultiplierToggle=(e,t)=>{this.goldMultiplier=e,this.goldMultiplierValue=H(t)},this.handleStartingGoldToggle=(e,t)=>{this.startingGold=e,this.startingGoldValue=H(t)},this.handleCustomAlliancesToggle=(e,t)=>{this.customAlliances=e,this.customAllianceMinutes=H(t)},this.handleOvertimeToggle=(e,t)=>{this.overtime=e,this.overtimeStartMinutes=H(t)},this.handleOvertimeMinutesKeyDown=e=>{F(e,[`-`,`+`,`e`])},this.handleOvertimeMinutesInput=e=>{let t=e.target,n=B(t,{min:1,max:120,stripPattern:/[e+-]/gi});n!==void 0&&(this.overtimeStartMinutes=n)},this.handleCustomAllianceMinutesKeyDown=e=>{F(e,[`-`,`+`,`e`])},this.handleCustomAllianceMinutesInput=e=>{let t=e.target,n=B(t,{min:0,max:15});n!==void 0&&(this.customAllianceMinutes=n)},this.handleMaxTimerValueKeyDown=e=>{F(e,[`-`,`+`,`e`])},this.handleMaxTimerValueChanges=e=>{let t=e.target,n=B(t,{min:1,max:120,stripPattern:/[e+-]/gi});this.maxTimerValue=n},this.handleGoldMultiplierValueKeyDown=e=>{F(e,[`+`,`-`,`e`,`E`])},this.handleGoldMultiplierValueChanges=e=>{let t=e.target,n=R(t,{min:.1,max:1e3});n===void 0?(this.goldMultiplierValue=void 0,t.value=``):this.goldMultiplierValue=n},this.handleStartingGoldValueKeyDown=e=>{F(e,[`-`,`+`,`e`,`E`])},this.handleStartingGoldValueChanges=e=>{let t=e.target,n=R(t,{min:.1,max:1e3});n===void 0?(this.startingGoldValue=void 0,t.value=``):this.startingGoldValue=n},this.handleLoadSavedGame=e=>{let{id:t,shared:n}=e.detail;this.startSavedGame(t,n)}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse);let e=ne();e!==null&&(this.userMeResponse=e.response,this.applyAchievements(e.response)),this.loadNationCount()}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}async ensureEligibleMaps(){if(this.eligibleMaps)return;let e=await de();e&&(this.eligibleMaps=e)}medalCounts(){let e={[A.Easy]:0,[A.Medium]:0,[A.Hard]:0,[A.Impossible]:0};if(!this.eligibleMaps)return e;for(let[t,n]of this.mapWins)if(this.eligibleMaps.has(t))for(let t of n)e[t]++;return e}renderNotLoggedInBanner(){return b.isOnGamePortal()?T``:T`<button
      class="px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 rounded-lg bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 whitespace-nowrap shrink-0 cursor-pointer hover:bg-yellow-500/30"
      @click=${()=>{this.close(),window.showPage?.(`page-account`)}}
    >
      ${m(`single_modal.sign_in_for_achievements`)}
    </button>`}applyAchievements(e){if(!e){this.mapWins=new Map;return}let t=e.player.achievements.singleplayerMap,n=new Map;for(let e of t){let{mapName:t,difficulty:r}=e??{},i=typeof t==`string`&&Object.values(C).includes(t),a=typeof r==`string`&&Object.values(A).includes(r);if(!i||!a)continue;let o=t,s=n.get(o)??new Set;s.add(r),n.set(o,s)}this.mapWins=n}renderHeaderSlot(){return u({title:m(`main.solo`)||`Solo`,onBack:()=>this.close(),ariaLabel:m(`common.back`),rightContent:S(this.userMeResponse)?T`<button
              @click=${this.toggleAchievements}
              class="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all shrink-0 ${this.showAchievements?`bg-yellow-500/10 border-yellow-500/30 text-yellow-400`:`text-white/60`}"
            >
              <img
                src=${re(`images/MedalIconWhite.svg`)}
                class="w-4 h-4 opacity-80 shrink-0"
                style="${this.showAchievements?``:`filter: grayscale(1);`}"
              />
              <span
                class="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                >${m(`single_modal.toggle_achievements`)}</span
              >
            </button>
            ${this.showAchievements?this.renderMedalOverview():null}`:this.renderNotLoggedInBanner()})}renderMedalOverview(){let e=this.medalCounts(),t=this.eligibleMaps?.size??null;return T`<div class="basis-full w-full">
      <div
        class="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5 rounded-xl border border-yellow-500/20 bg-yellow-500/5"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-yellow-400/80 shrink-0"
        >
          ${m(`single_modal.medals_earned`)}
        </span>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          ${se.map(t=>this.renderMedalStat(t,e[t]))}
        </div>
        <span
          class="ml-auto text-[11px] font-semibold uppercase tracking-wider text-white/40 shrink-0"
        >
          ${m(`single_modal.medals_of_maps`,{total:t??`…`})}
        </span>
      </div>
    </div>`}renderMedalStat(e,t){return T`<div
      class="flex items-center gap-1.5"
      title=${m(`difficulty.${e.toLowerCase()}`)}
    >
      ${oe(e,`w-4 h-4`)}
      <span class="text-xs font-medium text-white/50 hidden sm:inline"
        >${m(`difficulty.${e.toLowerCase()}`)}</span
      >
      <span class="text-sm font-bold text-white tabular-nums">${t}</span>
    </div>`}renderBody(){let e=[T`<toggle-input-card
        .labelKey=${`game_settings.max_timer`}
        .checked=${this.maxTimer}
        .inputId=${`end-timer-value`}
        .inputMin=${1}
        .inputMax=${120}
        .inputValue=${this.maxTimerValue}
        .inputAriaLabel=${m(`game_settings.max_timer`)}
        .inputPlaceholder=${m(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleMaxTimerToggle}
        .onInput=${this.handleMaxTimerValueChanges}
        .onKeyDown=${this.handleMaxTimerValueKeyDown}
      ></toggle-input-card>`,T`<toggle-input-card
        .labelKey=${`game_settings.gold_multiplier`}
        .checked=${this.goldMultiplier}
        .inputId=${`gold-multiplier-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.goldMultiplierValue}
        .inputAriaLabel=${m(`game_settings.gold_multiplier`)}
        .inputPlaceholder=${`2.0x`}
        .defaultInputValue=${2}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleGoldMultiplierToggle}
        .onChange=${this.handleGoldMultiplierValueChanges}
        .onKeyDown=${this.handleGoldMultiplierValueKeyDown}
      ></toggle-input-card>`,T`<toggle-input-card
        .labelKey=${`game_settings.starting_gold`}
        .checked=${this.startingGold}
        .inputId=${`starting-gold-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.startingGoldValue}
        .inputAriaLabel=${m(`game_settings.starting_gold`)}
        .inputPlaceholder=${`5`}
        .defaultInputValue=${5}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleStartingGoldToggle}
        .onChange=${this.handleStartingGoldValueChanges}
        .onKeyDown=${this.handleStartingGoldValueKeyDown}
      ></toggle-input-card>`,T`<toggle-input-card
        .labelKey=${`game_settings.custom_alliances`}
        .checked=${this.customAlliances}
        .inputMin=${0}
        .inputMax=${15}
        .inputStep=${1}
        .inputValue=${this.customAllianceMinutes}
        .inputAriaLabel=${m(`game_settings.custom_alliances`)}
        .inputPlaceholder=${m(`game_settings.mins_placeholder`)}
        .defaultInputValue=${0}
        .minValidOnEnable=${0}
        .zeroLabel=${`(${m(`public_game_modifier.disable_alliances`)})`}
        .onToggle=${this.handleCustomAlliancesToggle}
        .onInput=${this.handleCustomAllianceMinutesInput}
        .onKeyDown=${this.handleCustomAllianceMinutesKeyDown}
      ></toggle-input-card>`,T`<toggle-input-card
        .labelKey=${`game_settings.overtime`}
        .checked=${this.overtime}
        .inputMin=${1}
        .inputMax=${120}
        .inputStep=${1}
        .inputValue=${this.overtimeStartMinutes}
        .inputAriaLabel=${m(`game_settings.overtime`)}
        .inputPlaceholder=${m(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleOvertimeToggle}
        .onInput=${this.handleOvertimeMinutesInput}
        .onKeyDown=${this.handleOvertimeMinutesKeyDown}
      ></toggle-input-card>`];return T`
      <div class="flex flex-col h-full">
        <div
          class="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-6 pt-4 pb-6 mr-1 mx-auto w-full max-w-5xl"
        >
          <saved-games-panel
            class="block mb-6"
            .signedIn=${S(this.userMeResponse)}
            .sharedId=${this.sharedSaveId}
            .busy=${this.starting}
            @load-saved-game=${this.handleLoadSavedGame}
            @open-shared-save=${e=>this.sharedSaveId=e.detail}
          ></saved-games-panel>
          <game-config-settings
            class="block"
            .sectionGapClass=${`space-y-6`}
            .settings=${{map:{selected:this.selectedMap,useRandom:this.useRandomMap,showMedals:this.showAchievements,mapWins:this.mapWins},difficulty:{selected:this.selectedDifficulty,disabled:this.nations===0},gameMode:{selected:this.gameMode},teamCount:{selected:this.teamCount},options:{titleKey:`game_settings.options`,bots:{value:this.bots,labelKey:`game_settings.bots`,disabledKey:`common.disabled`},nations:{value:this.nations,defaultValue:this.defaultNationCount,labelKey:`game_settings.nations`,disabledKey:`common.disabled`},toggles:[{labelKey:`game_settings.instant_build`,checked:this.instantBuild},{labelKey:`game_settings.random_spawn`,checked:this.randomSpawn},{labelKey:`game_settings.infinite_gold`,checked:this.infiniteGold},{labelKey:`game_settings.infinite_troops`,checked:this.infiniteTroops},{labelKey:`game_settings.compact_map`,checked:this.compactMap},{labelKey:`game_settings.water_nukes`,checked:this.waterNukes},{labelKey:`game_settings.doomsday_clock`,checked:this.doomsdayClock,doomsdayClockSpeed:this.doomsdayClockSpeed}],inputCards:e},unitTypes:{titleKey:`game_settings.disable_units`,disabledUnits:this.disabledUnits}}}
            @map-selected=${this.handleConfigMapSelected}
            @random-map-selected=${this.handleConfigRandomMapSelected}
            @difficulty-selected=${this.handleConfigDifficultySelected}
            @doomsday-clock-speed-selected=${this.handleConfigDoomsdayClockSpeedSelected}
            @game-mode-selected=${this.handleConfigGameModeSelected}
            @team-count-selected=${this.handleConfigTeamCountSelected}
            @bots-changed=${this.handleBotsChange}
            @nations-changed=${this.handleNationsChange}
            @option-toggle-changed=${this.handleConfigOptionToggleChanged}
            @unit-toggle-changed=${this.handleConfigUnitToggleChanged}
          ></game-config-settings>
        </div>

        <!-- Footer Action -->
        <div class="p-6 border-t border-white/10 bg-black/20 shrink-0">
          ${S(this.userMeResponse)&&this.hasOptionsChanged()?T`<div
                  class="mb-4 px-4 py-3 rounded-xl bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider text-center"
                >
                  ${m(`single_modal.options_changed_no_achievements`)}
                </div>`:null}
          <o-button
            variant="primary"
            width="block"
            size="lg"
            translationKey=${this.starting?`game_settings.starting`:`game_settings.start`}
            .disable=${this.starting}
            @click=${this.startGame}
          ></o-button>
        </div>
      </div>
    `}hasOptionsChanged(){return this.nations!==this.defaultNationCount||this.bots!==X.bots||this.infiniteGold!==X.infiniteGold||this.infiniteTroops!==X.infiniteTroops||this.compactMap!==X.compactMap||this.maxTimer!==X.maxTimer||this.instantBuild!==X.instantBuild||this.randomSpawn!==X.randomSpawn||this.gameMode!==X.gameMode||this.goldMultiplier!==X.goldMultiplier||this.startingGold!==X.startingGold||this.customAlliances!==X.customAlliances||this.customAllianceMinutes!==X.customAllianceMinutes||this.waterNukes!==X.waterNukes||this.doomsdayClock!==X.doomsdayClock||this.doomsdayClock&&this.doomsdayClockSpeed!==X.doomsdayClockSpeed||this.overtime!==X.overtime||this.disabledUnits.length>0}onClose(){if(this.startAttempt++,this.overlayAttempt!==0){this.overlayAttempt=0;let e=document.querySelector(`game-starting-modal`);e instanceof _&&e.hide()}this.sharedSaveId=null,this.resetOptions()}async startTutorial(){l(),!this.starting&&await this.launch(async({resolvedName:e,cosmetics:t},n)=>{let r=x();return{gameID:r,gameStartInfo:{gameID:r,players:[{clientID:x(),username:e.name,clanTag:n?.getClanTag()??null,cosmetics:t}],config:{gameMap:C.Tutorial,gameMapSize:p.Normal,gameType:d.Singleplayer,gameMode:i.FFA,difficulty:A.Easy,bots:0,nations:`default`,infiniteGold:!1,donateGold:!1,donateTroops:!1,infiniteTroops:!1,instantBuild:!1,randomSpawn:!1,disableAlliances:!0,disabledUnits:ue,startingGold:75e4,tutorial:!0},lobbyCreatedAt:Date.now()},source:`singleplayer`}})}async startSoloWithGuide(){l(),this.resetOptions(),await this.loadNationCount(),new v().setTutorialDismissed(!1),await this.startGame()}resetOptions(){this.starting=!1,this.selectedMap=X.selectedMap,this.selectedDifficulty=X.selectedDifficulty,this.gameMode=X.gameMode,this.useRandomMap=X.useRandomMap,this.bots=X.bots,this.nations=0,this.defaultNationCount=0,this.infiniteGold=X.infiniteGold,this.infiniteTroops=X.infiniteTroops,this.compactMap=X.compactMap,this.maxTimer=X.maxTimer,this.maxTimerValue=X.maxTimerValue,this.instantBuild=X.instantBuild,this.randomSpawn=X.randomSpawn,this.teamCount=X.teamCount,this.disabledUnits=[...X.disabledUnits],this.goldMultiplier=X.goldMultiplier,this.goldMultiplierValue=X.goldMultiplierValue,this.startingGold=X.startingGold,this.startingGoldValue=X.startingGoldValue,this.customAlliances=X.customAlliances,this.customAllianceMinutes=X.customAllianceMinutes,this.waterNukes=X.waterNukes,this.doomsdayClock=X.doomsdayClock,this.doomsdayClockSpeed=X.doomsdayClockSpeed,this.overtime=X.overtime,this.overtimeStartMinutes=X.overtimeStartMinutes}onOpen(e){let t=e?.save;this.sharedSaveId=typeof t==`string`?W(t):null,this.querySelector(`saved-games-panel`)?.refresh(),this.loadNationCount(),l()}handleSelectRandomMap(){this.useRandomMap=!0,this.selectedMap=z(),this.loadNationCount()}handleMapSelection(e){this.selectedMap=e,this.useRandomMap=!1,this.loadNationCount()}handleDifficultySelection(e){this.selectedDifficulty=e}handleCompactMapChange(e){this.compactMap=e,this.bots=V(this.bots,e),this.nations=L(this.nations,this.defaultNationCount,e)}getEndTimerInput(){return this.renderRoot.querySelector(`#end-timer-value`)??this.querySelector(`#end-timer-value`)}handleGameModeSelection(e){this.gameMode=e}handleTeamCountSelection(e){this.teamCount=e}async resolveNameAndCosmetics(e){let t=()=>e?.resolvedName()??k();return await J((async()=>{await e?.whenSeeded();let n=t();return{resolvedName:n,cosmetics:await s({verified:n.verified})}})(),K,()=>{console.warn(`Start preparation exceeded its deadline; starting on defaults`);let e=t();return{resolvedName:e,cosmetics:e.verified?{verified:!0}:{}}})}awaitMidgameAd(){return J(b.requestMidgameAd(),q,()=>{console.warn(`Midgame ad never signalled completion; starting anyway`)})}async startGame(){if(this.starting)return;let e;if(this.maxTimer){if(!this.maxTimerValue||this.maxTimerValue<=0){console.error(`Max timer is enabled but no valid value is set`),await E(m(`single_modal.max_timer_invalid`)||`Please enter a valid max timer value (1-120 minutes)`);let e=this.getEndTimerInput();e&&(e.focus(),e.select());return}e=Math.max(1,Math.min(120,this.maxTimerValue))}await this.launch(async({resolvedName:t,cosmetics:n},r)=>{console.log(`Starting single player game with map: ${C[this.selectedMap]}${this.useRandomMap?` (Randomly selected)`:``}`);let a=x(),o=x();return{gameID:o,gameStartInfo:{gameID:o,players:[{clientID:a,username:t.name,clanTag:r?.getClanTag()??null,cosmetics:n}],config:{gameMap:this.selectedMap,gameMapSize:this.compactMap?p.Compact:p.Normal,gameType:d.Singleplayer,gameMode:this.gameMode,playerTeams:this.teamCount,difficulty:this.selectedDifficulty,maxTimerValue:e,bots:this.bots,infiniteGold:this.infiniteGold,donateGold:this.gameMode===i.Team,donateTroops:this.gameMode===i.Team,infiniteTroops:this.infiniteTroops,instantBuild:this.instantBuild,randomSpawn:this.randomSpawn,disabledUnits:this.disabledUnits.filter(e=>Object.values(D).includes(e)),nations:I(this.nations,this.defaultNationCount),...this.goldMultiplier&&this.goldMultiplierValue?{goldMultiplier:this.goldMultiplierValue}:{},...this.startingGold&&this.startingGoldValue!==void 0?{startingGold:Math.round(this.startingGoldValue*1e6)}:{},...this.customAlliances?{customAllianceDuration:this.customAllianceMinutes??0}:{},...this.waterNukes?{waterNukes:!0}:{},...this.doomsdayClock?{doomsdayClock:{enabled:!0,speed:this.doomsdayClockSpeed}}:{},...this.overtime?{overtime:{enabled:!0,startMinutes:this.overtimeStartMinutes??30}}:{}},lobbyCreatedAt:Date.now()},source:`singleplayer`}})}async startSavedGame(e,t){if(!this.starting)try{await this.launch(async({resolvedName:r,cosmetics:i},a)=>{let o=await N(e,t);if(typeof o==`string`)throw new Y(o===`not_found`?`saved_games.error.not_found`:`saved_games.error.download_failed`);let{readSnapshotHeader:s}=await n(async()=>{let{readSnapshotHeader:e}=await import(`./WorkerClient-tTYJOPw1.js`).then(e=>e.n);return{readSnapshotHeader:e}},__vite__mapDeps([0,1,2,3,4]),import.meta.url),c;try{c=await s(o)}catch(e){throw console.warn(`Saved game is not a snapshot this build reads`,e),new Y(`saved_games.error.unreadable`)}let l=c.humans[0];if(c.gameConfig.gameType!==d.Singleplayer||c.humans.length!==1)throw new Y(`saved_games.error.not_singleplayer`);console.log(`Resuming saved game ${e} on ${c.gameConfig.gameMap} at tick ${c.tick}`);let u=x();return{gameID:u,gameStartInfo:{gameID:u,players:[{clientID:l.clientID,username:r.name,clanTag:a?.getClanTag()??null,cosmetics:i}],config:c.gameConfig,lobbyCreatedAt:Date.now()},snapshot:o,source:`singleplayer`}})}catch(e){e instanceof Y||console.error(`Failed to start the saved game`,e),await E(m(e instanceof Y?e.messageKey:`saved_games.error.load_failed`))}}async launch(e){this.starting=!0;let t=++this.startAttempt,n=document.querySelector(`game-starting-modal`),r=n instanceof _?n:null;this.overlayAttempt=t,r?.show();try{let n=document.querySelector(`username-input`),r=await this.resolveNameAndCosmetics(n);if(t!==this.startAttempt)return;let i=await e(r,n);if(t!==this.startAttempt||(await this.awaitMidgameAd(),t!==this.startAttempt))return;this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:i,bubbles:!0,composed:!0})),this.overlayAttempt=0,this.close()}finally{t===this.startAttempt&&(this.starting=!1),this.overlayAttempt===t&&(this.overlayAttempt=0,r?.hide())}}async loadNationCount(){let e=this.selectedMap;try{let t=await this.mapLoader.getMapData(e).manifest();this.selectedMap===e&&(this.defaultNationCount=t.nations.length,this.nations=this.compactMap?Math.max(0,Math.floor(t.nations.length*.25)):t.nations.length)}catch(e){console.warn(`Failed to load nation count`,e)}}};y([o()],$.prototype,`selectedMap`,void 0),y([o()],$.prototype,`selectedDifficulty`,void 0),y([o()],$.prototype,`nations`,void 0),y([o()],$.prototype,`defaultNationCount`,void 0),y([o()],$.prototype,`bots`,void 0),y([o()],$.prototype,`infiniteGold`,void 0),y([o()],$.prototype,`infiniteTroops`,void 0),y([o()],$.prototype,`compactMap`,void 0),y([o()],$.prototype,`maxTimer`,void 0),y([o()],$.prototype,`maxTimerValue`,void 0),y([o()],$.prototype,`instantBuild`,void 0),y([o()],$.prototype,`randomSpawn`,void 0),y([o()],$.prototype,`useRandomMap`,void 0),y([o()],$.prototype,`gameMode`,void 0),y([o()],$.prototype,`teamCount`,void 0),y([o()],$.prototype,`showAchievements`,void 0),y([o()],$.prototype,`mapWins`,void 0),y([o()],$.prototype,`eligibleMaps`,void 0),y([o()],$.prototype,`userMeResponse`,void 0),y([o()],$.prototype,`goldMultiplier`,void 0),y([o()],$.prototype,`goldMultiplierValue`,void 0),y([o()],$.prototype,`startingGold`,void 0),y([o()],$.prototype,`startingGoldValue`,void 0),y([o()],$.prototype,`disabledUnits`,void 0),y([o()],$.prototype,`customAlliances`,void 0),y([o()],$.prototype,`customAllianceMinutes`,void 0),y([o()],$.prototype,`waterNukes`,void 0),y([o()],$.prototype,`doomsdayClock`,void 0),y([o()],$.prototype,`doomsdayClockSpeed`,void 0),y([o()],$.prototype,`overtime`,void 0),y([o()],$.prototype,`overtimeStartMinutes`,void 0),y([o()],$.prototype,`starting`,void 0),y([o()],$.prototype,`sharedSaveId`,void 0),$=y([h(`single-player-modal`)],$);export{q as MIDGAME_AD_DEADLINE_MS,K as START_PREPARE_DEADLINE_MS,$ as SinglePlayerModal};
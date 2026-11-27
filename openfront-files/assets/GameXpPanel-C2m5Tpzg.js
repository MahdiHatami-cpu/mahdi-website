import{$i as e,C as t,E as n,Eo as r,Gn as i,Ji as a,Kn as o,Ko as s,Pr as c,Qi as l,S as u,T as d,_ as f,a as p,ea as m,er as h,f as g,g as _,h as v,o as y,oa as b,p as x,ra as S,rr as C,s as w,ta as T,w as E,y as D,yi as O}from"./index-Cv-L6ZYS.js";import"./CapIcon-BjNqGPDJ.js";import"./PlutoniumIcon-GjaZU5e1.js";import{t as ee}from"./RewardClaims-C1Q-bZed.js";import{c as k,l as A}from"./CosmeticPreview-oCL43AiT.js";import{t as j}from"./keyed-CzW4mb1H.js";function M(e){return!e.claimed&&!r(e)}function N(e,t){return t.size===0?e:e.map(e=>{let n=t.get(e.id);return n===void 0||e.claimed?e:{...e,held:n}})}function P(e){let n=[];for(let r of[`soft`,`hard`]){let i=e.filter(e=>e.currencyType===r);if(i.length===0)continue;let a=i.map(e=>t(e.amount)),o=a.reduce((e,t)=>e+t,0n),s=a.length>1&&a.every(e=>e===a[0])?a[0]:null;n.push({currency:r,total:o,count:i.length,each:s})}return n}function te(e){if(e.length===0)return null;let t=[...new Set(e.map(e=>e.level))].sort((e,t)=>e-t),n,r;t.length>1?(n=`progression.rewards_levels`,r={from:t[0],to:t[t.length-1]}):(n=e.length>1?`progression.rewards_level_many`:`progression.rewards_level_one`,r={level:t[0]});let i=e.filter(e=>!M(e)),a=e.filter(M),o=a.filter(e=>e.held===`trust`),s=a.filter(e=>e.held!==`trust`),c=[...P(o).map(e=>({...e,labelKey:`account_modal.reward_held_trust`})),...P(s).map(e=>({...e,labelKey:`account_modal.reward_held_other_info`}))];return{headingKey:n,headingParams:r,lines:P(i),heldLines:c,claimable:i.length>0,allClaimed:i.every(e=>e.claimed)}}async function F(e,n=new Set){let r=await ee(e.filter(e=>!e.claimed&&!n.has(e.id)&&!M(e)));if(r.failed)return{ok:!1,claimedIds:r.claimedIds,held:r.held};let i={soft:0,hard:0};for(let n of e)r.creditedIds.includes(n.id)&&(i[n.currencyType]+=Number(t(n.amount)));return{ok:!0,currency:r.currency,credited:i,claimedIds:r.claimedIds,held:r.held}}var I={pattern:`territory_patterns.pattern`,skin:`territory_patterns.pattern`,flag:`flags`,crown:`crowns`,effect:`effects`},L={pattern:`cosmetics.type_skin`,skin:`cosmetics.type_skin`,flag:`cosmetics.type_flag`,crown:`cosmetics.type_crown`};function R(e,t){let[n=``,r=``,i]=e.flareName.split(`:`),s=[`pattern`,`flag`,`skin`,`crown`,`effect`].includes(n)?o({type:n,name:r,colorPalette:i},t)??null:null;if(s!==null)return{flare:e,resolved:s,name:k(s),typeLabel:A(s)};let c=I[n],l=L[n];return{flare:e,resolved:null,name:c!==void 0&&r!==``?C(c,r):e.flareName,typeLabel:a(l??`progression.unlocked_cosmetic`)}}var z={win_added:`progression.reconcile_win`,win_removed:`progression.reconcile_win_removed`,feats:`progression.reconcile_feats`,daily_cap:`progression.reconcile_daily_cap`,multiplier:`progression.reconcile_multiplier`,reconnect:`progression.reconcile_reconnect`,other:`progression.reconcile_other`},B=`progression.reconcile_team_win`,V=10,H=300,ne=250,re=450,ie=140,U=300,ae=1100,oe=1900,se=450,W=1e3,G=.4;function K(e,t){return t>1?e*(1-G)/(t-1):0}var ce=400,le=900,ue=700,de=300,fe=900,pe=360,q=500,J=120,Y=600,me=e=>1-(1-e)**3,X=-1;function he(){try{return window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}function ge(e,t,n){return e>=100?100:e+Math.min(.999999,f(t,n))}function Z(e){return ge(e.after.level,e.after.xpInLevel,e.after.xpForNext)}function Q(e){return x(n(e.breakdown).map(e=>e.amount),e.breakdown.total)}var $=class extends T{constructor(...e){super(...e),this.view={kind:`hidden`},this.onScreen=!0,this.gameType=null,this.reveal=null,this.barAnimate=!1,this.barDurationMs=re,this.revealedProvisional=null,this.animationToken=0,this.announcedLegend=null,this.timers=[],this.settledView=null,this.claim={status:`idle`,failed:!1},this.claimPressed=!1,this.balanceCount=1,this.claimedIds=new Set,this.refusedHolds=new Map,this.claimToken=0,this.claimTimers=[],this.catalog=[],this.catalogRequested=!1}createRenderRoot(){return this}disconnectedCallback(){this.skipReveal(),this.clearClaimTimers(),this.balanceCount=1,super.disconnectedCallback()}willUpdate(e){if(e.has(`view`)){this.resetClaim();let t=this.view;t.kind===`result`&&t.data.eligible&&(t.data.flares??[]).length>0&&this.loadCatalog();let n=e.get(`view`);if(t.kind===`provisional`&&n?.kind===`provisional`&&n.provisional===t.provisional)return;if(!this.onScreen)this.skipReveal();else if(t.kind===`result`&&t.data.eligible){let e=t.reconciled,n=e?.provisional.response;if(e!==void 0&&n?.eligible&&this.revealedProvisional===e.provisional){if(e.outcome.matched)return;if(t.data.breakdown.total>n.breakdown.total){let e=n.before.prestige===t.data.before.prestige,r=this.reveal;this.startReveal(t.data,{kind:`celebrate`,from:e?r?.position??Z(n):0,countFrom:r?.counted??n.breakdown.total,celebrated:e?r?.level??n.after.level:0,celebratedLegend:e&&(r?.legend??n.after.legend)})}else this.skipReveal()}else this.startReveal(t.data,{kind:`full`})}else t.kind===`provisional`&&t.provisional.response.eligible?(this.revealedProvisional=t.provisional,this.startReveal(t.provisional.response,{kind:`full`})):this.skipReveal()}else e.has(`onScreen`)&&!this.onScreen&&(this.reveal!==null&&this.view.kind===`provisional`&&(this.revealedProvisional=null),this.skipReveal())}clearTimers(){this.animationToken++;for(let e of this.timers)clearTimeout(e);this.timers=[]}later(e,t){this.timers.push(setTimeout(t,e))}startReveal(e,t){if(this.clearTimers(),he()){this.reveal=null;return}let r=this.animationToken,i=(e,t)=>this.later(e,()=>{r===this.animationToken&&this.reveal!==null&&t()}),a=e=>{this.reveal!==null&&(this.reveal={...this.reveal,...e})},o=0,s=(e,t)=>{let n=++o;i(e,()=>a({step:n,caption:t,levelUp:null}))},{breakdown:c}=e,l=n(c),f=l.map(e=>e.amount),p=d(c),m=ge(e.before.level,e.before.xpInLevel,e.before.xpForNext),h=Z(e),g=t.kind===`celebrate`,_=g?Math.min(h,Math.max(m,t.from)):m;if(g&&_>=h&&t.countFrom===e.breakdown.total){this.reveal=null;return}let v=c.total,y=Math.max(1,c.subtotal),b=v<y?v/y:1,S=e=>v<=0?m:m+(h-m)*e/v,C=D(e),w=C.length>0?C[C.length-1].level:null,T=this.view.kind===`result`,E=T?te(e.rewards??[]):null,O=T&&(e.flares??[]).length>0,ee=u(e)||this.milestoneOf(e)!==void 0,k=e=>{if(O&&i(e+ue,()=>a({unlockShown:!0})),E===null)return;let t=e+(O||ee?fe:de);i(t,()=>a({rewardsShown:!0}));let n=t+pe,r=Math.max(2,Math.round(q/40));for(let e=1;e<=r;e++)i(n+q*e/r,()=>a({rewardsCount:me(e/r)}))};this.barAnimate=!1,this.reveal={step:0,caption:g?{kind:`heading`}:null,position:_,level:Math.min(100,Math.floor(_)),levelUp:null,legend:e.after.legend&&(!u(e)||g&&t.celebratedLegend),counted:g?t.countFrom:0,xpText:g?`none`:`before`,linesShown:g?l.length:0,multipliersShown:g?p.length:0,lineValues:g?Q(e):[...f],applying:null,rewardsShown:!1,rewardsCount:0,unlockShown:!1,celebrated:g?t.celebrated:0,celebratedLegend:g&&t.celebratedLegend};let A=_,j=g?Math.max(e.before.level,t.celebrated):e.before.level,M=D(e).map(e=>e.level).filter(e=>e>j&&e<=100).sort((e,t)=>e-t);g&&w!==null&&w<=j&&k(H);let N=(t,n,r,s,c=!1,l=re)=>{let u=A,d=(e,t,n,r)=>{let o=Math.max(2,Math.round(t/40));for(let c=1;c<=o;c++){let l=n+(r-n)*c/o;i(e+t*c/o,()=>a(s(l)))}};if(n<=u)return c?(d(t,l,0,1),t+l):t;A=n;let f=[];for(;M.length>0&&M[0]<=n;)f.push(M.shift());let p=n-u,m=(e,t)=>Math.max(ie,Math.round(l*(t-e)/p)),h=u;for(let n of f){let s=m(h,n);d(t,s,(h-u)/p,(n-u)/p),i(t,()=>{this.barDurationMs=s,this.barAnimate=!0,a({position:n-1e-6,xpText:`none`})}),t+=s;let c=n,l=c>=100&&e.after.legend;i(t,()=>{if(this.barAnimate=!1,l&&this.announceLegend(e)){this.skipReveal();return}a({level:Math.min(100,c),levelUp:c,legend:l})}),c===w&&k(t),t+=l?oe:ae;let f=o+1;o=f,i(t,()=>{this.barAnimate=!1,a({position:c,levelUp:null,step:f,caption:r})}),t+=60,h=n}if(n>h){let e=m(h,n);d(t,e,(h-u)/p,1),i(t,()=>{this.barDurationMs=e,this.barAnimate=!0,a({position:n})}),t+=e}return t},P=H,F=0,I=g?t.countFrom:0;(g?[]:l).forEach((e,t)=>{let n={kind:`line`,key:e.key,amount:e.amount};s(P,n),P+=ne,F=Math.min(v,F+e.amount*b);let r=I;I+=e.amount;let o=I;P=N(P,S(F),n,e=>({counted:Math.round(r+(o-r)*e)})),i(P,()=>a({counted:o,linesShown:t+1})),P+=U});let L=[...f],R=1;(g?[]:p).forEach((e,t)=>{let n={kind:`multiplier`,key:e.key,permille:e.permille};s(P,n),P+=se,R*=e.permille/1e3;let r=t===p.length-1?v:Math.round(y*R),o=L,c=x(f,r);L=c;let l=I;I=r;let u=e.permille>1e3?`boost`:`cut`;i(P,()=>a({applying:u})),F=Math.max(F,Math.min(v,r));let d=f.length,m=N(P,S(F),n,e=>({counted:Math.round(l+(r-l)*e),lineValues:o.map((t,n)=>{let r=Math.min(1,Math.max(0,(e-K(n,d))/G));return Math.round(t+(c[n]-t)*r)})}),!0,W);P=Math.max(m,P+W),i(P,()=>a({counted:r,lineValues:c,multipliersShown:t+1,applying:null})),P+=ce});let z=p.length>0&&!g?{kind:`multiplier`,key:p[p.length-1].key,permille:p[p.length-1].permille}:null,B=I;P=N(P,h,z??{kind:`heading`},e=>({counted:Math.round(B+(v-B)*e)}),g&&B!==v);let V=Q(e);i(P,()=>a({counted:v,lineValues:V,xpText:`after`})),P+=U;let J=this.payoffCaption(e);J!==null&&(i(P,()=>a({step:X,caption:J,levelUp:null})),P+=le),i(P,()=>{this.barAnimate=!1,this.reveal=null})}announceSettled(){let e=this.view;e.kind!==`result`||this.reveal!==null||this.settledView!==e&&(this.settledView=e,this.dispatchEvent(new CustomEvent(`xp-reveal-settled`,{detail:e,bubbles:!0})))}announceLegend(e){if(this.announcedLegend===e)return!1;this.announcedLegend=e;let t=new CustomEvent(`xp-legend`,{detail:e,bubbles:!0,composed:!0,cancelable:!0});return!this.dispatchEvent(t)}updated(e){super.updated(e),this.announceSettled();let t=this.view;t.kind===`result`&&t.data.eligible&&this.reveal===null&&this.onScreen&&u(t.data)&&this.announceLegend(t.data)}skipReveal(){this.clearTimers(),this.barAnimate=!1,this.reveal=null}payoffCaption(e){let t=this.view;if(t.kind===`result`&&t.reconciled?.provisional===this.revealedProvisional&&this.adjustedLevel()!==null)return null;if(u(e))return{kind:`legend`};let n=D(e);return n.length===0?null:{kind:`level_up`,level:n[n.length-1].level}}accentOf(e){return e.key===`subscriber`?E(e.permille)?.colors??null:null}panelAccent(e){let t=d(e.breakdown),n=this.reveal,r=n!==null&&n.applying!==null?t[n.multipliersShown]:t.find(e=>this.accentOf(e)!==null),i=r===void 0?null:this.accentOf(r);return i===null?void 0:`--accent-a: ${i[0]}; --accent-b: ${i[1]}`}frame(e,t,n){let r=this.reveal!==null;return b`<section
      data-xp-panel
      data-xp-state=${t}
      data-xp-revealing=${r?`true`:S}
      style=${n??S}
      class="relative mb-4 rounded-lg bg-black/30 p-3 text-left text-white ${r?`cursor-pointer`:``}"
      aria-live="polite"
      aria-busy=${r?`true`:`false`}
      title=${r?a(`progression.tap_to_skip`):S}
      @click=${()=>this.skipReveal()}
    >
      ${r?b`<button
              type="button"
              data-xp-skip
              class="sr-only focus:not-sr-only focus:absolute focus:right-2 focus:top-2 focus:z-10 focus:rounded-sm focus:bg-black/80 focus:px-2 focus:py-1 focus:text-xs focus:font-bold focus:text-white"
              @click=${e=>{e.stopPropagation(),this.skipReveal()}}
            >
              ${a(`progression.skip_reveal`)}
            </button>`:S}
      ${e}
    </section>`}renderNote(e,t){return this.frame(b`<p class="m-0 text-sm text-white/80">${a(e)}</p>`,t)}renderIneligible(e,t){return this.frame(b`${this.renderStatus()}
        <p class="m-0 text-sm text-white/80">
          ${a(v(e,this.gameType))}
        </p>
        ${this.renderReconcileNotes()}`,t)}renderCalculating(){return this.frame(b`<div class="flex items-center gap-2 text-sm text-white/80">
        <span
          class="w-4 h-4 shrink-0 border-2 border-white/30 border-t-white/80 rounded-full animate-spin motion-reduce:animate-none"
          aria-hidden="true"
        ></span>
        <span>${a(`progression.calculating`)}</span>
      </div>`,`calculating`)}captionContent(e){switch(e.kind){case`line`:return b`${a(g[e.key])}
          <span class="text-yellow-300"
            >${a(`progression.xp_total`,{xp:p(e.amount)})}</span
          >`;case`multiplier`:return b`${y(e.key,e.permille)}`;case`heading`:return b`${a(`progression.xp_heading`)}`;case`level_up`:return b`<span class="text-yellow-300"
          >${a(`progression.level_reached`,{level:e.level})}</span
        >`;case`legend`:return b`<span class="text-yellow-300"
          >${a(`progression.legend_reached_title`)}</span
        >`}}renderCaption(e){let t=this.reveal,n=t?.levelUp??null,r=S,i;if(n!==null&&t?.legend)i=`legend`,r=b`<div
        class="xp-levelup-in xp-legend-text text-center text-2xl font-black uppercase italic tracking-wide sm:text-3xl"
        data-xp-caption-levelup=${n}
        data-xp-caption-legend
      >
        ${a(`progression.legend_reached_title`)}
      </div>`;else if(n!==null)i=`lvl-${n}`,r=b`<div
        class="xp-levelup-in text-center text-2xl font-black uppercase italic tracking-wide text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] sm:text-3xl"
        data-xp-caption-levelup=${n}
      >
        ${a(`progression.level_reached`,{level:n})}
      </div>`;else{i=`s-${t?.step??X}`;let n=t===null?this.payoffCaption(e)??{kind:`heading`}:t.caption;n?.kind===`multiplier`?r=b`<div
          class="xp-levelup-in xp-bonus-text ${n.permille>1e3?``:`xp-bonus-text-cut`} text-center text-xl font-black uppercase italic tracking-wide sm:text-2xl"
          data-xp-caption-step=${t?.step??X}
        >
          ${this.captionContent(n)}
        </div>`:n!==null&&(r=b`<div
          class="xp-caption-in text-center text-lg font-black uppercase italic tracking-wide sm:text-xl"
          data-xp-caption-step=${t?.step??X}
        >
          ${this.captionContent(n)}
        </div>`)}return b`<div
      class="flex h-9 items-end justify-center overflow-visible"
      data-xp-caption
    >
      ${j(i,r)}
    </div>`}renderSegmentedBar(e,t,n){return b`<div
      data-xp-bar
      class="relative h-3 w-full overflow-hidden rounded-sm bg-white/15 ${t?`xp-bar-flash`:``}"
      role="progressbar"
      aria-label=${a(`progression.xp_bar_label`)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round(e)}
      aria-valuetext=${n===``?S:n}
    >
      <div
        data-xp-bar-fill
        class="h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)] ${this.barAnimate?`xp-bar-filling transition-[width] ease-linear`:``}"
        style="width: ${e}%; transition-duration: ${this.barDurationMs}ms"
      ></div>
      ${Array.from({length:V-1},(e,t)=>b`<span
            aria-hidden="true"
            class="absolute top-0 h-full w-[3px] -translate-x-1/2 bg-zinc-900"
            style="left: ${(t+1)*100/V}%"
          ></span>`)}
    </div>`}renderFull(e){let{after:t}=e,n=this.reveal,r=this.view.kind===`provisional`,i=n?.position??Z(e),o=n?.level??Math.min(100,Math.floor(i)),s=n===null?t.legend:n.legend,c=i>=100?100:Math.max(0,(i-Math.floor(i))*100),l=n?.levelUp??null,u=n===null||n.xpText===`after`?w(t.xpInLevel,t.xpForNext):n.xpText===`before`?w(e.before.xpInLevel,e.before.xpForNext):``,d=n?.counted??e.breakdown.total,f=n?.applying??null,m=n===null?t.prestige:e.before.prestige,h=l===null?o:l-1,g=l??(o<100?o+1:null),_=(e,t)=>b`<level-badge
        .level=${e}
        .prestige=${m}
        .legend=${t}
        .size=${40}
      ></level-badge>`,v=n===null?``:`xp-badge-in`;return this.frame(b`
        ${this.renderStyles()} ${this.renderStatus()}
        ${this.renderCaption(e)}
        <!-- Every box here is a fixed size, so nothing moves while the
             numbers and the level change. -->
        <div class="mt-1 flex items-start gap-3">
          <!-- The level the player is on. The same width as the next level's
               badge on the right, so the bar, and the counter under it, are
               centred in the panel like the caption above. -->
          <div class="grid h-10 w-10 shrink-0 place-items-center">
            ${j(`${h}-${s&&h>=100}`,b`<span
                data-xp-current-badge
                data-level=${h}
                class="inline-block ${v}"
                >${_(h,s&&h>=100)}</span
              >`)}
          </div>
          <div class="@container min-w-0 flex-1 pt-3.5">
            ${this.renderSegmentedBar(c,l!==null,u)}
            <!-- The counter centred under the bar, the level's progress at
                 its right end. A bar too narrow for both side by side (a
                 phone) stacks them, centred, so they never run together.
                 Fixed heights either way: nothing moves during the reveal. -->
            <div
              data-xp-counter-row
              class="mt-1 flex h-9 flex-col items-center @min-[16rem]:grid @min-[16rem]:h-5 @min-[16rem]:grid-cols-[1fr_auto_1fr] @min-[16rem]:gap-x-2"
            >
              <span class="hidden @min-[16rem]:block"></span>
              <span
                data-xp-total
                class="text-sm font-bold tabular-nums transition-colors ${f===`boost`?`xp-accent-text`:f===`cut`?`text-sky-300`:`text-white/90`}"
              >
                ${a(`progression.xp_total`,{xp:p(d)})}
              </span>
              <span
                data-xp-header-level
                class="max-w-full truncate text-center text-[11px] tabular-nums text-white/60 @min-[16rem]:text-right"
              >
                ${u}
              </span>
            </div>
          </div>
          <div class="relative grid h-10 w-10 shrink-0 place-items-center">
            ${l===null?S:j(`${l}-${s}`,b`<span
                        aria-hidden="true"
                        class="xp-burst pointer-events-none absolute inset-0 rounded-full border-2 border-yellow-200 shadow-[0_0_12px_rgba(250,204,21,0.9)]"
                      ></span
                      ><span
                        aria-hidden="true"
                        class="xp-burst-late pointer-events-none absolute inset-0 rounded-full border border-white/80"
                      ></span>`)}
            ${g===null?S:j(`${g}-${l!==null}-${s}`,b`<span
                      data-xp-next-badge
                      data-level=${g}
                      class="relative inline-block ${l===null?`opacity-60 ${v}`:s?`xp-legend-pop`:`xp-badge-pop`}"
                      >${_(g,l!==null&&s&&g>=100)}</span
                    >`)}
          </div>
        </div>
        ${this.renderBonuses(e)}
        <div data-xp-recap>${this.renderRecap(e)}</div>
        ${this.renderReconcileNotes()}
      `,r?`provisional`:`result`,this.panelAccent(e))}renderStatus(){let e=this.view;return e.kind===`provisional`?b`<div
        data-xp-provisional
        class="mb-1 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-300"
      >
        ${e.confirming?b`<span
                data-xp-confirming
                class="h-3 w-3 shrink-0 animate-spin rounded-full border-2 border-amber-300/30 border-t-amber-300 motion-reduce:animate-none"
                aria-hidden="true"
              ></span>`:S}
        <span
          >${a(e.confirming?`progression.provisional_confirming`:`progression.provisional_label`)}</span
        >
      </div>`:e.kind===`result`&&e.reconciled?.outcome.matched?b`<div
        data-xp-confirmed
        class="mb-1 text-center text-[11px] font-bold uppercase tracking-wider text-green-400"
      >
        ${a(`progression.xp_confirmed`)}
      </div>`:S}adjustedLevel(){let e=this.view;if(e.kind!==`result`||e.reconciled===void 0)return null;let t=e.reconciled.provisional.response;return!t.eligible||D(t).length===0?null:e.data.eligible?e.data.after.prestige===t.after.prestige&&e.data.after.level<t.after.level?e.data.after.level:null:t.before.level}renderReconcileNotes(){let e=this.view,t=[];if(e.kind===`provisional`){if(!e.provisional.response.eligible)return S;e.provisional.teamWinPending&&t.push({key:`progression.provisional_team_win_pending`}),e.provisional.featsPending&&t.push({key:`progression.provisional_feats_pending`})}else if(e.kind===`result`&&e.reconciled!==void 0){let{outcome:n}=e.reconciled;if(n.matched)return S;n.provisionalTotal!==null&&t.push({key:`progression.provisional_was`,params:{xp:p(n.provisionalTotal)}});let r=e.reconciled.provisional.inputs.gameMode===s.Team;for(let i of n.differences){let n=i===`win_added`&&r?B:z[i];n===void 0||!e.data.eligible&&i===e.data.reason||t.push({key:n})}let i=this.adjustedLevel();i!==null&&t.push({key:`progression.reconcile_level_adjusted`,params:{level:String(i)}})}else return S;return t.length===0?S:b`<div data-xp-reconcile class="mt-3 space-y-0.5">
      ${t.map(e=>b`<p
            data-xp-note=${e.key}
            class="m-0 text-center text-xs text-white/60"
          >
            ${a(e.key,e.params)}
          </p>`)}
    </div>`}renderStyles(){return b`<style>
      @keyframes xp-caption-in {
        from {
          opacity: 0;
          transform: translateY(70%) skewX(-8deg);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      .xp-caption-in {
        animation: xp-caption-in 220ms ease-out;
      }
      @keyframes xp-levelup-in {
        0% {
          opacity: 0;
          transform: scale(2.2) skewX(-8deg);
        }
        55% {
          opacity: 1;
          transform: scale(0.92) skewX(-8deg);
        }
        100% {
          transform: scale(1) skewX(0);
        }
      }
      .xp-levelup-in {
        animation: xp-levelup-in 420ms cubic-bezier(0.2, 0.9, 0.3, 1.2);
      }
      @keyframes xp-bar-flash {
        0%,
        100% {
          filter: brightness(1);
          box-shadow: none;
        }
        50% {
          filter: brightness(1.9);
          box-shadow: 0 0 16px 2px rgba(255, 255, 255, 0.85);
        }
      }
      .xp-bar-flash {
        animation: xp-bar-flash 450ms ease-in-out 2;
      }
      /* While the bar fills, its leading edge glows white-hot and a sheen
         runs along the fill. Both are pseudo-elements clipped to the fill;
         the sheen moves by transform, one tile per loop. */
      [data-xp-panel] [data-xp-bar-fill] {
        position: relative;
        overflow: hidden;
      }
      [data-xp-panel] [data-xp-bar-fill]::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 42px;
        pointer-events: none;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0),
          rgba(255, 250, 210, 0.95)
        );
        opacity: 0;
        transition: opacity 160ms ease-out;
      }
      [data-xp-panel] .xp-bar-filling::after {
        opacity: 1;
      }
      [data-xp-panel] .xp-bar-filling::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -48px;
        right: 0;
        pointer-events: none;
        background-image: repeating-linear-gradient(
          115deg,
          rgba(255, 255, 255, 0) 0 10px,
          rgba(255, 255, 255, 0.28) 10px 14px,
          rgba(255, 255, 255, 0) 14px 24px
        );
        background-size: 48px 100%;
        animation: xp-bar-sheen 420ms linear infinite;
      }
      @keyframes xp-bar-sheen {
        to {
          transform: translateX(48px);
        }
      }
      @keyframes xp-badge-pop {
        0% {
          transform: scale(1);
        }
        30% {
          transform: scale(1.45);
        }
        60% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
        }
      }
      .xp-badge-pop {
        animation: xp-badge-pop 650ms ease-out;
      }
      /* A level badge moving on after a level-up. No end opacity, so the
         next level's badge settles at its own dimmed opacity. */
      @keyframes xp-badge-in {
        from {
          opacity: 0;
          transform: scale(0.6);
        }
        to {
          transform: none;
        }
      }
      .xp-badge-in {
        animation: xp-badge-in 280ms cubic-bezier(0.2, 0.9, 0.3, 1.2);
      }
      @keyframes xp-legend-pop {
        0% {
          transform: scale(1) rotate(0);
          filter: brightness(1);
        }
        25% {
          transform: scale(1.8) rotate(-8deg);
          filter: brightness(2);
        }
        50% {
          transform: scale(1.3) rotate(6deg);
        }
        100% {
          transform: scale(1.15) rotate(0);
          filter: brightness(1.2);
        }
      }
      .xp-legend-pop {
        animation: xp-legend-pop 1100ms cubic-bezier(0.2, 0.9, 0.3, 1.2)
          forwards;
      }
      @keyframes xp-burst {
        from {
          transform: scale(0.6);
          opacity: 1;
        }
        to {
          transform: scale(2.4);
          opacity: 0;
        }
      }
      .xp-burst {
        animation: xp-burst 700ms ease-out forwards;
      }
      .xp-burst-late {
        opacity: 0;
        animation: xp-burst 700ms ease-out 180ms forwards;
      }
      /* A multiplier's wipe: a bright band runs across the caption, then
         across each card in turn (each card's own delay comes from its
         --wipe-delay), and the card's value turns over as it passes. In the
         bonus's colours: --accent-a to --accent-b, set on the panel for a
         subscription tier (Sovereign gold, Warlord cyan, Vanguard green),
         lime otherwise; blue for a cut. */
      @keyframes xp-wipe {
        from {
          background-position: 100% 0;
        }
        to {
          background-position: 0 0;
        }
      }
      @keyframes xp-text-wipe {
        from {
          background-position:
            100% 0,
            0 0;
        }
        to {
          background-position:
            0 0,
            0 0;
        }
      }
      .xp-bonus-text {
        background:
          linear-gradient(
            100deg,
            transparent 42%,
            #ffffff 50%,
            transparent 58%
          ),
          linear-gradient(
            90deg,
            var(--accent-a, #bef264),
            var(--accent-b, #bef264)
          );
        background-size:
          300% 100%,
          100% 100%;
        background-position:
          100% 0,
          0 0;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        filter: drop-shadow(
          0 0 8px color-mix(in srgb, var(--accent-a, #a3e635) 55%, transparent)
        );
      }
      .xp-bonus-text-cut {
        --accent-a: #7dd3fc;
        --accent-b: #7dd3fc;
      }
      .xp-levelup-in.xp-bonus-text {
        animation:
          xp-levelup-in 420ms cubic-bezier(0.2, 0.9, 0.3, 1.2),
          xp-text-wipe 900ms ease-in-out 250ms both;
      }
      /* The bonus line under the counter, in the same colours. */
      .xp-bonus-line {
        background: linear-gradient(
          90deg,
          var(--accent-a, #bef264),
          var(--accent-b, #bef264)
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .xp-accent-text {
        color: var(--accent-b, #bef264);
      }
      .xp-card-wipe {
        --wipe-glow: color-mix(
          in srgb,
          var(--accent-a, #bef264) 60%,
          transparent
        );
      }
      .xp-card-wipe.xp-wipe-cut {
        --wipe-glow: rgba(125, 211, 252, 0.55);
      }
      .xp-card-wipe::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
          100deg,
          transparent 36%,
          var(--wipe-glow) 46%,
          rgba(255, 255, 255, 0.7) 50%,
          var(--wipe-glow) 54%,
          transparent 64%
        );
        background-size: 300% 100%;
        background-position: 100% 0;
        animation: xp-wipe var(--wipe-ms, 400ms) ease-in-out
          var(--wipe-delay, 0ms) both;
      }
      .xp-card-boosted {
        border-color: color-mix(
          in srgb,
          var(--accent-a, #a3e635) 40%,
          transparent
        ) !important;
      }
      .xp-card-boosted [data-xp-card-value] {
        color: var(--accent-b, #d9f99d);
        text-shadow: 0 0 8px
          color-mix(in srgb, var(--accent-a, #a3e635) 50%, transparent);
      }
      .xp-card-cut {
        border-color: rgba(125, 211, 252, 0.35) !important;
      }
      .xp-card-cut [data-xp-card-value] {
        color: #bae6fd;
      }
      /* A card phasing in: it rises out of a blur, flares, overshoots a
         touch and settles, and a shine sweeps across it. */
      @keyframes xp-card-in {
        0% {
          opacity: 0;
          transform: translateY(18px) scale(0.82);
          filter: blur(8px) brightness(2.2);
        }
        55% {
          opacity: 1;
          transform: translateY(-3px) scale(1.05);
          filter: blur(0) brightness(1.7);
        }
        100% {
          opacity: 1;
          transform: none;
          filter: none;
        }
      }
      .xp-card-in {
        animation: xp-card-in 560ms cubic-bezier(0.2, 0.8, 0.3, 1) both;
      }
      @keyframes xp-card-shine {
        from {
          background-position: 100% 0;
        }
        to {
          background-position: 0 0;
        }
      }
      .xp-shine {
        position: relative;
      }
      .xp-card-in.xp-shine::after,
      .xp-card-in .xp-shine::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
          100deg,
          transparent 40%,
          rgba(255, 255, 255, 0.4) 50%,
          transparent 60%
        );
        background-size: 300% 100%;
        animation: xp-card-shine 750ms ease-out 150ms both;
      }
      /* Inside a space that is sliding open: wait for it to open first. */
      .xp-card-in.xp-after-slide,
      .xp-after-slide .xp-badge-pop {
        animation-delay: 260ms;
      }
      .xp-card-in.xp-after-slide.xp-shine::after {
        animation-delay: 410ms;
      }
      /* A cosmetic unlocked: the divider draws, the half wipes in from it,
         its preview pops. The rewards row's claimed state rises in. */
      @keyframes xp-unlock-sep {
        from {
          transform: scaleY(0);
        }
      }
      .xp-unlock-sep {
        animation: xp-unlock-sep 220ms ease-out both;
      }
      @keyframes xp-unlock-in {
        from {
          clip-path: inset(0 100% 0 0);
        }
        to {
          clip-path: inset(0 0 0 0);
        }
      }
      .xp-unlock-in {
        animation: xp-unlock-in 480ms cubic-bezier(0.2, 0.8, 0.2, 1) 120ms both;
      }
      @keyframes xp-unlock-pop {
        from {
          transform: scale(0.4);
          opacity: 0;
        }
      }
      .xp-unlock-pop {
        animation: xp-unlock-pop 420ms cubic-bezier(0.2, 0.9, 0.3, 1.35) 300ms
          both;
      }
      @keyframes xp-claimed-in {
        from {
          opacity: 0;
          transform: translateY(6px);
        }
      }
      .xp-claimed-in {
        animation: xp-claimed-in 280ms ease-out both;
      }
      @keyframes xp-check-in {
        from {
          transform: scale(0.3);
          opacity: 0;
        }
      }
      .xp-check-in {
        animation: xp-check-in 380ms cubic-bezier(0.2, 0.9, 0.3, 1.5) both;
      }
      .xp-legend-text {
        background: linear-gradient(90deg, #fde047, #f0abfc, #fde047);
        background-size: 200% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.8));
      }
      @media (prefers-reduced-motion: reduce) {
        [data-xp-panel] .xp-bar-filling::before,
        [data-xp-panel] .xp-bar-filling::after {
          display: none;
        }
        .xp-caption-in,
        .xp-levelup-in,
        .xp-bar-flash,
        .xp-badge-pop,
        .xp-badge-in,
        .xp-legend-pop,
        .xp-burst,
        .xp-burst-late,
        .xp-levelup-in.xp-bonus-text,
        .xp-card-wipe::before,
        .xp-card-in,
        .xp-card-in.xp-shine::after,
        .xp-card-in .xp-shine::after,
        .xp-unlock-sep,
        .xp-unlock-in,
        .xp-unlock-pop,
        .xp-claimed-in,
        .xp-check-in {
          animation: none;
        }
      }
    </style>`}renderRecap(e){let t=this.reveal;return b`
      ${this.renderLevelUp(e)} ${this.renderRewards(e)}
      ${this.renderBreakdown(e)}
      ${e.breakdown.leftEarly?this.collapsible(t===null,b`<p
                data-xp-left-early
                class="m-0 mt-3 text-xs text-amber-300"
              >
                ${a(`progression.left_early`)}
              </p>`):S}
    `}slotClass(e){return this.reveal===null?``:e?`xp-card-in`:`invisible`}slideSlotClass(e){return this.reveal===null?``:e?`xp-card-in xp-after-slide`:`invisible`}collapsible(e,t){return b`<div
      data-xp-collapsible=${e?`open`:`closed`}
      class="grid transition-[grid-template-rows] duration-300 ease-out ${e?`grid-rows-[1fr]`:`grid-rows-[0fr]`}"
    >
      <div class="min-h-0 ${e?``:`overflow-hidden`}">${t}</div>
    </div>`}renderLegendMoment(e){let t=this.reveal,n=t===null||t.legend,r=t?.celebratedLegend??!1;return this.collapsible(n,b`<div
        data-xp-legend
        data-xp-slot-hidden=${n?S:`true`}
        class="xp-shine mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-yellow-300/50 bg-gradient-to-r from-transparent via-fuchsia-500/15 to-transparent px-3 py-2.5 ${r?``:this.slideSlotClass(n)}"
      >
        <level-badge
          .level=${100}
          .prestige=${e.after.prestige}
          .legend=${!0}
          .size=${48}
        ></level-badge>
        <div class="min-w-0">
          <div
            class="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300"
          >
            ${a(`progression.legend`)}
          </div>
          <div class="text-sm text-white/80">
            ${a(`progression.legend_reached_body`,{xp:p(e.after.lifetimeXp)})}
          </div>
        </div>
        ${this.renderUnlocks(e,!0)}
      </div>`)}milestoneOf(e){return[...D(e)].reverse().find(e=>_(e.level))}renderLevelUp(e){if(u(e))return this.renderLegendMoment(e);let t=D(e).filter(e=>_(e.level));if(t.length===0)return this.renderUnlockCard(e);let n=this.reveal,r=t.filter(e=>n===null||n.level>=e.level),i=r.length>0?r[r.length-1]:t[t.length-1],o=r.length>0,s=n!==null&&i.level<=n.celebrated;return this.collapsible(o,b`<div
        data-xp-levelup
        data-xp-milestone=${i.level}
        data-xp-slot-hidden=${o?S:`true`}
        class="xp-shine mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-yellow-400/30 bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent px-3 py-2 ${s?``:this.slideSlotClass(o)}"
      >
        <span
          data-xp-level-reached=${i.level}
          class="grid h-11 w-11 shrink-0 place-items-center rounded-full shadow-[0_0_16px_rgba(250,204,21,0.55)] ${n!==null&&o&&!s?`xp-badge-pop`:``}"
        >
          <level-badge
            .level=${i.level}
            .prestige=${i.prestige}
            .size=${40}
          ></level-badge>
        </span>
        <div class="min-w-0">
          <div
            class="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300"
          >
            ${a(`progression.new_milestone`)}
          </div>
          <div class="text-lg font-black leading-tight text-white">
            ${a(`progression.level`,{level:i.level})}
          </div>
        </div>
        ${this.renderUnlocks(e,!0)}
      </div>`)}unlocks(e){return this.view.kind===`result`?(e.flares??[]).map(e=>R(e,this.catalog)):[]}loadCatalog(){this.catalogRequested||(this.catalogRequested=!0,i().then(e=>{this.catalog=h(e,!1,null)}).catch(()=>{}))}renderUnlocks(e,t){let n=this.unlocks(e);if(n.length===0)return S;let r=this.reveal,i=r===null||r.unlockShown,o=r!==null&&i,s=i?``:`invisible`;return b`${n.map(e=>b`${t?b`<span
                  aria-hidden="true"
                  class="hidden w-px self-stretch bg-yellow-400/30 sm:block ${s} ${o?`xp-unlock-sep`:``}"
                ></span>`:S}
          <div
            data-xp-unlock=${e.flare.flareName}
            data-xp-slot-hidden=${i?S:`true`}
            class="flex min-w-0 basis-full items-center justify-center gap-2.5 sm:basis-auto ${s} ${o?`xp-unlock-in`:``}"
          >
            <span
              class="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-purple-400/60 bg-white/5 p-0.5 shadow-[0_0_14px_rgba(192,132,252,0.45)] ${o?`xp-unlock-pop`:``}"
            >
              ${e.resolved===null?b`<span
                      aria-hidden="true"
                      class="text-xl text-purple-200"
                      >★</span
                    >`:b`<cosmetic-preview
                      class="block h-full w-full"
                      .resolved=${e.resolved}
                      size="card"
                    ></cosmetic-preview>`}
            </span>
            <div class="min-w-0 text-left">
              <div
                class="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-300"
              >
                ${a(`progression.unlocked`)}
              </div>
              <div
                data-xp-unlock-name
                class="truncate text-base font-black leading-tight text-white"
              >
                ${e.name}
              </div>
              <div class="truncate text-[11px] text-white/55">
                ${a(`progression.unlock_in_locker`,{type:e.typeLabel})}
              </div>
            </div>
          </div>`)}`}renderUnlockCard(e){if((e.flares??[]).length===0)return S;let t=this.reveal,n=t===null||t.unlockShown;return this.collapsible(n,b`<div
        data-xp-unlock-card
        class="xp-shine mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-purple-400/30 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent px-3 py-2"
      >
        ${this.renderUnlocks(e,!1)}
      </div>`)}renderRewards(e){let t=te(this.rewardsOf(e));if(t===null)return S;let n=this.reveal,r=n===null||n.rewardsShown,i=n===null?1:n.rewardsCount;return this.collapsible(r,b`<div
        data-xp-rewards
        data-xp-slot-hidden=${r?S:`true`}
        class="xp-shine mt-3 flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 ${this.slideSlotClass(r)}"
      >
        <div class="min-w-0 flex-[1_1_220px]">
          <div
            data-xp-rewards-heading
            class="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50"
          >
            ${a(t.headingKey,t.headingParams)}
          </div>
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
            ${t.lines.map(e=>this.renderRewardLine(e,i))}
            ${t.heldLines.map(e=>this.renderRewardLine(e,i,e.labelKey))}
          </div>
        </div>
        <div data-xp-claim-area class="ml-auto flex items-center gap-2">
          ${this.renderClaim(e,t)}
        </div>
      </div>`)}renderRewardLine(e,t,n){let r=e.currency===`soft`,i=t>=1?e.total.toLocaleString():Math.round(Number(e.total)*t).toLocaleString();return b`<div
      data-xp-reward=${e.currency}
      ?data-xp-reward-held-line=${n!==void 0}
      class="flex items-center gap-1.5"
    >
      ${r?b`<cap-icon .size=${24}></cap-icon>`:b`<plutonium-icon .size=${20}></plutonium-icon>`}
      <span
        data-xp-reward-amount
        class="text-xl font-black tabular-nums ${r?`text-amber-700`:`text-green-400`}"
        >+${i}</span
      >
      <span class="text-[13px] font-bold text-white/80"
        >${a(r?`cosmetics.soft`:`cosmetics.hard`)}</span
      >
      ${e.each===null?S:b`<span data-xp-reward-each class="text-xs text-white/45"
              >${a(`progression.rewards_each`,{count:e.count,amount:e.each.toLocaleString()})}</span
            >`}
      ${n===void 0?S:b`<span
              data-xp-reward-held
              class="text-xs font-bold text-white/60"
              >${a(n)}</span
            >`}
    </div>`}renderClaim(e,t){let n=this.claim;if(!t.claimable)return S;if(n.status===`claimed`||n.status===`idle`&&t.allClaimed){let e=n.status===`claimed`?n.to:null,r=n.status===`claimed`?n.from:null;return this.renderClaimed(t,r,e)}let r=n.status===`claiming`;return b`<div class="flex flex-col items-end gap-1">
      <span
        data-xp-claim
        class="inline-flex transition-transform duration-75 ${this.claimPressed&&!r?`scale-95`:``}"
        @pointerdown=${e=>{e.stopPropagation(),this.claimPressed=!0}}
        @pointerup=${()=>this.claimPressed=!1}
        @pointerleave=${()=>this.claimPressed=!1}
        @pointercancel=${()=>this.claimPressed=!1}
        @click=${t=>{t.stopPropagation(),this.claimRewards(e)}}
      >
        <o-button
          variant="primary"
          size="sm"
          translationKey=${r?`progression.rewards_claiming`:`account_modal.claim`}
          .disable=${r}
          .icon=${r?b`<span
                  data-xp-claim-spinner
                  aria-hidden="true"
                  class="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-white/35 border-t-white motion-reduce:animate-none"
                ></span>`:void 0}
        ></o-button>
      </span>
      ${n.status===`idle`&&n.failed?b`<span
              data-xp-claim-error
              role="alert"
              class="text-xs text-red-300"
              >${a(`account_modal.claim_failed`)}</span
            >`:S}
    </div>`}renderClaimed(e,t,n){let r=this.balanceCount,i=e=>n===null?``:Math.round((t?.[e]??n[e])+(n[e]-(t?.[e]??n[e]))*r).toLocaleString(),o=e.lines.some(e=>e.currency===`hard`);return b`<div
      data-xp-claimed
      class="xp-claimed-in flex flex-col items-end gap-0.5"
    >
      <span
        class="inline-flex items-center gap-1.5 text-sm font-extrabold text-emerald-400"
      >
        <svg
          class="xp-check-in h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12.5l4.5 4.5L19 7.5"></path>
        </svg>
        ${a(`progression.rewards_claimed`)}
      </span>
      ${n===null?S:b`<span
              data-xp-balance
              class="text-[11px] tabular-nums text-white/50"
              >${o?a(`progression.rewards_balance`,{caps:i(`soft`),plutonium:i(`hard`)}):a(`progression.rewards_balance_caps`,{caps:i(`soft`)})}</span
            >`}
    </div>`}resetClaim(){this.claimToken++,this.clearClaimTimers(),this.claim={status:`idle`,failed:!1},this.claimPressed=!1,this.balanceCount=1,this.claimedIds=new Set,this.refusedHolds=new Map}rewardsOf(e){return this.view.kind===`result`?N(e.rewards??[],this.refusedHolds):[]}clearClaimTimers(){for(let e of this.claimTimers)clearTimeout(e);this.claimTimers=[]}async claimRewards(e){if(this.claim.status!==`idle`)return;let t=this.claimToken;this.claim={status:`claiming`};let n=await F(this.rewardsOf(e),this.claimedIds);if(t!==this.claimToken)return;for(let e of n.claimedIds)this.claimedIds.add(e);if(n.held.length>0){let e=new Map(this.refusedHolds);for(let{id:t,held:r}of n.held)e.set(t,r);this.refusedHolds=e}if(!n.ok){this.claim={status:`idle`,failed:!0};return}let r=await c();if(t!==this.claimToken)return;let i=n.currency??(r===!1?null:r.player.currency??null),a=i===null||n.currency===null?i:{soft:i.soft-n.credited.soft,hard:i.hard-n.credited.hard};this.claim={status:`claimed`,from:a,to:i},this.countBalance(),r!==!1&&this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:{currency:i,rewards:r.player.rewards??[]},bubbles:!0,composed:!0}))}countBalance(){if(this.clearClaimTimers(),he()){this.balanceCount=1;return}this.balanceCount=0;let e=Math.max(2,Math.round(Y/30));for(let t=1;t<=e;t++)this.claimTimers.push(setTimeout(()=>this.balanceCount=me(t/e),J+Y*t/e))}renderXpCard(e,t,n,r){return b`<div
      class="w-[calc(50%-0.25rem)] min-w-0 sm:w-[calc(25%-0.375rem)] ${this.slotClass(r.shown)}"
      data-xp-slot-hidden=${r.shown?S:`true`}
    >
      <div
        data-xp-card
        title=${e}
        class="xp-shine h-full rounded-xl border bg-white/5 px-2 py-2.5 text-center ${n}"
        style=${r.style??S}
      >
        <div
          data-xp-line=${r.line??S}
          class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
        >
          ${e}
        </div>
        <div
          data-xp-card-value
          class="mt-1 truncate text-lg font-black leading-none tabular-nums"
        >
          ${t}
        </div>
      </div>
    </div>`}renderBonuses(e){let t=d(e.breakdown);if(t.length===0)return S;let n=this.reveal;return this.collapsible(n===null||n.multipliersShown>0,b`<div
        data-xp-bonuses
        class="mt-1 flex min-h-5 flex-wrap items-center justify-center gap-x-5"
      >
        ${t.map((e,t)=>{let r=n===null||t<n.multipliersShown,i=this.accentOf(e);return b`<span
            data-xp-multiplier=${e.key}
            data-xp-tier=${e.key===`subscriber`?E(e.permille)?.tier??S:S}
            data-xp-slot-hidden=${r?S:`true`}
            style=${i===null?S:`--accent-a: ${i[0]}; --accent-b: ${i[1]}`}
            class="inline-block text-sm font-bold uppercase italic tracking-wide ${e.permille>1e3?`xp-bonus-line`:`text-sky-300`} ${this.slideSlotClass(r)}"
            >${y(e.key,e.permille)}</span
          >`})}
      </div>`)}renderBreakdown(e){let t=n(e.breakdown);if(t.length===0)return b``;let r=this.reveal,i=r?.lineValues??Q(e),o=r?.applying??null;return b`<div
      data-xp-breakdown
      class="mt-3 flex flex-wrap justify-center gap-2"
    >
      ${t.map((e,n)=>{let s=r===null||n<r.linesShown,c=i[n]>e.amount?`xp-card-boosted`:i[n]<e.amount?`xp-card-cut`:``,l=o!==null&&s,u=l?`xp-card-wipe ${o===`cut`?`xp-wipe-cut`:``}`:``,d=l?`--wipe-delay: ${Math.round(K(n,t.length)*W)}ms; --wipe-ms: ${Math.round(G*W)}ms`:void 0;return this.renderXpCard(a(g[e.key]),a(`progression.xp_total`,{xp:p(i[n])}),`text-yellow-300 border-yellow-400/20 ${c} ${u}`,{line:e.key,shown:s,style:d})})}
    </div>`}render(){let e=this.view;switch(e.kind){case`hidden`:return S;case`signed_out`:return this.renderNote(`progression.sign_in_to_earn`,`signed_out`);case`awaiting_end`:return this.renderNote(`progression.awaiting_end`,`awaiting_end`);case`provisional`:return e.provisional.response.eligible?this.renderFull(e.provisional.response):this.renderIneligible(e.provisional.response.reason,`provisional_ineligible`);case`calculating`:return this.renderCalculating();case`result`:return e.data.eligible?this.renderFull(e.data):this.renderIneligible(e.data.reason,`ineligible`)}}};O([e({attribute:!1})],$.prototype,`view`,void 0),O([e({attribute:!1})],$.prototype,`onScreen`,void 0),O([e({attribute:!1})],$.prototype,`gameType`,void 0),O([l()],$.prototype,`reveal`,void 0),O([l()],$.prototype,`barAnimate`,void 0),O([l()],$.prototype,`barDurationMs`,void 0),O([l()],$.prototype,`claim`,void 0),O([l()],$.prototype,`claimPressed`,void 0),O([l()],$.prototype,`balanceCount`,void 0),O([l()],$.prototype,`catalog`,void 0),$=O([m(`game-xp-panel`)],$);export{$ as GameXpPanel};
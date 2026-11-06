import{$i as e,C as t,E as n,Gn as r,Ho as i,Ji as a,Kn as o,Nr as s,S as c,So as l,T as u,Wi as d,Xi as f,Yi as p,Zi as m,_ as h,a as g,er as _,f as v,g as y,h as ee,hi as b,na as x,o as S,p as te,rr as C,s as w,w as T,y as E}from"./index-BAYE2tsk.js";import"./CapIcon-C7a5g6qr.js";import"./PlutoniumIcon-CuaVhViV.js";import{t as D}from"./RewardClaims-Cu-Hi2fs.js";import{c as O,l as k}from"./CosmeticPreview-C4akzCVB.js";import{t as A}from"./keyed-BuLSqinQ.js";function j(e){return!e.claimed&&!l(e)}function M(e,t){return t.size===0?e:e.map(e=>{let n=t.get(e.id);return n===void 0||e.claimed?e:{...e,held:n}})}function N(e){let n=[];for(let r of[`soft`,`hard`]){let i=e.filter(e=>e.currencyType===r);if(i.length===0)continue;let a=i.map(e=>t(e.amount)),o=a.reduce((e,t)=>e+t,0n),s=a.length>1&&a.every(e=>e===a[0])?a[0]:null;n.push({currency:r,total:o,count:i.length,each:s})}return n}function ne(e){if(e.length===0)return null;let t=[...new Set(e.map(e=>e.level))].sort((e,t)=>e-t),n,r;t.length>1?(n=`progression.rewards_levels`,r={from:t[0],to:t[t.length-1]}):(n=e.length>1?`progression.rewards_level_many`:`progression.rewards_level_one`,r={level:t[0]});let i=e.filter(e=>!j(e)),a=e.filter(j),o=a.filter(e=>e.held===`trust`),s=a.filter(e=>e.held!==`trust`),c=[...N(o).map(e=>({...e,labelKey:`account_modal.reward_held_trust`})),...N(s).map(e=>({...e,labelKey:`account_modal.reward_held_other_info`}))];return{headingKey:n,headingParams:r,lines:N(i),heldLines:c,claimable:i.length>0,allClaimed:i.every(e=>e.claimed)}}async function P(e,n=new Set){let r=await D(e.filter(e=>!e.claimed&&!n.has(e.id)&&!j(e)));if(r.failed)return{ok:!1,claimedIds:r.claimedIds,held:r.held};let i={soft:0,hard:0};for(let n of e)r.creditedIds.includes(n.id)&&(i[n.currencyType]+=Number(t(n.amount)));return{ok:!0,currency:r.currency,credited:i,claimedIds:r.claimedIds,held:r.held}}var F={pattern:`territory_patterns.pattern`,skin:`territory_patterns.pattern`,flag:`flags`,crown:`crowns`,effect:`effects`},I={pattern:`cosmetics.type_skin`,skin:`cosmetics.type_skin`,flag:`cosmetics.type_flag`,crown:`cosmetics.type_crown`};function L(e,t){let[n=``,r=``,i]=e.flareName.split(`:`),a=[`pattern`,`flag`,`skin`,`crown`,`effect`].includes(n)?o({type:n,name:r,colorPalette:i},t)??null:null;if(a!==null)return{flare:e,resolved:a,name:O(a),typeLabel:k(a)};let s=F[n],c=I[n];return{flare:e,resolved:null,name:s!==void 0&&r!==``?C(s,r):e.flareName,typeLabel:d(c??`progression.unlocked_cosmetic`)}}var R={win_added:`progression.reconcile_win`,win_removed:`progression.reconcile_win_removed`,feats:`progression.reconcile_feats`,daily_cap:`progression.reconcile_daily_cap`,multiplier:`progression.reconcile_multiplier`,reconnect:`progression.reconcile_reconnect`,other:`progression.reconcile_other`},z=`progression.reconcile_team_win`,B=10,V=300,re=250,ie=450,ae=140,H=300,oe=1100,se=1900,ce=450,U=1e3,W=.4;function G(e,t){return t>1?e*(1-W)/(t-1):0}var le=400,ue=900,de=700,fe=300,pe=900,me=360,K=500,q=120,J=600,Y=e=>1-(1-e)**3,X=-1;function he(){try{return window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}function ge(e,t,n){return e>=100?100:e+Math.min(.999999,h(t,n))}function Z(e){return ge(e.after.level,e.after.xpInLevel,e.after.xpForNext)}function Q(e){return te(n(e.breakdown).map(e=>e.amount),e.breakdown.total)}var $=class extends m{constructor(...e){super(...e),this.view={kind:`hidden`},this.onScreen=!0,this.gameType=null,this.reveal=null,this.barAnimate=!1,this.barDurationMs=ie,this.revealedProvisional=null,this.animationToken=0,this.announcedLegend=null,this.timers=[],this.settledView=null,this.claim={status:`idle`,failed:!1},this.claimPressed=!1,this.balanceCount=1,this.claimedIds=new Set,this.refusedHolds=new Map,this.claimToken=0,this.claimTimers=[],this.catalog=[],this.catalogRequested=!1}createRenderRoot(){return this}disconnectedCallback(){this.skipReveal(),this.clearClaimTimers(),this.balanceCount=1,super.disconnectedCallback()}willUpdate(e){if(e.has(`view`)){this.resetClaim();let t=this.view;t.kind===`result`&&t.data.eligible&&(t.data.flares??[]).length>0&&this.loadCatalog();let n=e.get(`view`);if(t.kind===`provisional`&&n?.kind===`provisional`&&n.provisional===t.provisional)return;if(!this.onScreen)this.skipReveal();else if(t.kind===`result`&&t.data.eligible){let e=t.reconciled,n=e?.provisional.response;if(e!==void 0&&n?.eligible&&this.revealedProvisional===e.provisional){if(e.outcome.matched)return;if(t.data.breakdown.total>n.breakdown.total){let e=n.before.prestige===t.data.before.prestige,r=this.reveal;this.startReveal(t.data,{kind:`celebrate`,from:e?r?.position??Z(n):0,countFrom:r?.counted??n.breakdown.total,celebrated:e?r?.level??n.after.level:0,celebratedLegend:e&&(r?.legend??n.after.legend)})}else this.skipReveal()}else this.startReveal(t.data,{kind:`full`})}else t.kind===`provisional`&&t.provisional.response.eligible?(this.revealedProvisional=t.provisional,this.startReveal(t.provisional.response,{kind:`full`})):this.skipReveal()}else e.has(`onScreen`)&&!this.onScreen&&(this.reveal!==null&&this.view.kind===`provisional`&&(this.revealedProvisional=null),this.skipReveal())}clearTimers(){this.animationToken++;for(let e of this.timers)clearTimeout(e);this.timers=[]}later(e,t){this.timers.push(setTimeout(t,e))}startReveal(e,t){if(this.clearTimers(),he()){this.reveal=null;return}let r=this.animationToken,i=(e,t)=>this.later(e,()=>{r===this.animationToken&&this.reveal!==null&&t()}),a=e=>{this.reveal!==null&&(this.reveal={...this.reveal,...e})},o=0,s=(e,t)=>{let n=++o;i(e,()=>a({step:n,caption:t,levelUp:null}))},{breakdown:l}=e,d=n(l),f=d.map(e=>e.amount),p=u(l),m=ge(e.before.level,e.before.xpInLevel,e.before.xpForNext),h=Z(e),g=t.kind===`celebrate`,_=g?Math.min(h,Math.max(m,t.from)):m;if(g&&_>=h&&t.countFrom===e.breakdown.total){this.reveal=null;return}let v=l.total,y=Math.max(1,l.subtotal),ee=v<y?v/y:1,b=e=>v<=0?m:m+(h-m)*e/v,x=E(e),S=x.length>0?x[x.length-1].level:null,C=this.view.kind===`result`,w=C?ne(e.rewards??[]):null,T=C&&(e.flares??[]).length>0,D=c(e)||this.milestoneOf(e)!==void 0,O=e=>{if(T&&i(e+de,()=>a({unlockShown:!0})),w===null)return;let t=e+(T||D?pe:fe);i(t,()=>a({rewardsShown:!0}));let n=t+me,r=Math.max(2,Math.round(K/40));for(let e=1;e<=r;e++)i(n+K*e/r,()=>a({rewardsCount:Y(e/r)}))};this.barAnimate=!1,this.reveal={step:0,caption:g?{kind:`heading`}:null,position:_,level:Math.min(100,Math.floor(_)),levelUp:null,legend:e.after.legend&&(!c(e)||g&&t.celebratedLegend),counted:g?t.countFrom:0,xpText:g?`none`:`before`,linesShown:g?d.length:0,multipliersShown:g?p.length:0,lineValues:g?Q(e):[...f],applying:null,rewardsShown:!1,rewardsCount:0,unlockShown:!1,celebrated:g?t.celebrated:0,celebratedLegend:g&&t.celebratedLegend};let k=_,A=g?Math.max(e.before.level,t.celebrated):e.before.level,j=E(e).map(e=>e.level).filter(e=>e>A&&e<=100).sort((e,t)=>e-t);g&&S!==null&&S<=A&&O(V);let M=(t,n,r,s,c=!1,l=ie)=>{let u=k,d=(e,t,n,r)=>{let o=Math.max(2,Math.round(t/40));for(let c=1;c<=o;c++){let l=n+(r-n)*c/o;i(e+t*c/o,()=>a(s(l)))}};if(n<=u)return c?(d(t,l,0,1),t+l):t;k=n;let f=[];for(;j.length>0&&j[0]<=n;)f.push(j.shift());let p=n-u,m=(e,t)=>Math.max(ae,Math.round(l*(t-e)/p)),h=u;for(let n of f){let s=m(h,n);d(t,s,(h-u)/p,(n-u)/p),i(t,()=>{this.barDurationMs=s,this.barAnimate=!0,a({position:n-1e-6,xpText:`none`})}),t+=s;let c=n,l=c>=100&&e.after.legend;i(t,()=>{if(this.barAnimate=!1,l&&this.announceLegend(e)){this.skipReveal();return}a({level:Math.min(100,c),levelUp:c,legend:l})}),c===S&&O(t),t+=l?se:oe;let f=o+1;o=f,i(t,()=>{this.barAnimate=!1,a({position:c,levelUp:null,step:f,caption:r})}),t+=60,h=n}if(n>h){let e=m(h,n);d(t,e,(h-u)/p,1),i(t,()=>{this.barDurationMs=e,this.barAnimate=!0,a({position:n})}),t+=e}return t},N=V,P=0,F=g?t.countFrom:0;(g?[]:d).forEach((e,t)=>{let n={kind:`line`,key:e.key,amount:e.amount};s(N,n),N+=re,P=Math.min(v,P+e.amount*ee);let r=F;F+=e.amount;let o=F;N=M(N,b(P),n,e=>({counted:Math.round(r+(o-r)*e)})),i(N,()=>a({counted:o,linesShown:t+1})),N+=H});let I=[...f],L=1;(g?[]:p).forEach((e,t)=>{let n={kind:`multiplier`,key:e.key,permille:e.permille};s(N,n),N+=ce,L*=e.permille/1e3;let r=t===p.length-1?v:Math.round(y*L),o=I,c=te(f,r);I=c;let l=F;F=r;let u=e.permille>1e3?`boost`:`cut`;i(N,()=>a({applying:u})),P=Math.max(P,Math.min(v,r));let d=f.length,m=M(N,b(P),n,e=>({counted:Math.round(l+(r-l)*e),lineValues:o.map((t,n)=>{let r=Math.min(1,Math.max(0,(e-G(n,d))/W));return Math.round(t+(c[n]-t)*r)})}),!0,U);N=Math.max(m,N+U),i(N,()=>a({counted:r,lineValues:c,multipliersShown:t+1,applying:null})),N+=le});let R=p.length>0&&!g?{kind:`multiplier`,key:p[p.length-1].key,permille:p[p.length-1].permille}:null,z=F;N=M(N,h,R??{kind:`heading`},e=>({counted:Math.round(z+(v-z)*e)}),g&&z!==v);let B=Q(e);i(N,()=>a({counted:v,lineValues:B,xpText:`after`})),N+=H;let q=this.payoffCaption(e);q!==null&&(i(N,()=>a({step:X,caption:q,levelUp:null})),N+=ue),i(N,()=>{this.barAnimate=!1,this.reveal=null})}announceSettled(){let e=this.view;e.kind!==`result`||this.reveal!==null||this.settledView!==e&&(this.settledView=e,this.dispatchEvent(new CustomEvent(`xp-reveal-settled`,{detail:e,bubbles:!0})))}announceLegend(e){if(this.announcedLegend===e)return!1;this.announcedLegend=e;let t=new CustomEvent(`xp-legend`,{detail:e,bubbles:!0,composed:!0,cancelable:!0});return!this.dispatchEvent(t)}updated(e){super.updated(e),this.announceSettled();let t=this.view;t.kind===`result`&&t.data.eligible&&this.reveal===null&&this.onScreen&&c(t.data)&&this.announceLegend(t.data)}skipReveal(){this.clearTimers(),this.barAnimate=!1,this.reveal=null}payoffCaption(e){let t=this.view;if(t.kind===`result`&&t.reconciled?.provisional===this.revealedProvisional&&this.adjustedLevel()!==null)return null;if(c(e))return{kind:`legend`};let n=E(e);return n.length===0?null:{kind:`level_up`,level:n[n.length-1].level}}accentOf(e){return e.key===`subscriber`?T(e.permille)?.colors??null:null}panelAccent(e){let t=u(e.breakdown),n=this.reveal,r=n!==null&&n.applying!==null?t[n.multipliersShown]:t.find(e=>this.accentOf(e)!==null),i=r===void 0?null:this.accentOf(r);return i===null?void 0:`--accent-a: ${i[0]}; --accent-b: ${i[1]}`}frame(t,n,r){let i=this.reveal!==null;return x`<section
      data-xp-panel
      data-xp-state=${n}
      data-xp-revealing=${i?`true`:e}
      style=${r??e}
      class="relative mb-4 rounded-lg bg-black/30 p-3 text-left text-white ${i?`cursor-pointer`:``}"
      aria-live="polite"
      aria-busy=${i?`true`:`false`}
      title=${i?d(`progression.tap_to_skip`):e}
      @click=${()=>this.skipReveal()}
    >
      ${i?x`<button
              type="button"
              data-xp-skip
              class="sr-only focus:not-sr-only focus:absolute focus:right-2 focus:top-2 focus:z-10 focus:rounded-sm focus:bg-black/80 focus:px-2 focus:py-1 focus:text-xs focus:font-bold focus:text-white"
              @click=${e=>{e.stopPropagation(),this.skipReveal()}}
            >
              ${d(`progression.skip_reveal`)}
            </button>`:e}
      ${t}
    </section>`}renderNote(e,t){return this.frame(x`<p class="m-0 text-sm text-white/80">${d(e)}</p>`,t)}renderIneligible(e,t){return this.frame(x`${this.renderStatus()}
        <p class="m-0 text-sm text-white/80">
          ${d(ee(e,this.gameType))}
        </p>
        ${this.renderReconcileNotes()}`,t)}renderCalculating(){return this.frame(x`<div class="flex items-center gap-2 text-sm text-white/80">
        <span
          class="w-4 h-4 shrink-0 border-2 border-white/30 border-t-white/80 rounded-full animate-spin motion-reduce:animate-none"
          aria-hidden="true"
        ></span>
        <span>${d(`progression.calculating`)}</span>
      </div>`,`calculating`)}captionContent(e){switch(e.kind){case`line`:return x`${d(v[e.key])}
          <span class="text-yellow-300"
            >${d(`progression.xp_total`,{xp:g(e.amount)})}</span
          >`;case`multiplier`:return x`${S(e.key,e.permille)}`;case`heading`:return x`${d(`progression.xp_heading`)}`;case`level_up`:return x`<span class="text-yellow-300"
          >${d(`progression.level_reached`,{level:e.level})}</span
        >`;case`legend`:return x`<span class="text-yellow-300"
          >${d(`progression.legend_reached_title`)}</span
        >`}}renderCaption(t){let n=this.reveal,r=n?.levelUp??null,i=e,a;if(r!==null&&n?.legend)a=`legend`,i=x`<div
        class="xp-levelup-in xp-legend-text text-center text-2xl font-black uppercase italic tracking-wide sm:text-3xl"
        data-xp-caption-levelup=${r}
        data-xp-caption-legend
      >
        ${d(`progression.legend_reached_title`)}
      </div>`;else if(r!==null)a=`lvl-${r}`,i=x`<div
        class="xp-levelup-in text-center text-2xl font-black uppercase italic tracking-wide text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] sm:text-3xl"
        data-xp-caption-levelup=${r}
      >
        ${d(`progression.level_reached`,{level:r})}
      </div>`;else{a=`s-${n?.step??X}`;let e=n===null?this.payoffCaption(t)??{kind:`heading`}:n.caption;e?.kind===`multiplier`?i=x`<div
          class="xp-levelup-in xp-bonus-text ${e.permille>1e3?``:`xp-bonus-text-cut`} text-center text-xl font-black uppercase italic tracking-wide sm:text-2xl"
          data-xp-caption-step=${n?.step??X}
        >
          ${this.captionContent(e)}
        </div>`:e!==null&&(i=x`<div
          class="xp-caption-in text-center text-lg font-black uppercase italic tracking-wide sm:text-xl"
          data-xp-caption-step=${n?.step??X}
        >
          ${this.captionContent(e)}
        </div>`)}return x`<div
      class="flex h-9 items-end justify-center overflow-visible"
      data-xp-caption
    >
      ${A(a,i)}
    </div>`}renderSegmentedBar(t,n,r){return x`<div
      data-xp-bar
      class="relative h-3 w-full overflow-hidden rounded-sm bg-white/15 ${n?`xp-bar-flash`:``}"
      role="progressbar"
      aria-label=${d(`progression.xp_bar_label`)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round(t)}
      aria-valuetext=${r===``?e:r}
    >
      <div
        data-xp-bar-fill
        class="h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)] ${this.barAnimate?`xp-bar-filling transition-[width] ease-linear`:``}"
        style="width: ${t}%; transition-duration: ${this.barDurationMs}ms"
      ></div>
      ${Array.from({length:B-1},(e,t)=>x`<span
            aria-hidden="true"
            class="absolute top-0 h-full w-[3px] -translate-x-1/2 bg-zinc-900"
            style="left: ${(t+1)*100/B}%"
          ></span>`)}
    </div>`}renderFull(t){let{after:n}=t,r=this.reveal,i=this.view.kind===`provisional`,a=r?.position??Z(t),o=r?.level??Math.min(100,Math.floor(a)),s=r===null?n.legend:r.legend,c=a>=100?100:Math.max(0,(a-Math.floor(a))*100),l=r?.levelUp??null,u=r===null||r.xpText===`after`?w(n.xpInLevel,n.xpForNext):r.xpText===`before`?w(t.before.xpInLevel,t.before.xpForNext):``,f=r?.counted??t.breakdown.total,p=r?.applying??null,m=r===null?n.prestige:t.before.prestige,h=l===null?o:l-1,_=l??(o<100?o+1:null),v=(e,t)=>x`<level-badge
        .level=${e}
        .prestige=${m}
        .legend=${t}
        .size=${40}
      ></level-badge>`,y=r===null?``:`xp-badge-in`;return this.frame(x`
        ${this.renderStyles()} ${this.renderStatus()}
        ${this.renderCaption(t)}
        <!-- Every box here is a fixed size, so nothing moves while the
             numbers and the level change. -->
        <div class="mt-1 flex items-start gap-3">
          <!-- The level the player is on. The same width as the next level's
               badge on the right, so the bar, and the counter under it, are
               centred in the panel like the caption above. -->
          <div class="grid h-10 w-10 shrink-0 place-items-center">
            ${A(`${h}-${s&&h>=100}`,x`<span
                data-xp-current-badge
                data-level=${h}
                class="inline-block ${y}"
                >${v(h,s&&h>=100)}</span
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
                class="text-sm font-bold tabular-nums transition-colors ${p===`boost`?`xp-accent-text`:p===`cut`?`text-sky-300`:`text-white/90`}"
              >
                ${d(`progression.xp_total`,{xp:g(f)})}
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
            ${l===null?e:A(`${l}-${s}`,x`<span
                        aria-hidden="true"
                        class="xp-burst pointer-events-none absolute inset-0 rounded-full border-2 border-yellow-200 shadow-[0_0_12px_rgba(250,204,21,0.9)]"
                      ></span
                      ><span
                        aria-hidden="true"
                        class="xp-burst-late pointer-events-none absolute inset-0 rounded-full border border-white/80"
                      ></span>`)}
            ${_===null?e:A(`${_}-${l!==null}-${s}`,x`<span
                      data-xp-next-badge
                      data-level=${_}
                      class="relative inline-block ${l===null?`opacity-60 ${y}`:s?`xp-legend-pop`:`xp-badge-pop`}"
                      >${v(_,l!==null&&s&&_>=100)}</span
                    >`)}
          </div>
        </div>
        ${this.renderBonuses(t)}
        <div data-xp-recap>${this.renderRecap(t)}</div>
        ${this.renderReconcileNotes()}
      `,i?`provisional`:`result`,this.panelAccent(t))}renderStatus(){let t=this.view;return t.kind===`provisional`?x`<div
        data-xp-provisional
        class="mb-1 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-300"
      >
        ${t.confirming?x`<span
                data-xp-confirming
                class="h-3 w-3 shrink-0 animate-spin rounded-full border-2 border-amber-300/30 border-t-amber-300 motion-reduce:animate-none"
                aria-hidden="true"
              ></span>`:e}
        <span
          >${d(t.confirming?`progression.provisional_confirming`:`progression.provisional_label`)}</span
        >
      </div>`:t.kind===`result`&&t.reconciled?.outcome.matched?x`<div
        data-xp-confirmed
        class="mb-1 text-center text-[11px] font-bold uppercase tracking-wider text-green-400"
      >
        ${d(`progression.xp_confirmed`)}
      </div>`:e}adjustedLevel(){let e=this.view;if(e.kind!==`result`||e.reconciled===void 0)return null;let t=e.reconciled.provisional.response;return!t.eligible||E(t).length===0?null:e.data.eligible?e.data.after.prestige===t.after.prestige&&e.data.after.level<t.after.level?e.data.after.level:null:t.before.level}renderReconcileNotes(){let t=this.view,n=[];if(t.kind===`provisional`){if(!t.provisional.response.eligible)return e;t.provisional.teamWinPending&&n.push({key:`progression.provisional_team_win_pending`}),t.provisional.featsPending&&n.push({key:`progression.provisional_feats_pending`})}else if(t.kind===`result`&&t.reconciled!==void 0){let{outcome:r}=t.reconciled;if(r.matched)return e;r.provisionalTotal!==null&&n.push({key:`progression.provisional_was`,params:{xp:g(r.provisionalTotal)}});let a=t.reconciled.provisional.inputs.gameMode===i.Team;for(let e of r.differences){let r=e===`win_added`&&a?z:R[e];r===void 0||!t.data.eligible&&e===t.data.reason||n.push({key:r})}let o=this.adjustedLevel();o!==null&&n.push({key:`progression.reconcile_level_adjusted`,params:{level:String(o)}})}else return e;return n.length===0?e:x`<div data-xp-reconcile class="mt-3 space-y-0.5">
      ${n.map(e=>x`<p
            data-xp-note=${e.key}
            class="m-0 text-center text-xs text-white/60"
          >
            ${d(e.key,e.params)}
          </p>`)}
    </div>`}renderStyles(){return x`<style>
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
    </style>`}renderRecap(t){let n=this.reveal;return x`
      ${this.renderLevelUp(t)} ${this.renderRewards(t)}
      ${this.renderBreakdown(t)}
      ${t.breakdown.leftEarly?this.collapsible(n===null,x`<p
                data-xp-left-early
                class="m-0 mt-3 text-xs text-amber-300"
              >
                ${d(`progression.left_early`)}
              </p>`):e}
    `}slotClass(e){return this.reveal===null?``:e?`xp-card-in`:`invisible`}slideSlotClass(e){return this.reveal===null?``:e?`xp-card-in xp-after-slide`:`invisible`}collapsible(e,t){return x`<div
      data-xp-collapsible=${e?`open`:`closed`}
      class="grid transition-[grid-template-rows] duration-300 ease-out ${e?`grid-rows-[1fr]`:`grid-rows-[0fr]`}"
    >
      <div class="min-h-0 ${e?``:`overflow-hidden`}">${t}</div>
    </div>`}renderLegendMoment(t){let n=this.reveal,r=n===null||n.legend,i=n?.celebratedLegend??!1;return this.collapsible(r,x`<div
        data-xp-legend
        data-xp-slot-hidden=${r?e:`true`}
        class="xp-shine mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-yellow-300/50 bg-gradient-to-r from-transparent via-fuchsia-500/15 to-transparent px-3 py-2.5 ${i?``:this.slideSlotClass(r)}"
      >
        <level-badge
          .level=${100}
          .prestige=${t.after.prestige}
          .legend=${!0}
          .size=${48}
        ></level-badge>
        <div class="min-w-0">
          <div
            class="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300"
          >
            ${d(`progression.legend`)}
          </div>
          <div class="text-sm text-white/80">
            ${d(`progression.legend_reached_body`,{xp:g(t.after.lifetimeXp)})}
          </div>
        </div>
        ${this.renderUnlocks(t,!0)}
      </div>`)}milestoneOf(e){return[...E(e)].reverse().find(e=>y(e.level))}renderLevelUp(t){if(c(t))return this.renderLegendMoment(t);let n=E(t).filter(e=>y(e.level));if(n.length===0)return this.renderUnlockCard(t);let r=this.reveal,i=n.filter(e=>r===null||r.level>=e.level),a=i.length>0?i[i.length-1]:n[n.length-1],o=i.length>0,s=r!==null&&a.level<=r.celebrated;return this.collapsible(o,x`<div
        data-xp-levelup
        data-xp-milestone=${a.level}
        data-xp-slot-hidden=${o?e:`true`}
        class="xp-shine mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-yellow-400/30 bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent px-3 py-2 ${s?``:this.slideSlotClass(o)}"
      >
        <span
          data-xp-level-reached=${a.level}
          class="grid h-11 w-11 shrink-0 place-items-center rounded-full shadow-[0_0_16px_rgba(250,204,21,0.55)] ${r!==null&&o&&!s?`xp-badge-pop`:``}"
        >
          <level-badge
            .level=${a.level}
            .prestige=${a.prestige}
            .size=${40}
          ></level-badge>
        </span>
        <div class="min-w-0">
          <div
            class="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300"
          >
            ${d(`progression.new_milestone`)}
          </div>
          <div class="text-lg font-black leading-tight text-white">
            ${d(`progression.level`,{level:a.level})}
          </div>
        </div>
        ${this.renderUnlocks(t,!0)}
      </div>`)}unlocks(e){return this.view.kind===`result`?(e.flares??[]).map(e=>L(e,this.catalog)):[]}loadCatalog(){this.catalogRequested||(this.catalogRequested=!0,r().then(e=>{this.catalog=_(e,!1,null)}).catch(()=>{}))}renderUnlocks(t,n){let r=this.unlocks(t);if(r.length===0)return e;let i=this.reveal,a=i===null||i.unlockShown,o=i!==null&&a,s=a?``:`invisible`;return x`${r.map(t=>x`${n?x`<span
                  aria-hidden="true"
                  class="hidden w-px self-stretch bg-yellow-400/30 sm:block ${s} ${o?`xp-unlock-sep`:``}"
                ></span>`:e}
          <div
            data-xp-unlock=${t.flare.flareName}
            data-xp-slot-hidden=${a?e:`true`}
            class="flex min-w-0 basis-full items-center justify-center gap-2.5 sm:basis-auto ${s} ${o?`xp-unlock-in`:``}"
          >
            <span
              class="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-purple-400/60 bg-white/5 p-0.5 shadow-[0_0_14px_rgba(192,132,252,0.45)] ${o?`xp-unlock-pop`:``}"
            >
              ${t.resolved===null?x`<span
                      aria-hidden="true"
                      class="text-xl text-purple-200"
                      >★</span
                    >`:x`<cosmetic-preview
                      class="block h-full w-full"
                      .resolved=${t.resolved}
                      size="card"
                    ></cosmetic-preview>`}
            </span>
            <div class="min-w-0 text-left">
              <div
                class="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-300"
              >
                ${d(`progression.unlocked`)}
              </div>
              <div
                data-xp-unlock-name
                class="truncate text-base font-black leading-tight text-white"
              >
                ${t.name}
              </div>
              <div class="truncate text-[11px] text-white/55">
                ${d(`progression.unlock_in_locker`,{type:t.typeLabel})}
              </div>
            </div>
          </div>`)}`}renderUnlockCard(t){if((t.flares??[]).length===0)return e;let n=this.reveal,r=n===null||n.unlockShown;return this.collapsible(r,x`<div
        data-xp-unlock-card
        class="xp-shine mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-purple-400/30 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent px-3 py-2"
      >
        ${this.renderUnlocks(t,!1)}
      </div>`)}renderRewards(t){let n=ne(this.rewardsOf(t));if(n===null)return e;let r=this.reveal,i=r===null||r.rewardsShown,a=r===null?1:r.rewardsCount;return this.collapsible(i,x`<div
        data-xp-rewards
        data-xp-slot-hidden=${i?e:`true`}
        class="xp-shine mt-3 flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 ${this.slideSlotClass(i)}"
      >
        <div class="min-w-0 flex-[1_1_220px]">
          <div
            data-xp-rewards-heading
            class="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50"
          >
            ${d(n.headingKey,n.headingParams)}
          </div>
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
            ${n.lines.map(e=>this.renderRewardLine(e,a))}
            ${n.heldLines.map(e=>this.renderRewardLine(e,a,e.labelKey))}
          </div>
        </div>
        <div data-xp-claim-area class="ml-auto flex items-center gap-2">
          ${this.renderClaim(t,n)}
        </div>
      </div>`)}renderRewardLine(t,n,r){let i=t.currency===`soft`,a=n>=1?t.total.toLocaleString():Math.round(Number(t.total)*n).toLocaleString();return x`<div
      data-xp-reward=${t.currency}
      ?data-xp-reward-held-line=${r!==void 0}
      class="flex items-center gap-1.5"
    >
      ${i?x`<cap-icon .size=${24}></cap-icon>`:x`<plutonium-icon .size=${20}></plutonium-icon>`}
      <span
        data-xp-reward-amount
        class="text-xl font-black tabular-nums ${i?`text-amber-700`:`text-green-400`}"
        >+${a}</span
      >
      <span class="text-[13px] font-bold text-white/80"
        >${d(i?`cosmetics.soft`:`cosmetics.hard`)}</span
      >
      ${t.each===null?e:x`<span data-xp-reward-each class="text-xs text-white/45"
              >${d(`progression.rewards_each`,{count:t.count,amount:t.each.toLocaleString()})}</span
            >`}
      ${r===void 0?e:x`<span
              data-xp-reward-held
              class="text-xs font-bold text-white/60"
              >${d(r)}</span
            >`}
    </div>`}renderClaim(t,n){let r=this.claim;if(!n.claimable)return e;if(r.status===`claimed`||r.status===`idle`&&n.allClaimed){let e=r.status===`claimed`?r.to:null,t=r.status===`claimed`?r.from:null;return this.renderClaimed(n,t,e)}let i=r.status===`claiming`;return x`<div class="flex flex-col items-end gap-1">
      <span
        data-xp-claim
        class="inline-flex transition-transform duration-75 ${this.claimPressed&&!i?`scale-95`:``}"
        @pointerdown=${e=>{e.stopPropagation(),this.claimPressed=!0}}
        @pointerup=${()=>this.claimPressed=!1}
        @pointerleave=${()=>this.claimPressed=!1}
        @pointercancel=${()=>this.claimPressed=!1}
        @click=${e=>{e.stopPropagation(),this.claimRewards(t)}}
      >
        <o-button
          variant="primary"
          size="sm"
          translationKey=${i?`progression.rewards_claiming`:`account_modal.claim`}
          .disable=${i}
          .icon=${i?x`<span
                  data-xp-claim-spinner
                  aria-hidden="true"
                  class="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-white/35 border-t-white motion-reduce:animate-none"
                ></span>`:void 0}
        ></o-button>
      </span>
      ${r.status===`idle`&&r.failed?x`<span
              data-xp-claim-error
              role="alert"
              class="text-xs text-red-300"
              >${d(`account_modal.claim_failed`)}</span
            >`:e}
    </div>`}renderClaimed(t,n,r){let i=this.balanceCount,a=e=>r===null?``:Math.round((n?.[e]??r[e])+(r[e]-(n?.[e]??r[e]))*i).toLocaleString(),o=t.lines.some(e=>e.currency===`hard`);return x`<div
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
        ${d(`progression.rewards_claimed`)}
      </span>
      ${r===null?e:x`<span
              data-xp-balance
              class="text-[11px] tabular-nums text-white/50"
              >${o?d(`progression.rewards_balance`,{caps:a(`soft`),plutonium:a(`hard`)}):d(`progression.rewards_balance_caps`,{caps:a(`soft`)})}</span
            >`}
    </div>`}resetClaim(){this.claimToken++,this.clearClaimTimers(),this.claim={status:`idle`,failed:!1},this.claimPressed=!1,this.balanceCount=1,this.claimedIds=new Set,this.refusedHolds=new Map}rewardsOf(e){return this.view.kind===`result`?M(e.rewards??[],this.refusedHolds):[]}clearClaimTimers(){for(let e of this.claimTimers)clearTimeout(e);this.claimTimers=[]}async claimRewards(e){if(this.claim.status!==`idle`)return;let t=this.claimToken;this.claim={status:`claiming`};let n=await P(this.rewardsOf(e),this.claimedIds);if(t!==this.claimToken)return;for(let e of n.claimedIds)this.claimedIds.add(e);if(n.held.length>0){let e=new Map(this.refusedHolds);for(let{id:t,held:r}of n.held)e.set(t,r);this.refusedHolds=e}if(!n.ok){this.claim={status:`idle`,failed:!0};return}let r=await s();if(t!==this.claimToken)return;let i=n.currency??(r===!1?null:r.player.currency??null),a=i===null||n.currency===null?i:{soft:i.soft-n.credited.soft,hard:i.hard-n.credited.hard};this.claim={status:`claimed`,from:a,to:i},this.countBalance(),r!==!1&&this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:{currency:i,rewards:r.player.rewards??[]},bubbles:!0,composed:!0}))}countBalance(){if(this.clearClaimTimers(),he()){this.balanceCount=1;return}this.balanceCount=0;let e=Math.max(2,Math.round(J/30));for(let t=1;t<=e;t++)this.claimTimers.push(setTimeout(()=>this.balanceCount=Y(t/e),q+J*t/e))}renderXpCard(t,n,r,i){return x`<div
      class="w-[calc(50%-0.25rem)] min-w-0 sm:w-[calc(25%-0.375rem)] ${this.slotClass(i.shown)}"
      data-xp-slot-hidden=${i.shown?e:`true`}
    >
      <div
        data-xp-card
        title=${t}
        class="xp-shine h-full rounded-xl border bg-white/5 px-2 py-2.5 text-center ${r}"
        style=${i.style??e}
      >
        <div
          data-xp-line=${i.line??e}
          class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
        >
          ${t}
        </div>
        <div
          data-xp-card-value
          class="mt-1 truncate text-lg font-black leading-none tabular-nums"
        >
          ${n}
        </div>
      </div>
    </div>`}renderBonuses(t){let n=u(t.breakdown);if(n.length===0)return e;let r=this.reveal;return this.collapsible(r===null||r.multipliersShown>0,x`<div
        data-xp-bonuses
        class="mt-1 flex min-h-5 flex-wrap items-center justify-center gap-x-5"
      >
        ${n.map((t,n)=>{let i=r===null||n<r.multipliersShown,a=this.accentOf(t);return x`<span
            data-xp-multiplier=${t.key}
            data-xp-tier=${t.key===`subscriber`?T(t.permille)?.tier??e:e}
            data-xp-slot-hidden=${i?e:`true`}
            style=${a===null?e:`--accent-a: ${a[0]}; --accent-b: ${a[1]}`}
            class="inline-block text-sm font-bold uppercase italic tracking-wide ${t.permille>1e3?`xp-bonus-line`:`text-sky-300`} ${this.slideSlotClass(i)}"
            >${S(t.key,t.permille)}</span
          >`})}
      </div>`)}renderBreakdown(e){let t=n(e.breakdown);if(t.length===0)return x``;let r=this.reveal,i=r?.lineValues??Q(e),a=r?.applying??null;return x`<div
      data-xp-breakdown
      class="mt-3 flex flex-wrap justify-center gap-2"
    >
      ${t.map((e,n)=>{let o=r===null||n<r.linesShown,s=i[n]>e.amount?`xp-card-boosted`:i[n]<e.amount?`xp-card-cut`:``,c=a!==null&&o,l=c?`xp-card-wipe ${a===`cut`?`xp-wipe-cut`:``}`:``,u=c?`--wipe-delay: ${Math.round(G(n,t.length)*U)}ms; --wipe-ms: ${Math.round(W*U)}ms`:void 0;return this.renderXpCard(d(v[e.key]),d(`progression.xp_total`,{xp:g(i[n])}),`text-yellow-300 border-yellow-400/20 ${s} ${l}`,{line:e.key,shown:o,style:u})})}
    </div>`}render(){let t=this.view;switch(t.kind){case`hidden`:return e;case`signed_out`:return this.renderNote(`progression.sign_in_to_earn`,`signed_out`);case`awaiting_end`:return this.renderNote(`progression.awaiting_end`,`awaiting_end`);case`provisional`:return t.provisional.response.eligible?this.renderFull(t.provisional.response):this.renderIneligible(t.provisional.response.reason,`provisional_ineligible`);case`calculating`:return this.renderCalculating();case`result`:return t.data.eligible?this.renderFull(t.data):this.renderIneligible(t.data.reason,`ineligible`)}}};b([p({attribute:!1})],$.prototype,`view`,void 0),b([p({attribute:!1})],$.prototype,`onScreen`,void 0),b([p({attribute:!1})],$.prototype,`gameType`,void 0),b([a()],$.prototype,`reveal`,void 0),b([a()],$.prototype,`barAnimate`,void 0),b([a()],$.prototype,`barDurationMs`,void 0),b([a()],$.prototype,`claim`,void 0),b([a()],$.prototype,`claimPressed`,void 0),b([a()],$.prototype,`balanceCount`,void 0),b([a()],$.prototype,`catalog`,void 0),$=b([f(`game-xp-panel`)],$);export{$ as GameXpPanel};
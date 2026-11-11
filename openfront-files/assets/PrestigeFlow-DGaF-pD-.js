import{$i as e,Ji as t,Qi as n,Vt as r,Wi as i,Wt as a,Xi as o,Yi as s,Zi as c,a as l,hi as u,na as d,tn as f,x as p}from"./index-l9P8Wp-p.js";import"./CapIcon-CmmlnoNt.js";import"./ProfileShare-KBY71e-K.js";import{a as m}from"./PlayerProfileModal-DsPOu50m.js";import{i as h,r as g}from"./MomentShare-DwlbkKFS.js";import{n as _,t as v}from"./Ceremony-DsiwzFu0.js";var y={shatter:1900,reveal:2100,title:2700,done:3500},b=[`charge`,`shatter`,`reveal`,`title`,`done`],x=1500,S=2200,C=180,w=.75,T=112,E=650;function D(e){let t=e?.maxPrestige;return t!==void 0&&t>0?t:10}function O(e){let t=e?.maxLevel;return t!==void 0&&t>0?t:100}function k(e,t){return Number.isFinite(e)?Math.min(D(t),Math.max(0,Math.floor(e))):0}function A(e,t){return Math.min(D(t),k(e,t)+1)}function j(e){let t=e?.prestige?.caps;return typeof t==`number`&&t>0?t:null}function M(e,t){return e?.flares.find(e=>e.kind===`prestige`&&e.prestige===t)??null}var N=(()=>{let e=[];for(let t=0;t<=44;t++){let n=t/44,r=1.5+7.5*n*n,i=[1,-1,.6,-.8][t%4],a=[-.6,.8,1,-1][t%4];e.push(`${(n*100).toFixed(2)}% { translate: ${(i*r).toFixed(2)}px ${(a*r*.7).toFixed(2)}px; rotate: ${(i*(.2+2.6*n*n)).toFixed(2)}deg; }`)}return`@keyframes prestige-handoff-shake { ${e.join(` `)} }`})(),P=new Map;function F(){return typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`}var I=class extends c{constructor(...e){super(...e),this.publicId=``,this.stage=`closed`,this.prior=null,this.outcome=null,this.error=null,this.beat=`charge`,this.fromConfirm=!1,this.holding=!1,this.holdStart=null,this.holdFrame=0,this.handoff=null,this.handoffMove=null,this.config=null,this.exclusive=null,this.openToken=0,this.submit=a,this.fetchConfig=r,this.describeCosmetic=m,this.portal=null,this.timers=[],this.idempotencyKey=``,this.onKeyDown=e=>{if(this.stage!==`closed`){if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.stage===`confirm`?this.close():this.stage===`ceremony`&&(this.beat===`done`?this.close():this.skipCeremony());return}if(e.key===`Tab`){e.preventDefault(),e.stopPropagation();let t=this.overlayRoot(),n=[...t?.querySelectorAll(`button:not([disabled])`)??[]];if(n.length===0){t?.focus();return}let r=n.indexOf(document.activeElement);n[r===-1?0:(r+(e.shiftKey?-1:1)+n.length)%n.length].focus()}}},this.onFocusLost=()=>{(document.visibilityState===`hidden`||!document.hasFocus())&&this.endHold()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),v(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeyDown,!0),window.addEventListener(`blur`,this.onFocusLost),document.addEventListener(`visibilitychange`,this.onFocusLost)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`keydown`,this.onKeyDown,!0),window.removeEventListener(`blur`,this.onFocusLost),document.removeEventListener(`visibilitychange`,this.onFocusLost),this.close(),this.portal&&=(n(d``,this.portal),this.portal.remove(),null)}open(e){if(this.stage!==`closed`||!e.canPrestige)return;this.prior=e,this.outcome=null,this.error=null,this.holding=!1,this.handoff=null,this.fromConfirm=!1,this.config=null,this.exclusive=null;let t=P.get(e.prestige);t===void 0&&(t=F(),P.set(e.prestige,t)),this.idempotencyKey=t,this.stage=`confirm`,this.loadRewards(++this.openToken),this.updateComplete.then(()=>this.focusConfirmButton())}async loadRewards(e){let t;try{t=await this.fetchConfig()}catch{t=!1}if(e!==this.openToken||!this.isOpen||!t||this.prior===null)return;this.config=t;let n=M(t,this.nextRank(this.prior));if(n===null)return;let r;try{r=await this.describeCosmetic(n)}catch{r=null}e!==this.openToken||!this.isOpen||(this.exclusive=r)}updated(e){e.has(`stage`)&&(this.stage===`submitting`||this.stage===`ceremony`)&&this.overlayRoot()?.focus(),(e.has(`beat`)||e.has(`stage`))&&this.stage===`ceremony`&&this.beat===`done`&&this.portal?.querySelector(`[data-prestige-continue]`)?.focus()}overlayRoot(){return this.portal?.querySelector(`[data-prestige-confirm], [data-prestige-ceremony]`)??null}focusConfirmButton(){this.portal?.querySelector(`[data-prestige-confirm-button]`)?.focus()}celebrate(e,t){this.stage===`closed`&&(this.prior=e,this.outcome=t,this.fromConfirm=!1,this.handoff=null,this.startCeremony(`charge`))}get isOpen(){return this.stage!==`closed`}close(){this.clearTimers(),this.endHold(),this.stopHandoffMove(),this.handoff=null,this.stage=`closed`}render(){return this.portal&&n(this.renderOverlay(),this.portal),e}renderOverlay(){let t=this.prior;if(t===null||this.stage===`closed`)return e;let n=this.stage===`ceremony`,r=n?this.outcome?.progress.prestige??this.nextRank(t):this.nextRank(t),i=this.handoff===`charge`||n&&this.beat!==`done`,a=n&&this.beat!==`charge`;return d`<div
      data-prestige-overlay
      class="prestige-ceremony fixed inset-0 z-[10020] text-white"
      style="--tier: ${p(r,!1)}"
    >
      ${this.renderStyles()}
      <div aria-hidden="true" class="ceremony-backdrop absolute inset-0"></div>
      ${_(this.honeycombMode(),{className:`prestige-honeycomb`})}
      ${i?_(`hx-charge`,{className:`prestige-honeycomb prestige-charge-comb ${a?`is-off`:``}`}):e}
      <div aria-hidden="true" class="ceremony-vignette absolute inset-0"></div>
      ${n?this.renderCeremony(t):this.renderConfirm(t)}
    </div>`}honeycombMode(){return this.stage!==`ceremony`||this.beat===`done`?`hx-idle`:this.beat===`charge`?``:`hx-burst`}rankOf(e){return k(e.prestige,this.config)}nextRank(e){return A(e.prestige,this.config)}renderConfirm(t){let n=this.nextRank(t),r=this.stage===`submitting`,a=this.holding&&!r;return d`<div
      data-prestige-confirm
      data-handoff=${this.handoff??e}
      ?data-holding=${a}
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prestige-confirm-title"
      class="absolute inset-0 flex flex-col items-center overflow-y-auto px-4 py-8"
    >
      <div
        class="prestige-fade prestige-body relative my-auto flex w-full max-w-2xl flex-col items-center text-center"
      >
        <h2
          id="prestige-confirm-title"
          class="prestige-title m-0 text-4xl font-black uppercase italic tracking-wide sm:text-6xl"
        >
          ${i(`prestige.title`,{rank:n})}
        </h2>

        <!-- The player's badge as it is now: the one the hold charges, and
             the one that shatters at the flash. -->
        <div
          class="prestige-float relative mt-10"
          style="--hero: ${p(this.rankOf(t),!1)}"
        >
          <div
            aria-hidden="true"
            class="absolute -inset-10 rounded-full"
            style="background: radial-gradient(circle, color-mix(in srgb, var(--hero) 40%, transparent) 0%, transparent 70%)"
          ></div>
          <level-badge
            class="prestige-emblem relative"
            data-prestige-current-badge
            .level=${t.level}
            .prestige=${t.prestige}
            .legend=${t.legend}
            .size=${170}
          ></level-badge>
        </div>

        ${this.renderTrack(this.rankOf(t),n)}
        ${this.renderUnlocks(n)}

        <p class="m-0 mt-6 max-w-md text-sm text-white/75">
          ${i(`prestige.summary`)}
        </p>
        ${this.error===null?e:d`<p
                data-prestige-error
                class="m-0 mt-2 text-sm font-bold text-rose-400"
              >
                ${this.error===`signed_out`?i(`prestige.error_signed_out`):i(`prestige.error`)}
              </p>`}

        <div class="mt-6 flex w-full max-w-md gap-3">
          <button
            type="button"
            class="prestige-cut flex-1 border-0 bg-white/10 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white/75 transition-colors hover:bg-white/20 hover:text-white disabled:opacity-50"
            ?disabled=${r}
            @click=${()=>this.close()}
          >
            ${i(`common.cancel`)}
          </button>
          <button
            type="button"
            data-prestige-confirm-button
            ?data-holding=${a}
            class="prestige-cut prestige-hold relative flex-[2] select-none border-0 bg-gradient-to-b from-yellow-300 to-amber-500 px-4 py-3 text-sm font-black uppercase tracking-wider text-zinc-900 disabled:cursor-wait disabled:opacity-80"
            ?disabled=${r}
            @pointerdown=${e=>{e.button===0&&this.startHold()}}
            @pointerup=${()=>this.endHold()}
            @pointerleave=${()=>this.endHold()}
            @pointercancel=${()=>this.endHold()}
            @blur=${()=>this.endHold()}
            @keydown=${e=>{e.key!==` `&&e.key!==`Enter`||(e.preventDefault(),e.repeat||this.startHold())}}
            @keyup=${e=>{(e.key===` `||e.key===`Enter`)&&this.endHold()}}
            @contextmenu=${e=>e.preventDefault()}
          >
            <span
              aria-hidden="true"
              class="prestige-hold-fill"
              ?data-holding=${a}
            ></span>
            <span class="relative">
              ${i(r?`prestige.submitting`:a?`prestige.keep_holding`:`prestige.confirm`)}
            </span>
          </button>
        </div>
        <p
          class="m-0 mt-3 text-xs font-bold uppercase tracking-wider text-amber-300/90"
        >
          ${i(`prestige.irreversible`)}
        </p>
      </div>
    </div>`}renderTrack(e,t){let n=Array.from({length:D(this.config)},(e,t)=>t+1),r=n=>n===t?`next`:n<=e?`earned`:`locked`;return d`<ol
      data-prestige-track
      class="m-0 mt-6 flex list-none flex-wrap items-end justify-center gap-1 p-0"
    >
      ${n.map(e=>d`<li
            data-rank=${e}
            data-state=${r(e)}
            class="prestige-track-${r(e)} flex flex-col items-center"
          >
            <level-badge
              .level=${1}
              .prestige=${e}
              .size=${e===t?42:26}
            ></level-badge>
          </li>`)}
      <li data-rank="legend" data-state="locked" class="prestige-track-locked">
        <level-badge
          .level=${O(this.config)}
          .legend=${!0}
          .size=${26}
        ></level-badge>
      </li>
    </ol>`}renderUnlocks(e){let t=j(this.config),n=[{key:`emblem`,icon:d`<level-badge
          .level=${1}
          .prestige=${e}
          .size=${48}
        ></level-badge>`,label:i(`prestige.gain_emblem`,{rank:e})},{key:`caps`,icon:d`<cap-icon .size=${48}></cap-icon>`,label:t===null?i(`prestige.gain_caps`):d`<span
                  data-prestige-caps-amount
                  class="block text-lg font-black tracking-normal text-white"
                  >${l(t)}</span
                ><span class="mt-0.5 block"
                  >${i(`prestige.caps`)}</span
                >`}],r=this.exclusive;return r!==null&&n.push({key:`cosmetic`,icon:d`<div
          data-prestige-cosmetic-preview
          class="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-white/5 p-0.5"
        >
          ${r.preview}
        </div>`,label:d`<span
            data-prestige-cosmetic-name
            class="block text-[13px] font-black normal-case tracking-normal text-white"
            >${r.name}</span
          ><span class="mt-0.5 block"
            >${r.typeLabel===``?i(`prestige.exclusive_untyped`,{rank:e}):i(`prestige.exclusive`,{type:r.typeLabel,rank:e})}</span
          >`}),d`<div class="mt-6 w-full">
      <div
        class="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50"
      >
        ${i(`prestige.unlocks`)}
      </div>
      <div class="mt-2 flex flex-wrap justify-center gap-2 sm:gap-3">
        ${n.map(e=>d`<div data-prestige-unlock=${e.key} class="prestige-tile">
              <div
                class="prestige-tile-inner flex h-full flex-col items-center justify-center gap-2 px-3 py-3"
              >
                <div class="grid h-12 place-items-center">${e.icon}</div>
                <div
                  class="text-xs font-bold uppercase leading-tight text-white/85"
                >
                  ${e.label}
                </div>
              </div>
            </div>`)}
      </div>
    </div>`}startHold(){if(this.stage!==`confirm`||this.holdStart!==null)return;this.holdStart=performance.now(),this.holding=!0;let e=()=>{if(this.holdStart===null)return;let t=Math.min(1,(performance.now()-this.holdStart)/x);if(this.setFill(t),t>=1){this.holdStart=null,this.confirm();return}this.holdFrame=requestAnimationFrame(e)};this.holdFrame=requestAnimationFrame(e)}endHold(){this.holdStart!==null&&(this.holdStart=null,cancelAnimationFrame(this.holdFrame),this.holding=!1,this.setFill(0))}setFill(e){let t=this.portal?.querySelector(`[data-prestige-confirm-button] .prestige-hold-fill`);t&&(t.style.transform=`scaleX(${e})`);let n=this.portal?.querySelector(`[data-prestige-confirm]`);n&&(n.style.setProperty(`--hold`,String(e)),n.toggleAttribute(`data-hot`,e>w))}wait(e){return new Promise(t=>{this.timers.push(setTimeout(t,e))})}async confirm(){if(this.stage!==`confirm`)return;this.error=null,this.stage=`submitting`,this.setFill(1);let e=this.prior,t=performance.now(),n=this.submit(this.idempotencyKey),r=f();this.handoff=r?`fade`:`charge`,await this.updateComplete,r||this.startHandoffMove();let i=await n;if(i.ok&&(e&&P.delete(e.prestige),this.outcome=i.data,this.dispatchEvent(new CustomEvent(`prestiged`,{detail:i.data,bubbles:!0,composed:!0}))),this.stage!==`submitting`)return;if(!i.ok){if(this.reverseHandoff(),i.reason===`refused`){e&&P.delete(e.prestige),this.close(),this.dispatchEvent(new CustomEvent(`prestige-stale`,{bubbles:!0,composed:!0}));return}this.stage=`confirm`,this.holding=!1,this.setFill(0),this.error=i.reason,this.updateComplete.then(()=>this.focusConfirmButton());return}let a=(r?180:S)-(performance.now()-t);a>0&&await this.wait(a),this.stage===`submitting`&&(this.stopHandoffMove(),this.handoff=null,this.fromConfirm=!0,this.startCeremony(r?`done`:`shatter`))}startHandoffMove(){let e=this.portal?.querySelector(`[data-prestige-confirm] .prestige-float`);if(!e||typeof e.animate!=`function`)return;let t=getComputedStyle(e).transform,n=new DOMMatrixReadOnly(t===`none`||t===``?void 0:t),r=e.getBoundingClientRect(),i=r.left+r.width/2-n.e,a=r.top+r.height/2-n.f,o=window.innerWidth/2-i,s=window.innerHeight/2-T-a;e.style.animation=`prestige-handoff-shake ${S}ms linear forwards`,this.handoffMove=e.animate([{transform:n.toString()},{transform:`translate(${o}px, ${s}px) scale(1.25)`}],{duration:E,easing:`cubic-bezier(.45,0,.2,1)`,fill:`forwards`})}reverseHandoff(){let e=this.handoffMove;this.handoffMove=null,this.handoff=null;let t=this.portal?.querySelector(`[data-prestige-confirm] .prestige-float`);t&&(t.style.animation=``),e!==null&&(e.onfinish=()=>e.cancel(),e.reverse())}stopHandoffMove(){this.handoffMove?.cancel(),this.handoffMove=null}clearTimers(){for(let e of this.timers)clearTimeout(e);this.timers=[]}startCeremony(e){if(this.clearTimers(),this.stage=`ceremony`,f()||e===`done`){this.beat=`done`;return}this.beat=e;let t=e===`charge`?0:y[e];for(let[e,n]of Object.entries(y))n<=t||this.timers.push(setTimeout(()=>this.beat=e,n-t))}reached(e){return b.indexOf(this.beat)>=b.indexOf(e)}skipCeremony(){this.beat!==`done`&&(this.clearTimers(),this.beat=`done`)}renderCeremony(t){let n=this.outcome?.progress,r=n?.prestige??this.nextRank(t),a=this.reached(`shatter`),o=this.reached(`reveal`),s=this.beat===`done`,c=Array.from({length:18},(e,t)=>t*360/18),l=Array.from({length:14},(e,t)=>t*360/14+7);return d`<div
      data-prestige-ceremony
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-label=${i(`prestige.ceremony_title`,{rank:r})}
      data-beat=${this.beat}
      ?data-from-confirm=${this.fromConfirm}
      class="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      @click=${()=>this.skipCeremony()}
    >
      <div class="relative grid h-[260px] w-[260px] place-items-center">
        ${a?e:d`<div aria-hidden="true" class="absolute inset-0">
                  ${c.map((e,t)=>d`<span
                        class="prestige-particle"
                        style="--a: ${e}deg; animation-delay: ${t%6*.18}s"
                      ></span>`)}
                </div>
                <div class="prestige-charge relative">
                  <level-badge
                    .level=${O(this.config)}
                    .prestige=${t.prestige}
                    .size=${200}
                  ></level-badge>
                </div>`}
        ${a&&!s?d`<div aria-hidden="true" class="absolute inset-0">
                <span class="ceremony-shockwave"></span>
                ${l.map(e=>d`<span
                      class="prestige-shard"
                      style="--a: ${e}deg"
                    ></span>`)}
              </div>`:e}
        ${o?d`<div
                class="relative ${s?``:`prestige-reveal`}"
                data-prestige-new-badge
              >
                <level-badge
                  .level=${n?.level??1}
                  .prestige=${r}
                  .size=${220}
                ></level-badge>
              </div>`:e}
      </div>

      <div class="relative mt-6 flex min-h-[200px] flex-col items-center">
        ${this.reached(`title`)?d`<div
                data-prestige-title
                class="${s?``:`ceremony-slam`} prestige-title text-5xl font-black uppercase italic tracking-wide sm:text-7xl"
              >
                ${i(`prestige.ceremony_title`,{rank:r})}
              </div>`:e}
        ${s?this.renderShare(r):e}
        ${s?d`<button
                type="button"
                data-prestige-continue
                class="prestige-fade prestige-cut mt-6 border-0 bg-gradient-to-b from-yellow-300 to-amber-500 px-10 py-3 text-base font-black uppercase tracking-wider text-zinc-900 transition-transform hover:-translate-y-0.5"
                @click=${e=>{e.stopPropagation(),this.close()}}
              >
                ${i(`prestige.continue`)}
              </button>`:e}
      </div>
      ${a&&!this.reached(`title`)?d`<div aria-hidden="true" class="ceremony-flash"></div>`:e}
    </div>`}renderShare(t){if(this.publicId===``)return e;let n={kind:`prestige`,rank:t},r=h(this.publicId,n);return r===null?e:d`<div
      data-prestige-share
      class="mt-6"
      @click=${e=>e.stopPropagation()}
    >
      <profile-share
        solid
        centered
        .url=${r}
        .text=${g(n)}
      ></profile-share>
    </div>`}renderStyles(){return d`<style>
      .prestige-honeycomb {
        --hx-color: #00c8ff;
      }
      /* The charge layer fades in over the idle honeycomb, and out again at
         the shatter. */
      .prestige-charge-comb {
        animation: ceremony-fade-in 500ms ease-out both;
        transition: opacity 400ms ease-out;
      }
      .prestige-charge-comb.is-off {
        opacity: 0;
      }
      /* The level-100 badge gathering power: a growing glow and a shake
         that builds to the shatter. */
      .prestige-charge {
        animation:
          prestige-shake 1900ms ease-in both,
          prestige-glow 1900ms ease-in both;
      }
      @keyframes prestige-shake {
        0%,
        30% {
          transform: none;
        }
        40% {
          transform: translate(-1px, 1px) rotate(-1deg);
        }
        50% {
          transform: translate(2px, -1px) rotate(1deg);
        }
        60% {
          transform: translate(-3px, 2px) rotate(-2deg) scale(1.03);
        }
        70% {
          transform: translate(4px, -2px) rotate(2deg) scale(1.05);
        }
        80% {
          transform: translate(-5px, 3px) rotate(-3deg) scale(1.08);
        }
        90% {
          transform: translate(6px, -3px) rotate(3deg) scale(1.12);
        }
        100% {
          transform: scale(1.18);
        }
      }
      @keyframes prestige-glow {
        from {
          filter: drop-shadow(0 0 0 transparent) brightness(1);
        }
        to {
          filter: drop-shadow(0 0 40px var(--tier)) brightness(1.8);
        }
      }
      /* Light drawn in toward the badge while it charges. */
      .prestige-particle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        border-radius: 9999px;
        background: var(--tier);
        box-shadow: 0 0 10px var(--tier);
        opacity: 0;
        animation: prestige-converge 1100ms ease-in infinite;
      }
      @keyframes prestige-converge {
        0% {
          opacity: 0;
          transform: rotate(var(--a)) translateX(260px) scale(1.4);
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: rotate(var(--a)) translateX(30px) scale(0.4);
        }
      }
      /* The old badge in pieces, flung outward. */
      .prestige-shard {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 26px;
        height: 34px;
        margin: -17px 0 0 -13px;
        background: linear-gradient(135deg, white, var(--tier));
        clip-path: polygon(50% 0, 100% 100%, 0 80%);
        animation: prestige-shard 900ms cubic-bezier(0.2, 0.7, 0.3, 1) both;
      }
      @keyframes prestige-shard {
        from {
          opacity: 1;
          transform: rotate(var(--a)) translateX(10px) rotate(0deg);
        }
        to {
          opacity: 0;
          transform: rotate(var(--a)) translateX(360px) rotate(540deg);
        }
      }
      /* The new emblem forming out of the flash. */
      .prestige-reveal {
        animation: prestige-reveal 900ms cubic-bezier(0.2, 0.9, 0.3, 1.3) both;
      }
      @keyframes prestige-reveal {
        0% {
          opacity: 0;
          transform: scale(0.2) rotate(-25deg);
          filter: brightness(3) drop-shadow(0 0 40px var(--tier));
        }
        60% {
          opacity: 1;
          transform: scale(1.18) rotate(4deg);
        }
        100% {
          transform: none;
          filter: drop-shadow(0 0 24px var(--tier));
        }
      }
      [data-prestige-new-badge] {
        filter: drop-shadow(0 0 24px var(--tier));
      }
      /* The titles ("Enter Prestige 5", and the ceremony's "Prestige 5") are
         white for every rank: the rank's colour is the emblem's, the glow's
         and the honeycomb's, never the words'. Nothing here reads --tier. */
      .prestige-title {
        color: #ffffff;
        filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.35));
      }
      .prestige-fade {
        animation: prestige-rise 500ms ease-out both;
      }
      @keyframes prestige-rise {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
      }
      /* The confirmation's emblem, hovering. */
      .prestige-float {
        animation: prestige-float 3.2s ease-in-out infinite;
      }
      @keyframes prestige-float {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-8px);
        }
      }
      /* The hold charges the emblem: it grows, brightens and glows with
         --hold (written by setFill), easing back when let go early. */
      [data-prestige-confirm] {
        transition: --hold 250ms ease-out;
      }
      [data-prestige-confirm][data-holding] {
        transition: none;
      }
      .prestige-emblem {
        /* A block: an inline custom element would ignore the transform. */
        display: block;
        transform: scale(calc(1 + var(--hold, 0) * 0.14));
        filter: drop-shadow(
            0 0 calc(22px + var(--hold, 0) * 46px) var(--hero, var(--tier))
          )
          brightness(calc(1 + var(--hold, 0) * 0.7));
      }
      /* Nearly there: it trembles. */
      [data-prestige-confirm][data-hot] .prestige-float {
        animation: prestige-tremble 90ms linear infinite;
      }
      @keyframes prestige-tremble {
        0% {
          transform: translate(0, 0);
        }
        25% {
          transform: translate(1.5px, -1px);
        }
        50% {
          transform: translate(-1px, 1.5px);
        }
        75% {
          transform: translate(1px, 1px);
        }
      }
      /* The handoff: the confirmation leaves, the emblem stays and keeps
         charging (--hold 1 to 1.75) on its way to the middle. */
      .prestige-body > * {
        transition:
          opacity 260ms ease-out,
          transform 260ms ease-out;
      }
      [data-handoff="charge"] .prestige-body > :not(.prestige-float) {
        opacity: 0;
        transform: translateY(16px);
        pointer-events: none;
      }
      [data-handoff="charge"] .prestige-body > h2 {
        transform: translateY(-18px);
      }
      [data-prestige-confirm][data-handoff="charge"] {
        animation: prestige-overcharge ${S}ms
          cubic-bezier(0.5, 0, 0.9, 0.55) forwards;
      }
      @keyframes prestige-overcharge {
        from {
          --hold: 1;
        }
        to {
          --hold: 1.75;
        }
      }
      ${N}
      /* Reduced motion: a quick crossfade instead. */
      [data-handoff="fade"] .prestige-body {
        opacity: 0;
        transition: opacity ${180}ms ease-out;
      }
      /* The confirm button, filling while it's held. */
      .prestige-hold {
        touch-action: none;
        -webkit-touch-callout: none;
      }
      .prestige-hold[data-holding] {
        filter: brightness(1.1);
      }
      .prestige-hold-fill {
        position: absolute;
        inset: 0;
        transform: scaleX(0);
        transform-origin: left;
        background: linear-gradient(90deg, #fff3b0, #ffffff);
        box-shadow: 6px 0 14px rgba(255, 255, 255, 0.8);
        opacity: 0.6;
        transition: transform 250ms ease-out;
      }
      .prestige-hold-fill[data-holding] {
        transition: none;
      }
      /* The prestige track. */
      .prestige-track-locked {
        opacity: 0.3;
        filter: grayscale(1);
      }
      .prestige-track-next {
        filter: drop-shadow(0 0 10px var(--tier));
        margin: 0 4px;
      }
      /* Clipped corners on the tiles and buttons. */
      .prestige-cut,
      .prestige-tile,
      .prestige-tile-inner {
        clip-path: polygon(
          10px 0,
          100% 0,
          100% calc(100% - 10px),
          calc(100% - 10px) 100%,
          0 100%,
          0 10px
        );
      }
      .prestige-tile {
        width: 6.75rem;
        padding: 1px;
        background: linear-gradient(
          160deg,
          color-mix(in srgb, var(--tier) 70%, transparent),
          rgba(255, 255, 255, 0.12)
        );
      }
      @media (min-width: 640px) {
        .prestige-tile {
          width: 9rem;
        }
      }
      .prestige-tile-inner {
        background: linear-gradient(180deg, #13223c, #0a1322);
      }
      @media (prefers-reduced-motion: reduce) {
        .prestige-charge,
        .prestige-particle,
        .prestige-reveal,
        .prestige-fade,
        .prestige-float,
        .prestige-charge-comb,
        [data-prestige-confirm][data-hot] .prestige-float {
          animation: none;
        }
        /* The glow still follows the hold; the emblem doesn't move. */
        .prestige-emblem {
          transform: none;
        }
        /* The ceremony's end state fades in where the confirmation was. */
        [data-prestige-ceremony][data-from-confirm] > * {
          animation: ceremony-fade-in 220ms ease-out both;
        }
      }
    </style>`}};u([s({type:String})],I.prototype,`publicId`,void 0),u([t()],I.prototype,`stage`,void 0),u([t()],I.prototype,`prior`,void 0),u([t()],I.prototype,`outcome`,void 0),u([t()],I.prototype,`error`,void 0),u([t()],I.prototype,`beat`,void 0),u([t()],I.prototype,`fromConfirm`,void 0),u([t()],I.prototype,`holding`,void 0),u([t()],I.prototype,`handoff`,void 0),u([t()],I.prototype,`config`,void 0),u([t()],I.prototype,`exclusive`,void 0),I=u([o(`prestige-flow`)],I);export{C as HANDOFF_FADE_MS,S as HANDOFF_MS,x as HOLD_MS,I as PrestigeFlow,D as lastPrestigeRank,O as levelCap,A as nextPrestigeRank,j as prestigeCaps,M as prestigeFlare,k as prestigeRank};
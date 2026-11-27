import{$i as e,E as t,Ji as n,S as r,a as i,aa as a,b as o,ea as s,f as c,g as l,h as u,o as d,oa as f,ra as p,s as m,ta as h,w as g,y as _,yi as v}from"./index-Cv-L6ZYS.js";var y=[`#bef264`,`#bef264`],b=30,x=class extends h{constructor(...e){super(...e),this.view={kind:`hidden`},this.gameType=null}createRenderRoot(){return this}frame(e,t){return f`<section
      data-past-xp
      data-past-xp-state=${t}
      class="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-4 py-3.5 text-left text-white sm:px-[18px]"
      aria-live="polite"
    >
      ${e}
    </section>`}heading(e=``){return f`<div
      class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/55 ${e}"
    >
      ${n(`progression.xp_heading`)}
    </div>`}renderNote(e,t,n,r){return this.frame(f`<div class="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        ${this.heading(`flex-none`)}
        <div
          class="flex min-w-0 flex-[1_1_240px] items-center gap-2 text-sm ${r}"
        >
          ${e}
          <span data-past-xp-note>${t}</span>
        </div>
      </div>`,n)}renderCalculating(){return this.renderNote(f`<span
        class="size-4 flex-none animate-spin rounded-full border-2 border-white/30 border-t-white/85"
        aria-hidden="true"
      ></span>`,n(`progression.calculating`),`calculating`,`text-white/70`)}circledIcon(e){return f`<svg
      viewBox="0 0 18 18"
      class="size-[18px] flex-none ${e===`info`?`text-white/40`:`text-white/30`}"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="8" stroke-width="1.5" />
      ${e===`info`?a`<path d="M9 8v5" stroke-width="1.8" stroke-linecap="round" />
            <circle
              cx="9"
              cy="5.3"
              r="1.05"
              fill="currentColor"
              stroke="none"
            />`:a`<path d="M5.5 9h7" stroke-width="1.8" stroke-linecap="round" />`}
    </svg>`}signed(e){return n(e<0?`progression.xp_minus`:`progression.xp_plus`,{xp:i(Math.abs(e))})}badge(e,t,n=!1){return f`<level-badge
      class="inline-block align-middle"
      .level=${e}
      .prestige=${t}
      .legend=${n}
      .size=${b}
    ></level-badge>`}renderLevel(e){let{before:t,after:i}=e,a=_(e);if(a.length===0)return f`<div
        data-past-xp-level=${i.level}
        class="flex flex-none items-center gap-2"
      >
        ${this.badge(i.level,i.prestige,i.legend)}
        <div class="leading-tight">
          <div class="text-[15px] font-extrabold">
            ${i.legend?n(`progression.legend`):n(`progression.level`,{level:i.level})}
          </div>
          <div class="text-xs tabular-nums text-white/55">
            ${m(i.xpInLevel,i.xpForNext)}
          </div>
        </div>
      </div>`;let o=a[a.length-1],s=r(e),c=a.some(e=>l(e.level));return f`<div
      data-past-xp-levelup=${o.level}
      class="flex flex-none flex-wrap items-center gap-2"
    >
      ${this.badge(t.level,t.prestige)}
      <span class="text-base font-bold text-white/45" aria-hidden="true"
        >→</span
      >
      <span
        data-past-xp-new-badge
        class="inline-grid place-items-center rounded-full ${c?`shadow-[0_0_14px_rgba(250,204,21,0.55)]`:``}"
      >
        ${this.badge(o.level,o.prestige,s&&o.level>=100)}
      </span>
      <span class="ml-1 text-[15px] font-extrabold tabular-nums">
        ${n(`progression.level_change`,{from:t.level,to:o.level})}
      </span>
      ${c?f`<span
              data-past-xp-milestone
              class="ml-1 rounded-full border border-yellow-400/45 bg-yellow-400/10 px-2 py-[3px] text-[10px] font-extrabold uppercase tracking-[0.14em] text-yellow-300"
            >
              ${n(`progression.milestone_chip`)}
            </span>`:p}
    </div>`}renderMultipliers(e){return f`${o(e.breakdown).map(e=>{let t=e.permille<1e3,n=e.key===`subscriber`?g(e.permille)?.colors??y:y;return f`<div
        data-past-xp-multiplier=${e.key}
        data-xp-tier=${e.key===`subscriber`?g(e.permille)?.tier??p:p}
        class="mt-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[13px] leading-relaxed"
      >
        <span
          class="font-extrabold uppercase italic tracking-[0.04em] ${t?`text-sky-300`:`bg-clip-text text-transparent`}"
          style=${t?p:`background-image: linear-gradient(90deg, ${n[0]}, ${n[1]})`}
          >${d(e.key,e.permille)}</span
        >
        ${e.amount===null?p:f`<span
                data-past-xp-multiplier-amount
                class="font-extrabold tabular-nums ${t?`text-sky-300`:``}"
                style=${t?p:`color: ${n[1]}`}
                >${this.signed(e.amount)}</span
              >`}
      </div>`})}`}renderResult(e){let r=t(e.breakdown);return this.frame(f`
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2.5">
          <div class="min-w-0 flex-auto">
            ${this.heading()}
            <div
              data-past-xp-total
              class="mt-0.5 text-2xl font-black leading-tight tabular-nums text-yellow-300 [text-shadow:0_0_10px_rgba(250,204,21,0.35)]"
            >
              ${n(`progression.xp_total`,{xp:i(e.breakdown.total)})}
            </div>
          </div>
          ${this.renderLevel(e)}
        </div>
        ${r.length>0?f`<div
                data-past-xp-lines
                class="mt-3 grid grid-cols-1 gap-x-7 gap-y-1 border-t border-white/[0.08] pt-2.5 sm:grid-cols-3"
              >
                ${r.map(e=>f`<div
                      data-past-xp-line=${e.key}
                      class="flex justify-between gap-3 text-[13px] leading-relaxed"
                    >
                      <span class="min-w-0 text-white/70"
                        >${n(c[e.key])}</span
                      >
                      <span class="font-bold tabular-nums text-yellow-300"
                        >${this.signed(e.amount)}</span
                      >
                    </div>`)}
              </div>`:p}
        ${this.renderMultipliers(e)}
        ${e.breakdown.leftEarly?f`<p
                data-past-xp-left-early
                class="m-0 mt-2 text-xs text-amber-300"
              >
                ${n(`progression.left_early`)}
              </p>`:p}
      `,`result`)}render(){let e=this.view;switch(e.kind){case`hidden`:return p;case`calculating`:return this.renderCalculating();case`result`:return e.data.eligible?this.renderResult(e.data):e.data.reason===`before_progression`?this.renderNote(this.circledIcon(`dash`),n(u(e.data.reason)),`before_levels`,`text-white/55`):this.renderNote(this.circledIcon(`info`),n(u(e.data.reason,this.gameType)),`ineligible`,`text-white/70`)}}};v([e({attribute:!1})],x.prototype,`view`,void 0),v([e({attribute:!1})],x.prototype,`gameType`,void 0),x=v([s(`past-game-xp-card`)],x);export{x as PastGameXpCard};
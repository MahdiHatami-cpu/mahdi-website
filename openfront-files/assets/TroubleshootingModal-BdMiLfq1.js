import{$t as e,Qt as t,Wi as n,Xi as r,Yi as i,hi as a,na as o,po as s,zn as c}from"./index-BAYE2tsk.js";async function l(e){let t=navigator.userAgentData,n=c.os,r={engine:t?.brands?t.brands.map(e=>e.brand).join(`, `):navigator.userAgent,platform:navigator.platform,os:n,dpr:window.devicePixelRatio},i=`Canvas2D`,a=e.getContext(`webgl2`,{antialias:!0})??e.getContext(`webgl`,{antialias:!0});a&&(i=typeof WebGL2RenderingContext<`u`&&a instanceof WebGL2RenderingContext?`WebGL2`:`WebGL1`);let o={type:i};if(a){o.antialias=a.getContextAttributes()?.antialias??!1,o.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE);let e=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT);o.shaderHighp=e!==null&&e.precision>0;let t=a.getExtension(`WEBGL_debug_renderer_info`);if(t){let e=a.getParameter(t.UNMASKED_RENDERER_WEBGL);o.gpu={vendor:a.getParameter(t.UNMASKED_VENDOR_WEBGL),renderer:e,software:/swiftshader|llvmpipe|software/i.test(e)}}else o.gpu={unavailable:!0}}let s;if(`getBattery`in navigator)try{let e=await navigator.getBattery();s={charging:e.charging,level:Math.round(e.level*100)+`%`}}catch{s={unavailable:!0}}else s={unavailable:!0};return{browser:r,rendering:o,power:s}}var u=s(`images/InfoIcon.svg`),d=class extends e{constructor(...e){super(...e),this.routerName=`troubleshooting`,this.markdown=`Loading...`,this.loading=!0,this.initialized=!1}async loadDiagnostics(){let e=document.createElement(`canvas`);this.diagnostics=await l(e),this.loading=!1,this.initialized=!0}renderHeaderSlot(){return t({titleContent:o` <div
        class="w-full flex flex-col sm:flex-row justify-between gap-2"
      >
        <span
          class="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest break-words hyphens-auto"
        >
          <a
            class="hover:text-blue-200 text-blue-400 cursor-pointer"
            @click=${this.close}
            >${n(`main.help`)}</a
          >
          / ${n(`troubleshooting.title`)}
        </span>
        <o-button
          variant="primary"
          size="sm"
          translationKey="common.copy"
          @click=${this.copyDiagnostics}
        ></o-button>
      </div>`,onBack:()=>this.close(),ariaLabel:n(`common.back`)})}renderBody(){return this.loading?o``:o`
      <div class="px-1">
        ${this.section(``,o`${this.infoTip(n(`troubleshooting.hardware_acceleration_tip`),!0)}`)}
        ${this.section(n(`troubleshooting.environment`),o`
            ${this.row(n(`troubleshooting.browser`),this.diagnostics.browser.engine)}
            ${this.row(n(`troubleshooting.platform`),this.diagnostics.browser.platform)}
            ${this.row(n(`troubleshooting.os`),this.diagnostics.browser.os)}
            ${this.row(n(`troubleshooting.device_pixel_ratio`),this.diagnostics.browser.dpr)}
            ${this.infoTip(n(`troubleshooting.chromium_tip`))}
          `)}
        ${this.section(n(`troubleshooting.rendering`),o`
            ${this.row(n(`troubleshooting.renderer`),this.describeRenderer(this.diagnostics.rendering))}
            ${this.row(n(`troubleshooting.max_texture_size`),this.diagnostics.rendering.maxTextureSize??n(`troubleshooting.unknown`))}
            ${this.row(n(`troubleshooting.high_precision_shaders`),this.diagnostics.rendering.shaderHighp===!0?n(`troubleshooting.yes`):n(`troubleshooting.no`))}${this.row(n(`troubleshooting.gpu`),!this.diagnostics.rendering.gpu||this.diagnostics.rendering.gpu.unavailable?n(`troubleshooting.unavailable`):`${this.diagnostics.rendering.gpu.vendor} — ${this.diagnostics.rendering.gpu.renderer}`)}
            ${this.infoTip(n(`troubleshooting.gpu_tip`))}
          `)}
        ${this.section(n(`troubleshooting.power`),o`
            ${this.diagnostics.power.unavailable?this.row(n(`troubleshooting.battery`),n(`troubleshooting.unavailable`)):o`
                    ${this.row(n(`troubleshooting.charging`),this.diagnostics.power.charging?n(`troubleshooting.yes`):n(`troubleshooting.no`))}
                    ${this.row(n(`troubleshooting.battery_level`),this.diagnostics.power.level)}
                  `}
            ${this.infoTip(n(`troubleshooting.power_saving_tip`))}
          `)}
      </div>
    `}infoTip(e,t){return o`
      <div
        class="mt-2 ${t?`bg-orange-500/10`:`bg-white/10`} flex gap-2 text-white py-1 px-3 rounded-sm  border-1 ${t?`border-orange-400`:`border-white/40`}"
      >
        <img src="${u}" class="w-4" />
        ${e}
      </div>
    `}onOpen(){this.initialized||(this.initialized=!0,this.loadDiagnostics())}section(e,t){return o`
      <div class="px-4 py-3">
        <h4
          class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400"
        >
          ${e}
        </h4>
        <div class="space-y-1">${t}</div>
      </div>
    `}row(e,t){return o`
      <div class="flex justify-between gap-4 text-sm">
        <span class="text-slate-400">${e}</span>
        <span class="text-right text-white max-w-100">${t}</span>
      </div>
    `}async copyDiagnostics(){if(!this.diagnostics)return;let e="```json\n"+JSON.stringify(this.diagnostics,null,2)+"\n```";await navigator.clipboard.writeText(e),window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:o`${n(`troubleshooting.copied_to_clipboard`)}`,type:`info`,duration:3e3}}))}describeRenderer(e){return e.gpu?.software?n(`troubleshooting.software_rendering`):e.type===`Canvas2D`?n(`troubleshooting.canvas_2d_no_gpu`):`${e.type}`}close(){let e=this.isOpen();this.unregisterEscapeHandler(),this.onClose(),this.inline?(this.style.pointerEvents=`none`,e&&window.showPage?.(`page-help`)):this.modalEl?.close()}};a([i({type:String})],d.prototype,`markdown`,void 0),a([i({type:Object})],d.prototype,`diagnostics`,void 0),a([i({type:Boolean})],d.prototype,`loading`,void 0),d=a([r(`troubleshooting-modal`)],d);export{d as TroubleshootingModal};
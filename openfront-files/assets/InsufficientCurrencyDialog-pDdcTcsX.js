import{$i as e,Ji as t,ea as n,oa as r,ra as i,ta as a,yi as o}from"./index-Cv-L6ZYS.js";var s=class extends a{constructor(...e){super(...e),this.info=null}createRenderRoot(){return this}close(){this.dispatchEvent(new CustomEvent(`close`))}render(){let e=this.info;return e?r`<confirm-dialog
      .heading=${t(`store.insufficient_currency_title`,{currency:e.currency})}
      .message=${t(`store.insufficient_currency_body`,{amount:e.shortfall,currency:e.currency,item:e.item})}
      variant="warning"
      .wide=${!0}
      .showClose=${!0}
      .buttons=${e.canTopUp?`confirmOnly`:`none`}
      .confirmText=${e.canTopUp?t(`store.purchase_currency`,{currency:e.currency}):``}
      @cancel=${()=>this.close()}
      @confirm=${()=>{this.close(),window.location.href=`/#modal=store&tab=packs`}}
    ></confirm-dialog>`:i}};o([e({attribute:!1})],s.prototype,`info`,void 0),s=o([n(`insufficient-currency-dialog`)],s);
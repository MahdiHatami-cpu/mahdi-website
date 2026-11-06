import{$i as e,Wi as t,Xi as n,Yi as r,Zi as i,hi as a,na as o}from"./index-Bgp4WXlw.js";var s=class extends i{constructor(...e){super(...e),this.info=null}createRenderRoot(){return this}close(){this.dispatchEvent(new CustomEvent(`close`))}render(){let n=this.info;return n?o`<confirm-dialog
      .heading=${t(`store.insufficient_currency_title`,{currency:n.currency})}
      .message=${t(`store.insufficient_currency_body`,{amount:n.shortfall,currency:n.currency,item:n.item})}
      variant="warning"
      .wide=${!0}
      .showClose=${!0}
      .buttons=${n.canTopUp?`confirmOnly`:`none`}
      .confirmText=${n.canTopUp?t(`store.purchase_currency`,{currency:n.currency}):``}
      @cancel=${()=>this.close()}
      @confirm=${()=>{this.close(),window.location.href=`/#modal=store&tab=packs`}}
    ></confirm-dialog>`:e}};a([r({attribute:!1})],s.prototype,`info`,void 0),s=a([n(`insufficient-currency-dialog`)],s);
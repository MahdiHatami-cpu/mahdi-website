import{$t as e,Qt as t,Wi as n,Xi as r,Yi as i,hi as a,na as o,po as s}from"./index-_hMxvV3p.js";import{renderMarkdown as c}from"./Markdown-D-rSmgM6.js";var l=/(?<!\()\bhttps:\/\/github\.com\/openfrontio\/OpenFrontIO\/pull\/(\d+)\b/g,u=/(?<!\()\bhttps:\/\/github\.com\/openfrontio\/OpenFrontIO\/compare\/([\w.-]+)\b/g,d=/(^|[^\w/[`])@([a-z\d](?:[a-z\d-]{0,37}[a-z\d])?)(?![\w-])/gim;function f(e){return e.replace(/^([^\-*\s].*?) \*\*(.+?)\*\*$/gm,`## $1 $2`).replace(l,(e,t)=>`[#${t}](https://github.com/openfrontio/OpenFrontIO/pull/${t})`).replace(u,(e,t)=>`[${t}](https://github.com/openfrontio/OpenFrontIO/compare/${t})`).replace(d,(e,t,n)=>`${t}[@${n}](https://github.com/${n})`)}var p=class extends e{constructor(...e){super(...e),this.routerName=`news`,this.markdown=`Loading...`,this.initialized=!1}renderHeaderSlot(){return t({title:n(`news.title`),onBack:()=>this.close(),ariaLabel:n(`common.back`)})}renderBody(){return o`
      <div
        class="prose prose-invert prose-sm max-w-none px-6 py-3
          [&_a]:text-blue-400 [&_a:hover]:text-blue-300 transition-colors
          [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-white [&_h1]:border-b [&_h1]:border-white/10 [&_h1]:pb-2
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-blue-200
          [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:text-blue-100
          [&_ul]:pl-5 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1
          [&_li]:text-gray-300 [&_li]:leading-relaxed
          [&_p]:text-gray-300 [&_p]:mb-3 [&_strong]:text-white [&_strong]:font-bold"
      >
        ${c(this.markdown,{includeImages:!0})}
      </div>
    `}onOpen(){this.initialized||(this.initialized=!0,fetch(s(`changelog.md`)).then(e=>e.ok?e.text():`Failed to load`).then(e=>f(e)).then(e=>this.markdown=e).catch(()=>this.markdown=`Failed to load`))}};a([i({type:String})],p.prototype,`markdown`,void 0),p=a([r(`news-modal`)],p);export{p as NewsModal};
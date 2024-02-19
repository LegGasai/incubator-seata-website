"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[34169],{96635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(74848),r=n(28453);const i={title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},s="Version Upgrade Guide",a={id:"ops/upgrade",title:"Version Upgrade Guide",description:"Seata upgrade.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.0/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/docs/ops/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.0/ops/upgrade.md",tags:[],version:"v2.0",frontMatter:{title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},sidebar:"docs",previous:{title:"Metrics Design",permalink:"/docs/dev/seata-mertics"},next:{title:"Version Maintenance Plan",permalink:"/docs/ops/version-maintain-plan"}},c={},d=[];function u(e){const t={h1:"h1",hr:"hr",p:"p",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"version-upgrade-guide",children:"Version Upgrade Guide"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)("h3",{children:"1. What compatibility matters need to be paid attention to when upgrading to seata 2.0.x? "}),"\n",(0,o.jsx)(n,{children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("mark",{children:"Notes"})}),"\nIf you upgrade from 1.8.x to 2.0.x, if you configure the Undolog or communication codec to FST, you need to change the serialization mode to something other than FST on the client before you can upgrade it on the server.\nNote: In version 2.0.0 of the server, there is a resource reentry issue in AT mode. For example, in a global transaction, if multiple local transactions make repeated data modifications that are not the same, registering multiple branches can lead to abnormal ordering of the two-phase commit. Therefore, if you encounter such scenarios, please refrain from upgrading to version 2.0.0 and consider upgrading to the latest snapshot or a higher version."]})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
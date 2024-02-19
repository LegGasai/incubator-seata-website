"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[87555],{29993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(74848),i=n(28453);const r={title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},o="Version Upgrade Guide",a={id:"ops/upgrade",title:"Version Upgrade Guide",description:"Seata upgrade.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.5/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/docs/v1.5/ops/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.5/ops/upgrade.md",tags:[],version:"v1.5",frontMatter:{title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},sidebar:"docs",previous:{title:"Metrics Design",permalink:"/docs/v1.5/dev/seata-mertics"},next:{title:"Multi-configuration Isolation",permalink:"/docs/v1.5/ops/multi-configuration-isolation"}},d={},c=[];function l(e){const t={a:"a",code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"version-upgrade-guide",children:"Version Upgrade Guide"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)("h3",{children:"1. What compatibility matters need to be paid attention to when upgrading to seata 1.5.0? "}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("mark",{children:"Notes"})}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"When the storage mode of seata-server is db, you need to pay attention to the table structure changes. You need to change the table structure before upgrading to 1.5.0:"}),"\n"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The table structure character set is uniformly adjusted from utf8 to utf8mb4."}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"global_table"})," adjustment index is adjusted from ",(0,s.jsx)(t.code,{children:"idx_gmt_modified_status"})," to ",(0,s.jsx)(t.code,{children:"idx_status_gmt_modified"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"lock_table"})," adds ",(0,s.jsx)(t.code,{children:"status"})," field, and adds ",(0,s.jsx)(t.code,{children:"idx_status"}),", ",(0,s.jsx)(t.code,{children:"idx_xid_and_branch_id"})," index."]}),"\n",(0,s.jsxs)(t.li,{children:["Add ",(0,s.jsx)(t.code,{children:"distributed_lock"})," table for seata-server asynchronous task scheduling.\nBefore upgrading to 1.5.0, please pay attention to the table structure changes. For details on the table structure, please ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/1.5.0/script/server/db",children:"click here"}),"."]}),"\n"]}),(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["TCC transaction mode adds anti-hanging function in 1.5.0. If you need to enable anti-hanging by Seata framework, you need to add ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/1.5.0/script/client/tcc/db",children:"this table"})," to the client business library in advance."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The first-stage method of TCC mode has been optimized. It is no longer necessary to define ",(0,s.jsx)(t.code,{children:"BusinessActionContext"})," as an interface parameter in the first stage. If ",(0,s.jsx)(t.code,{children:"BusinessActionContext"})," needs to be used in the first stage, it can be obtained through ",(0,s.jsx)(t.code,{children:"BusinessActionContextUtil.getContext()"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The internal structure of the redis registration center has been adjusted and is no longer backward compatible. If you use redis as the registration center of seata, please also upgrade both seata-all (seata-spring-boot-starter) and seata-server that the client depends on."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The transaction group configuration supports default values. In order to avoid ambiguity and reduce learning costs, the default transaction group is changed from ",(0,s.jsx)(t.code,{children:"my_test_tx_group"})," to ",(0,s.jsx)(t.code,{children:"default_tx_group"}),". It will be backward compatible in version 1.5.X."]}),"\n"]}),"\n"]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
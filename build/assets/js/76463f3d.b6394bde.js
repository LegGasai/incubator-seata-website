"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[83748],{70645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(74848),o=a(28453);const i={title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},r="Version Upgrade Guide",s={id:"ops/upgrade",title:"Version Upgrade Guide",description:"Seata upgrade.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/docs/v1.1/ops/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.1/ops/upgrade.md",tags:[],version:"v1.1",frontMatter:{title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},sidebar:"docs",previous:{title:"Metrics Design",permalink:"/docs/v1.1/dev/seata-mertics"},next:{title:"Multi-configuration Isolation",permalink:"/docs/v1.1/ops/multi-configuration-isolation"}},c={},d=[];function l(e){const t={a:"a",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"version-upgrade-guide",children:"Version Upgrade Guide"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)("h3",{children:"1. What compatibility matters need to be paid attention to when upgrading to seata 1.1.0? "}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("mark",{children:"Notes"})}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Pay attention to the compatibility of configuration items. Version 1.1.0 has unified the styles of configuration items.\nIf the program relies on seata-all, corresponding to the *.conf file, the naming style of the configuration items in the conf file is unified with a dot + camel case combination, ",(0,n.jsx)(t.a,{href:"/docs/user/configurations/",children:"1.1.0 Configuration Item Description"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/1.1.0/script/client/conf",children:"1.1.0 Configuration Reference"}),";\nIf the program depends on seata-spring-boot-starter, corresponding to *.properties or *.yml, the naming style of property and yml files is unified to the combination of dot + underscore.\n",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/1.1.0/script/client/spring",children:"1.1.0 Configuration Reference"})," What needs special attention is the 1.0.0 version configuration item seata.service\n.vgroup-mapping=default 1.1.0 changed to: seata.service.vgroup-mapping\n.my_test_tx_group=default, where my_test_tx_group represents the transaction group used by the program; 1.0.0 version configuration item seata.service.grouplist=127.0.0.1:8091, 1.1.0\nChange to: seata.service.grouplist.default=127.0.0.1:8091 where default represents the seata registration service name."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"seata-all does not enable automatic proxying of data sources by default. The original conf file configuration items in seata-all\nThe client.support.spring.datasource.autoproxy configuration item is invalid and is annotated by @EnableAutoDataSourceProxy\nInstead of annotation, the annotation parameter can choose to use jdk proxy or cglib proxy. When using HikariDataSource, it is recommended to use cglib proxy mode.\nseata-spring-boot-starter enables the data source proxy by default, and the corresponding data source automatic proxy configuration items remain unchanged from version 1.0.0."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["When using the spring cloud framework, you need to use ",(0,n.jsx)(t.a,{href:"https://github.com/alibaba/spring-cloud-alibaba",children:"Spring Cloud Alibaba"})," for seata\nTransmission of transaction context. So seata has integration dependencies with Spring Cloud Alibaba version, refer to ",(0,n.jsx)(t.a,{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",children:"version notes"}),"\nspring-cloud-alibaba-seata relied on seata-all before version 2.2.0.RELEASE. If you continue to use a lower version of spring-cloud-alibaba-seata, you can use a higher version of seata-all to replace the built-in seata-all version;\nSpring-cloud-alibaba-seata starts to rely on seata-spring-boot-starter internally starting from 2.2.0.RELEASE (inclusive). 2.2.0.RELEASE internally integrates seata-spring-boot-starter 1.0.0 and can be upgraded to seata-spring-boot-starter 1.1.0, seata-spring-boot-starter integrates seata-all, seata-spring-boot-starter wraps the autoconfig function for properties or yml configuration, in spring-cloud-alibaba-seata Before 2.2.0.RELEASE\nThe autoconfig function is supported by itself. Afterwards, the autoconfig about seata itself in spring-cloud-alibaba-seata is removed and is supported by seata-spring-boot-starter. Therefore, the lower version of spring-cloud-alibaba-seata can only be used with seata-all. Use, the higher version spring-cloud-alibaba-seata can only be used with seata-spring-boot-starter, with 2.2.0.RELEASE as the dividing point."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["When the TC side adopts db storage mode, the precision of gmt_create and gmt_modified fields is added to branch_table to accurately confirm the order of rollback.\n",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/1.1.0/script/server/db",children:"Reference for each database script"}),"."]}),"\n"]}),"\n"]})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>s});var n=a(96540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
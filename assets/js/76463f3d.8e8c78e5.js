"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[46796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),g=n,f=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88751:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},i="Version Upgrade Guide",s={unversionedId:"ops/upgrade",id:"version-v1.1/ops/upgrade",title:"Version Upgrade Guide",description:"Seata upgrade.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/docs/v1.1/ops/upgrade",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.1/ops/upgrade.md",tags:[],version:"v1.1",frontMatter:{title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},sidebar:"docs",previous:{title:"Metrics Design",permalink:"/docs/v1.1/dev/seata-mertics"},next:{title:"Multi-configuration Isolation",permalink:"/docs/v1.1/ops/multi-configuration-isolation"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"version-upgrade-guide"},"Version Upgrade Guide"),(0,n.kt)("hr",null),(0,n.kt)("h3",null,"1. What compatibility matters need to be paid attention to when upgrading to seata 1.1.0? "),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("mark",null,"Notes")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pay attention to the compatibility of configuration items. Version 1.1.0 has unified the styles of configuration items.\nIf the program relies on seata-all, corresponding to the ",(0,n.kt)("em",{parentName:"p"},".conf file, the naming style of the configuration items in the conf file is unified with a dot + camel case combination, ",(0,n.kt)("a",{parentName:"em",href:"https://seata.io/zh-cn/docs/user/configurations.html"},"1.1.0 Configuration Item Description"),", ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/seata/seata/tree/1.1.0/script/client/conf"},"1.1.0 Configuration Reference"),";\nIf the program depends on seata-spring-boot-starter, corresponding to "),".properties or *.yml, the naming style of property and yml files is unified to the combination of dot + underscore.\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.1.0/script/client/spring"},"1.1.0 Configuration Reference")," What needs special attention is the 1.0.0 version configuration item seata.service\n.vgroup-mapping=default 1.1.0 changed to: seata.service.vgroup-mapping\n.my_test_tx_group=default, where my_test_tx_group represents the transaction group used by the program; 1.0.0 version configuration item seata.service.grouplist=127.0.0.1:8091, 1.1.0\nChange to: seata.service.grouplist.default=127.0.0.1:8091 where default represents the seata registration service name.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"seata-all does not enable automatic proxying of data sources by default. The original conf file configuration items in seata-all\nThe client.support.spring.datasource.autoproxy configuration item is invalid and is annotated by @EnableAutoDataSourceProxy\nInstead of annotation, the annotation parameter can choose to use jdk proxy or cglib proxy. When using HikariDataSource, it is recommended to use cglib proxy mode.\nseata-spring-boot-starter enables the data source proxy by default, and the corresponding data source automatic proxy configuration items remain unchanged from version 1.0.0.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When using the spring cloud framework, you need to use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba"},"Spring Cloud Alibaba")," for seata\nTransmission of transaction context. So seata has integration dependencies with Spring Cloud Alibaba version, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"version notes"),"\nspring-cloud-alibaba-seata relied on seata-all before version 2.2.0.RELEASE. If you continue to use a lower version of spring-cloud-alibaba-seata, you can use a higher version of seata-all to replace the built-in seata-all version;\nSpring-cloud-alibaba-seata starts to rely on seata-spring-boot-starter internally starting from 2.2.0.RELEASE (inclusive). 2.2.0.RELEASE internally integrates seata-spring-boot-starter 1.0.0 and can be upgraded to seata-spring-boot-starter 1.1.0, seata-spring-boot-starter integrates seata-all, seata-spring-boot-starter wraps the autoconfig function for properties or yml configuration, in spring-cloud-alibaba-seata Before 2.2.0.RELEASE\nThe autoconfig function is supported by itself. Afterwards, the autoconfig about seata itself in spring-cloud-alibaba-seata is removed and is supported by seata-spring-boot-starter. Therefore, the lower version of spring-cloud-alibaba-seata can only be used with seata-all. Use, the higher version spring-cloud-alibaba-seata can only be used with seata-spring-boot-starter, with 2.2.0.RELEASE as the dividing point.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When the TC side adopts db storage mode, the precision of gmt_create and gmt_modified fields is added to branch_table to accurately confirm the order of rollback.\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.1.0/script/server/db"},"Reference for each database script"),".")))))}d.isMDXComponent=!0}}]);
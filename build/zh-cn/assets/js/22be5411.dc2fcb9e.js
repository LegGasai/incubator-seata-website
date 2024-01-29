"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[88893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||v[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Seata\u672f\u8bed\u8868",keywords:["Seata"],description:"Seata\u672f\u8bed\u3002"},i="Seata\u672f\u8bed",c={unversionedId:"overview/terminology",id:"version-v2.0/overview/terminology",title:"Seata\u672f\u8bed\u8868",description:"Seata\u672f\u8bed\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.0/overview/terminology.md",sourceDirName:"overview",slug:"/overview/terminology",permalink:"/zh-cn/docs/overview/terminology",draft:!1,tags:[],version:"v2.0",frontMatter:{title:"Seata\u672f\u8bed\u8868",keywords:["Seata"],description:"Seata\u672f\u8bed\u3002"},sidebar:"docs",previous:{title:"\u53d1\u5c55\u5386\u53f2",permalink:"/zh-cn/docs/overview/history"},next:{title:"FAQ",permalink:"/zh-cn/docs/overview/faq"}},l={},s=[{value:"TC (Transaction Coordinator) - \u4e8b\u52a1\u534f\u8c03\u8005",id:"tc-transaction-coordinator---\u4e8b\u52a1\u534f\u8c03\u8005",level:4},{value:"TM (Transaction Manager) - \u4e8b\u52a1\u7ba1\u7406\u5668",id:"tm-transaction-manager---\u4e8b\u52a1\u7ba1\u7406\u5668",level:4},{value:"RM (Resource Manager) - \u8d44\u6e90\u7ba1\u7406\u5668",id:"rm-resource-manager---\u8d44\u6e90\u7ba1\u7406\u5668",level:4}],u={toc:s},p="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seata\u672f\u8bed"},"Seata\u672f\u8bed"),(0,o.kt)("h4",{id:"tc-transaction-coordinator---\u4e8b\u52a1\u534f\u8c03\u8005"},"TC (Transaction Coordinator) - \u4e8b\u52a1\u534f\u8c03\u8005"),(0,o.kt)("p",null,"\u7ef4\u62a4\u5168\u5c40\u548c\u5206\u652f\u4e8b\u52a1\u7684\u72b6\u6001\uff0c\u9a71\u52a8\u5168\u5c40\u4e8b\u52a1\u63d0\u4ea4\u6216\u56de\u6eda\u3002"),(0,o.kt)("h4",{id:"tm-transaction-manager---\u4e8b\u52a1\u7ba1\u7406\u5668"},"TM (Transaction Manager) - \u4e8b\u52a1\u7ba1\u7406\u5668"),(0,o.kt)("p",null,"\u5b9a\u4e49\u5168\u5c40\u4e8b\u52a1\u7684\u8303\u56f4\uff1a\u5f00\u59cb\u5168\u5c40\u4e8b\u52a1\u3001\u63d0\u4ea4\u6216\u56de\u6eda\u5168\u5c40\u4e8b\u52a1\u3002"),(0,o.kt)("h4",{id:"rm-resource-manager---\u8d44\u6e90\u7ba1\u7406\u5668"},"RM (Resource Manager) - \u8d44\u6e90\u7ba1\u7406\u5668"),(0,o.kt)("p",null,"\u7ba1\u7406\u5206\u652f\u4e8b\u52a1\u5904\u7406\u7684\u8d44\u6e90\uff0c\u4e0eTC\u4ea4\u8c08\u4ee5\u6ce8\u518c\u5206\u652f\u4e8b\u52a1\u548c\u62a5\u544a\u5206\u652f\u4e8b\u52a1\u7684\u72b6\u6001\uff0c\u5e76\u9a71\u52a8\u5206\u652f\u4e8b\u52a1\u63d0\u4ea4\u6216\u56de\u6eda\u3002"))}v.isMDXComponent=!0}}]);
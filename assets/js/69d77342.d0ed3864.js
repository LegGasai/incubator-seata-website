"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[80069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59931:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Seata TCC Module Source Code Analysis",author:"runze.zhao",keywords:["Seata","distributed transaction"],date:"2019/12/25"},i=void 0,c={permalink:"/blog/seata-analysis-tcc-modular",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-analysis-tcc-modular.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-analysis-tcc-modular.md",title:"Seata TCC Module Source Code Analysis",description:"",date:"2019-12-25T00:00:00.000Z",formattedDate:"December 25, 2019",tags:[],readingTime:0,hasTruncateMarker:!1,authors:[{name:"runze.zhao"}],frontMatter:{title:"Seata TCC Module Source Code Analysis",author:"runze.zhao",keywords:["Seata","distributed transaction"],date:"2019/12/25"},prevItem:{title:"Source Code Analysis of Seata-XID Propagation in Dubbo",permalink:"/blog/seata-analysis-dubbo-transmit-xid"},nextItem:{title:"Seata Community Meetup\xb7Hangzhou Station",permalink:"/blog/seata-community-meetup-hangzhou-ready"}},u={authorsImageUrls:[void 0]},s=[],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[47024],{8909:(e,t,h)=>{h.r(t),h.d(t,{assets:()=>n,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=h(74848),a=h(28453);const i={title:"\u53d1\u5e03\u8bf4\u660e",keywords:["Seata","\u53d1\u5e03\u8bf4\u660e"],description:"\u672c\u6587\u5c06\u5411\u4f60\u4ecb\u7ecd\u5982\u4f55\u70b9\u51fb\u4e86\u89e3\u5404\u7248\u672c\u8be6\u60c5\u548c\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879\u3002"},l="\u53d1\u5e03\u8bf4\u660e",c={id:"release-notes",title:"\u53d1\u5e03\u8bf4\u660e",description:"\u672c\u6587\u5c06\u5411\u4f60\u4ecb\u7ecd\u5982\u4f55\u70b9\u51fb\u4e86\u89e3\u5404\u7248\u672c\u8be6\u60c5\u548c\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/zh-cn/docs/v1.2/release-notes",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/release-notes.md",tags:[],version:"v1.2",frontMatter:{title:"\u53d1\u5e03\u8bf4\u660e",keywords:["Seata","\u53d1\u5e03\u8bf4\u660e"],description:"\u672c\u6587\u5c06\u5411\u4f60\u4ecb\u7ecd\u5982\u4f55\u70b9\u51fb\u4e86\u89e3\u5404\u7248\u672c\u8be6\u60c5\u548c\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879\u3002"},sidebar:"release-notes"},n={},r=[{value:"Seata",id:"seata",level:2},{value:"1.2.0 (2020-04-20)",id:"120-2020-04-20",level:3},{value:"Seata 1.2.0",id:"seata-120",level:3},{value:"feature\uff1a",id:"feature",level:3},{value:"bugfix\uff1a",id:"bugfix",level:3},{value:"optimize\uff1a",id:"optimize",level:3},{value:"Link",id:"link",level:4}];function o(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:h}=t;return h||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u53d1\u5e03\u8bf4\u660e",children:"\u53d1\u5e03\u8bf4\u660e"}),"\n",(0,s.jsx)(t.h2,{id:"seata",children:"Seata"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["GitHub: ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata",children:"https://github.com/apache/incubator-seata"})]}),"\n",(0,s.jsxs)(t.p,{children:["\u53d1\u5e03\u8bf4\u660e: ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/releases",children:"https://github.com/apache/incubator-seata/releases"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"120-2020-04-20",children:"1.2.0 (2020-04-20)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/archive/v1.2.0.zip",children:"source"})," |\n",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/releases/download/v1.2.0/seata-server-1.2.0.zip",children:"binary"})]}),"\n",(0,s.jsxs)(h,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("mark",{children:"Release notes"})}),(0,s.jsx)(t.h3,{id:"seata-120",children:"Seata 1.2.0"}),(0,s.jsx)(t.p,{children:"Seata 1.2.0 \u53d1\u5e03\u3002"}),(0,s.jsx)(t.p,{children:"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"}),(0,s.jsx)(t.p,{children:"\u6b64\u7248\u672c\u66f4\u65b0\u5982\u4e0b\uff1a"}),(0,s.jsx)(t.h3,{id:"feature",children:"feature\uff1a"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2381",children:"#2381"}),"] \u652f\u6301 XA \u4e8b\u52a1\u6a21\u5f0f"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2206",children:"#2206"}),"] \u652f\u6301 REQUIRED\u3001REQUIRES_NEW\u3001SUPPORTS \u548c NOT_SUPPORTED \u4e8b\u52a1\u4f20\u64ad\u6a21\u5f0f"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2112",children:"#2112"}),"] \u652f\u6301 SQL \u7684\u6279\u91cf\u66f4\u65b0\u548c\u6279\u91cf\u5220\u9664"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2275",children:"#2275"}),"] TCC \u6a21\u5f0f\u652f\u6301 HSF \u8c03\u7528"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2108",children:"#2108"}),"] \u652f\u6301 zip\u3001bzip2\u30017z \u538b\u7f29"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2328",children:"#2328"}),"] server \u652f\u6301 mysql5.x \u548c mysql8.x \u7c7b\u9694\u79bb\u52a0\u8f7d"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2367",children:"#2367"}),"] \u652f\u6301 Nacos 1.2 \u6743\u9650\u914d\u7f6e"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2359",children:"#2359"}),"] \u652f\u6301 NEVER\u3001MANDATORY \u4e8b\u52a1\u4f20\u64ad\u6a21\u5f0f \u548c \u4e8b\u52a1\u6302\u8d77\u6062\u590d API"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2418",children:"#2418"}),"] \u652f\u6301 fst \u5e8f\u5217\u5316"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2135",children:"#2135"}),"] \u652f\u6301 SPI \u5b9a\u4e49 scope"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2370",children:"#2370"}),"] \u652f\u6301 failureHandler \u4ece Spring \u5bb9\u5668\u6ce8\u5165"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2481",children:"#2481"}),"] \u652f\u6301\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u7684 max-wait \u914d\u7f6e"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2379",children:"#2379"}),"] \u652f\u6301\u4f7f\u7528 Nacos \u6ce8\u518c\u670d\u52a1\u65f6\u81ea\u5b9a\u4e49\u670d\u52a1\u540d"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2308",children:"#2308"}),"] \u589e\u52a0 Saga \u6a21\u5f0f\u662f\u5426\u6ce8\u518c\u5206\u652f\u7684\u5f00\u5173"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2301",children:"#2301"}),"] \u652f\u6301 postgresql \u7684 default \u548c nextval \u8bed\u6cd5\u652f\u6301"]}),"\n"]}),(0,s.jsx)(t.h3,{id:"bugfix",children:"bugfix\uff1a"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2575",children:"#2575"}),"] \u4fee\u590d executeBatch \u65e0\u6cd5\u83b7\u53d6 targetSql \u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2283",children:"#2283"}),"] \u4fee\u590d oracle \u83b7\u53d6 tableMeta \u5931\u8d25\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2312",children:"#2312"}),"] \u4fee\u590d SeataDataSourceBeanPostProcessor \u542f\u52a8\u5224\u65ad\u6761\u4ef6"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2309",children:"#2309"}),"] \u4fee\u590d\u6570\u636e\u5e93 timestamp \u7c7b\u578b\u53cd\u5e8f\u5217\u5316\u4e22\u5931 nano \u7cbe\u5ea6\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2292",children:"#2292"}),"] \u4fee\u590d\u4e00\u4e9b\u672a\u8f6c\u9a7c\u5cf0\u98ce\u683c\u7684\u914d\u7f6e\u9879"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2306",children:"#2306"}),"] \u4fee\u590d maven-enforcer-plugin \u6253\u5305\u7248\u672c\u7684\u9650\u5236"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2287",children:"#2287"}),"] \u4fee\u590d\u5168\u5c40\u9501\u91cd\u8bd5\u65f6 connection context \u672a\u79fb\u9664\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2361",children:"#2361"}),"] \u4fee\u590d\u9519\u8bef\u7684\u914d\u7f6e\u9879\u540d\u79f0"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2333",children:"#2333"}),"] \u4fee\u590d\u7531\u4e8e\u810f\u5199\u5bfc\u81f4\u56de\u6eda\u5931\u8d25\u9519\u8bef\u7684\u65e5\u5fd7\u8f93\u51fa"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2390",children:"#2390"}),"] \u4fee\u590d\u540c\u6b65\u811a\u672c\u4e2d\u914d\u7f6e\u9879\u5bf9\u4e8e\u542b\u6709\u7a7a\u683c\u7684\u5904\u7406"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2408",children:"#2408"}),"] \u4fee\u590d postgresql undo_log \u5efa\u8868\u811a\u672c\u7f3a\u5c11 sequence"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2391",children:"#2391"}),"] \u4fee\u590d\u83b7\u53d6\u914d\u7f6e\u5f02\u5e38\u5bfc\u81f4\u7684 CPU \u98d9\u5347\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2427",children:"#2427"}),"] \u4fee\u590d debug\u65f6 \u8c03\u7528StringUtils.toString(o) \u6808\u6ea2\u51fa\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2384",children:"#2384"}),"] \u4fee\u590d Saga\u6a21\u5f0f StateMachineRepository#getStateMachineById \u65b9\u6cd5\u4f1a\u8986\u76d6\u5185\u5b58\u4e2d\u7f13\u5b58\u7684\u6700\u65b0\u7248\u672c\u7684\u72b6\u6001\u673a\u5b9a\u4e49\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2323",children:"#2323"}),"] \u4fee\u590d\u6570\u636e\u6e90\u81ea\u52a8\u4ee3\u7406\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2466",children:"#2466"}),"] \u4fee\u590d\u6587\u4ef6\u5b58\u50a8\u6a21\u5f0f\u591a\u7ebf\u7a0b\u53d8\u91cf\u53ef\u89c1\u6027\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2349",children:"#2349"}),"] \u4fee\u590d\u6279\u91cf insert \u4e0d\u540c\u4e3b\u952e\u7c7b\u578b\u68c0\u67e5"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2479",children:"#2479"}),"] \u4fee\u590dpostgresql schema \u975e\u5c0f\u5199\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2449",children:"#2449"}),"] \u4fee\u590d server \u542f\u52a8\u65f6\u65e0\u6cd5\u83b7\u53d6\u8868\u7ed3\u6784\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2505",children:"#2505"}),"] \u4fee\u590d session store \u8def\u5f84\u5224\u65ad\u6761\u4ef6"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2456",children:"#2456"}),"] \u4fee\u590d server \u6781\u7aef\u5f02\u5e38\u60c5\u51b5\u4e0b\u7f16\u7801\u9519\u8bef\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2495",children:"#2495"}),"] \u4fee\u590d NPE \u548c\u51cf\u5c11lockKey \u4e3a null \u65f6\u7684\u5206\u652f\u6ce8\u518c\u8bf7\u6c42"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2490",children:"#2490"}),"] \u4fee\u590d RpcContext.addResource \u53c2\u6570\u4e3a null \u7684\u5904\u7406\u5224\u65ad"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2419",children:"#2419"}),"] \u4fee\u590d http \u90e8\u5206\u7684\u96c6\u6210\u6d4b\u8bd5\u5931\u8d25\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2535",children:"#2535"}),"] \u4fee\u590d config.txt \u4e2d\u9519\u8bef\u7684\u914d\u7f6e\u540d\u79f0"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2524",children:"#2524"}),"] \u4fee\u590d\u5ba2\u6237\u7aef\u6ce8\u518c\u670d\u52a1\u540d\u914d\u7f6e\u5197\u4f59\u5bfc\u81f4\u7684\u914d\u7f6e\u4e0d\u4e00\u81f4\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2473",children:"#2473"}),"] \u4fee\u590d\u6587\u4ef6\u5b58\u50a8\u6a21\u5f0f\u5237\u76d8\u6761\u4ef6\u7684\u5224\u65ad\u903b\u8f91"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2455",children:"#2455"}),"] \u4fee\u590d\u5b50\u6a21\u5757\u4e0b\u65e0\u6cd5\u6267\u884ccopyright \u548c checkstyle maven \u63d2\u4ef6\u95ee\u9898"]}),"\n"]}),(0,s.jsx)(t.h3,{id:"optimize",children:"optimize\uff1a"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2409",children:"#2409"}),"] \u5f53 undolog \u548c lockKey \u4e3a\u7a7a\u65f6\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684db \u548c server \u4ea4\u4e92"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2329",children:"#2329"}),"] \u6309\u7167\u4e0d\u540c\u7684\u5b58\u50a8\u6a21\u5f0f\u91cd\u6784\u62bd\u8c61\u76f8\u5173\u903b\u8f91"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2354",children:"#2354"}),"] \u4f18\u5316 spring cloud config \u4e0d\u652f\u6301 listener \u7684\u903b\u8f91"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2320",children:"#2320"}),"] \u4f18\u5316 protostuff \u548c kryo \u5e8f\u5217\u5316 timestamp \u7c7b\u578b\u7684\u903b\u8f91\uff0c\u63d0\u5347\u5e8f\u5217\u5316\u6027\u80fd"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2307",children:"#2307"}),"] \u4f18\u5316\u4e8b\u52a1\u6a21\u5f0f\u5207\u6362\u65f6\u7684\u4e8b\u52a1\u4e0a\u4e0b\u6587\u903b\u8f91"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2364",children:"#2364"}),"] \u4f18\u5316\u542f\u52a8\u65f6\u4e0d\u5fc5\u8981\u7684\u7c7b\u521d\u59cb\u5316\u52a0\u8f7d"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2368",children:"#2368"}),"] \u589e\u52a0zk \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u7f3a\u5c11\u7684\u914d\u7f6e\u5c5e\u6027"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2351",children:"#2351"}),"] \u589e\u52a0\u83b7\u53d6\u672c\u5730\u5168\u5c40\u4e8b\u52a1\u72b6\u6001\u7684\u63a5\u53e3"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2529",children:"#2529"}),"] \u4f18\u5316 druid \u8fde\u63a5\u6c60\u53c2\u6570"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2288",children:"#2288"}),"] \u5ffd\u7565 mock \u6d4b\u8bd5\u90e8\u5206\u7684\u5355\u5143\u6d4b\u8bd5\u8986\u76d6\u5ea6"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2297",children:"#2297"}),"] \u79fb\u9664\u91cd\u590d pom \u4f9d\u8d56"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2336",children:"#2336"}),"] \u6dfb\u52a0\u4f7f\u7528\u7528\u6237\u7684 logo"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2348",children:"#2348"}),"] \u53bb\u9664\u91cd\u590d\u7684\u914d\u7f6e\u9879"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2362",children:"#2362"}),"] \u4f18\u5316\u6309\u9891\u7387\u6253\u5370\u5806\u6808 stackTraceLogger \u7684\u65b9\u6cd5"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2382",children:"#2382"}),"] \u4f18\u5316 RegistryFactory \u4e3a\u5355\u4f8b\u6a21\u5f0f \u548c RegistryType \u7684\u5224\u65ad\u903b\u8f91"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2400",children:"#2400"}),"] \u4f18\u5316 UUIDGenerator \u7684\u9b54\u6570\u903b\u8f91"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2397",children:"#2397"}),"] \u4fee\u590d typo"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2407",children:"#2407"}),"] \u4fee\u590d\u53ef\u80fd\u5bfc\u81f4 NPE \u7684\u903b\u8f91"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2402",children:"#2402"}),"] \u4f18\u5316 RM \u548c TM \u7684\u6ce8\u518c\u65e5\u5fd7"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2422",children:"#2422"}),"] \u589e\u52a0\u6587\u6863\u7684 script \u94fe\u63a5"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2440",children:"#2440"}),"] \u4f18\u5316\u8054\u7cfb\u6211\u4eec\u548c\u542f\u52a8\u65e5\u5fd7"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2445",children:"#2445"}),"] \u4f18\u5316 kryo \u548c fst \u7684\u6ce8\u518c\u65b9\u6cd5"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2372",children:"#2372"}),"] \u5c06 lock store sql \u91cd\u6784\u4e3a SPI \u5b9e\u73b0"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2453",children:"#2453"}),"] \u4f18\u5316\u4e0d\u5fc5\u8981\u7684 server \u914d\u7f6e\u9879"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2369",children:"#2369"}),"] \u5c06 log store sql \u91cd\u6784\u4e3a SPI \u5b9e\u73b0"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2526",children:"#2526"}),"] \u4f18\u5316 seata-spring-boot-starter \u7684\u542f\u52a8\u65e5\u5fd7"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2530",children:"#2530"}),"] \u79fb\u9664 netty \u7684 connPool"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2489",children:"#2489"}),"] \u4f18\u5316 exceptionHandler \u7684\u65b9\u6cd5\u7b7e\u540d"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2494",children:"#2494"}),"] \u79fb\u9664\u4e0d\u5fc5\u8981\u7684\u4ee3\u7801"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2523",children:"#2523"}),"] server \u6309\u7167\u9891\u7387\u8f93\u51fa\u4e0d\u6b63\u5e38\u4e8b\u52a1\u7684\u5f02\u5e38\u8be6\u7ec6\u5806\u6808\u4fe1\u606f"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2549",children:"#2549"}),"] \u4f18\u5316 ZookeeperConfiguration \u65e5\u5fd7\u7ea7\u522b\u548c\u5f02\u5e38\u4fe1\u606f\u4e0d\u6253\u5370\u7684\u95ee\u9898"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2558",children:"#2558"}),"] \u89c4\u8303\u7edf\u4e00 config \u548c server \u6a21\u5757\u7684\u65e5\u5fd7"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2464",children:"#2464"}),"] \u589e\u5f3a Saga \u72b6\u6001\u6d41\u7a0b\u8bbe\u8ba1\u5668"]}),"\n",(0,s.jsxs)(t.li,{children:["[",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/2553",children:"#2553"}),"] \u589e\u52a0\u4f7f\u7528\u540c\u6b65\u811a\u672c\u7684\u4e00\u4e9b\u8bf4\u660e"]}),"\n"]}),(0,s.jsx)(t.p,{children:"Thanks to these contributors for their code commits. Please report an unintended omission."}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/slievrly",children:"slievrly"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/funky-eyes",children:"funky-eyes"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/ph3636",children:"ph3636"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/lightClouds917",children:"lightClouds917"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/l81893521",children:"l81893521"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/jsbxyyx",children:"jsbxyyx"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/objcoding",children:"objcoding"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/CharmingRabbit",children:"CharmingRabbit"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/xingfudeshi",children:"xingfudeshi"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/lovepoem",children:"lovepoem"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/SevenSecondsOfMemory",children:"SevenSecondsOfMemory"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/zjinlei",children:"zjinlei"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/ggndnn",children:"ggndnn"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/tauntongo",children:"tauntongo"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/threefish",children:"threefish"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/helloworlde",children:"helloworlde"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/long187",children:"long187"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/jaspercloud",children:"jaspercloud"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/dk-lockdown",children:"dk-lockdown"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/wxbty",children:"wxbty"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/sharajava",children:"sharajava"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/ppj19891020",children:"ppj19891020"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/YuKongEr",children:"YuKongEr"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/Zh1Cheung",children:"Zh1Cheung"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/wangwei-ying",children:"wangwei-ying"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/mxszs",children:"mxszs"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/q294881866",children:"q294881866"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/HankDevelop",children:"HankDevelop"})}),"\n"]}),(0,s.jsx)(t.p,{children:"Also, we receive many valuable issues, questions and advices from our community. Thanks for you all."}),(0,s.jsx)(t.h4,{id:"link",children:"Link"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Seata:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata",children:"https://github.com/apache/incubator-seata"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Seata-Samples:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata-samples",children:"https://github.com/apache/incubator-seata-samples"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Release:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/releases",children:"https://github.com/apache/incubator-seata/releases"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"WebSite:"})," ",(0,s.jsx)(t.a,{href:"https://seata.apache.org",children:"https://seata.apache.org"})]}),"\n"]})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,h)=>{h.d(t,{R:()=>l,x:()=>c});var s=h(96540);const a={},i=s.createContext(a);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
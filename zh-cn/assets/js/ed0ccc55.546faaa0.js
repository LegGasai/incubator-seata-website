"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[98383],{39117:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=i(74848),s=i(28453);const r={title:"Seata \u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u4e0e\u964d\u7ea7\u5b9e\u73b0\u539f\u7406",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001Dynamic\u3001Config"],description:"\u8bb2\u8ff0\u4e86 Seata \u652f\u6301\u7684\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u662f\u5982\u4f55\u9002\u914d\u4e0d\u540c\u7684\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u4ee5\u53ca\u5982\u4f55\u5b9e\u73b0\u964d\u7ea7\u529f\u80fd\u3002",date:"2019/12/17"},a="\u524d\u8a00",c={permalink:"/zh-cn/blog/seata-dynamic-config-and-dynamic-disable",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-dynamic-config-and-dynamic-disable.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-dynamic-config-and-dynamic-disable.md",title:"Seata \u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u4e0e\u964d\u7ea7\u5b9e\u73b0\u539f\u7406",description:"\u8bb2\u8ff0\u4e86 Seata \u652f\u6301\u7684\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u662f\u5982\u4f55\u9002\u914d\u4e0d\u540c\u7684\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u4ee5\u53ca\u5982\u4f55\u5b9e\u73b0\u964d\u7ea7\u529f\u80fd\u3002",date:"2019-12-17T00:00:00.000Z",formattedDate:"2019\u5e7412\u670817\u65e5",tags:[],readingTime:7.97,hasTruncateMarker:!1,authors:[{name:"\u5f20\u4e58\u8f89"}],frontMatter:{title:"Seata \u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u4e0e\u964d\u7ea7\u5b9e\u73b0\u539f\u7406",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001Dynamic\u3001Config"],description:"\u8bb2\u8ff0\u4e86 Seata \u652f\u6301\u7684\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u662f\u5982\u4f55\u9002\u914d\u4e0d\u540c\u7684\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u4ee5\u53ca\u5982\u4f55\u5b9e\u73b0\u964d\u7ea7\u529f\u80fd\u3002",date:"2019/12/17"},unlisted:!1,prevItem:{title:"\u901a\u8fc7AOP\u52a8\u6001\u521b\u5efa/\u5173\u95edSeata\u5206\u5e03\u5f0f\u4e8b\u52a1",permalink:"/zh-cn/blog/seata-spring-boot-aop-aspectj"},nextItem:{title:"Seata \u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u539f\u7406",permalink:"/zh-cn/blog/seata-config-center"}},l={authorsImageUrls:[void 0]},o=[{value:"Nacos \u52a8\u6001\u8ba2\u9605\u5b9e\u73b0",id:"nacos-\u52a8\u6001\u8ba2\u9605\u5b9e\u73b0",level:2},{value:"file \u52a8\u6001\u8ba2\u9605\u5b9e\u73b0",id:"file-\u52a8\u6001\u8ba2\u9605\u5b9e\u73b0",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Seata \u7684\u52a8\u6001\u964d\u7ea7\u9700\u8981\u7ed3\u5408\u914d\u7f6e\u4e2d\u5fc3\u7684\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u529f\u80fd\u3002\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\uff0c\u5373\u901a\u8fc7\u914d\u7f6e\u4e2d\u5fc3\u76d1\u542c\u8ba2\u9605\uff0c\u6839\u636e\u9700\u8981\u8bfb\u53d6\u5df2\u66f4\u65b0\u7684\u7f13\u5b58\u503c\uff0cZK\u3001Apollo\u3001Nacos \u7b49\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u90fd\u6709\u73b0\u6210\u7684\u76d1\u542c\u5668\u53ef\u5b9e\u73b0\u52a8\u6001\u5237\u65b0\u914d\u7f6e\uff1b\u52a8\u6001\u964d\u7ea7\uff0c\u5373\u901a\u8fc7\u52a8\u6001\u66f4\u65b0\u6307\u5b9a\u914d\u7f6e\u53c2\u6570\u503c\uff0c\u4f7f\u5f97 Seata \u80fd\u591f\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u52a8\u6001\u63a7\u5236\u5168\u5c40\u4e8b\u52a1\u5931\u6548\uff08\u76ee\u524d\u53ea\u6709 AT \u6a21\u5f0f\u6709\u8fd9\u4e2a\u529f\u80fd\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u90a3\u4e48 Seata \u652f\u6301\u7684\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u662f\u5982\u4f55\u9002\u914d\u4e0d\u540c\u7684\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u4ee5\u53ca\u5982\u4f55\u5b9e\u73b0\u964d\u7ea7\u7684\u5462\uff1f\u4e0b\u9762\u4ece\u6e90\u7801\u7684\u5c42\u9762\u8be6\u7ec6\u7ed9\u5927\u5bb6\u8bb2\u89e3\u4e00\u756a\u3002"}),"\n",(0,t.jsx)(n.h1,{id:"\u52a8\u6001\u914d\u7f6e\u8ba2\u9605",children:"\u52a8\u6001\u914d\u7f6e\u8ba2\u9605"}),"\n",(0,t.jsx)(n.p,{children:"Seata \u914d\u7f6e\u4e2d\u5fc3\u6709\u4e00\u4e2a\u76d1\u542c\u5668\u57fa\u51c6\u63a5\u53e3\uff0c\u5b83\u4e3b\u8981\u6709\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\u548c default \u65b9\u6cd5\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"io.seata.config.ConfigurationChangeListener"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191216212442.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u76d1\u542c\u5668\u57fa\u51c6\u63a5\u53e3\u4e3b\u8981\u6709\u4e24\u4e2a\u5b9e\u73b0\u7c7b\u578b\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5b9e\u73b0\u6ce8\u518c\u914d\u7f6e\u8ba2\u9605\u4e8b\u4ef6\u76d1\u542c\u5668\uff1a\u7528\u4e8e\u5b9e\u73b0\u5404\u79cd\u529f\u80fd\u7684\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\uff0c\u6bd4\u5982 GlobalTransactionalInterceptor \u5b9e\u73b0\u4e86 ConfigurationChangeListener\uff0c\u6839\u636e\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u5b9e\u73b0\u7684\u52a8\u6001\u964d\u7ea7\u529f\u80fd\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u5b9e\u73b0\u914d\u7f6e\u4e2d\u5fc3\u52a8\u6001\u8ba2\u9605\u529f\u80fd\u4e0e\u9002\u914d\uff1a\u5bf9\u4e8e\u76ee\u524d\u8fd8\u6ca1\u6709\u52a8\u6001\u8ba2\u9605\u529f\u80fd\u7684 file \u7c7b\u578b\u9ed8\u8ba4\u914d\u7f6e\u4e2d\u5fc3\uff0c\u53ef\u4ee5\u5b9e\u73b0\u8be5\u57fa\u51c6\u63a5\u53e3\u6765\u5b9e\u73b0\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u529f\u80fd\uff1b\u5bf9\u4e8e\u963b\u585e\u8ba2\u9605\u9700\u8981\u53e6\u8d77\u4e00\u4e2a\u7ebf\u7a0b\u53bb\u6267\u884c\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u5b9e\u73b0\u8be5\u57fa\u51c6\u63a5\u53e3\u8fdb\u884c\u9002\u914d\uff0c\u8fd8\u53ef\u4ee5\u590d\u7528\u8be5\u57fa\u51c6\u63a5\u53e3\u7684\u7ebf\u7a0b\u6c60\uff1b\u4ee5\u53ca\u8fd8\u6709\u5f02\u6b65\u8ba2\u9605\uff0c\u6709\u8ba2\u9605\u5355\u4e2a key\uff0c\u6709\u8ba2\u9605\u591a\u4e2a key \u7b49\u7b49\uff0c\u6211\u4eec\u90fd\u53ef\u4ee5\u5b9e\u73b0\u8be5\u57fa\u51c6\u63a5\u53e3\u4ee5\u9002\u914d\u5404\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"nacos-\u52a8\u6001\u8ba2\u9605\u5b9e\u73b0",children:"Nacos \u52a8\u6001\u8ba2\u9605\u5b9e\u73b0"}),"\n",(0,t.jsx)(n.p,{children:"Nacos \u6709\u81ea\u5df1\u5185\u90e8\u5b9e\u73b0\u7684\u76d1\u542c\u5668\uff0c\u56e0\u6b64\u76f4\u63a5\u76f4\u63a5\u7ee7\u627f\u5b83\u5185\u90e8\u62bd\u8c61\u76d1\u542c\u5668 AbstractSharedListener\uff0c\u5b9e\u73b0\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191223212237.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4e0a\uff0c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"dataId\uff1a\u4e3a\u8ba2\u9605\u7684\u914d\u7f6e\u5c5e\u6027\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"listener\uff1a\u914d\u7f6e\u8ba2\u9605\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u7528\u4e8e\u5c06\u5916\u90e8\u4f20\u5165\u7684 listener \u4f5c\u4e3a\u4e00\u4e2a wrapper\uff0c\u6267\u884c\u771f\u6b63\u7684\u53d8\u66f4\u903b\u8f91\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0cnacos \u5e76\u6ca1\u6709\u4f7f\u7528 ConfigurationChangeListener \u5b9e\u73b0\u81ea\u5df1\u7684\u76d1\u542c\u914d\u7f6e\uff0c\u4e00\u65b9\u9762\u662f\u56e0\u4e3a Nacos \u672c\u8eab\u5df2\u6709\u76d1\u542c\u8ba2\u9605\u529f\u80fd\uff0c\u4e0d\u9700\u8981\u81ea\u5df1\u518d\u53bb\u5b9e\u73b0\uff1b\u53e6\u4e00\u65b9\u9762\u56e0\u4e3a nacos \u5c5e\u4e8e\u975e\u963b\u585e\u5f0f\u8ba2\u9605\uff0c\u4e0d\u9700\u8981\u590d\u7528 ConfigurationChangeListener \u7684\u7ebf\u7a0b\u6c60\uff0c\u5373\u65e0\u9700\u8fdb\u884c\u9002\u914d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6dfb\u52a0\u8ba2\u9605\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191223213347.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Nacos \u914d\u7f6e\u4e2d\u5fc3\u4e3a\u67d0\u4e2a dataId \u6dfb\u52a0\u8ba2\u9605\u7684\u903b\u8f91\u5f88\u7b80\u5355\uff0c\u7528 dataId \u548c listener \u521b\u5efa\u4e00\u4e2a NacosListener \u8c03\u7528 configService#addListener \u65b9\u6cd5\uff0c\u628a NacosListener \u4f5c\u4e3a dataId \u7684\u76d1\u542c\u5668\uff0cdataId \u5c31\u5b9e\u73b0\u4e86\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"file-\u52a8\u6001\u8ba2\u9605\u5b9e\u73b0",children:"file \u52a8\u6001\u8ba2\u9605\u5b9e\u73b0"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u5b83\u7684\u5b9e\u73b0\u7c7b FileListener \u4e3e\u4f8b\u5b50\uff0c\u5b83\u7684\u5b9e\u73b0\u903b\u8f91\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191215151642.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4e0a\uff0c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"dataId\uff1a\u4e3a\u8ba2\u9605\u7684\u914d\u7f6e\u5c5e\u6027\uff1b"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["listener\uff1a\u914d\u7f6e\u8ba2\u9605\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u7528\u4e8e\u5c06\u5916\u90e8\u4f20\u5165\u7684 listener \u4f5c\u4e3a\u4e00\u4e2a wrapper\uff0c\u6267\u884c\u771f\u6b63\u7684\u53d8\u66f4\u903b\u8f91\uff0c\u8fd9\u91cc\u7279\u522b\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,t.jsx)(n.strong,{children:"\u8be5\u76d1\u542c\u5668\u4e0e FileListener \u540c\u6837\u5b9e\u73b0\u4e86 ConfigurationChangeListener \u63a5\u53e3\uff0c\u53ea\u4e0d\u8fc7 FileListener \u662f\u7528\u4e8e\u7ed9 file \u63d0\u4f9b\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u529f\u80fd\uff0c\u800c listener \u7528\u4e8e\u6267\u884c\u914d\u7f6e\u8ba2\u9605\u4e8b\u4ef6"}),"\uff1b"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"executor\uff1a\u7528\u4e8e\u5904\u7406\u914d\u7f6e\u53d8\u66f4\u903b\u8f91\u7684\u7ebf\u7a0b\u6c60\uff0c\u5728 ConfigurationChangeListener#onProcessEvent \u65b9\u6cd5\u4e2d\u7528\u5230\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FileListener#onChangeEvent \u65b9\u6cd5\u7684\u5b9e\u73b0\u8ba9 file \u5177\u5907\u4e86\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u7684\u529f\u80fd"}),"\uff0c\u5b83\u7684\u903b\u8f91\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:"\u65e0\u9650\u5faa\u73af\u83b7\u53d6\u8ba2\u9605\u7684\u914d\u7f6e\u5c5e\u6027\u5f53\u524d\u7684\u503c\uff0c\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u65e7\u7684\u503c\uff0c\u5224\u65ad\u662f\u5426\u6709\u53d8\u66f4\uff0c\u5982\u679c\u6709\u53d8\u66f4\u5c31\u6267\u884c\u5916\u90e8\u4f20\u5165 listener \u7684\u903b\u8f91\u3002"}),"\n",(0,t.jsx)(n.p,{children:"ConfigurationChangeEvent \u7528\u4e8e\u4fdd\u5b58\u914d\u7f6e\u53d8\u66f4\u7684\u4e8b\u4ef6\u7c7b\uff0c\u5b83\u7684\u6210\u5458\u5c5e\u6027\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191215175232.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc\u7684 getConfig \u65b9\u6cd5\u662f\u5982\u4f55\u611f\u77e5 file \u914d\u7f6e\u7684\u53d8\u66f4\u5462\uff1f\u6211\u4eec\u70b9\u8fdb\u53bb\uff0c\u53d1\u73b0\u5b83\u6700\u7ec8\u7684\u903b\u8f91\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191215162713.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u53d1\u73b0\u5b83\u662f\u521b\u5efa\u4e00\u4e2a future \u7c7b\uff0c\u7136\u540e\u5305\u88c5\u6210\u4e00\u4e2a Runnable \u653e\u5165\u7ebf\u7a0b\u6c60\u4e2d\u5f02\u6b65\u6267\u884c\uff0c\u6700\u540e\u8c03\u7528 get \u65b9\u6cd5\u963b\u585e\u83b7\u53d6\u503c\uff0c\u90a3\u4e48\u6211\u4eec\u7ee7\u7eed\u5f80\u4e0b\u770b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191215170908.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"allowDynamicRefresh\uff1a\u52a8\u6001\u5237\u65b0\u914d\u7f6e\u5f00\u5173\uff1b"}),"\n",(0,t.jsx)(n.p,{children:"targetFileLastModified\uff1afile \u6700\u540e\u66f4\u6539\u7684\u65f6\u95f4\u7f13\u5b58\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0a\u903b\u8f91\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6 file \u6700\u540e\u66f4\u65b0\u7684\u65f6\u95f4\u503c tempLastModified\uff0c\u7136\u540e\u5bf9\u6bd4\u5bf9\u6bd4\u7f13\u5b58\u503c targetFileLastModified\uff0c\u5982\u679c tempLastModified > targetFileLastModified\uff0c\u8bf4\u660e\u671f\u95f4\u914d\u7f6e\u6709\u66f4\u6539\u8fc7\uff0c\u8fd9\u65f6\u5c31\u91cd\u65b0\u52a0\u8f7d file \u5b9e\u4f8b\uff0c\u66ff\u6362\u6389\u65e7\u7684 fileConfig\uff0c\u4f7f\u5f97\u540e\u9762\u7684\u64cd\u4f5c\u80fd\u591f\u83b7\u53d6\u5230\u6700\u65b0\u7684\u914d\u7f6e\u503c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u5c5e\u6027\u76d1\u542c\u5668\u7684\u903b\u8f91\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191215161103.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"configListenersMap \u4e3a FileConfiguration \u7684\u914d\u7f6e\u76d1\u542c\u5668\u7f13\u5b58\uff0c\u5b83\u7684\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"ConcurrentMap<String/*dataId*/, Set<ConfigurationChangeListener>> configListenersMap\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6570\u636e\u7ed3\u6784\u4e0a\u53ef\u770b\u51fa\uff0c\u6bcf\u4e2a\u914d\u7f6e\u5c5e\u6027\u53ef\u5173\u8054\u591a\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u6267\u884c onProcessEvent \u65b9\u6cd5\uff0c\u8fd9\u4e2a\u662f\u76d1\u542c\u5668\u57fa\u51c6\u63a5\u53e3\u91cc\u9762\u7684 default \u65b9\u6cd5\uff0c\u5b83\u4f1a\u8c03\u7528 onChangeEvent \u65b9\u6cd5\uff0c\u5373\u6700\u7ec8\u4f1a\u8c03\u7528 FileListener \u4e2d\u7684\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(n.h1,{id:"\u52a8\u6001\u964d\u7ea7",children:"\u52a8\u6001\u964d\u7ea7"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u4e86\u4ee5\u4e0a\u7684\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u529f\u80fd\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5b9e\u73b0 ConfigurationChangeListener \u76d1\u542c\u5668\uff0c\u5c31\u53ef\u4ee5\u505a\u5404\u79cd\u5404\u79cd\u7684\u529f\u80fd\uff0c\u76ee\u524d Seata \u53ea\u6709\u52a8\u6001\u964d\u7ea7\u6709\u7528\u5230\u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u7684\u529f\u80fd\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u300c",(0,t.jsx)(n.a,{href:"https://mp.weixin.qq.com/s/n9MHk47zSsFQmV-gBq_P1A",children:"Seata AT \u6a21\u5f0f\u542f\u52a8\u6e90\u7801\u5206\u6790"}),"\u300d\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u8bb2\u5230\uff0cSpring \u96c6\u6210 Seata \u7684\u9879\u76ee\u4e2d\uff0c\u5728 AT \u6a21\u5f0f\u542f\u52a8\u65f6\uff0c\u4f1a\u7528 \u7528GlobalTransactionalInterceptor \u4ee3\u66ff\u4e86\u88ab GlobalTransactional \u548c GlobalLock \u6ce8\u89e3\u7684\u65b9\u6cd5\uff0cGlobalTransactionalInterceptor \u5b9e\u73b0\u4e86 MethodInterceptor\uff0c\u6700\u7ec8\u4f1a\u6267\u884c invoker \u65b9\u6cd5\uff0c\u90a3\u4e48\u60f3\u8981\u5b9e\u73b0\u52a8\u6001\u964d\u7ea7\uff0c\u5c31\u53ef\u4ee5\u5728\u8fd9\u91cc\u505a\u624b\u811a\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728 GlobalTransactionalInterceptor \u4e2d\u52a0\u5165\u4e00\u4e2a\u6210\u5458\u53d8\u91cf\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"private volatile boolean disable; \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6784\u9020\u51fd\u6570\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u8d4b\u503c\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191215173221.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"ConfigurationKeys.DISABLE_GLOBAL_TRANSACTION\uff08service.disableGlobalTransaction\uff09\u8fd9\u4e2a\u53c2\u6570\u76ee\u524d\u6709\u4e24\u4e2a\u529f\u80fd\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728\u542f\u52a8\u65f6\u51b3\u5b9a\u662f\u5426\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\u540e\uff0c\u51b3\u5b9a\u662f\u5426\u964d\u7ea7\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5b9e\u73b0 ConfigurationChangeListener\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191215173358.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc\u7684\u903b\u8f91\u7b80\u5355\uff0c\u5c31\u662f\u5224\u65ad\u76d1\u542c\u4e8b\u4ef6\u662f\u5426\u5c5e\u4e8e ConfigurationKeys.DISABLE_GLOBAL_TRANSACTION \u914d\u7f6e\u5c5e\u6027\uff0c\u5982\u679c\u662f\uff0c\u76f4\u63a5\u66f4\u65b0 disable \u503c\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u63a5\u4e0b\u6765\u5728 GlobalTransactionalInterceptor#invoke \u4e2d\u505a\u70b9\u624b\u811a"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191215174155.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4e0a\uff0cdisable = true \u65f6\uff0c\u4e0d\u6267\u884c\u5168\u5c40\u4e8b\u52a1\u4e0e\u5168\u5c40\u9501\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u914d\u7f6e\u4e2d\u5fc3\u8ba2\u9605\u964d\u7ea7\u76d1\u542c\u5668"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"io.seata.spring.annotation.GlobalTransactionScanner#wrapIfNecessary"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191215174409.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Spring AOP \u8fdb\u884c wrap \u903b\u8f91\u8fc7\u7a0b\u4e2d\uff0c\u5f53\u524d\u914d\u7f6e\u4e2d\u5fc3\u5c06\u8ba2\u9605\u964d\u7ea7\u4e8b\u4ef6\u76d1\u542c\u5668\u3002"}),"\n",(0,t.jsx)(n.h1,{id:"\u4f5c\u8005\u7b80\u4ecb",children:"\u4f5c\u8005\u7b80\u4ecb"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f20\u4e58\u8f89\uff0c\u76ee\u524d\u5c31\u804c\u4e8e\u4e2d\u901a\u79d1\u6280\u4fe1\u606f\u4e2d\u5fc3\u6280\u672f\u5e73\u53f0\u90e8\uff0c\u62c5\u4efb Java \u5de5\u7a0b\u5e08\uff0c\u4e3b\u8981\u8d1f\u8d23\u4e2d\u901a\u6d88\u606f\u5e73\u53f0\u4e0e\u5168\u94fe\u8def\u538b\u6d4b\u9879\u76ee\u7684\u7814\u53d1\uff0c\u70ed\u7231\u5206\u4eab\u6280\u672f\uff0c\u5fae\u4fe1\u516c\u4f17\u53f7\u300c\u540e\u7aef\u8fdb\u9636\u300d\u4f5c\u8005\uff0c\u6280\u672f\u535a\u5ba2\uff08",(0,t.jsx)(n.a,{href:"https://objcoding.com/",children:"https://objcoding.com/"}),"\uff09\u535a\u4e3b\uff0cSeata Contributor\uff0cGitHub ID\uff1aobjcoding\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
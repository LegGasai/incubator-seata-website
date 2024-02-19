"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[51240],{3640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=r(74848),c=r(28453);const s={title:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Etcd3"],description:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3\u3002"},i="Etcd3 \u6ce8\u518c\u4e2d\u5fc3",d={id:"user/registry/etcd3",title:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3",description:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/user/registry/etcd3.md",sourceDirName:"user/registry",slug:"/user/registry/etcd3",permalink:"/zh-cn/docs/v1.7/user/registry/etcd3",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/user/registry/etcd3.md",tags:[],version:"v1.7",frontMatter:{title:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Etcd3"],description:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"Eureka \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.7/user/registry/eureka"},next:{title:"Consul \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.7/user/registry/consul"}},a={},o=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u589e\u52a0 Maven \u4f9d\u8d56",id:"\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"etcd3-\u6ce8\u518c\u4e2d\u5fc3",children:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,n.jsx)(t.p,{children:"Etcd3\u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0."}),"\n",(0,n.jsx)(t.h2,{id:"\u9884\u5907\u5de5\u4f5c",children:"\u9884\u5907\u5de5\u4f5c"}),"\n",(0,n.jsxs)(t.p,{children:["\u5f53\u60a8\u5c06",(0,n.jsx)(t.code,{children:"Etcd3"}),"\u6574\u5408\u5230\u60a8\u7684 Seata\u5de5\u7a0b\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 Etcd3 Server\u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Etcd3\u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,n.jsx)(t.a,{href:"https://etcd.io/docs/v3.5/quickstart",children:"Etcd3\u5feb\u901f\u5165\u95e8"}),"\u3002\u5efa\u8bae\u4f7f\u7528 Etcd3 ",(0,n.jsx)(t.code,{children:"3.5.0"})," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,n.jsx)(t.p,{children:"Seata \u878d\u5408 Etcd3 \u6ce8\u518c\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a\u201c\u589e\u52a0 Maven \u4f9d\u8d56\u201d\u4ee5\u53ca\u201c\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3\u201c\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"\u589e\u52a0-maven-\u4f9d\u8d56",children:"\u589e\u52a0 Maven \u4f9d\u8d56"}),"\n",(0,n.jsxs)(t.p,{children:["\u9996\u5148\uff0c\u60a8\u9700\u8981\u5c06 ",(0,n.jsx)(t.code,{children:"jetcd-core"})," \u7684 Maven \u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee ",(0,n.jsx)(t.code,{children:"pom.xml"})," \u6587\u4ef6\u4e2d\uff0c\u5efa\u8bae\u4f7f\u7528 jetcd-core ",(0,n.jsx)(t.code,{children:"0.3.0+"}),",",(0,n.jsx)(t.code,{children:"spring-cloud-starter-alibaba-seata"}),"\u7684\u7248\u672c\u4e0e\u5bf9\u5e94\u5fae\u670d\u52a1\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u8bf7\u53c2\u8003",(0,n.jsx)(t.a,{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",children:"\u7248\u672c\u8bf4\u660e"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>\u6700\u65b0\u7248</version>\n</dependency>\n        \x3c!-- Etcd3 \u5ba2\u6237\u7aef\u4f9d\u8d56 --\x3e\n<dependency>\n    <groupId>io.etcd</groupId>\n    <artifactId>jetcd-core</artifactId>\n    <version>0.3.0\u53ca\u4ee5\u4e0a</version>\n</dependency>\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",children:"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,n.jsxs)(t.p,{children:["\u5728 ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:(0,n.jsx)(t.strong,{children:"application.yml"})})," \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/client",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"seata:\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      my_test_tx_group: seata-server # \u6b64\u5904\u914d\u7f6e\u5bf9\u5e94Server\u7aef\u914d\u7f6eregistry.eureka.application\u7684\u503c\n  registry:\n    type: etcd3\n    etcd3:\n      server-addr: http://localhost:2379\n"})}),"\n",(0,n.jsx)(t.h3,{id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",children:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,n.jsxs)(t.p,{children:["\u5728 ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/server/config/registry.conf",children:"registry.conf"})," \u4e2d\u52a0\u5165\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/server",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'registry {\n  type = "etcd3"\n \n  etcd3 {\n    serverAddr = "http://localhost:2379"\n  }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\u5e94\u7528\u5c31\u53ef\u4ee5\u6b63\u5f0f\u4f53\u9a8c Seata \u670d\u52a1\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var n=r(96540);const c={},s=n.createContext(c);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
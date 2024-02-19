"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[40021],{71220:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(74848),n=t(28453);const s={title:"Seata Distributed Go Server Officially Open Source - Introduction to TaaS Design",author:"fagongzi(zhangxu19830126@gmail.com)",date:"2019/04/23",keywords:["seata","distributed transaction","high availability"]},r="Seata High-Availability Server TaaS Officially Open Source",o={permalink:"/blog/seata-analysis-go-server",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-analysis-go-server.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-analysis-go-server.md",title:"Seata Distributed Go Server Officially Open Source - Introduction to TaaS Design",description:"Preface",date:"2019-04-23T00:00:00.000Z",formattedDate:"April 23, 2019",tags:[],readingTime:4.05,hasTruncateMarker:!1,authors:[{name:"fagongzi(zhangxu19830126@gmail.com)"}],frontMatter:{title:"Seata Distributed Go Server Officially Open Source - Introduction to TaaS Design",author:"fagongzi(zhangxu19830126@gmail.com)",date:"2019/04/23",keywords:["seata","distributed transaction","high availability"]},unlisted:!1,prevItem:{title:"Design Principles of Distributed Transaction Middleware Seata",permalink:"/blog/seata-at-mode-design"},nextItem:{title:"Fescar Integration with Spring Cloud In-Depth Analysis of Source Code",permalink:"/blog/how-to-support-spring-cloud"}},c={authorsImageUrls:[void 0]},l=[{value:"Preface",id:"preface",level:3},{value:"Design Principles",id:"design-principles",level:3},{value:"Design",id:"design",level:3},{value:"High Performance",id:"high-performance",level:4},{value:"High Availability",id:"high-availability",level:4},{value:"Strong Consistency",id:"strong-consistency",level:4},{value:"Auto-Rebalance",id:"auto-rebalance",level:4},{value:"Fragment Replication Creation",id:"fragment-replication-creation",level:5},{value:"Fragment Replication Migration",id:"fragment-replication-migration",level:5},{value:"Online Quick Experience",id:"online-quick-experience",level:3},{value:"Local Quick Experience",id:"local-quick-experience",level:3},{value:"Seata Server Address",id:"seata-server-address",level:4},{value:"Seata UI",id:"seata-ui",level:4},{value:"About InfiniVision",id:"about-infinivision",level:3},{value:"About the Author",id:"about-the-author",level:3}];function h(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h3,{id:"preface",children:"Preface"}),"\n",(0,a.jsxs)(i.p,{children:["TaaS is a high-availability implementation of the Seata server (TC, Transaction Coordinator), written in ",(0,a.jsx)(i.code,{children:"Golang"}),". Taas has been contributed to the Seata open-source community by InfiniVision (",(0,a.jsx)(i.a,{href:"http://infinivision.cn",children:"http://infinivision.cn"}),") and is now officially open source."]}),"\n",(0,a.jsx)(i.p,{children:"Before Seata was open-sourced, we began to reference GTS and some open-source projects to implement the distributed transaction solution TaaS (Transaction as a Service)."}),"\n",(0,a.jsx)(i.p,{children:"After we completed the development of the TaaS server, Seata (then called Fescar) was open-sourced and attracted widespread attention from the open-source community. With Alibaba's platform influence and community activity, we believe that Seata will become the standard for open-source distributed transactions in the future. Therefore, we decided to make TaaS compatible with Seata."}),"\n",(0,a.jsx)(i.p,{children:"Upon discovering that Seata's server implementation was single-node and lacked high availability, we contacted the Seata community leaders and decided to open-source TaaS to contribute to the open-source community. We will also maintain it in the long term and keep it synchronized with Seata versions."}),"\n",(0,a.jsx)(i.p,{children:"Currently, the official Java high-availability version of Seata is also under development. TaaS and this high-availability version have different design philosophies and will coexist in the future."}),"\n",(0,a.jsxs)(i.p,{children:["TaaS has been open-sourced on GitHub (",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata-go-server",children:"https://github.com/apache/incubator-seata-go-server"}),"). We welcome everyone to try it out."]}),"\n",(0,a.jsx)(i.h3,{id:"design-principles",children:"Design Principles"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"High Performance: Performance scales linearly with the number of machines. Adding new machines to the cluster can improve performance."}),"\n",(0,a.jsx)(i.li,{children:"High Availability: If a machine fails, the system can still provide services externally, or the service can be restored externally in a short time (the time it takes to switch leaders)."}),"\n",(0,a.jsx)(i.li,{children:"Auto-Rebalance: When new machines are added to the cluster or machines are offline, the system can automatically perform load balancing."}),"\n",(0,a.jsx)(i.li,{children:"Strong Consistency: The system's metadata is stored consistently in multiple replicas."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"design",children:"Design"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"TaaS Design",src:t(3291).A+"",width:"828",height:"1003"})}),"\n",(0,a.jsx)(i.h4,{id:"high-performance",children:"High Performance"}),"\n",(0,a.jsxs)(i.p,{children:["TaaS's performance scales linearly with the number of machines. To support this feature, TaaS handles the smallest unit of global transactions called a ",(0,a.jsx)(i.code,{children:"Fragment"}),". The system sets the maximum concurrency of active global transactions supported by each Fragment upon startup. The system also samples each Fragment, and when it becomes overloaded, it generates new Fragments to handle more concurrency."]}),"\n",(0,a.jsx)(i.h4,{id:"high-availability",children:"High Availability"}),"\n",(0,a.jsxs)(i.p,{children:["Each ",(0,a.jsx)(i.code,{children:"Fragment"})," has multiple replicas and one leader to handle requests. When the leader fails, the system generates a new leader to handle requests. During the election process of the new leader, the Fragment does not provide services externally, typically for a few seconds."]}),"\n",(0,a.jsx)(i.h4,{id:"strong-consistency",children:"Strong Consistency"}),"\n",(0,a.jsxs)(i.p,{children:["TaaS itself does not store the metadata of global transactions. The metadata is stored in Elasticell (",(0,a.jsx)(i.a,{href:"https://github.com/deepfabric/elasticell",children:"https://github.com/deepfabric/elasticell"}),"), a distributed KV storage compatible with the Redis protocol. Elasticell ensures data consistency based on the Raft protocol."]}),"\n",(0,a.jsx)(i.h4,{id:"auto-rebalance",children:"Auto-Rebalance"}),"\n",(0,a.jsxs)(i.p,{children:["As the system runs, there will be many ",(0,a.jsx)(i.code,{children:"Fragments"})," and their replicas, resulting in uneven distribution of Fragments on each machine, especially when old machines are offline or new machines come online. When TaaS starts, it selects three nodes as schedulers, responsible for scheduling these ",(0,a.jsx)(i.code,{children:"Fragments"})," to ensure that the number of Fragments and the number of leaders on each machine are roughly equal. It also ensures that the number of replicas for each Fragment remains at the specified number."]}),"\n",(0,a.jsx)(i.h5,{id:"fragment-replication-creation",children:"Fragment Replication Creation"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Fragment Replication Creation",src:t(84335).A+"",width:"885",height:"596"})}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"At time t0, Fragment1 is created on machine Seata-TC1."}),"\n",(0,a.jsx)(i.li,{children:"At time t1, a replica of Fragment1, Fragment1', is created on machine Seata-TC2."}),"\n",(0,a.jsx)(i.li,{children:'At time t2, another replica of Fragment1, Fragment1", is created on machine Seata-TC3.'}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"By time t2, all three replicas of Fragment1 are created."}),"\n",(0,a.jsx)(i.h5,{id:"fragment-replication-migration",children:"Fragment Replication Migration"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Fragment Replication Migration",src:t(37655).A+"",width:"1081",height:"1121"})}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"At time t0, the system has four Fragments, each existing on machines Seata-TC1, Seata-TC2, and Seata-TC3."}),"\n",(0,a.jsx)(i.li,{children:"At time t1, a new machine, Seata-TC4, is added."}),"\n",(0,a.jsx)(i.li,{children:"At time t2, replicas of three Fragments are migrated to machine Seata-TC4."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"online-quick-experience",children:"Online Quick Experience"}),"\n",(0,a.jsx)(i.p,{children:"We have set up an experience environment on the public network:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Seata Server Address: 39.97.115.141:8091"}),"\n",(0,a.jsxs)(i.li,{children:["UI: ",(0,a.jsx)(i.a,{href:"http://39.97.115.141:8084/ui/index.html",children:"http://39.97.115.141:8084/ui/index.html"})]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"local-quick-experience",children:"Local Quick Experience"}),"\n",(0,a.jsx)(i.p,{children:"Quickly experience TaaS functionality using docker-compose."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/seata/taas.git\ndocker-compse up -d\n"})}),"\n",(0,a.jsx)(i.p,{children:"Due to the many component dependencies, the docker-compose takes about 30 seconds to start and become available for external services."}),"\n",(0,a.jsx)(i.h4,{id:"seata-server-address",children:"Seata Server Address"}),"\n",(0,a.jsx)(i.p,{children:"The service listens on the default port 8091. Modify the Seata server address accordingly to experience."}),"\n",(0,a.jsx)(i.h4,{id:"seata-ui",children:"Seata UI"}),"\n",(0,a.jsxs)(i.p,{children:["Access the WEB UI at ",(0,a.jsx)(i.code,{children:"http://127.0.0.1:8084/ui/index.html"})]}),"\n",(0,a.jsx)(i.h3,{id:"about-infinivision",children:"About InfiniVision"}),"\n",(0,a.jsxs)(i.p,{children:["InfiniVision is a technology-driven enterprise service provider dedicated to assisting traditional enterprises in digital transformation and upgrading using technologies such as artificial intelligence, cloud computing, blockchain, big data, and IoT edge computing. InfiniVision actively embraces open source culture and open sources core algorithms and architectures. Notable open-source products include the facial recognition software InsightFace (",(0,a.jsx)(i.a,{href:"https://github.com/deepinsight/insightface",children:"https://github.com/deepinsight/insightface"}),"), which has repeatedly won large-scale facial recognition challenges, and the distributed storage engine Elasticell (",(0,a.jsx)(i.a,{href:"https://github.com/deepfabric/elasticell",children:"https://github.com/deepfabric/elasticell"}),")."]}),"\n",(0,a.jsx)(i.h3,{id:"about-the-author",children:"About the Author"}),"\n",(0,a.jsxs)(i.p,{children:["The author, Zhang Xu, is the creator of the open-source Gateway (",(0,a.jsx)(i.a,{href:"https://github.com/fagongzi/gateway",children:"https://github.com/fagongzi/gateway"}),") and currently works at InfiniVision, focusing on infrastructure-related development."]})]})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},3291:(e,i,t)=>{t.d(i,{A:()=>a});const a=t.p+"assets/images/taas-7be6d3d8b28495c0c4e06791b334836a.png"},84335:(e,i,t)=>{t.d(i,{A:()=>a});const a=t.p+"assets/images/taas_add-6451cc0e5ab23c96d9d4db5e3c6cb510.png"},37655:(e,i,t)=>{t.d(i,{A:()=>a});const a=t.p+"assets/images/taas_move-a147fafaaf5a403fe3b493756aeefdea.png"},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>o});var a=t(96540);const n={},s=a.createContext(n);function r(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[20970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Beginner Deployment Guide",keywords:["Seata"],description:"Seata has three roles TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system."},i="Deployment Guide",s={unversionedId:"ops/deploy-guide-beginner",id:"version-v1.7/ops/deploy-guide-beginner",title:"Beginner Deployment Guide",description:"Seata has three roles TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.7/ops/deploy-guide-beginner.md",sourceDirName:"ops",slug:"/ops/deploy-guide-beginner",permalink:"/docs/v1.7/ops/deploy-guide-beginner",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.7/ops/deploy-guide-beginner.md",tags:[],version:"v1.7",frontMatter:{title:"Beginner Deployment Guide",keywords:["Seata"],description:"Seata has three roles TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system."},sidebar:"docs",previous:{title:"Multi-configuration Isolation",permalink:"/docs/v1.7/ops/multi-configuration-isolation"},next:{title:"Deploy Server",permalink:"/docs/v1.7/ops/deploy-server"}},l={},c=[{value:"Seata Beginner Deployment Guide",id:"seata-beginner-deployment-guide",level:2},{value:"Resource Directory Introduction",id:"resource-directory-introduction",level:3},{value:'<a href="https://github.com/seata/seata/tree/master/script" target="_blank">Click to view</a>. You can also select the corresponding resource directory according to the version branch.',id:"click-to-view-you-can-also-select-the-corresponding-resource-directory-according-to-the-version-branch",level:4},{value:"Precautions",id:"precautions",level:3},{value:"Start Server",id:"start-server",level:3},{value:"Step 1: Startup package",id:"step-1-startup-package",level:4},{value:"Step 2: Create table (db only)",id:"step-2-create-table-db-only",level:4},{value:"Step 3: Modify store.mode",id:"step-3-modify-storemode",level:4},{value:"Step 4: Modify database connection|redis attribute configuration",id:"step-4-modify-database-connectionredis-attribute-configuration",level:4},{value:"Step 5: Start",id:"step-5-start",level:4},{value:"Business system integration Client",id:"business-system-integration-client",level:3},{value:"Step 1: Add seata dependency (single choice recommended)",id:"step-1-add-seata-dependency-single-choice-recommended",level:4},{value:"Step 2: Create undo_log table and configure parameters (AT mode only)",id:"step-2-create-undo_log-table-and-configure-parameters-at-mode-only",level:4},{value:"Step 3: Data source proxy (coexistence of automatic and manual configuration is not supported)",id:"step-3-data-source-proxy-coexistence-of-automatic-and-manual-configuration-is-not-supported",level:4},{value:"Step 4: Initialize GlobalTransactionScanner",id:"step-4-initialize-globaltransactionscanner",level:4},{value:"Step 5: Implement xid cross-service transfer",id:"step-5-implement-xid-cross-service-transfer",level:4},{value:"Business use",id:"business-use",level:2},{value:"Annotation interception",id:"annotation-interception",level:3},{value:"Global affairs",id:"global-affairs",level:4},{value:"TCC",id:"tcc",level:4},{value:"Pointcut expression",id:"pointcut-expression",level:3},{value:"Global affairs",id:"global-affairs-1",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment-guide"},"Deployment Guide"),(0,r.kt)("h2",{id:"seata-beginner-deployment-guide"},"Seata Beginner Deployment Guide"),(0,r.kt)("p",null,"Seata has three roles: TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system."),(0,r.kt)("h3",{id:"resource-directory-introduction"},"Resource Directory Introduction"),(0,r.kt)("h4",{id:"click-to-view-you-can-also-select-the-corresponding-resource-directory-according-to-the-version-branch"},(0,r.kt)("a",{href:"https://github.com/seata/seata/tree/master/script",target:"_blank"},"Click to view"),". You can also select the corresponding resource directory according to the version branch."),(0,r.kt)("p",null,"-client"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Store client-side sql script (including undo_log table) and parameter configuration.\n-config-center\nEach configuration center parameter import script, config.txt (including server and client, formerly known as nacos-config.txt) is a genernal parameter file."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"server\nStore server-side database script (including lock_table, branch_table and global_table) and container configuration."))),(0,r.kt)("h3",{id:"precautions"},"Precautions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seata-spring-boot-starter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"It has the built-in GlobalTransactionScanner automatic initialization function. If initialization is implemented externally, please refer to SeataAutoConfiguration to ensure that the dependencies loads orderly.\nData source automatic proxy is turned on by default, and it can be turned off by configuring seata.enable-auto-data-source-proxy: false.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"spring-cloud-starter-alibaba-seata",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("a",{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",target:"_blank"},"View release notes"),". ",(0,r.kt)("br",null),"2.1.0 embeds seata-all 0.7.1, 2.1.1 embeds seata-all 0.9.0, 2.2.0 embeds seata-spring-boot-starter 1.0.0, 2.2.1 embeds seata-spring- boot-starter 1.1.0"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Solutions for 2.1.0 and 2.1.1 compatible starter:\nIn the @SpringBootApplication annotation, exclude com.alibaba.cloud.seata.GlobalTransactionAutoConfiguration in spring-cloud-starter-alibaba-seata\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recommendations for spring-cloud-starter-alibaba-seata dependency configuration ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"            <dependency>\n                 <groupId>io.seata</groupId>\n                 <artifactId>seata-spring-boot-starter</artifactId>\n             </dependency>\n             <dependency>\n                 <groupId>com.alibaba.cloud</groupId>\n                 <artifactId>spring-cloud-starter-alibaba-seata</artifactId>\n                 <exclusions>\n                     <exclusion>\n                         <groupId>io.seata</groupId>\n                         <artifactId>seata-spring-boot-starter</artifactId>\n                     </exclusion>\n                 </exclusions>\n             </dependency>\n")),(0,r.kt)("h3",{id:"start-server"},"Start Server"),(0,r.kt)("p",null,"There are currently three server-side storage modes (store.mode): file, db, and redis. The file mode does not need to be changed and can be started directly. The following specifically explains the db and redis startup steps."),(0,r.kt)("p",null,"Note: The file mode is a stand-alone mode. The global transaction session information is read and written in the memory and the local file root.data is persisted. So the performance is quite well;"),(0,r.kt)("p",null,"The db mode is a high-availability mode. Global transaction session information is shared through db, but the corresponding performance is poor;"),(0,r.kt)("p",null,"The redis mode is supported by Seata-Server 1.3 and above. It has high performance and risks losing transaction information. Please configure the redis persistence configuration suitable for the current scenario in advance."),(0,r.kt)("h4",{id:"step-1-startup-package"},"Step 1: Startup package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://github.com/seata/seata/releases",target:"_blank"},"Click to download"),"."),(0,r.kt)("li",{parentName:"ul"},"Official DingTalk group (Group Number: 23171167, 1st group is already full, including 5,000 people, ",(0,r.kt)("a",{href:"http://seata.io/zh-cn/community",target:"_blank"},"2nd group"),", group 3: 32033786\uff0cgroup 4: 60170003910), QQ group (Group Number: 254657148, group 2: 216012363). Please download packages in the group sharing file.")),(0,r.kt)("h4",{id:"step-2-create-table-db-only"},"Step 2: Create table (db only)"),(0,r.kt)("p",null,"Global transaction session information consists of three pieces of content, that is global transaction--\x3ebranch transaction--\x3eglobal lock, corresponding to the tables global_table, branch_table, and lock_table."),(0,r.kt)("h4",{id:"step-3-modify-storemode"},"Step 3: Modify store.mode"),(0,r.kt)("p",null,'Startup package: seata--\x3econf--\x3eapplication.yml, modify store.mode="db" or "redis"\nSource code: root directory--\x3eseata-server--\x3eresources--\x3eapplication.yml, modify store.mode="db" or "redis"'),(0,r.kt)("h4",{id:"step-4-modify-database-connectionredis-attribute-configuration"},"Step 4: Modify database connection|redis attribute configuration"),(0,r.kt)("p",null,"Startup package: seata--\x3econf--\x3eapplication.example.yml comes with additional configuration, copy its db|redis related configuration to application.yml, and modify store.db or store.redis related properties.\nSource code: Root directory--\x3eseata-server--\x3eresources--\x3eapplication.example.yml comes with additional configuration, copy its db|redis related configuration to application.yml, and modify store.db or store.redis related Attributes."),(0,r.kt)("h4",{id:"step-5-start"},"Step 5: Start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source code startup: execute the main method in ServerApplication.java"),(0,r.kt)("li",{parentName:"ul"},"Command to start: seata-server.sh -h 127.0.0.1 -p 8091 -m db")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    -h: IP registered to the registration center\n    -p: Server rpc listening port\n    -m: Global transaction session information storage mode, file, db, redis. Read startup parameters first (Seata-Server 1.3 and above supports redis)\n    -n: Server node. When there are multiple servers, each node needs to be distinguished to generate transactionIds in different intervals to avoid conflicts.\n    -e: Multi-environment configuration please refers to http://seata.io/en-us/docs/ops/multi-configuration-isolation.html.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://seata.io/zh-cn/docs/ops/deploy-by-docker.html",target:"_blank"},"Click to view docker deployment"))),(0,r.kt)("p",null,"Note: It is recommended to allocate 2G of heap memory and 1G of off-heap memory."),(0,r.kt)("h3",{id:"business-system-integration-client"},"Business system integration Client"),(0,r.kt)("h4",{id:"step-1-add-seata-dependency-single-choice-recommended"},"Step 1: Add seata dependency (single choice recommended)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Depends on seata-all."),(0,r.kt)("li",{parentName:"ul"},"Depends on seata-spring-boot-starter, supporting yml and properties configuration (.conf can be deleted), and relies on seata-all internally."),(0,r.kt)("li",{parentName:"ul"},"Depends on spring-cloud-alibaba-seata, integrates seata internally, and implements xid transfer.")),(0,r.kt)("h4",{id:"step-2-create-undo_log-table-and-configure-parameters-at-mode-only"},"Step 2: Create undo_log table and configure parameters (AT mode only)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://seata.io/zh-cn/docs/user/configurations.html",target:"_blank"},"View parameter configuration introduction"),".")),(0,r.kt)("h4",{id:"step-3-data-source-proxy-coexistence-of-automatic-and-manual-configuration-is-not-supported"},"Step 3: Data source proxy (coexistence of automatic and manual configuration is not supported)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If using seata-all"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Starting from version 0.9.0, seata supports automatic proxy data sources."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"1.1.0: seata-all cancels the attribute configuration and switches it to the annotation @EnableAutoDataSourceProxy, and you can choose jdk proxy or cglib proxy\n1.0.0: client.support.spring.datasource.autoproxy=true\n0.9.0: support.spring.datasource.autoproxy=true\n")),(0,r.kt)("p",{parentName:"li"},"  If XA mode is used, ",(0,r.kt)("inlineCode",{parentName:"p"},'@EnableAutoDataSourceProxy(dataSourceProxyMode = "XA")'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For manual configuration, please refer to the example below"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'@Primary\n@Bean("dataSource")\npublic DataSource dataSource(DataSource druidDataSource) {\n    //AT agent (choose one of the two)\n    return new DataSourceProxy(druidDataSource);\n    //XA proxy\n    return new DataSourceProxyXA(druidDataSource)\n}\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If using seata-starter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When using automatic proxy data sources, you need to adjust the configuration file if you use XA mode\napplication.properties",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"seata.data-source-proxy-mode=XA  \n")),"  application.yml",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"seata:\n  data-source-proxy-mode: XA\n"))),(0,r.kt)("li",{parentName:"ul"},"How to turn off the data source automatic proxy of seata-spring-boot-starter?\napplication.properties",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"seata.enable-auto-data-source-proxy=false\n")),"   application.yml",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"seata:\n  enable-auto-data-source-proxy: false\n")))))),(0,r.kt)("h4",{id:"step-4-initialize-globaltransactionscanner"},"Step 4: Initialize GlobalTransactionScanner"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manual")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-@Bean"},'        @Bean\n        public GlobalTransactionScanner globalTransactionScanner() {\n            String applicationName = this.applicationContext.getEnvironment().getProperty("spring.application.name");\n            String txServiceGroup = this.seataProperties.getTxServiceGroup();\n            if (StringUtils.isEmpty(txServiceGroup)) {\n                txServiceGroup = applicationName + "-fescar-service-group";\n                this.seataProperties.setTxServiceGroup(txServiceGroup);\n            }\n   \n            return new GlobalTransactionScanner(applicationName, txServiceGroup);\n        }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic ",(0,r.kt)("br",null),"\nYou can introduce seata-spring-boot-starter, spring-cloud-starter-alibaba-seata and other jars")),(0,r.kt)("h4",{id:"step-5-implement-xid-cross-service-transfer"},"Step 5: Implement xid cross-service transfer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manual ",(0,r.kt)("br",null),"\nRefer to the various rpc implementation modules under the source code integration folder."),(0,r.kt)("li",{parentName:"ul"},"Automatic ",(0,r.kt)("br",null),"\nSpringCloud users can introduce spring-cloud-starter-alibaba-seata, and xid transfer has been implemented internally.")),(0,r.kt)("h2",{id:"business-use"},"Business use"),(0,r.kt)("h3",{id:"annotation-interception"},"Annotation interception"),(0,r.kt)("h4",{id:"global-affairs"},"Global affairs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping(value = "testCommit")\n@GlobalTransactional\npublic Object testCommit(@RequestParam(name = "id",defaultValue = "1") Integer id,\n    @RequestParam(name = "sum", defaultValue = "1") Integer sum) {\n    Boolean ok = productService.reduceStock(id, sum);\n    if (ok) {\n        LocalDateTime now = LocalDateTime.now();\n        Orders orders = new Orders();\n        orders.setCreateTime(now);\n        orders.setProductId(id);\n        orders.setReplaceTime(now);\n        orders.setSum(sum);\n        orderService.save(orders);\n        return "ok";\n    } else {\n        return "fail";\n    }\n}\n')),(0,r.kt)("h4",{id:"tcc"},"TCC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * Define two-phase commit: name = bean name of the tcc (globally unique), commitMethod = commit (the two-phase confirmation method) and rollbackMethod = rollback (the two-phase cancellation method)\n * useTCCFence=true (enable anti-hanging)\n * BusinessActionContextParameter annotation passes parameters to the second stage\n *\n * @param params - input parameters\n * @return String\n */\n@TwoPhaseBusinessAction(name = "beanName", commitMethod = "commit", rollbackMethod = "rollback", useTCCFence = true)\npublic void insert(@BusinessActionContextParameter(paramName = "params") Map<String, String> params) {\n    logger.info("\u6b64\u5904\u53ef\u4ee5\u9884\u7559\u8d44\u6e90,\u6216\u8005\u5229\u7528tcc\u7684\u7279\u70b9,\u4e0eAT\u6df7\u7528,\u4e8c\u9636\u6bb5\u65f6\u5229\u7528\u4e00\u9636\u6bb5\u5728\u6b64\u5904\u5b58\u653e\u7684\u6d88\u606f,\u901a\u8fc7\u4e8c\u9636\u6bb5\u53d1\u51fa,\u6bd4\u5982redis,mq\u7b49\u64cd\u4f5c");\n}\n\n\n/**\n * The confirmation method can be named differently, but it must be consistent with commitMethod. The context can pass the parameters of the try method.\n *\n * @param context context\n * @return boolean\n */\npublic void commit(BusinessActionContext context) {\n    logger.info("\u9884\u7559\u8d44\u6e90\u771f\u6b63\u5904\u7406,\u6216\u8005\u53d1\u51famq\u6d88\u606f\u548credis\u5165\u5e93");\n}\n\n/**\n * Two-stage cancellation method\n *\n * @param context context\n * @return boolean\n */\npublic void rollback(BusinessActionContext context) {\n    logger.info("\u9884\u7559\u8d44\u6e90\u91ca\u653e,\u6216\u6e05\u9664\u4e00\u9636\u6bb5\u51c6\u5907\u8ba9\u4e8c\u9636\u6bb5\u63d0\u4ea4\u65f6\u53d1\u51fa\u7684\u6d88\u606f\u7f13\u5b58");\n}\n')),(0,r.kt)("h3",{id:"pointcut-expression"},"Pointcut expression"),(0,r.kt)("h4",{id:"global-affairs-1"},"Global affairs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    @Bean\n    public AspectTransactionalInterceptor aspectTransactionalInterceptor () {\n        return new AspectTransactionalInterceptor();\n    }\n\n    @Bean\n    public Advisor txAdviceAdvisor(AspectTransactionalInterceptor aspectTransactionalInterceptor ) {\n        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();\n        pointcut.setExpression("Configure pointcut expression to enable global transaction interceptor");\n        return new DefaultPointcutAdvisor(pointcut, aspectTransactionalInterceptor);\n    }\n')))}u.isMDXComponent=!0}}]);
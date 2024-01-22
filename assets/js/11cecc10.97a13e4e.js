"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[70360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return a?r.createElement(m,s(s({ref:t},l),{},{components:a})):r.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},92453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"How to use Seata to ensure consistency between Dubbo Microservices",keywords:["Dubbo","Seata","Consistency"],description:"This article will introduce you how to use Seata to ensure consistency between Dubbo Microservices.",author:"slievrly",date:new Date("2019-03-07T00:00:00.000Z")},s="How to use Seata to ensure consistency between Dubbo Microservices",i={permalink:"/blog/quick-start-use-seata-and-dubbo-services",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/quick-start-use-seata-and-dubbo-services.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/quick-start-use-seata-and-dubbo-services.md",title:"How to use Seata to ensure consistency between Dubbo Microservices",description:"This article will introduce you how to use Seata to ensure consistency between Dubbo Microservices.",date:"2019-03-07T00:00:00.000Z",formattedDate:"March 7, 2019",tags:[],readingTime:2.84,hasTruncateMarker:!1,authors:[{name:"slievrly"}],frontMatter:{title:"How to use Seata to ensure consistency between Dubbo Microservices",keywords:["Dubbo","Seata","Consistency"],description:"This article will introduce you how to use Seata to ensure consistency between Dubbo Microservices.",author:"slievrly",date:"2019-03-07T00:00:00.000Z"},prevItem:{title:"Fescar Integration with Spring Cloud In-Depth Analysis of Source Code",permalink:"/blog/how-to-support-spring-cloud"},nextItem:{title:"MT mode",permalink:"/blog/manual-transaction-mode"}},c={authorsImageUrls:[void 0]},u=[{value:"Use case",id:"use-case",level:2},{value:"Architecture",id:"architecture",level:3},{value:"StorageService",id:"storageservice",level:3},{value:"OrderService",id:"orderservice",level:3},{value:"AccountService",id:"accountservice",level:3},{value:"Main business logic",id:"main-business-logic",level:3},{value:"Distributed Transaction Solution with Seata",id:"distributed-transaction-solution-with-seata",level:2},{value:"Example powered by Dubbo + Seata",id:"example-powered-by-dubbo--seata",level:2},{value:"Step 1: Setup database",id:"step-1-setup-database",level:3},{value:"Step 2: Create UNDO_LOG table for Seata",id:"step-2-create-undo_log-table-for-seata",level:3},{value:"Step 3: Create tables for example business",id:"step-3-create-tables-for-example-business",level:3},{value:"Step 4: Start Seata-Server",id:"step-4-start-seata-server",level:3},{value:"Step 5: Run example",id:"step-5-run-example",level:3},{value:"Related projects",id:"related-projects",level:3}],l={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"use-case"},"Use case"),(0,n.kt)("p",null,"A business logic for user purchasing commodities. The whole business logic is powered by 3 microservices:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Storage service: deduct storage count on given commodity."),(0,n.kt)("li",{parentName:"ul"},"Order service: create order according to purchase request."),(0,n.kt)("li",{parentName:"ul"},"Account service: debit the balance of user's account.")),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture",src:a(76855).Z,width:"1468",height:"868"})," "),(0,n.kt)("h3",{id:"storageservice"},"StorageService"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface StorageService {\n\n    /**\n     * deduct storage count\n     */\n    void deduct(String commodityCode, int count);\n}\n")),(0,n.kt)("h3",{id:"orderservice"},"OrderService"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface OrderService {\n\n    /**\n     * create order\n     */\n    Order create(String userId, String commodityCode, int orderCount);\n}\n")),(0,n.kt)("h3",{id:"accountservice"},"AccountService"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface AccountService {\n\n    /**\n     * debit balance of user's account\n     */\n    void debit(String userId, int money);\n}\n")),(0,n.kt)("h3",{id:"main-business-logic"},"Main business logic"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class BusinessServiceImpl implements BusinessService {\n\n    private StorageService storageService;\n\n    private OrderService orderService;\n\n    /**\n     * purchase\n     */\n    public void purchase(String userId, String commodityCode, int orderCount) {\n\n        storageService.deduct(commodityCode, orderCount);\n\n        orderService.create(userId, commodityCode, orderCount);\n    }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class StorageServiceImpl implements StorageService {\n\n  private StorageDAO storageDAO;\n  \n    @Override\n    public void deduct(String commodityCode, int count) {\n        Storage storage = new Storage();\n        storage.setCount(count);\n        storage.setCommodityCode(commodityCode);\n        storageDAO.update(storage);\n    }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class OrderServiceImpl implements OrderService {\n\n    private OrderDAO orderDAO;\n\n    private AccountService accountService;\n\n    public Order create(String userId, String commodityCode, int orderCount) {\n\n        int orderMoney = calculate(commodityCode, orderCount);\n\n        accountService.debit(userId, orderMoney);\n\n        Order order = new Order();\n        order.userId = userId;\n        order.commodityCode = commodityCode;\n        order.count = orderCount;\n        order.money = orderMoney;\n\n        return orderDAO.insert(order);\n    }\n}\n")),(0,n.kt)("h2",{id:"distributed-transaction-solution-with-seata"},"Distributed Transaction Solution with Seata"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"undefined",src:a(14793).Z,width:"1490",height:"852"})," "),(0,n.kt)("p",null,"We just need an annotation ",(0,n.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," on business method: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\n    @GlobalTransactional\n    public void purchase(String userId, String commodityCode, int orderCount) {\n        ......\n    }\n")),(0,n.kt)("h2",{id:"example-powered-by-dubbo--seata"},"Example powered by Dubbo + Seata"),(0,n.kt)("h3",{id:"step-1-setup-database"},"Step 1: Setup database"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Requirement: MySQL with InnoDB engine.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," In fact, there should be 3 database for the 3 services in the example use case. However, we can just create one database and configure 3 data sources for simple. "),(0,n.kt)("p",null,"Modify Spring XML with the database URL/username/password you just created."),(0,n.kt)("p",null,"dubbo-account-service.xml\ndubbo-order-service.xml\ndubbo-storage-service.xml"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'    <property name="url" value="jdbc:mysql://x.x.x.x:3306/xxx" />\n    <property name="username" value="xxx" />\n    <property name="password" value="xxx" />\n')),(0,n.kt)("h3",{id:"step-2-create-undo_log-table-for-seata"},"Step 2: Create UNDO_LOG table for Seata"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"UNDO_LOG")," table is required by Seata AT mode."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `undo_log` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n  `branch_id` bigint(20) NOT NULL,\n  `xid` varchar(100) NOT NULL,\n  `rollback_info` longblob NOT NULL,\n  `log_status` int(11) NOT NULL,\n  `log_created` datetime NOT NULL,\n  `log_modified` datetime NOT NULL,\n  `ext` varchar(100) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  KEY `idx_unionkey` (`xid`,`branch_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8\n")),(0,n.kt)("h3",{id:"step-3-create-tables-for-example-business"},"Step 3: Create tables for example business"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\nDROP TABLE IF EXISTS `storage_tbl`;\nCREATE TABLE `storage_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY (`commodity_code`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `order_tbl`;\nCREATE TABLE `order_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `account_tbl`;\nCREATE TABLE `account_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,n.kt)("h3",{id:"step-4-start-seata-server"},"Step 4: Start Seata-Server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download server ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/releases"},"package"),", unzip it."),(0,n.kt)("li",{parentName:"ul"},"Start Seata-Server")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sh seata-server.sh $LISTEN_PORT $PATH_FOR_PERSISTENT_DATA\n\ne.g.\n\nsh seata-server.sh 8091 /home/admin/seata/data/\n")),(0,n.kt)("h3",{id:"step-5-run-example"},"Step 5: Run example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start AccountService (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboAccountServiceStarter.java"},"DubboAccountServiceStarter"),")."),(0,n.kt)("li",{parentName:"ul"},"Start StorageService (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboStorageServiceStarter.java"},"DubboStorageServiceStarter"),")."),(0,n.kt)("li",{parentName:"ul"},"Start OrderService (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboOrderServiceStarter.java"},"DubboOrderServiceStarter"),")."),(0,n.kt)("li",{parentName:"ul"},"Run BusinessService for test (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboBusinessTester.java"},"DubboBusinessTester"),").")),(0,n.kt)("h3",{id:"related-projects"},"Related projects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"seata:          ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/"},"https://github.com/apache/incubator-seata/")),(0,n.kt)("li",{parentName:"ul"},"seata-samples : ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-samples"},"https://github.com/apache/incubator-seata-samples"))))}p.isMDXComponent=!0},76855:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/seata-1-921f8d579a15d413c12f3542be7f5ffb.png"},14793:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/seata-2-3e4981c059d8c4d72aec440b06c30a65.png"}}]);
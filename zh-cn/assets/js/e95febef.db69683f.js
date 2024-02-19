"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[90977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(r),d=n,m=k["".concat(i,".").concat(d)]||k[d]||u[d]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[k]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={hidden:!0,title:"Docker\u90e8\u7f72",keywords:["docker","docker-compose","ops"],description:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",author:"helloworlde",date:new Date("2019-11-25T00:00:00.000Z")},l="\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server (1.5.0\u53ca\u4ee5\u4e0a)",s={unversionedId:"ops/deploy-by-docker",id:"version-v1.0/ops/deploy-by-docker",title:"Docker\u90e8\u7f72",description:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.0/ops/deploy-by-docker.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker",permalink:"/zh-cn/docs/v1.0/ops/deploy-by-docker",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.0/ops/deploy-by-docker.md",tags:[],version:"v1.0",frontMatter:{hidden:!0,title:"Docker\u90e8\u7f72",keywords:["docker","docker-compose","ops"],description:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",author:"helloworlde",date:"2019-11-25T00:00:00.000Z"}},i={},p=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u542f\u52a8seata-server\u5b9e\u4f8b",id:"\u542f\u52a8seata-server\u5b9e\u4f8b",level:4},{value:"\u6307\u5b9aseata-server IP\u548c\u7aef\u53e3 \u542f\u52a8",id:"\u6307\u5b9aseata-server-ip\u548c\u7aef\u53e3-\u542f\u52a8",level:4},{value:"Docker compose \u542f\u52a8",id:"docker-compose-\u542f\u52a8",level:4},{value:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7",id:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7",level:2},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2}],c={toc:p},k="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4f7f\u7528-docker-\u90e8\u7f72-seata-server-150\u53ca\u4ee5\u4e0a"},"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server (1.5.0\u53ca\u4ee5\u4e0a)"),(0,n.kt)("a",{href:"./deploy-by-docker-142"},"\u67e5\u770b1.4.2\u7248\u672c"),(0,n.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d\u76f4\u63a5\u62c9\u53d6latest\u7248\u672c\u955c\u50cf\uff0clatest\u7248\u672c\u5e76\u4e0d\u4e00\u5b9a\u662f\u7a33\u5b9a\u7248\u672c\uff0c\u4e3a\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u95ee\u9898\uff0c\u8bf7\u5230",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/seataio/seata-server/tags"},"docker\u955c\u50cf\u4ed3\u5e93"),"\n\u786e\u5b9a\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7248\u672c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u82e5docker\u663e\u793a\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"date"),"\u65f6\u95f4\u4e0d\u6b63\u786e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e4b\u4e00\u8bbe\u7f6e\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u52a0\u5165docker\u73af\u5883\u53d8\u91cf TZ=Asia/Shanghai"),(0,n.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u5bbf\u4e3b\u673a\u7684\u65f6\u533a\u914d\u7f6e -v /etc/localtime:/etc/localtime -v /etc/timezone:/etc/timezone")))),(0,n.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,n.kt)("h4",{id:"\u542f\u52a8seata-server\u5b9e\u4f8b"},"\u542f\u52a8seata-server\u5b9e\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --name seata-server -p 8091:8091 -p 7091:7091 seataio/seata-server:1.5.0\n")),(0,n.kt)("h4",{id:"\u6307\u5b9aseata-server-ip\u548c\u7aef\u53e3-\u542f\u52a8"},"\u6307\u5b9aseata-server IP\u548c\u7aef\u53e3 \u542f\u52a8"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -p 7091:7091 \\\n        -e SEATA_IP=192.168.1.1 \\\n        -e SEATA_PORT=8091 \\\n        seataio/seata-server\n")),(0,n.kt)("h4",{id:"docker-compose-\u542f\u52a8"},"Docker compose \u542f\u52a8"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," \u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n      - "7091:7091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n')),(0,n.kt)("h2",{id:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7"},"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker exec -it seata-server sh\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker logs -f seata-server\n")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("p",null,"\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u901a\u8fc7\u6302\u8f7d\u6587\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u5c06\u5bbf\u4e3b\u673a\u4e0a\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"application.yml"),"  \u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u76f8\u5e94\u7684\u76ee\u5f55"),(0,n.kt)("p",null,"\u9996\u5148\u542f\u52a8\u4e00\u4e2a\u7528\u6237\u5c06resources\u76ee\u5f55\u6587\u4ef6\u62f7\u51fa\u7684\u4e34\u65f6\u5bb9\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d -p 8091:8091 -p 7091:7091  --name seata-serve seataio/seata-server:latest\ndocker cp seata-serve:/seata-server/resources /User/seata/config\n")),(0,n.kt)("p",null,"\u62f7\u51fa\u540e\u53ef\u4ee5,\u53ef\u4ee5\u9009\u62e9\u4fee\u6539application.yml\u518dcp\u8fdb\u5bb9\u5668,\u6216\u8005rm\u4e34\u65f6\u5bb9\u5668,\u5982\u4e0b\u91cd\u65b0\u521b\u5efa,\u5e76\u505a\u597d\u6620\u5c04\u8def\u5f84\u8bbe\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a application.yml")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -p 7091:7091 \\\n        -v /User/seata/config:/seata-server/resources  \\\n        seataio/seata-server\n")),(0,n.kt)("p",null,"\u5176\u4e2d ",(0,n.kt)("inlineCode",{parentName:"p"},"-e")," \u7528\u4e8e\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff0c ",(0,n.kt)("inlineCode",{parentName:"p"},"-v")," \u7528\u4e8e\u6302\u8f7d\u5bbf\u4e3b\u673a\u7684\u76ee\u5f55,\u5982\u679c\u662f\u4ee5file\u5b58\u50a8\u6a21\u5f0f\u8fd0\u884c,\u8bf7\u52a0\u4e0a-v /User/seata/sessionStore :/seata-server/sessionStore \u5c06file\u7684\u6570\u636e\u6587\u4ef6\u6620\u5c04\u5230\u5bbf\u4e3b\u673a,\u4ee5\u9632\u6570\u636e\u4e22\u5931(\u6ce8:/User/seata/config\u548c/User/seata/sessionStore\u53ef\u81ea\u5b9a\u4e49\u5bbf\u4e3b\u673a\u76ee\u5f55,\u65e0\u9700\u7167\u642c)"),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u770b\u5230\u5bbf\u4e3b\u673a\u5bf9\u5e94\u76ee\u5f55\u4e0b\u5df2\u7ecf\u6709\u4e86,logback-spring.xml,application.example.yml,application.yml \u5982\u679c\u6bd4\u8f83\u719f\u6089springboot,\u90a3\u4e48\u63a5\u4e0b\u6765\u5c31\u5f88\u7b80\u5355\u4e86,\u53ea\u9700\u8981\u4fee\u6539application.yml\u5373\u53ef,\u8be6\u7ec6\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003application.example.yml,\u8be5\u6587\u4ef6\u5b58\u653e\u4e86\u6240\u6709\u53ef\u4f7f\u7528\u7684\u8be6\u7ec6\u914d\u7f6e"),(0,n.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,n.kt)("p",null,"seata-server \u652f\u6301\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\uff1a "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SEATA_IP"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684IP, \u8be5IP\u7528\u4e8e\u5411\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u65f6\u4f7f\u7528, \u5982eureka\u7b49")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SEATA_PORT"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684\u7aef\u53e3, \u9ed8\u8ba4\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"8091"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"STORE_MODE"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9aseata-server\u7684\u4e8b\u52a1\u65e5\u5fd7\u5b58\u50a8\u65b9\u5f0f, \u652f\u6301",(0,n.kt)("inlineCode",{parentName:"p"},"db")," ,",(0,n.kt)("inlineCode",{parentName:"p"},"file"),",redis(Seata-Server 1.3\u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301), \u9ed8\u8ba4\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"file"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SERVER_NODE"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u7528\u4e8e\u6307\u5b9aseata-server\u8282\u70b9ID, \u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),",",(0,n.kt)("inlineCode",{parentName:"p"},"2"),",",(0,n.kt)("inlineCode",{parentName:"p"},"3"),"..., \u9ed8\u8ba4\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"\u6839\u636eip\u751f\u6210"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SEATA_ENV"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9a seata-server \u8fd0\u884c\u73af\u5883, \u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"test")," \u7b49, \u670d\u52a1\u542f\u52a8\u65f6\u4f1a\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"registry-dev.conf")," \u8fd9\u6837\u7684\u914d\u7f6e")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SEATA_CONFIG_NAME"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e, \u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"file:/root/registry"),", \u5c06\u4f1a\u52a0\u8f7d ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/registry.conf")," \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u9700\u8981\u540c\u65f6\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"p"},"file.conf"),"\u6587\u4ef6\uff0c\u9700\u8981\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"config.file.name"),"\u7684\u503c\u6539\u4e3a\u7c7b\u4f3c",(0,n.kt)("inlineCode",{parentName:"p"},"file:/root/file.conf"),"\uff1a")))}u.isMDXComponent=!0}}]);
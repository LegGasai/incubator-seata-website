"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[35103],{57628:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=s(74848),n=s(28453);const c={title:"Metrics \u8bbe\u8ba1",keywords:["Seata"],description:"Metrics\u3002"},i=void 0,l={id:"dev/seata-mertics",title:"Metrics \u8bbe\u8ba1",description:"Metrics\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/dev/seata-mertics.md",sourceDirName:"dev",slug:"/dev/seata-mertics",permalink:"/zh-cn/docs/v1.2/dev/seata-mertics",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/dev/seata-mertics.md",tags:[],version:"v1.2",frontMatter:{title:"Metrics \u8bbe\u8ba1",keywords:["Seata"],description:"Metrics\u3002"},sidebar:"docs",previous:{title:"\u4e8b\u52a1\u534f\u8c03\u8005\uff08TC\uff09",permalink:"/zh-cn/docs/v1.2/dev/domain/tc"},next:{title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",permalink:"/zh-cn/docs/v1.2/ops/upgrade"}},a={},d=[{value:"Metrics",id:"metrics",level:3},{value:"\u8bbe\u8ba1\u601d\u8def",id:"\u8bbe\u8ba1\u601d\u8def",level:4},{value:"\u6a21\u5757\u8bf4\u660e",id:"\u6a21\u5757\u8bf4\u660e",level:4},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:4},{value:"\u65b0\u589e\u914d\u7f6e",id:"\u65b0\u589e\u914d\u7f6e",level:5},{value:"\u4e0b\u8f7d\u5e76\u542f\u52a8 Prometheus",id:"\u4e0b\u8f7d\u5e76\u542f\u52a8-prometheus",level:5},{value:"\u67e5\u770b\u6570\u636e\u8f93\u51fa",id:"\u67e5\u770b\u6570\u636e\u8f93\u51fa",level:5},{value:"\u5982\u4f55\u6269\u5c55",id:"\u5982\u4f55\u6269\u5c55",level:4}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsx)(t.h4,{id:"\u8bbe\u8ba1\u601d\u8def",children:"\u8bbe\u8ba1\u601d\u8def"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Seata \u4f5c\u4e3a\u4e00\u4e2a\u88ab\u96c6\u6210\u7684\u6570\u636e\u4e00\u81f4\u6027\u6846\u67b6\uff0cMetrics \u6a21\u5757\u5c06\u5c3d\u53ef\u80fd\u5c11\u7684\u4f7f\u7528\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4ee5\u964d\u4f4e\u53d1\u751f\u51b2\u7a81\u7684\u98ce\u9669\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"Metrics \u6a21\u5757\u5c06\u7aed\u529b\u4e89\u53d6\u66f4\u9ad8\u7684\u5ea6\u91cf\u6027\u80fd\u548c\u66f4\u4f4e\u7684\u8d44\u6e90\u5f00\u9500\uff0c\u5c3d\u53ef\u80fd\u964d\u4f4e\u5f00\u542f\u540e\u5e26\u6765\u7684\u526f\u4f5c\u7528\uff1b"}),"\n",(0,r.jsxs)(t.li,{children:["\u914d\u7f6e\u65f6\uff0cMetrics \u662f\u5426\u6fc0\u6d3b\u3001\u6570\u636e\u5982\u4f55\u53d1\u5e03\uff0c\u53d6\u51b3\u4e8e\u5bf9\u5e94\u7684\u914d\u7f6e\uff1b\u5f00\u542f\u914d\u7f6e\u5219\u81ea\u52a8\u542f\u7528\u5e76\u5c06\u5ea6\u91cf\u6570\u636e\u53d1\u5e03\u5230",(0,r.jsx)(t.a,{href:"https://github.com/prometheus",children:"Prometheus"}),"\uff1b"]}),"\n",(0,r.jsx)(t.li,{children:"\u4e0d\u4f7f\u7528 Spring\uff0c\u4f7f\u7528 SPI(Service Provider Interface)\u52a0\u8f7d\u6269\u5c55\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"\u521d\u59cb\u4ec5\u53d1\u5e03\u6838\u5fc3 Transaction \u76f8\u5173\u6307\u6807\uff0c\u4e4b\u540e\u7ed3\u5408\u793e\u533a\u7684\u9700\u6c42\uff0c\u9010\u6b65\u5b8c\u5584\u8fd0\u7ef4\u65b9\u9762\u7684\u6240\u6709\u5176\u4ed6\u6307\u6807\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"\u6a21\u5757\u8bf4\u660e",children:"\u6a21\u5757\u8bf4\u660e"}),"\n",(0,r.jsxs)(t.p,{children:["\u7531 2 \u4e2a\u6838\u5fc3 API \u6a21\u5757",(0,r.jsx)(t.code,{children:"seata-metrics-api"}),"\u548c",(0,r.jsx)(t.code,{children:"seata-metrics-core"}),"\uff0c\u4ee5\u53ca N \u4e2a\u5b9e\u73b0\u6a21\u5757\u4f8b\u5982",(0,r.jsx)(t.code,{children:"seata-metrics-registry-compact"}),"\u3001",(0,r.jsx)(t.code,{children:"seata-metrics-exporter-prometheus"}),"\u6784\u6210\uff1a"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"seata-metrics-api \u6a21\u5757"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["\u6b64\u6a21\u5757\u662f Metrics \u7684\u6838\u5fc3\uff0c\u5c06\u4f5c\u4e3a Seata \u57fa\u7840\u67b6\u6784\u7684\u4e00\u90e8\u5206\u88ab TC\u3001TM \u548c RM \u5f15\u7528\uff0c\u5b83\u5185\u90e8",(0,r.jsx)(t.strong,{children:"\u6ca1\u6709\u4efb\u4f55\u5177\u4f53\u5b9e\u73b0\u4ee3\u7801"}),"\uff0c\u4ec5\u5305\u542b\u63a5\u53e3\u5b9a\u4e49\uff0c\u5b9a\u4e49\u7684\u5185\u5bb9\u5305\u62ec\uff1a"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Meter \u7c7b\u63a5\u53e3\uff1a",(0,r.jsx)(t.code,{children:"Gauge"}),"\u3001",(0,r.jsx)(t.code,{children:"Counter"}),"\u3001",(0,r.jsx)(t.code,{children:"Timer"}),"..."]}),"\n",(0,r.jsxs)(t.li,{children:["\u6ce8\u518c\u5bb9\u5668\u63a5\u53e3",(0,r.jsx)(t.code,{children:"Registry"})]}),"\n",(0,r.jsxs)(t.li,{children:["Measurement \u53d1\u5e03\u63a5\u53e3",(0,r.jsx)(t.code,{children:"Publisher"})]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u63d0\u793a\uff1aMetrics \u672c\u8eab\u5728\u5f00\u6e90\u9886\u57df\u4e5f\u5df2\u6709\u5f88\u591a\u5b9e\u73b0\uff0c\u4f8b\u5982"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/Netflix/spectator",children:"Netflix-Spectator"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/dropwizard/metrics",children:"Dropwizard-Metrics"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/dubbo/dubbo-metrics",children:"Dubbo-Metrics"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u5b83\u4eec\u6709\u7684\u8f7b\u800c\u654f\u6377\uff0c\u6709\u7684\u91cd\u800c\u5f3a\u5927\uff0c\u7531\u4e8e\u4e5f\u662f\u201c\u5b9e\u73b0\u201d\uff0c\u56e0\u6b64\u4e0d\u4f1a\u7eb3\u5165",(0,r.jsx)(t.code,{children:"seata-metrics-api"}),"\u4e2d\uff0c\u907f\u514d\u5b9e\u73b0\u7ed1\u5b9a\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"seata-metrics-core \u6a21\u5757"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Metrics \u6838\u5fc3\u6a21\u5757\uff0c\u6839\u636e\u914d\u7f6e\u7ec4\u7ec7\uff08\u52a0\u8f7d\uff091 \u4e2a Registry \u548c N \u4e2a Exporter\uff1b"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"seata-metrics-registry-compact \u6a21\u5757"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u662f\u6211\u4eec\u63d0\u4f9b\u7684\u9ed8\u8ba4\uff08\u5185\u7f6e\uff09\u7684 Registry \u5b9e\u73b0\uff0c\u4e0d\u4f7f\u7528\u5176\u5b83 Metrics \u5f00\u6e90\u5e93\uff0c\u8f7b\u91cf\u7ea7\u7684\u5b9e\u73b0\u4e86\u4ee5\u4e0b\u56db\u79cd Meter\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"seata-metrics-exporter-prometheus \u6a21\u5757"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u662f\u6211\u4eec\u9ed8\u8ba4\u63d0\u4f9b\u7684 Metrics \u5b9e\u73b0\uff0c\u4e0d\u4f7f\u7528\u5176\u5b83 Metrics \u5f00\u6e90\u5b9e\u73b0\uff0c\u5e76\u8f7b\u91cf\u7ea7\u7684\u5b9e\u73b0\u4e86\u4ee5\u4e0b\u4e09\u4e2a Meter\uff1a"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Meter \u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsx)(t.td,{children:"\u5355\u4e00\u6700\u65b0\u503c\u5ea6\u91cf\u5668"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Counter"}),(0,r.jsx)(t.td,{children:"\u5355\u4e00\u7d2f\u52a0\u5ea6\u91cf\u5668\uff0c\u53ef\u589e\u53ef\u51cf"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Summary"}),(0,r.jsxs)(t.td,{children:["\u591a Measurement \u8f93\u51fa\u8ba1\u6570\u5668\uff0c\u5c06\u8f93\u51fa",(0,r.jsx)(t.code,{children:"total"}),"(\u5408\u8ba1)\u3001",(0,r.jsx)(t.code,{children:"count"}),"(\u8ba1\u6570)\u548c",(0,r.jsx)(t.code,{children:"tps"}),"(\u5408\u8ba1/\u65f6\u95f4\u95f4\u9694)\uff0c\u65e0\u5355\u4f4d"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Timer"}),(0,r.jsxs)(t.td,{children:["\u591a Measurement \u8f93\u51fa\u8ba1\u65f6\u5668\uff0c\u5c06\u8f93\u51fa",(0,r.jsx)(t.code,{children:"total"}),"(\u5408\u8ba1)\u3001",(0,r.jsx)(t.code,{children:"count"}),"(\u8ba1\u6570)\u3001",(0,r.jsx)(t.code,{children:"max"}),"(\u6700\u5927)\u548c",(0,r.jsx)(t.code,{children:"average"}),"(\u5408\u8ba1/\u8ba1\u6570)\uff0c\u652f\u6301\u5fae\u79d2\u4e3a\u5355\u4f4d\u7d2f\u8ba1"]})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u672a\u6765\u53ef\u80fd\u589e\u52a0\u66f4\u4e30\u5bcc\u590d\u6742\u7684\u5ea6\u91cf\u5668\u4f8b\u5982 Histogram\uff0c\u8fd9\u662f\u4e00\u79cd\u53ef\u4ee5\u672c\u5730\u7edf\u8ba1\u805a\u5408 75th, 90th, 95th, 98th, 99th,99.9th...\u7684\u5ea6\u91cf\u5668\uff0c\u9002\u5408\u67d0\u4e9b\u573a\u5408\uff0c\u4f46\u9700\u8981\u66f4\u591a\u5185\u5b58\u3002"}),"\n",(0,r.jsx)(t.li,{children:"\u6240\u6709\u7684\u8ba1\u91cf\u5668\u90fd\u5c06\u7ee7\u627f\u81ea Meter\uff0c\u6240\u6709\u7684\u8ba1\u91cf\u5668\u6267\u884c measure()\u65b9\u6cd5\u540e\uff0c\u90fd\u5c06\u5f52\u4e00\u5316\u7684\u751f\u6210 1 \u6216 N \u4e2a Measurement \u7ed3\u679c\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u5b83\u4e5f\u4f1a\u5b9e\u73b0\u4e00\u4e2a\u5185\u5b58\u7684 Registry \u548c PrometheusExporter\uff0c\u5c06\u5ea6\u91cf\u6570\u636e\u540c\u6b65\u7ed9 Prometheus\u3002"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u8bf4\u660e\uff1a\u4e0d\u540c\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c\u91c7\u96c6\u5ea6\u91cf\u6570\u636e\u7684\u65b9\u5f0f\u4e0d\u5c3d\u76f8\u540c\uff0c\u4f8b\u5982 Zabbix \u652f\u6301\u7528 zabbix-agent \u63a8\u9001\uff0cPrometheus \u5219\u63a8\u8350\u4f7f\u7528 prometheus-server",(0,r.jsx)(t.a,{href:"https://prometheus.io/docs/practices/pushing/",children:"\u62c9\u53d6"}),"\u7684\u65b9\u5f0f\uff1b\u540c\u6837\u6570\u636e\u4ea4\u6362\u534f\u8bae\u4e5f\u4e0d\u540c\uff0c\u56e0\u6b64\u5f80\u5f80\u9700\u8981\u9010\u4e00\u9002\u914d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"\u5982\u4f55\u4f7f\u7528",children:"\u5982\u4f55\u4f7f\u7528"}),"\n",(0,r.jsx)(t.h5,{id:"\u65b0\u589e\u914d\u7f6e",children:"\u65b0\u589e\u914d\u7f6e"}),"\n",(0,r.jsx)(t.p,{children:"\u5982\u679c\u9700\u8981\u5f00\u542f TC \u7684 Metrics\uff0c\u9700\u8981\u5728\u5176\u914d\u7f6e\u4e2d\u589e\u52a0\u914d\u7f6e\u9879\uff1a"}),"\n",(0,r.jsx)(t.p,{children:"\u6bd4\u5982 file.conf"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'## metrics settings\nmetrics {\n  enabled = true\n  registryType = "compact"\n  # multi exporters use comma divided\n  exporterList = "prometheus"\n  exporterPrometheusPort = 9898\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6216\u8005 1.5.0+\u4e2d\u4f7f\u7528 application.yaml"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"seata:\n  metrics:\n    enabled: true\n    registryType: compact\n    exporterList: prometheus\n    exporterPrometheusPort: 9898\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6216\u8005\u4f7f\u7528\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5982 nacos,apollo \u7b49"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/config-center",children:"\u8bf7\u53c2\u8003\u6b64\u5904"}),"\uff0c\u5c06 seata metrics \u914d\u7f6e\u9879\u4e0a\u4f20\u5230\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3,\u4e5f\u53ef\u6253\u5f00\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3\u63a7\u5236\u53f0\u8fdb\u884c\u624b\u52a8\u6dfb\u52a0\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-properties",children:"metrics.enabled=true\nmetrics.registryType=compact\nmetrics.exporterList=prometheus\nmetrics.exporterPrometheusPort=9898\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u4e4b\u540e\u542f\u52a8 TC\uff0c\u5373\u53ef\u5728",(0,r.jsx)(t.code,{children:"http://tc-server-ip:9898/metrics"}),"\u4e0a\u83b7\u53d6\u5230 Metrics \u7684\u6587\u672c\u683c\u5f0f\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u63d0\u793a\uff1a\u9ed8\u8ba4\u4f7f\u7528",(0,r.jsx)(t.code,{children:"9898"}),"\u7aef\u53e3\uff0cPrometheus \u5df2\u767b\u8bb0\u7684\u7aef\u53e3\u5217\u8868",(0,r.jsx)(t.a,{href:"https://github.com/prometheus/prometheus/wiki/Default-port-allocations",children:"\u5728\u6b64\u67e5\u770b"}),"\uff0c\u5982\u679c\u60f3\u66f4\u6362\u7aef\u53e3\uff0c\u53ef\u901a\u8fc7",(0,r.jsx)(t.code,{children:"metrics.exporter.prometheus.port"}),"\u6765\u4fee\u6539\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h5,{id:"\u4e0b\u8f7d\u5e76\u542f\u52a8-prometheus",children:"\u4e0b\u8f7d\u5e76\u542f\u52a8 Prometheus"}),"\n",(0,r.jsxs)(t.p,{children:["\u4e0b\u8f7d\u5b8c\u6bd5\u540e\uff0c\u4fee\u6539 Prometheus \u7684\u914d\u7f6e\u6587\u4ef6",(0,r.jsx)(t.code,{children:"prometheus.yml"}),"\uff0c\u5728",(0,r.jsx)(t.code,{children:"scrape_configs"}),"\u4e2d\u589e\u52a0\u4e00\u9879\u6293\u53d6 Seata \u7684\u5ea6\u91cf\u6570\u636e\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n      - targets: ['localhost:9090']\n\n  - job_name: 'seata'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n      - targets: ['tc-server-ip:9898']\n"})}),"\n",(0,r.jsx)(t.h5,{id:"\u67e5\u770b\u6570\u636e\u8f93\u51fa",children:"\u67e5\u770b\u6570\u636e\u8f93\u51fa"}),"\n",(0,r.jsxs)(t.p,{children:["\u63a8\u8350\u7ed3\u5408\u914d\u7f6e",(0,r.jsx)(t.a,{href:"https://prometheus.io/docs/visualization/grafana/",children:"Grafana"}),"\u83b7\u5f97\u66f4\u597d\u7684\u67e5\u8be2\u6548\u679c\uff0c\u521d\u671f Seata \u5bfc\u51fa\u7684 Metrics \u5305\u62ec\uff1a"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"TC :"}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Metrics"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"seata.transaction(role=tc,meter=counter,status=active/committed/rollback)"}),(0,r.jsx)(t.td,{children:"\u5f53\u524d\u6d3b\u52a8\u4e2d/\u5df2\u63d0\u4ea4/\u5df2\u56de\u6eda\u7684\u4e8b\u52a1\u603b\u6570"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"seata.transaction(role=tc,meter=summary,statistic=count,status=committed/rollback)"}),(0,r.jsx)(t.td,{children:"\u5f53\u524d\u5468\u671f\u5185\u63d0\u4ea4/\u56de\u6eda\u7684\u4e8b\u52a1\u6570"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"seata.transaction(role=tc,meter=summary,statistic=tps,status=committed/rollback)"}),(0,r.jsx)(t.td,{children:"\u5f53\u524d\u5468\u671f\u5185\u63d0\u4ea4/\u56de\u6eda\u7684\u4e8b\u52a1 TPS(transaction per second)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"seata.transaction(role=tc,meter=timer,statistic=total,status=committed/rollback)"}),(0,r.jsx)(t.td,{children:"\u5f53\u524d\u5468\u671f\u5185\u63d0\u4ea4/\u56de\u6eda\u7684\u4e8b\u52a1\u8017\u65f6\u603b\u548c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"seata.transaction(role=tc,meter=timer,statistic=count,status=committed/rollback)"}),(0,r.jsx)(t.td,{children:"\u5f53\u524d\u5468\u671f\u5185\u63d0\u4ea4/\u56de\u6eda\u7684\u4e8b\u52a1\u6570"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"seata.transaction(role=tc,meter=timer,statistic=average,status=committed/rollback)"}),(0,r.jsx)(t.td,{children:"\u5f53\u524d\u5468\u671f\u5185\u63d0\u4ea4/\u56de\u6eda\u7684\u4e8b\u52a1\u5e73\u5747\u8017\u65f6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"seata.transaction(role=tc,meter=timer,statistic=max,status=committed/rollback)"}),(0,r.jsx)(t.td,{children:"\u5f53\u524d\u5468\u671f\u5185\u63d0\u4ea4/\u56de\u6eda\u7684\u4e8b\u52a1\u6700\u5927\u8017\u65f6"})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u63d0\u793a\uff1aseata.transaction(role=tc,meter=summary,statistic=count,status=committed/rollback)\u548c seata.transaction(role=tc,meter=timer,statistic=count,status=committed/rollback)\u7684\u503c\u53ef\u80fd\u76f8\u540c\uff0c\u4f46\u5b83\u4eec\u6765\u6e90\u4e8e\u4e24\u4e2a\u4e0d\u540c\u7684\u5ea6\u91cf\u5668\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"TM\uff1a"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u7a0d\u540e\u5b9e\u73b0\uff0c\u5305\u62ec\u8bf8\u5982\uff1a\nseata.transaction(role=tm,name={GlobalTransactionalName},meter=counter,status=active/committed/rollback) : \u4ee5 GlobalTransactionalName \u4e3a\u7ef4\u5ea6\u533a\u5206\u4e0d\u540c Transactional \u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"RM\uff1a"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u7a0d\u540e\u5b9e\u73b0\uff0c\u5305\u62ec\u8bf8\u5982\uff1a\nseata.transaction(role=rm,name={BranchTransactionalName},mode=at/mt,meter=counter,status=active/committed/rollback)\uff1a\u4ee5 BranchTransactionalName \u4e3a\u7ef4\u5ea6\u4ee5\u53ca AT/MT \u7ef4\u5ea6\u533a\u5206\u4e0d\u540c\u5206\u652f Transactional \u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(t.h4,{id:"\u5982\u4f55\u6269\u5c55",children:"\u5982\u4f55\u6269\u5c55"}),"\n",(0,r.jsx)(t.p,{children:"\u5982\u679c\u6709\u4e0b\u9762\u51e0\u79cd\u60c5\u51b5\uff1a"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u60a8\u4e0d\u662f\u4f7f\u7528 Prometheus \u4f5c\u4e3a\u8fd0\u7ef4\u76d1\u63a7\u7cfb\u7edf\uff0c\u4f46\u5e0c\u671b\u80fd\u591f\u5c06 Seata \u7684 Metrics \u6570\u636e\u96c6\u6210\u8fdb Dashboard \u4e2d\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"\u60a8\u9700\u8981\u66f4\u590d\u6742\u5f3a\u5927\u7684\u5ea6\u91cf\u5668\u7c7b\u578b\uff0c\u8fd9\u4e9b\u5ea6\u91cf\u5668\u5728\u5176\u4ed6 Metrics \u5b9e\u73b0\u5e93\u4e2d\u5df2\u6709\uff0c\u5e0c\u671b\u96c6\u6210\u8fd9\u4e9b\u7b2c\u4e09\u65b9\u4f9d\u8d56\u76f4\u63a5\u4f7f\u7528\uff1b"}),"\n",(0,r.jsxs)(t.li,{children:["\u60a8\u9700\u8981\u6539\u53d8\u9ed8\u8ba4 Metric \u7684 Measurement \u8f93\u51fa\uff0c\u4f8b\u5982\u5728 Timer \u4e2d\u589e\u52a0\u4e00\u4e2a",(0,r.jsx)(t.code,{children:"min"}),"\u6216",(0,r.jsx)(t.code,{children:"sd"}),"(\u65b9\u5dee)\uff1b"]}),"\n",(0,r.jsx)(t.li,{children:"..."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["\u90a3\u4e48\u9700\u8981\u81ea\u884c\u6269\u5c55 Metrics \u7684\u5b9e\u73b0\uff0c\u8bf7\u521b\u5efa\u65b0\u7684\u6a21\u5757\u9879\u76ee\u4f8b\u5982",(0,r.jsx)(t.code,{children:"seata-metrics-xxxx"}),"\uff0c\u4e4b\u540e\uff1a"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u9488\u5bf9 1\uff1a\u60a8\u9700\u8981\u5b9e\u73b0\u65b0\u7684 Exporter\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"\u9488\u5bf9 2\uff1a\u60a8\u53ef\u4ee5\u6539\u53d8\u9ed8\u8ba4 Registry \u7684\u5b9e\u73b0\uff0c\u8fd4\u56de\u7b2c\u4e09\u65b9\u7684 Meter \u8ba1\u91cf\u5668\u5b9e\u73b0\uff1b"}),"\n",(0,r.jsxs)(t.li,{children:["\u9488\u5bf9 3\uff1a\u60a8\u53ef\u4ee5\u4fee\u6539\u5bf9\u5e94 Meter \u7684\u5b9e\u73b0\uff0c\u5305\u62ec",(0,r.jsx)(t.code,{children:"measure()"}),"\u65b9\u6cd5\u8fd4\u56de\u7684 Measurement \u5217\u8868\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var r=s(96540);const n={},c=r.createContext(n);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
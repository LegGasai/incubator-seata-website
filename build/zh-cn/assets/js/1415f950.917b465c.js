"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[68534],{72497:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>x});var n=l(74848),s=l(28453);const c={title:"SQL\u4fee\u9970",keywords:["Seata"],description:"Seata SQL\u4fee\u9970"},d="SQL \u4fee\u9970",i={id:"user/sqlreference/sql-decoration",title:"SQL\u4fee\u9970",description:"Seata SQL\u4fee\u9970",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/sqlreference/sql-decoration.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/sql-decoration",permalink:"/zh-cn/docs/v1.6/user/sqlreference/sql-decoration",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/sqlreference/sql-decoration.md",tags:[],version:"v1.6",frontMatter:{title:"SQL\u4fee\u9970",keywords:["Seata"],description:"Seata SQL\u4fee\u9970"},sidebar:"docs",previous:{title:"DML\u8bed\u53e5",permalink:"/zh-cn/docs/v1.6/user/sqlreference/dml"},next:{title:"\u51fd\u6570",permalink:"/zh-cn/docs/v1.6/user/sqlreference/function"}},r={},x=[{value:"DML \u8bed\u53e5\u652f\u6301",id:"dml-\u8bed\u53e5\u652f\u6301",level:3},{value:"Select \u8bed\u53e5\u652f\u6301",id:"select-\u8bed\u53e5\u652f\u6301",level:3}];function o(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sql-\u4fee\u9970",children:"SQL \u4fee\u9970"}),"\n",(0,n.jsx)(t.p,{children:"Seata \u7684\u9694\u79bb\u7ea7\u522b\u9ed8\u8ba4\u4e3a\u8bfb\u672a\u63d0\u4ea4\uff0c\u8be5\u6a21\u5f0f\u4e0b\u672c\u6587\u8868\u4e2d\u7684 select \u8bed\u53e5\u7684 SQL \u4fee\u9970\u7528\u6cd5\u90fd\u662f\u652f\u6301\u7684\uff1b\u4f7f\u7528 for update \u4ee3\u7406\u53ef\u4ee5\u8ba9 Seata \u8fbe\u5230\u8bfb\u5df2\u63d0\u4ea4\uff0c\u8be5\u6a21\u5f0f\u4e0b select \u8bed\u53e5\u7684\u7528\u6cd5\u53ea\u80fd\u90e8\u5206\u652f\u6301\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"dml-\u8bed\u53e5\u652f\u6301",children:"DML \u8bed\u53e5\u652f\u6301"}),"\n",(0,n.jsxs)(t.p,{children:["| \u7c7b\u578b         | SQL \u5b9e\u4f8b                                              | \u662f\u5426\u652f\u6301                                                               |\n| :----------- | :---------------------------------------------------- | :--------------------------------------------------------------------- | --- |\n| AND & OR     | ",(0,n.jsx)(t.code,{children:"UPDATE \u2026 WHERE col_name1=expr1 AND col_name2= expr2"})," | \u662f                                                                     |\n| LIKE         | ",(0,n.jsx)(t.code,{children:"UPDATE ... WHERE col_name1 LIKE 'NE'"}),"                | \u662f                                                                     |\n| \u901a\u914d\u7b26       | ",(0,n.jsx)(t.code,{children:"UPDATE ... WHERE col_name1 LIKE 'NE%'"}),"               | \u662f                                                                     |\n| BETWEEN      | ",(0,n.jsx)(t.code,{children:"UPDATE ... WHERE col_name1 BETWEEN expr1 AND expr2"}),"  | \u662f                                                                     |\n| ON DUPLICATE | ",(0,n.jsx)(t.code,{children:"INSERT INTO tb1_name [(col_name,...)]VALUES (\\{expr  | DEFAULT},...),(...),...[ ON DUPLICATE KEY UPDATE col_name=expr, ... ]"})," | \u662f  |"]}),"\n",(0,n.jsx)(t.h3,{id:"select-\u8bed\u53e5\u652f\u6301",children:"Select \u8bed\u53e5\u652f\u6301"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"SQL \u5b9e\u4f8b"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u8bfb\u672a\u63d0\u4ea4"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u8bfb\u5df2\u63d0\u4ea4"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AND & OR"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT * FROM tb1_name WHERE col_name1=expr1 AND col_name2= expr2"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ORDER BY"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name ORDER BY col_name1"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GROUP BY"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name GROUP BY col_name1"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LIKE"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 LIKE 'NE'"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u901a\u914d\u7b26"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 LIKE 'NE%'"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"EXISTS"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE EXISTS (expr1)"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"IN"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 IN (expr1, expr2,...)"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"BETWEEN"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 BETWEEN expr1 AND expr2"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ON DUPLICATE"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"INSERT INTO tb1_name [(col_name,...)]VALUES ({expr | DEFAULT},...),(...),...[ ON DUPLICATE KEY UPDATE col_name=expr, ... ]"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ALIASES"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT t1. col_name1, t2.col_name2 FROM tb1_name AS t1, tb2_name AS t2 WHERE t1. col_name=expr AND t2. col_name=expr"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"TOP"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT TOP 2 * FROM tb1_name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LIMIT"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name LIMIT 5"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"JOININNER JOINLEFT JOINRIGHT JOINFULL JOIN"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name JOIN tb2_name>ON tb1_name. col_name1= tb2_name. col_name1"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"UNIONUNION ALLSELECT INTO"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name UNION SELECT col_name1, col_name2 FROM tb2_name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>i});var n=l(96540);const s={},c=n.createContext(s);function d(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);
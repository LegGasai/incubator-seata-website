"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[21312],{86043:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var a=n(74848),r=n(28453);const t={title:"6\u5927\u8bfe\u9898\u73b0\u5df2\u5f00\u653e\u6311\u9009 | \u6b22\u8fce\u62a5\u540d Seata \u5f00\u6e90\u4e4b\u590f",author:"Seata\u793e\u533a",date:"2023/05/12",keywords:["\u5f00\u6e90\u4e4b\u590f\u3001seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"]},i="6\u5927\u8bfe\u9898\u73b0\u5df2\u5f00\u653e\u6311\u9009 | \u6b22\u8fce\u62a5\u540d Seata \u5f00\u6e90\u4e4b\u590f",c={permalink:"/zh-cn/blog/iscas2023",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/iscas2023.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/iscas2023.md",title:"6\u5927\u8bfe\u9898\u73b0\u5df2\u5f00\u653e\u6311\u9009 | \u6b22\u8fce\u62a5\u540d Seata \u5f00\u6e90\u4e4b\u590f",description:"\u6b22\u8fce\u5927\u5bb6\u62a5\u540dSeata \u5f00\u6e90\u4e4b\u590f2023\u8bfe\u9898",date:"2023-05-12T00:00:00.000Z",formattedDate:"2023\u5e745\u670812\u65e5",tags:[],readingTime:10.575,hasTruncateMarker:!1,authors:[{name:"Seata\u793e\u533a"}],frontMatter:{title:"6\u5927\u8bfe\u9898\u73b0\u5df2\u5f00\u653e\u6311\u9009 | \u6b22\u8fce\u62a5\u540d Seata \u5f00\u6e90\u4e4b\u590f",author:"Seata\u793e\u533a",date:"2023/05/12",keywords:["\u5f00\u6e90\u4e4b\u590f\u3001seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"]},unlisted:!1,prevItem:{title:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86\uff01\uff01\uff01",permalink:"/zh-cn/blog/seata-go-1.2.0"},nextItem:{title:"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd",permalink:"/zh-cn/blog/seata-1.6.0"}},l={authorsImageUrls:[void 0]},h=[{value:"\u6b22\u8fce\u5927\u5bb6\u62a5\u540dSeata \u5f00\u6e90\u4e4b\u590f2023\u8bfe\u9898",id:"\u6b22\u8fce\u5927\u5bb6\u62a5\u540dseata-\u5f00\u6e90\u4e4b\u590f2023\u8bfe\u9898",level:3},{value:"\u5f00\u6e90\u4e4b\u590f2023",id:"\u5f00\u6e90\u4e4b\u590f2023",level:3},{value:"Seata\u793e\u533a\u4ecb\u7ecd",id:"seata\u793e\u533a\u4ecb\u7ecd",level:3},{value:"Seata\u793e\u533a\u5f00\u6e90\u4e4b\u590f2023\u9879\u76ee\u8bfe\u9898\u6c47\u603b",id:"seata\u793e\u533a\u5f00\u6e90\u4e4b\u590f2023\u9879\u76ee\u8bfe\u9898\u6c47\u603b",level:3},{value:"\u9879\u76ee\u4e00: \u5b9e\u73b0\u7528\u4e8e\u670d\u52a1\u53d1\u73b0\u548c\u6ce8\u518c\u7684NamingServer",id:"\u9879\u76ee\u4e00-\u5b9e\u73b0\u7528\u4e8e\u670d\u52a1\u53d1\u73b0\u548c\u6ce8\u518c\u7684namingserver",level:4},{value:"\u9879\u76ee\u4e8c: \u5728seata-go\u4e2d\u5b9e\u73b0saga\u4e8b\u52a1\u6a21\u5f0f",id:"\u9879\u76ee\u4e8c-\u5728seata-go\u4e2d\u5b9e\u73b0saga\u4e8b\u52a1\u6a21\u5f0f",level:4},{value:"\u9879\u76ee\u4e09: seata saga\u6a21\u5f0f\u4ea7\u54c1\u5316\u80fd\u529b\u63d0\u5347",id:"\u9879\u76ee\u4e09-seata-saga\u6a21\u5f0f\u4ea7\u54c1\u5316\u80fd\u529b\u63d0\u5347",level:4},{value:"\u9879\u76ee\u56db:  \u589e\u52a0\u63a7\u5236\u53f0\u4e8b\u52a1\u63a7\u5236\u80fd\u529b",id:"\u9879\u76ee\u56db--\u589e\u52a0\u63a7\u5236\u53f0\u4e8b\u52a1\u63a7\u5236\u80fd\u529b",level:4},{value:"\u9879\u76ee\u4e94:  \u63d0\u9ad8\u5355\u6d4b\u8986\u76d6\u7387\u548c\u5efa\u7acb\u96c6\u6210\u6d4b\u8bd5",id:"\u9879\u76ee\u4e94--\u63d0\u9ad8\u5355\u6d4b\u8986\u76d6\u7387\u548c\u5efa\u7acb\u96c6\u6210\u6d4b\u8bd5",level:4},{value:"\u9879\u76ee\u516d: \u5b9e\u73b0Seata\u8fd0\u7ef4ctl\u5de5\u5177",id:"\u9879\u76ee\u516d-\u5b9e\u73b0seata\u8fd0\u7ef4ctl\u5de5\u5177",level:4},{value:"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90\u4e4b\u590f2023\u5e76\u5feb\u901f\u9009\u5b9a\u9879\u76ee\uff1f",id:"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90\u4e4b\u590f2023\u5e76\u5feb\u901f\u9009\u5b9a\u9879\u76ee",level:3},{value:"\u53c2\u8003\u8d44\u6599\uff1a",id:"\u53c2\u8003\u8d44\u6599",level:4}];function d(e){const s={a:"a",br:"br",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h3,{id:"\u6b22\u8fce\u5927\u5bb6\u62a5\u540dseata-\u5f00\u6e90\u4e4b\u590f2023\u8bfe\u9898",children:"\u6b22\u8fce\u5927\u5bb6\u62a5\u540dSeata \u5f00\u6e90\u4e4b\u590f2023\u8bfe\u9898"}),"\n",(0,a.jsxs)(s.p,{children:["\u5f00\u6e90\u4e4b\u590f 2023 \u5b66\u751f\u62a5\u540d\u671f\u4e3a ",(0,a.jsx)(s.strong,{children:"4 \u6708 29 \u65e5-6\u67084\u65e5"}),"\uff0c\u6b22\u8fce\u62a5\u540dSeata 2023 \u8bfe\u9898\uff01\u5728\u8fd9\u91cc\uff0c\u60a8\u5c06\u6709\u673a\u4f1a\u6df1\u5165\u63a2\u8ba8\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u7406\u8bba\u548c\u5e94\u7528\uff0c\u5e76\u4e0e\u6765\u81ea\u4e0d\u540c\u80cc\u666f\u7684\u540c\u5b66\u4e00\u8d77\u5408\u4f5c\u5b8c\u6210\u5b9e\u8df5\u9879\u76ee\u3002\u6211\u4eec\u671f\u5f85\u7740\u60a8\u7684\u79ef\u6781\u53c2\u4e0e\u548c\u8d21\u732e\uff0c\u5171\u540c\u63a8\u52a8\u5206\u5e03\u5f0f\u4e8b\u52a1\u9886\u57df\u7684\u53d1\u5c55\u3002"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"summer2023-1",src:n(16492).A+"",width:"1290",height:"2796"})}),"\n",(0,a.jsx)(s.h3,{id:"\u5f00\u6e90\u4e4b\u590f2023",children:"\u5f00\u6e90\u4e4b\u590f2023"}),"\n",(0,a.jsx)(s.p,{children:"\u5f00\u6e90\u4e4b\u590f\u662f\u7531\u4e2d\u79d1\u9662\u8f6f\u4ef6\u6240\u201c\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u70b9\u4eae\u8ba1\u5212\u201d\u53d1\u8d77\u5e76\u957f\u671f\u652f\u6301\u7684\u4e00\u9879\u6691\u671f\u5f00\u6e90\u6d3b\u52a8\uff0c\u65e8\u5728\u9f13\u52b1\u5728\u6821\u5b66\u751f\u79ef\u6781\u53c2\u4e0e\u5f00\u6e90\u8f6f\u4ef6\u7684\u5f00\u53d1\u7ef4\u62a4\uff0c\u57f9\u517b\u548c\u53d1\u6398\u66f4\u591a\u4f18\u79c0\u7684\u5f00\u53d1\u8005\uff0c\u4fc3\u8fdb\u4f18\u79c0\u5f00\u6e90\u8f6f\u4ef6\u793e\u533a\u7684\u84ec\u52c3\u53d1\u5c55\uff0c\u52a9\u529b\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u5efa\u8bbe\u3002"}),"\n",(0,a.jsxs)(s.p,{children:["\u53c2\u4e0e\u5b66\u751f\u901a\u8fc7\u8fdc\u7a0b\u7ebf\u4e0a\u534f\u4f5c\u65b9\u5f0f\uff0c\u914d\u6709\u8d44\u6df1\u5bfc\u5e08\u6307\u5bfc\uff0c\u53c2\u4e0e\u5230\u5f00\u6e90\u793e\u533a\u5404\u7ec4\u7ec7\u9879\u76ee\u5f00\u53d1\u4e2d\u5e76\u6536\u83b7\u5956\u91d1\u3001\u793c\u54c1\u4e0e\u8bc1\u4e66\u3002",(0,a.jsx)(s.strong,{children:"\u8fd9\u4e9b\u6536\u83b7\uff0c\u4e0d\u4ec5\u4ec5\u662f\u672a\u6765\u6bd5\u4e1a\u7b80\u5386\u4e0a\u6d53\u58a8\u91cd\u5f69\u7684\u4e00\u7b14\uff0c\u66f4\u662f\u8fc8\u5411\u9876\u5c16\u5f00\u53d1\u8005\u7684\u95ea\u4eae\u8d77\u70b9\uff0c\u53ef\u4ee5\u8bf4\u975e\u5e38\u503c\u5f97\u4e00\u8bd5\u3002"}),"  \u6bcf\u4e2a\u9879\u76ee\u96be\u5ea6\u5206\u4e3a\u57fa\u7840\u548c\u8fdb\u9636\u4e24\u6863\uff0c\u5bf9\u5e94\u5b66\u751f\u7ed3\u9879\u5956\u91d1\u5206\u522b\u4e3a\u7a0e\u524d\u4eba\u6c11\u5e01 8000 \u5143\u548c\u7a0e\u524d\u4eba\u6c11\u5e01 12000 \u5143\u3002"]}),"\n",(0,a.jsx)(s.h3,{id:"seata\u793e\u533a\u4ecb\u7ecd",children:"Seata\u793e\u533a\u4ecb\u7ecd"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Seata"})," \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0cGitHub\u83b7\u5f97\u8d85\u8fc723K+ Starts\u81f4\u529b\u4e8e\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002\u5728 Seata \u5f00\u6e90\u4e4b\u524d\uff0cSeata \u5728\u963f\u91cc\u5185\u90e8\u4e00\u76f4\u626e\u6f14\u7740\u5206\u5e03\u5f0f\u6570\u636e\u4e00\u81f4\u6027\u7684\u4e2d\u95f4\u4ef6\u89d2\u8272\uff0c\u51e0\u4e4e\u6bcf\u7b14\u4ea4\u6613\u90fd\u8981\u4f7f\u7528Seata\uff0c\u5386\u7ecf\u53cc11\u6d2a\u8352\u6d41\u91cf\u7684\u6d17\u793c\uff0c\u5bf9\u4e1a\u52a1\u8fdb\u884c\u4e86\u6709\u529b\u7684\u6280\u672f\u652f\u6491\u3002"]}),"\n",(0,a.jsx)(s.h3,{id:"seata\u793e\u533a\u5f00\u6e90\u4e4b\u590f2023\u9879\u76ee\u8bfe\u9898\u6c47\u603b",children:"Seata\u793e\u533a\u5f00\u6e90\u4e4b\u590f2023\u9879\u76ee\u8bfe\u9898\u6c47\u603b"}),"\n",(0,a.jsxs)(s.p,{children:["Seata\u793e\u533a\u4e3a\u5f00\u6e90\u4e4b\u590f2023\u7ec4\u59d4\u4f1a\u63a8\u83506\u9879\u7cbe\u9009\u9879\u76ee\u8bfe\u9898\uff0c\u60a8\u53ef\u4ee5\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\u8fdb\u884c\u9009\u62a5\uff1a",(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/orgdetail/064c15df-705c-483a-8fc8-02831370db14?lang=zh",children:"https://summer-ospp.ac.cn/org/orgdetail/064c15df-705c-483a-8fc8-02831370db14?lang=zh"}),(0,a.jsx)(s.br,{}),"\n","\u8bf7\u53ca\u65f6\u4e0e\u5404\u5bfc\u5e08\u6c9f\u901a\u5e76\u51c6\u5907\u9879\u76ee\u7533\u8bf7\u6750\u6599\uff0c\u5e76\u767b\u5f55\u5b98\u65b9\u6ce8\u518c\u7533\u62a5\uff08\u4ee5\u4e0b\u8bfe\u9898\u987a\u5e8f\u4e0d\u5206\u5148\u540e\uff09\uff1a\n",(0,a.jsx)(s.img,{alt:"seata2023-2",src:n(98499).A+"",width:"706",height:"271"})]}),"\n",(0,a.jsx)(s.h4,{id:"\u9879\u76ee\u4e00-\u5b9e\u73b0\u7528\u4e8e\u670d\u52a1\u53d1\u73b0\u548c\u6ce8\u518c\u7684namingserver",children:"\u9879\u76ee\u4e00: \u5b9e\u73b0\u7528\u4e8e\u670d\u52a1\u53d1\u73b0\u548c\u6ce8\u518c\u7684NamingServer"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u96be\u5ea6\uff1a"})," \u8fdb\u9636/Advanced"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u793e\u533a\u5bfc\u5e08\uff1a"})," \u9648\u5065\u658c"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u5bfc\u5e08\u8054\u7cfb\u90ae\u7bb1\uff1a"})," ",(0,a.jsx)(s.a,{href:"mailto:364176773@qq.com",children:"364176773@qq.com"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u7b80\u8ff0\uff1a"}),(0,a.jsx)(s.br,{}),"\n","\u76ee\u524dseata\u7684\u670d\u52a1\u66b4\u9732\u53ca\u53d1\u73b0\u4e3b\u8981\u4f9d\u8d56\u4e8e\u7b2c\u4e09\u65b9\u6ce8\u518c\u4e2d\u5fc3\uff0c\u968f\u7740\u9879\u76ee\u7684\u6f14\u8fdb\u53d1\u5c55\uff0c\u5e26\u6765\u4e86\u989d\u5916\u7684\u5b66\u4e60\u4f7f\u7528\u6210\u672c\uff0c\u800c\u4e1a\u5185\u4e3b\u6d41\u5177\u6709\u670d\u52a1\u7aef\u7684\u4e2d\u95f4\u4ef6\u5927\u591a\u90fd\u5f00\u59cb\u6f14\u8fdb\u81ea\u8eab\u7684\u670d\u52a1\u81ea\u95ed\u73af\u548c\u63a7\u5236\u53ca\u63d0\u4f9b\u4e8e\u670d\u52a1\u7aef\u66f4\u9ad8\u5951\u5408\u5ea6\u548c\u53ef\u9760\u6027\u7684\u7ec4\u4ef6\u6216\u529f\u80fd\u5982kafka \u7684KRaft\uff0crocketmq\u7684NameServer\uff0cclickhouse\u7684ClickHouse Keeper\u7b49.\u6545\u4e3a\u4e86\u89e3\u51b3\u5982\u4e0a\u95ee\u9898\u548c\u67b6\u6784\u6f14\u8fdb\u8981\u6c42,seata\u9700\u8981\u6784\u5efa\u81ea\u8eab\u7684nameserver\u6765\u4fdd\u8bc1\u66f4\u52a0\u7a33\u5b9a\u53ef\u9760\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u94fe\u63a5\uff1a"}),"\n",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/prodetail/230640380?list=org&navpage=org",children:"https://summer-ospp.ac.cn/org/prodetail/230640380?list=org&navpage=org"})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h4,{id:"\u9879\u76ee\u4e8c-\u5728seata-go\u4e2d\u5b9e\u73b0saga\u4e8b\u52a1\u6a21\u5f0f",children:"\u9879\u76ee\u4e8c: \u5728seata-go\u4e2d\u5b9e\u73b0saga\u4e8b\u52a1\u6a21\u5f0f"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u96be\u5ea6\uff1a"})," \u8fdb\u9636/Advanced"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u793e\u533a\u5bfc\u5e08\uff1a"})," \u5218\u6708\u8d22"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u5bfc\u5e08\u8054\u7cfb\u90ae\u7bb1\uff1a"})," ",(0,a.jsx)(s.a,{href:"mailto:luky116@apache.org",children:"luky116@apache.org"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u7b80\u8ff0\uff1a"}),"\nSaga\u6a21\u5f0f\u662fSEATA\u63d0\u4f9b\u7684\u957f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u5728Saga\u6a21\u5f0f\u4e2d\uff0c\u4e1a\u52a1\u6d41\u7a0b\u4e2d\u6bcf\u4e2a\u53c2\u4e0e\u8005\u90fd\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\uff0c\u5f53\u51fa\u73b0\u67d0\u4e00\u4e2a\u53c2\u4e0e\u8005\u5931\u8d25\u5219\u8865\u507f\u524d\u9762\u5df2\u7ecf\u6210\u529f\u7684\u53c2\u4e0e\u8005\uff0c\u4e00\u9636\u6bb5\u6b63\u5411\u670d\u52a1\u548c\u4e8c\u9636\u6bb5\u8865\u507f\u670d\u52a1\u90fd\u7531\u4e1a\u52a1\u5f00\u53d1\u5b9e\u73b0\u3002Seata-go \u4e2d\u5f53\u524d\u6ca1\u6709\u652f\u6301saga\u6a21\u5f0f\uff0c\u5e0c\u671b\u540e\u9762\u53c2\u8003Java\u7248\u672c\u7684\u5b9e\u73b0\u80fd\u5c06\u8be5\u529f\u80fd\u652f\u6301\u4e0a\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u94fe\u63a5\uff1a"}),"\n",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/prodetail/230640382?list=org&navpage=org",children:"https://summer-ospp.ac.cn/org/prodetail/230640382?list=org&navpage=org"})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h4,{id:"\u9879\u76ee\u4e09-seata-saga\u6a21\u5f0f\u4ea7\u54c1\u5316\u80fd\u529b\u63d0\u5347",children:"\u9879\u76ee\u4e09: seata saga\u6a21\u5f0f\u4ea7\u54c1\u5316\u80fd\u529b\u63d0\u5347"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u96be\u5ea6\uff1a"})," \u8fdb\u9636/Advanced"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u793e\u533a\u5bfc\u5e08\uff1a"})," \u674e\u5b97\u6770"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u5bfc\u5e08\u8054\u7cfb\u90ae\u7bb1\uff1a"})," ",(0,a.jsx)(s.a,{href:"mailto:leezongjie@163.com",children:"leezongjie@163.com"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u7b80\u8ff0\uff1a"}),"\nsaga\u4f5c\u4e3a\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u89e3\u51b3\u65b9\u6848\u4e4b\u4e00\uff0c\u5728\u957f\u4e8b\u52a1\u4e0a\u5e94\u7528\u5c24\u5176\u5e7f\u6cdb\uff0cseata\u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u72b6\u6001\u673a\u5b9e\u73b0\u3002\u968f\u7740\u4e1a\u52a1\u7684\u4e0d\u65ad\u53d1\u5c55\u548c\u63a5\u5165\uff0c\u5bf9seata\u63d0\u51fa\u4e86\u66f4\u9ad8\u7684\u8981\u6c42\uff0c\u6211\u4eec\u9700\u8981\u652f\u6301\u6d41\u5f0fsaga \u7f16\u6392\uff0c\u5bf9\u5f53\u524d\u72b6\u6001\u673a\u7684\u5b9e\u73b0\u8fdb\u884c\u4f18\u5316\u548c\u6269\u5c55\uff0c\u8fdb\u4e00\u6b65\u670d\u52a1\u4e1a\u52a1\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u94fe\u63a5\uff1a"}),"\n",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/prodetail/230640415?list=org&navpage=org",children:"https://summer-ospp.ac.cn/org/prodetail/230640415?list=org&navpage=org"})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h4,{id:"\u9879\u76ee\u56db--\u589e\u52a0\u63a7\u5236\u53f0\u4e8b\u52a1\u63a7\u5236\u80fd\u529b",children:"\u9879\u76ee\u56db:  \u589e\u52a0\u63a7\u5236\u53f0\u4e8b\u52a1\u63a7\u5236\u80fd\u529b"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u96be\u5ea6\uff1a"})," \u8fdb\u9636/Advanced"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u793e\u533a\u5bfc\u5e08\uff1a"})," \u738b\u826f"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u5bfc\u5e08\u8054\u7cfb\u90ae\u7bb1\uff1a"})," ",(0,a.jsx)(s.a,{href:"mailto:841369634@qq.com",children:"841369634@qq.com"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u7b80\u8ff0\uff1a"}),"\n\u5728\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\uff0c\u7ecf\u5e38\u4f1a\u5b58\u5728\u975e\u5e38\u591a\u7684\u5f02\u5e38\u60c5\u51b5\uff0c\u8fd9\u4e9b\u5f02\u5e38\u60c5\u51b5\u5f80\u5f80\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u65e0\u6cd5\u7ee7\u7eed\u8fd0\u884c\u3002\u800c\u8fd9\u4e9b\u5f02\u5e38\u5f80\u5f80\u9700\u8981\u4eba\u5de5\u4ecb\u5165\u6392\u67e5\u539f\u56e0\u5e76\u6392\u9664\u6545\u969c\uff0c\u624d\u80fd\u591f\u4f7f\u7cfb\u7edf\u7ee7\u7eed\u6b63\u5e38\u8fd0\u884c\u3002\u867d\u7136seata \u63d0\u4f9b\u4e86\u63a7\u5236\u53f0\u67e5\u8be2\u4e8b\u52a1\u6570\u636e\uff0c\u4f46\u8fd8\u672a\u63d0\u4f9b\u4efb\u4f55\u4e8b\u52a1\u63a7\u5236\u80fd\u529b\uff0c\u5e2e\u52a9\u6392\u9664\u6545\u969c\u3002\u6240\u4ee5\uff0c\u672c\u8bfe\u9898\u4e3b\u8981\u662f\u5728seata\u670d\u52a1\u7aef\u63a7\u5236\u53f0\u4e0a\uff0c\u6dfb\u52a0\u4e8b\u52a1\u63a7\u5236\u80fd\u529b\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u94fe\u63a5\uff1a"}),"\n",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/prodetail/230640423?list=org&navpage=org",children:"https://summer-ospp.ac.cn/org/prodetail/230640423?list=org&navpage=org"})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h4,{id:"\u9879\u76ee\u4e94--\u63d0\u9ad8\u5355\u6d4b\u8986\u76d6\u7387\u548c\u5efa\u7acb\u96c6\u6210\u6d4b\u8bd5",children:"\u9879\u76ee\u4e94:  \u63d0\u9ad8\u5355\u6d4b\u8986\u76d6\u7387\u548c\u5efa\u7acb\u96c6\u6210\u6d4b\u8bd5"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u96be\u5ea6\uff1a"})," \u57fa\u7840/Basic"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u793e\u533a\u5bfc\u5e08\uff1a"})," \u5f20\u5609\u4f1f"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u5bfc\u5e08\u8054\u7cfb\u90ae\u7bb1\uff1a"})," ",(0,a.jsx)(s.a,{href:"mailto:349071347@qq.com",children:"349071347@qq.com"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u7b80\u8ff0\uff1a"}),"\n\u4e3a\u4e86\u8fdb\u4e00\u6b65\u63d0\u9ad8\u9879\u76ee\u7684\u8d28\u91cf\u4ee5\u53ca\u7a33\u5b9a\u6027, \u9700\u8981\u8fdb\u4e00\u6b65\u63d0\u5347\u9879\u76ee\u5355\u5143\u6d4b\u8bd5\u8986\u76d6\u7387\u4ee5\u53ca\u52a0\u5165\u96c6\u6210\u6d4b\u8bd5\u6765\u6a21\u62df\u751f\u4ea7\u4e2d\u4e0d\u540c\u7684\u573a\u666f. \u96c6\u6210\u6d4b\u8bd5\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u6a21\u62dfclient\u4e0eserver\u7684\u4ea4\u4e92\u8fc7\u7a0b, \u800c\u975e\u5355\u4e00\u7684\u5bf9\u67d0\u4e2a\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u94fe\u63a5\uff1a"}),"\n",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/prodetail/230640424?list=org&navpage=org",children:"https://summer-ospp.ac.cn/org/prodetail/230640424?list=org&navpage=org"})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h4,{id:"\u9879\u76ee\u516d-\u5b9e\u73b0seata\u8fd0\u7ef4ctl\u5de5\u5177",children:"\u9879\u76ee\u516d: \u5b9e\u73b0Seata\u8fd0\u7ef4ctl\u5de5\u5177"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u96be\u5ea6\uff1a"})," \u8fdb\u9636/Advanced"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u793e\u533a\u5bfc\u5e08\uff1a"})," \u5b63\u654f"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u5bfc\u5e08\u8054\u7cfb\u90ae\u7bb1\uff1a"}),"  ",(0,a.jsx)(s.a,{href:"mailto:jimin.jm@alibaba-inc.com",children:"jimin.jm@alibaba-inc.com"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9879\u76ee\u7b80\u8ff0\uff1a"})," \u8fd0\u7ef4ctl\u547d\u4ee4\u5728Seata\u4e2d\u975e\u5e38\u91cd\u8981\uff0c\u5b83\u662fSeata\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u7ba1\u7406\u548c\u64cd\u4f5cSeata\u7684\u5404\u79cd\u7ec4\u4ef6\u3002\u8fd0\u7ef4ctl\u547d\u4ee4\u53ef\u4ee5\u8ba9\u6211\u4eec\u5feb\u901f\u5730\u542f\u52a8\u3001\u505c\u6b62\u548c\u7ba1\u7406Seata\u670d\u52a1\uff0c\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002\u6b64\u5916\uff0c\u8fd0\u7ef4ctl \u547d\u4ee4\u8fd8\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u6307\u4ee4\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u65b9\u4fbf\u5730\u68c0\u67e5Seata\u7684\u5065\u5eb7\u72b6\u6001\u3001\u6a21\u62df\u4e8b\u52a1\u548c\u6253\u5370\u5bfc\u51fa\u914d\u7f6e\u4fe1\u606f\u7b49\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u6211\u4eec\u7684\u5de5\u4f5c\u6548\u7387\u548c\u8fd0\u7ef4\u4f53\u9a8c\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u5bf9\u5b9e\u73b0\u5b9a\u5236ctl\u8fd0\u7ef4\u547d\u4ee4\u884c\u7684\u4e00\u4e9b\u5efa\u8bae\uff1a"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\u501f\u9274\u5176\u4ed6\u5f00\u6e90\u9879\u76ee\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u6bd4\u5982kubectl\uff0chelm\u7b49\uff0c\u5e76\u6839\u636eSeata\u7684\u7279\u70b9\u548c\u9700\u6c42\u8fdb\u884c\u5b9a\u5236\u3002"}),"\n",(0,a.jsx)(s.li,{children:"\u5c06\u5e38\u7528\u7684\u8fd0\u7ef4\u64cd\u4f5c\u76f4\u63a5\u5c01\u88c5\u8fdb\u547d\u4ee4\u884c\uff0c\u51cf\u5c11\u7528\u6237\u7684\u624b\u52a8\u64cd\u4f5c\u3002"}),"\n",(0,a.jsx)(s.li,{children:"\u8003\u8651\u4f7f\u7528\u53cb\u597d\u7684\u547d\u4ee4\u548c\u53c2\u6570\u540d\u79f0\uff0c\u5c06\u547d\u4ee4\u884c\u8bbe\u8ba1\u5f97\u6613\u4e8e\u7406\u89e3\u548c\u8bb0\u5fc6\u3002"}),"\n",(0,a.jsx)(s.li,{children:"\u63d0\u4f9b\u8be6\u7ec6\u7684\u5e2e\u52a9\u6587\u6863\u548c\u793a\u4f8b\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u4e0a\u624b\u548c\u4e86\u89e3\u5982\u4f55\u4f7f\u7528\u5404\u79cd\u53c2\u6570\u548c\u9009\u9879\u3002"}),"\n",(0,a.jsx)(s.li,{children:"\u8003\u8651\u547d\u4ee4\u884c\u7684\u8de8\u5e73\u53f0\u652f\u6301\uff0c\u4f8b\u5982\u652f\u6301Windows\u3001Linux\u548cMacOS\u7b49\u64cd\u4f5c\u7cfb\u7edf\u3002\n\u4e00\u6b3e\u597d\u7684ctl\u547d\u4ee4\u884c\u5e94\u8be5\u662f\u6613\u7528\u3001\u7075\u6d3b\u3001\u53ef\u5b9a\u5236\u3001\u5065\u58ee\u548c\u6613\u7ef4\u62a4\u7684\u3002"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["\u9879\u76ee\u94fe\u63a5\uff1a",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/prodetail/230640431?list=org&navpage=org",children:"https://summer-ospp.ac.cn/org/prodetail/230640431?list=org&navpage=org"})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90\u4e4b\u590f2023\u5e76\u5feb\u901f\u9009\u5b9a\u9879\u76ee",children:"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90\u4e4b\u590f2023\u5e76\u5feb\u901f\u9009\u5b9a\u9879\u76ee\uff1f"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"\u6b22\u8fce\u901a\u8fc7\u4e0a\u65b9\u8054\u7cfb\u65b9\u5f0f\uff0c\u4e0e\u5404\u5bfc\u5e08\u6c9f\u901a\u5e76\u51c6\u5907\u9879\u76ee\u7533\u8bf7\u6750\u6599\u3002"})}),"\n",(0,a.jsxs)(s.p,{children:["\u8bfe\u9898\u53c2\u4e0e\u671f\u95f4\uff0c\u5b66\u751f\u53ef\u4ee5\u5728\u4e16\u754c\u4efb\u4f55\u5730\u65b9\u7ebf\u4e0a\u5de5\u4f5c\uff0cSeata\u76f8\u5173\u9879\u76ee\u7ed3\u9879\u9700\u8981\u5728",(0,a.jsx)(s.strong,{children:"9\u670830\u65e5"}),"\u524d\u4ee5 PR \u7684\u5f62\u5f0f\u63d0\u4ea4\u5230Seata\u793e\u533a\u4ed3\u5e93\u4e2d\u5e76\u5b8c\u6210\u5408\u5e76\uff0c\u8bf7\u52a1\u5fc5\u5c3d\u65e9\u51c6\u5907\u3002\n",(0,a.jsx)(s.img,{alt:"seata2023-3",src:n(34394).A+"",width:"1080",height:"471"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u9700\u8981\u5728\u8bfe\u9898\u671f\u95f4\u7b2c\u4e00\u65f6\u95f4\u83b7\u53d6\u5bfc\u5e08\u53ca\u5176\u4ed6\u4fe1\u606f,\u53ef\u626b\u7801\u8fdb\u5165\u9489\u9489\u7fa4\u4ea4\u6d41"})," \u2014\u2014\u4e86\u89e3Seata\u793e\u533a\u5404\u9886\u57df\u9879\u76ee\u3001\u7ed3\u8bc6Seata\u793e\u533a\u5f00\u6e90\u5bfc\u5e08\uff0c\u4ee5\u52a9\u529b\u540e\u7eed\u7533\u8bf7\u3002"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("img",{src:"/img/blog/summer2023-4.jpg",height:"290",width:"250"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h4,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599\uff1a"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Seata\u7f51\u7ad9 :"}),"  ",(0,a.jsx)(s.a,{href:"https://seata.apache.org/",children:"https://seata.apache.org/"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Seata GitHub :"})," ",(0,a.jsx)(s.a,{href:"https://github.com/seata",children:"https://github.com/seata"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"\u5f00\u6e90\u4e4b\u590f\u5b98\u7f51\uff1a"})," ",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/orgdetail/ab188e59-fab8-468f-bc89-bdc2bd8b5e64?lang=zh",children:"https://summer-ospp.ac.cn/org/orgdetail/ab188e59-fab8-468f-bc89-bdc2bd8b5e64?lang=zh"})]}),"\n",(0,a.jsx)(s.p,{children:"\u5982\u679c\u540c\u5b66\u4eec\u5bf9\u5fae\u670d\u52a1\u5176\u4ed6\u9886\u57df\u9879\u76ee\u611f\u5174\u8da3\uff0c\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u7533\u8bf7\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\u5bf9\u4e8e",(0,a.jsx)(s.strong,{children:"\u5fae\u670d\u52a1\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"}),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5",(0,a.jsx)(s.a,{href:"https://nacos.io/zh-cn/blog/iscas2023.html",children:"Nacos \u5f00\u6e90\u4e4b\u590f"}),"\uff1b"]}),"\n",(0,a.jsxs)(s.li,{children:["\u5bf9\u4e8e",(0,a.jsx)(s.strong,{children:"\u5fae\u670d\u52a1\u6846\u67b6\u548cRPC\u6846\u67b6"}),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/orgdetail/41d68399-ed48-4d6d-9d4d-3ff4128dc132?lang=zh",children:"Spring Cloud Alibaba \u5f00\u6e90\u4e4b\u590f"})," \u548c ",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac.cn/org/orgdetail/a7f6e2ad-4acc-47f8-9471-4e54b9a166a6?lang=zh",children:"Dubbo \u5f00\u6e90\u4e4b\u590f"})," \uff1b"]}),"\n",(0,a.jsxs)(s.li,{children:["\u5bf9\u4e8e",(0,a.jsx)(s.strong,{children:"\u4e91\u539f\u751f\u7f51\u5173"}),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5",(0,a.jsx)(s.a,{href:"https://higress.io/zh-cn/blog/ospp-2023",children:"Higress \u5f00\u6e90\u4e4b\u590f"}),"\uff1b"]}),"\n",(0,a.jsxs)(s.li,{children:["\u5bf9\u4e8e",(0,a.jsx)(s.strong,{children:"\u5206\u5e03\u5f0f\u9ad8\u53ef\u7528\u9632\u62a4"}),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5 [Sentinel \u5f00\u6e90\u4e4b\u590f](",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac",children:"https://summer-ospp.ac"}),". cn/org/orgdetail/5e879522-bd90-4a8b-bf8b-b11aea48626b?lang=zh) \uff1b"]}),"\n",(0,a.jsxs)(s.li,{children:["\u5bf9\u4e8e",(0,a.jsx)(s.strong,{children:"\u5fae\u670d\u52a1\u6cbb\u7406"}),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5  [OpenSergo \u5f00\u6e90\u4e4b\u590f](",(0,a.jsx)(s.a,{href:"https://summer-ospp.ac",children:"https://summer-ospp.ac"}),". cn/org/orgdetail/aaff4eec-11b1-4375-997d-5eea8f51762b?lang=zh)\u3002"]}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},16492:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/summer2023-1-354d728bacb1640f84811b82ac954a9d.jpg"},98499:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/summer2023-2-cff41105a59822fdd5e8d88d84ad0e2a.png"},34394:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/summer2023-3-9b3b418ef64bd3c1afb2782d17af315a.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var a=n(96540);const r={},t=a.createContext(r);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);
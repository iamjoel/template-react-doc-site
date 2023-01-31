"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[857],{9821:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(8404),r=a(4640);const l="tabItem_DY6L";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5011:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(8476),r=a(8404),l=a(4640),i=a(9731),o=a(7565),s=a(5793),u=a(3921);const d="tabList_x4Iu",m="tabItem_zOFr";function c(e){const{lazy:t,block:a,defaultValue:i,values:c,groupId:p,className:k}=e,A=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??A.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,o.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??A.find((e=>e.props.default))?.props.value??A[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:f}=(0,s.U)(),[x,v]=(0,r.useState)(g),y=[],{blockElementScrollPositionUntilNextRender:M}=(0,u.o5)();if(null!=p){const e=N[p];null!=e&&e!==x&&b.some((t=>t.value===e))&&v(e)}const T=e=>{const t=e.currentTarget,a=y.indexOf(t),n=b[a].value;n!==x&&(M(t),v(n),null!=p&&f(p,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=y.indexOf(e.currentTarget)+1;t=y[a]??y[0];break}case"ArrowLeft":{const a=y.indexOf(e.currentTarget)-1;t=y[a]??y[y.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},k)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>y.push(e),onKeyDown:C,onClick:T},i,{className:(0,l.Z)("tabs__item",m,i?.className,{"tabs__item--active":x===t})}),a??t)}))),t?(0,r.cloneElement)(A.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},A.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},9955:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(8404);const r=function(e,t){return void 0===e?t:e},l=e=>{let{type:t="primary",size:a="md",disabled:l=!1,onClick:i=(()=>{}),children:o}=e;const s=r({primary:"border-transparent",outline:l?"border-indigo-200":"border-indigo",text:"border-transparent"}[t],"border-transparent"),u=r({text:""}[t],"shadow-md"),d=l?r({primary:"bg-indigo-200",outline:"bg-white",text:"bg-white"}[t],"bg-indigo-200"):r({primary:"bg-indigo-500 hover:bg-indigo-400",outline:"bg-white",text:"bg-white hover:bg-gray-100"}[t],"bg-indigo-500 hover:bg-indigo-400"),m=r({primary:"text-white",outline:l?"text-indigo-200":"text-indigo-500 hover:text-indigo-400",text:l?"text-indigo-200":"text-indigo-500"}[t],"text-white"),c=r({sm:"h-7 px-4",md:"h-8 px-4",lg:"h-9 px-5"}[a],"h-8 px-4"),p=l?"cursor-not-allowed":"cursor-pointer",k=(0,n.useCallback)((()=>{l||i()}),[l]);return n.createElement("div",{className:`\n        inline-flex items-center\n        box-border\n        rounded-sm\n        ${u}\n        border border-solid ${s}\n        ${d}\n        ${c}\n        ${m}\n        ${p}\n      `,onClick:k},o)},i=n.memo(l)},3848:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>A,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var n=a(8476),r=(a(8404),a(6291)),l=a(9955),i=a(5011),o=a(9821),s=a(8814);const u={},d="MDX",m={unversionedId:"docusaurus/feature/mdx",id:"docusaurus/feature/mdx",title:"MDX",description:"MDX \u662f Markdown \u7684\u52a0\u5f3a\u7248\u3002\u5176\u9664\u4e86\u652f\u6301 Markdown \u7684\u8bed\u6cd5\u5916\uff0c\u8fd8\u652f\u6301\u5728 Markdown \u4e2d\u5199 JSX\u3002",source:"@site/docs/docusaurus/feature/mdx.mdx",sourceDirName:"docusaurus/feature",slug:"/docusaurus/feature/mdx",permalink:"/template-react-doc-site/site/build/docs/docusaurus/feature/mdx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docusaurus",previous:{title:"Docusaurus \u6982\u89c8",permalink:"/template-react-doc-site/site/build/docs/docusaurus/overview"},next:{title:"\u6d41\u7a0b\u56fe",permalink:"/template-react-doc-site/site/build/docs/docusaurus/feature/diagrams"}},c={},p=[{value:"Markdown \u5e38\u89c1\u5199\u6cd5",id:"markdown-\u5e38\u89c1\u5199\u6cd5",level:2},{value:"JSX",id:"jsx",level:2},{value:"Tabs \u7ec4\u4ef6",id:"tabs-\u7ec4\u4ef6",level:2},{value:"\u544a\u793a",id:"\u544a\u793a",level:2}],k={toc:p};function A(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mdx"},"MDX"),(0,r.kt)("p",null,"MDX \u662f Markdown \u7684\u52a0\u5f3a\u7248\u3002\u5176\u9664\u4e86\u652f\u6301 Markdown \u7684\u8bed\u6cd5\u5916\uff0c\u8fd8\u652f\u6301\u5728 Markdown \u4e2d\u5199 JSX\u3002"),(0,r.kt)("h2",{id:"markdown-\u5e38\u89c1\u5199\u6cd5"},"Markdown \u5e38\u89c1\u5199\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u8c03")," ",(0,r.kt)("del",{parentName:"p"},"\u5220\u9664\u7ebf")," ",(0,r.kt)("em",{parentName:"p"},"\u659c\u4f53")," ",(0,r.kt)("inlineCode",{parentName:"p"},"\u884c\u5185\u4ee3\u7801")," "),(0,r.kt)("p",null,"emoji: \ud83d\ude02 \ud83d\ude22 \ud83d\udc4d \ud83c\udf0f  ",(0,r.kt)("a",{parentName:"p",href:"https://emojipedia.org/"},"emojipedia")),(0,r.kt)("p",null,"\u94fe\u63a5: ",(0,r.kt)("a",{parentName:"p",href:"https://mdxjs.com/docs/"},"MDX \u5b98\u7f51"),"\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/cheat-sheet/"},"Markdown Cheat Sheet")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4658).Z,width:"200",height:"200"})),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," \u5206\u5272\u7ebf "),"/}"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u5757\u7ea7\u4ee3\u7801\nconst arr = [3]\narr.push(5)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u5b66\u4f1a\u9500\u552e\uff0c\u5b66\u4f1a\u6784\u5efa\uff0c\u4e24\u6280\u508d\u8eab\uff0c\u52bf\u4e0d\u53ef\u5f53\u3002"),(0,r.kt)("br",{parentName:"p"}),"\n","-","\u300a\u7eb3\u74e6\u5c14\u5b9d\u5178\u300b")),(0,r.kt)("p",null,"\u5e38\u89c1\u524d\u7aef\u6846\u67b6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React"),(0,r.kt)("li",{parentName:"ul"},"Vue"),(0,r.kt)("li",{parentName:"ul"},"Angular")),(0,r.kt)("p",null,"\u505a\u4e00\u4e2a\u4efb\u52a1\u7684\u987a\u5e8f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0UI"),(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u8ba1\u6570\u636e\u7ed3\u6784"),(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u6570\u636e\u7ed1\u5b9aui"),(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u4ea4\u4e92")),(0,r.kt)("p",null,"TODO List  "),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u80cc20\u4e2a\u5355\u8bcd\u3002"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u905b\u72d7\u3002"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6d17\u8863\u670d\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5de6\u5bf9\u9f50"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5c45\u4e2d"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u53f3\u5bf9\u9f50"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"term\n")),(0,r.kt)("p",null,": definition"),(0,r.kt)("h2",{id:"jsx"},"JSX"),(0,r.kt)(l.Z,{mdxType:"Btn"},"\u6309\u94ae"),(0,r.kt)("h2",{id:"tabs-\u7ec4\u4ef6"},"Tabs \u7ec4\u4ef6"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"npm install --save @docusaurus/theme-mermaid")),(0,r.kt)(o.Z,{value:"Yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"yarn add @docusaurus/theme-mermaid"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"TabItem \u91cc\u7684 Markdown \u4e0d\u4f1a\u88ab\u89e3\u6790\u3002")),(0,r.kt)("h2",{id:"\u544a\u793a"},"\u544a\u793a"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6c38\u8fdc\u53eb\u4e0d\u9192\u88c5\u7761\u7684\u4eba\u3002")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u70b9\u5c24\u5176\u91cd\u8981\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u964c\u4e0a\u82b1\u5f00\u7f13\u7f13\u5f52\u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5 API \u5df2\u5e9f\u5f03\u3002")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u8be5\u5220\u9664\u64cd\u4f5c"),"\u4e0d\u53ef\u9006\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002")))}A.isMDXComponent=!0},4658:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);
/*! For license information please see 0e384e19.a0b557f8.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[9671],{47876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(85893),s=t(11151);const r={sidebar_position:1,title:"Documentation",last_update:{date:"03/03/2023",author:"hunghg255"}},a="Tutorial",i={id:"intro",title:"Documentation",description:"This is documentation",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/hunghg255/web-totals/tree/main/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"hunghg255",lastUpdatedAt:1677776400,formattedLastUpdatedAt:"Mar 2, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Documentation",last_update:{date:"03/03/2023",author:"hunghg255"}},sidebar:"tutorialSidebar",next:{title:"How to git work?",permalink:"/docs/git/how-to-git-works"}},c={},l=[{value:"This is documentation",id:"this-is-documentation",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"tutorial",children:"Tutorial"}),"\n",(0,o.jsx)(n.h3,{id:"this-is-documentation",children:"This is documentation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="HELLO"',children:"const a = 2;\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export function foo() {\n  console.log('diff -'); // [!code --]\n  console.log('Diff plus'); // [!code ++]\n  console.log('highlight'); // [!code highlight]\n  console.log('error'); //  [!code error]\n  console.log('warning'); // [!code warning]\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export function foo() {\n  console.log('1');\n  console.log('Diff plus'); // [!code focus]\n  console.log('3');\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const App = () => {\n  return <div>App</div>;\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"twoslash=true",children:"// @log: Custom log message\nconst a = 1;\n// @error: Custom error message\nconst b = 1;\n// @warn: Custom warning message\nconst c = 1;\n// @annotate: Custom annotation message\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"twoslash",children:"// @errors: 2540\ninterface Todo {\n  title: string;\n}\n\nconst todo: Readonly<Todo> = {\n  title: 'Delete inactive users'.toUpperCase(),\n  //  ^?\n};\n\ntodo.title = 'Hello';\n\nNumber.parseInt('123', 10);\n//      ^|\n//\n//\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var o=t(67294),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,r={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,o)&&!c.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:l,ref:d,props:r,_owner:i.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
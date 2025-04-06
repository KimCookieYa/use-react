"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[976],{7879:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"intro","title":"use-react \uc18c\uac1c","description":"use-react\ub294 React \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \uc2dc \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \ucee4\uc2a4\ud140 \ud6c5(Custom Hook)\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ubc18\ubcf5\uc801\uc778 \ub85c\uc9c1\uc744 \ucd94\uc0c1\ud654\ud558\uc5ec \ucf54\ub4dc\uc758 \uc7ac\uc0ac\uc6a9\uc131\uc744 \ub192\uc774\uace0, \uac1c\ubc1c \uacbd\ud5d8\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/use-react/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/KimCookieYa/use-react/edit/main/web/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"hooksSidebar","next":{"title":"useToggle","permalink":"/use-react/docs/hooks/useToggle"}}');var r=s(4848),o=s(8453);const i={sidebar_position:1},c="use-react \uc18c\uac1c",l={},a=[{value:"\uc8fc\uc694 \uae30\ub2a5",id:"\uc8fc\uc694-\uae30\ub2a5",level:2},{value:"\uc2dc\uc791\ud558\uae30",id:"\uc2dc\uc791\ud558\uae30",level:2},{value:"\uc124\uce58",id:"\uc124\uce58",level:3},{value:"\uc0ac\uc6a9 \ubc29\ubc95",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"use-react-\uc18c\uac1c",children:"use-react \uc18c\uac1c"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"use-react"}),"\ub294 React \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \uc2dc \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \ucee4\uc2a4\ud140 \ud6c5(Custom Hook)\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ubc18\ubcf5\uc801\uc778 \ub85c\uc9c1\uc744 \ucd94\uc0c1\ud654\ud558\uc5ec \ucf54\ub4dc\uc758 \uc7ac\uc0ac\uc6a9\uc131\uc744 \ub192\uc774\uace0, \uac1c\ubc1c \uacbd\ud5d8\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h2,{id:"\uc8fc\uc694-\uae30\ub2a5",children:"\uc8fc\uc694 \uae30\ub2a5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\uae30\ubcf8 \ud6c5"}),": \uc0c1\ud0dc \uad00\ub9ac \ubc0f \uae30\ubcf8\uc801\uc778 React \uae30\ub2a5\uc744 \ud655\uc7a5\ud558\ub294 \ud6c5"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"UI \ubc0f \uc774\ubca4\ud2b8 \ud6c5"}),": \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \ubc0f \uc774\ubca4\ud2b8 \ucc98\ub9ac\ub97c \uc704\ud55c \ud6c5"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ub370\uc774\ud130 \ud6c5"}),": \ub370\uc774\ud130 \ud398\uce6d \ubc0f \uad00\ub9ac\ub97c \uc704\ud55c \ud6c5"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud50c\ub7ab\ud3fc \ubc0f \uae30\ub2a5 \ud6c5"}),": \uc6f9 API \ubc0f \ud2b9\uc815 \ud50c\ub7ab\ud3fc \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\ub294 \ud6c5"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\uc2dc\uc791\ud558\uae30",children:"\uc2dc\uc791\ud558\uae30"}),"\n",(0,r.jsx)(n.h3,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @kimcookieya/use-react\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\uc0ac\uc6a9-\ubc29\ubc95",children:"\uc0ac\uc6a9 \ubc29\ubc95"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useToggle } from '@kimcookieya/use-react';\n\nfunction ToggleComponent() {\n  const [value, toggle] = useToggle(false);\n  \n  return (\n    <div>\n      <p>\ud604\uc7ac \uc0c1\ud0dc: {value ? 'ON' : 'OFF'}</p>\n      <button onClick={toggle}>\ud1a0\uae00</button>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uac01 \ud6c5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc740 \uc0ac\uc774\ub4dc\ubc14\uc758 \uce74\ud14c\uace0\ub9ac\ubcc4 \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc138\uc694."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
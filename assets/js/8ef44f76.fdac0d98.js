"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[521],{8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var l=s(6540);const i={},t=l.createContext(i);function c(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(t.Provider,{value:n},e.children)}},9257:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"hooks/useOnClickOutside","title":"useOnClickOutside","description":"\ud2b9\uc815 DOM \uc694\uc18c\uc758 \uc678\ubd80\ub97c \ud074\ub9ad\ud588\uc744 \ub54c \ucf5c\ubc31 \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub294 \ud6c5\uc785\ub2c8\ub2e4. \ubaa8\ub2ec, \ub4dc\ub86d\ub2e4\uc6b4, \ud31d\uc5c5 \ub4f1\uc758 UI \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ud604\ud560 \ub54c \uc678\ubd80 \ud074\ub9ad\uc744 \uac10\uc9c0\ud558\uc5ec \ub2eb\ub294 \uae30\ub2a5\uc744 \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","source":"@site/docs/hooks/useOnClickOutside.md","sourceDirName":"hooks","slug":"/hooks/useOnClickOutside","permalink":"/use-react/docs/hooks/useOnClickOutside","draft":false,"unlisted":false,"editUrl":"https://github.com/KimCookieYa/use-react/edit/main/web/docs/hooks/useOnClickOutside.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"hooksSidebar","previous":{"title":"useAsyncEffect","permalink":"/use-react/docs/hooks/useAsyncEffect"},"next":{"title":"useLockScroll","permalink":"/use-react/docs/hooks/useLockScroll"}}');var i=s(4848),t=s(8453);const c={sidebar_position:4},o="useOnClickOutside",d={},r=[{value:"\uae30\ub2a5",id:"\uae30\ub2a5",level:2},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:2},{value:"\ub9e4\uac1c\ubcc0\uc218",id:"\ub9e4\uac1c\ubcc0\uc218",level:2},{value:"\uc0ac\uc6a9 \uc0ac\ub840",id:"\uc0ac\uc6a9-\uc0ac\ub840",level:2},{value:"\uad6c\ud604 \uc608\uc2dc: \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274",id:"\uad6c\ud604-\uc608\uc2dc-\ub4dc\ub86d\ub2e4\uc6b4-\uba54\ub274",level:2},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"useonclickoutside",children:"useOnClickOutside"})}),"\n",(0,i.jsx)(n.p,{children:"\ud2b9\uc815 DOM \uc694\uc18c\uc758 \uc678\ubd80\ub97c \ud074\ub9ad\ud588\uc744 \ub54c \ucf5c\ubc31 \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub294 \ud6c5\uc785\ub2c8\ub2e4. \ubaa8\ub2ec, \ub4dc\ub86d\ub2e4\uc6b4, \ud31d\uc5c5 \ub4f1\uc758 UI \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ud604\ud560 \ub54c \uc678\ubd80 \ud074\ub9ad\uc744 \uac10\uc9c0\ud558\uc5ec \ub2eb\ub294 \uae30\ub2a5\uc744 \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\uae30\ub2a5",children:"\uae30\ub2a5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud2b9\uc815 DOM \uc694\uc18c \uc678\ubd80 \ud074\ub9ad/\ud130\uce58 \uac10\uc9c0"}),"\n",(0,i.jsx)(n.li,{children:"\ub9c8\uc6b0\uc2a4 \ubc0f \ud130\uce58 \uc774\ubca4\ud2b8 \ubaa8\ub450 \uc9c0\uc6d0"}),"\n",(0,i.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \uc5b8\ub9c8\uc6b4\ud2b8 \uc2dc \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \uc790\ub3d9 \uc815\ub9ac"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uc0ac\uc6a9\ubc95",children:"\uc0ac\uc6a9\ubc95"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { useOnClickOutside } from '@kimcookieya/use-react';\n\nfunction Modal({ onClose, children }) {\n  const modalRef = useRef(null);\n  \n  useOnClickOutside(modalRef, () => {\n    onClose();\n  });\n  \n  return (\n    <div className=\"modal-overlay\">\n      <div className=\"modal\" ref={modalRef}>\n        {children}\n        <button onClick={onClose}>\ub2eb\uae30</button>\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\ub9e4\uac1c\ubcc0\uc218",children:"\ub9e4\uac1c\ubcc0\uc218"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ref"})," ",(0,i.jsx)(n.code,{children:"RefObject<T extends HTMLElement>"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc678\ubd80 \ud074\ub9ad\uc744 \uac10\uc9c0\ud560 DOM \uc694\uc18c\uc758 \ucc38\uc870"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"handler"})," ",(0,i.jsx)(n.code,{children:"(event: MouseEvent | TouchEvent) => void"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc678\ubd80 \ud074\ub9ad \uc2dc \uc2e4\ud589\ub420 \ucf5c\ubc31 \ud568\uc218"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uc0ac\uc6a9-\uc0ac\ub840",children:"\uc0ac\uc6a9 \uc0ac\ub840"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ubaa8\ub2ec \ucc3d \ub2eb\uae30"}),"\n",(0,i.jsx)(n.li,{children:"\ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274 \ub2eb\uae30"}),"\n",(0,i.jsx)(n.li,{children:"\ud31d\uc624\ubc84 UI \ucef4\ud3ec\ub10c\ud2b8"}),"\n",(0,i.jsx)(n.li,{children:"\ucee8\ud14d\uc2a4\ud2b8 \uba54\ub274"}),"\n",(0,i.jsx)(n.li,{children:"\uc0ac\uc774\ub4dc\ubc14 \ub2eb\uae30"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uad6c\ud604-\uc608\uc2dc-\ub4dc\ub86d\ub2e4\uc6b4-\uba54\ub274",children:"\uad6c\ud604 \uc608\uc2dc: \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useRef, useState } from 'react';\nimport { useOnClickOutside } from '@kimcookieya/use-react';\n\nfunction Dropdown({ items, placeholder = '\uc120\ud0dd\ud558\uc138\uc694' }) {\n  const [isOpen, setIsOpen] = useState(false);\n  const [selectedItem, setSelectedItem] = useState(null);\n  const dropdownRef = useRef(null);\n  \n  useOnClickOutside(dropdownRef, () => {\n    if (isOpen) setIsOpen(false);\n  });\n  \n  const handleToggle = () => {\n    setIsOpen(!isOpen);\n  };\n  \n  const handleSelect = (item) => {\n    setSelectedItem(item);\n    setIsOpen(false);\n  };\n  \n  return (\n    <div className=\"dropdown\" ref={dropdownRef}>\n      <button className=\"dropdown-toggle\" onClick={handleToggle}>\n        {selectedItem ? selectedItem.label : placeholder}\n        <span className=\"dropdown-arrow\">{isOpen ? '\u25b2' : '\u25bc'}</span>\n      </button>\n      \n      {isOpen && (\n        <ul className=\"dropdown-menu\">\n          {items.map((item) => (\n            <li \n              key={item.id} \n              onClick={() => handleSelect(item)}\n              className={selectedItem?.id === item.id ? 'selected' : ''}\n            >\n              {item.label}\n            </li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\uc8fc\uc758\uc0ac\ud56d",children:"\uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc774\ubca4\ud2b8 \uc704\uc784(Event Delegation)\uc774 \ud544\uc694\ud55c \ubcf5\uc7a1\ud55c UI\uc5d0\uc11c\ub294 \ucd94\uac00 \ub85c\uc9c1\uc774 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uc911\ucca9\ub41c \ubaa8\ub2ec\uc774\ub098 \ud31d\uc5c5\uc758 \uacbd\uc6b0 \uc774\ubca4\ud2b8 \uc804\ud30c\ub97c \uc801\uc808\ud788 \uc81c\uc5b4\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"React \ud3ec\ud138\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \uc815\uc0c1\uc801\uc73c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.li,{children:["\uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \uc704\ud574 handler \ud568\uc218\ub97c ",(0,i.jsx)(n.code,{children:"useCallback"}),"\uc73c\ub85c \uac10\uc2f8\ub294 \uac83\uc744 \uace0\ub824\ud558\uc138\uc694."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);
"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[112],{1099:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>x,contentTitle:()=>h,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"hooks/useWebNotification","title":"useWebNotification","description":"\uc6f9 \ube0c\ub77c\uc6b0\uc800\uc758 \uc54c\ub9bc API\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc54c\ub9bc\uc744 \ud45c\uc2dc\ud558\ub294 \ud6c5\uc785\ub2c8\ub2e4. \uc54c\ub9bc \uad8c\ud55c \uc694\uccad, \uc54c\ub9bc \ud45c\uc2dc, \uc54c\ub9bc \uad00\ub9ac \ub4f1\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.","source":"@site/docs/hooks/useWebNotification.mdx","sourceDirName":"hooks","slug":"/hooks/useWebNotification","permalink":"/use-react/docs/hooks/useWebNotification","draft":false,"unlisted":false,"editUrl":"https://github.com/KimCookieYa/use-react/edit/main/web/docs/hooks/useWebNotification.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"hooksSidebar","previous":{"title":"useValueObject","permalink":"/use-react/docs/hooks/useValueObject"},"next":{"title":"usePlatform","permalink":"/use-react/docs/hooks/usePlatform"}}');var o=e(4848),r=e(8453),t=e(6540),c=e(9136);function l(n){let{children:i,fallback:e}=n;return(0,c.A)()?(0,o.jsx)(o.Fragment,{children:i?.()}):e??null}const d=()=>{const{isSupported:n,show:i,closeAll:e,ensurePermissions:s,permission:r,permissionGranted:c}=function(n){void 0===n&&(n=!0);const[i,e]=(0,t.useState)("default"),[s,o]=(0,t.useState)([]),r="undefined"!=typeof window&&"Notification"in window,c="granted"===i,l=async()=>{if(r){if("granted"===i)return!0;try{const n=await Notification.requestPermission();return e(n),"granted"===n}catch(n){return console.error("Failed to request notification permission:",n),!1}}},d=()=>{s.forEach((n=>n.close())),o([])};return t.useEffect((()=>(r&&(e(Notification.permission),n&&"default"===Notification.permission&&l()),()=>{d()})),[]),{isSupported:r,show:(n,e)=>{if(r)if("granted"===i)try{const i=new Notification(n,e);return o((n=>[...n,i])),i.addEventListener("close",(()=>{o((n=>n.filter((n=>n!==i))))})),i}catch(s){return void console.error("Failed to create notification:",s)}else console.warn("Notification permission is not granted.");else console.warn("Web Notification is not supported in this browser.")},close:n=>{n&&(n.close(),o((i=>i.filter((i=>i!==n)))))},closeAll:d,ensurePermissions:l,permission:i,permissionGranted:c}}(!1),[l,d]=(0,t.useState)("");return n?(0,o.jsxs)("div",{className:"notification-demo",children:[(0,o.jsxs)("div",{className:"notification-status",children:["\ud604\uc7ac \uc54c\ub9bc \uad8c\ud55c \uc0c1\ud0dc: ",(0,o.jsx)("strong",{children:r})]}),(0,o.jsxs)("div",{className:"notification-buttons",children:[(0,o.jsx)("button",{className:"button button--primary",onClick:async()=>{if(!c){if(!await s())return void d("\uc54c\ub9bc \uad8c\ud55c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800 \uc124\uc815\uc5d0\uc11c \uad8c\ud55c\uc744 \ud5c8\uc6a9\ud574\uc8fc\uc138\uc694.")}i("\uc0c8 \uba54\uc2dc\uc9c0\uac00 \ub3c4\ucc29\ud588\uc2b5\ub2c8\ub2e4.",{body:"\ud64d\uae38\ub3d9\ub2d8\uc73c\ub85c\ubd80\ud130 \uc0c8 \uba54\uc2dc\uc9c0\uac00 \ub3c4\ucc29\ud588\uc2b5\ub2c8\ub2e4.",icon:"/img/logo.svg"}),d("\uc54c\ub9bc\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ud45c\uc2dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!")},children:"\uc54c\ub9bc \ud45c\uc2dc"}),(0,o.jsx)("button",{className:"button button--secondary",onClick:e,children:"\ubaa8\ub4e0 \uc54c\ub9bc \ub2eb\uae30"})]}),l&&(0,o.jsx)("div",{className:"notification-message",children:l}),(0,o.jsx)("style",{children:"\n        .notification-demo {\n          border: 1px solid var(--ifm-color-emphasis-300);\n          border-radius: var(--ifm-card-border-radius);\n          padding: 1.5rem;\n          margin-bottom: 1.5rem;\n        }\n        \n        .notification-demo.error {\n          border-color: var(--ifm-color-danger-dark);\n          background-color: var(--ifm-color-danger-contrast-background);\n          color: var(--ifm-color-danger-dark);\n        }\n        \n        .notification-status {\n          margin-bottom: 1rem;\n        }\n        \n        .notification-buttons {\n          display: flex;\n          gap: 0.75rem;\n          margin-bottom: 1rem;\n        }\n        \n        .notification-message {\n          padding: 0.75rem;\n          background: var(--ifm-color-emphasis-100);\n          border-radius: var(--ifm-card-border-radius);\n        }\n      "})]}):(0,o.jsx)("div",{className:"notification-demo error",children:"\uc774 \ube0c\ub77c\uc6b0\uc800\ub294 \uc6f9 \uc54c\ub9bc\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})};function a(){return(0,o.jsx)(l,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:()=>(0,o.jsx)(d,{})})}const u={sidebar_position:1},h="useWebNotification",x={},f=[{value:"\ub77c\uc774\ube0c \ub370\ubaa8",id:"\ub77c\uc774\ube0c-\ub370\ubaa8",level:2},{value:"\uae30\ub2a5",id:"\uae30\ub2a5",level:2},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:2},{value:"\ub9e4\uac1c\ubcc0\uc218",id:"\ub9e4\uac1c\ubcc0\uc218",level:2},{value:"\ubc18\ud658\uac12",id:"\ubc18\ud658\uac12",level:2},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:2}];function j(n){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"usewebnotification",children:"useWebNotification"})}),"\n",(0,o.jsx)(i.p,{children:"\uc6f9 \ube0c\ub77c\uc6b0\uc800\uc758 \uc54c\ub9bc API\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc54c\ub9bc\uc744 \ud45c\uc2dc\ud558\ub294 \ud6c5\uc785\ub2c8\ub2e4. \uc54c\ub9bc \uad8c\ud55c \uc694\uccad, \uc54c\ub9bc \ud45c\uc2dc, \uc54c\ub9bc \uad00\ub9ac \ub4f1\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,o.jsx)(i.h2,{id:"\ub77c\uc774\ube0c-\ub370\ubaa8",children:"\ub77c\uc774\ube0c \ub370\ubaa8"}),"\n",(0,o.jsx)(i.p,{children:"\uc544\ub798\uc5d0\uc11c Web Notifications API\uc758 \uc2e4\uc81c \ub3d9\uc791\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694:"}),"\n",(0,o.jsx)(a,{}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsx)(i.p,{children:"\ube0c\ub77c\uc6b0\uc800 \uad8c\ud55c \ud5c8\uc6a9\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\ub098 OS \uc124\uc815\uc5d0 \ub530\ub77c \uc54c\ub9bc \ud45c\uc2dc\uac00 \ub2e4\ub974\uac8c \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."})}),"\n",(0,o.jsx)(i.h2,{id:"\uae30\ub2a5",children:"\uae30\ub2a5"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\ube0c\ub77c\uc6b0\uc800 \uc54c\ub9bc API \uc9c0\uc6d0 \uc5ec\ubd80 \ud655\uc778"}),"\n",(0,o.jsx)(i.li,{children:"\uc54c\ub9bc \uad8c\ud55c \uc694\uccad \ubc0f \uc0c1\ud0dc \uad00\ub9ac"}),"\n",(0,o.jsx)(i.li,{children:"\uc54c\ub9bc \ud45c\uc2dc \ubc0f \uad00\ub9ac (\ub2eb\uae30, \ubaa8\ub450 \ub2eb\uae30)"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"\uc0ac\uc6a9\ubc95",children:"\uc0ac\uc6a9\ubc95"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { useWebNotification } from '@kimcookieya/use-react';\n\nfunction NotificationExample() {\n  const {\n    isSupported,\n    show,\n    close,\n    closeAll,\n    ensurePermissions,\n    permission,\n    permissionGranted,\n  } = useWebNotification();\n\n  const handleShowNotification = async () => {\n    // \uad8c\ud55c\uc774 \uc5c6\uc73c\uba74 \uc694\uccad\n    if (!permissionGranted) {\n      const granted = await ensurePermissions();\n      if (!granted) {\n        alert('\uc54c\ub9bc \uad8c\ud55c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.');\n        return;\n      }\n    }\n\n    // \uc54c\ub9bc \ud45c\uc2dc\n    show('\uc0c8 \uba54\uc2dc\uc9c0\uac00 \ub3c4\ucc29\ud588\uc2b5\ub2c8\ub2e4.', {\n      body: '\ud64d\uae38\ub3d9\ub2d8\uc73c\ub85c\ubd80\ud130 \uc0c8 \uba54\uc2dc\uc9c0\uac00 \ub3c4\ucc29\ud588\uc2b5\ub2c8\ub2e4.',\n      icon: '/icon.png',\n    });\n  };\n\n  if (!isSupported) {\n    return <p>\uc774 \ube0c\ub77c\uc6b0\uc800\ub294 \uc6f9 \uc54c\ub9bc\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.</p>;\n  }\n\n  return (\n    <div>\n      <p>\ud604\uc7ac \uc54c\ub9bc \uad8c\ud55c \uc0c1\ud0dc: {permission}</p>\n      <button onClick={handleShowNotification}>\uc54c\ub9bc \ud45c\uc2dc</button>\n      <button onClick={closeAll}>\ubaa8\ub4e0 \uc54c\ub9bc \ub2eb\uae30</button>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(i.h2,{id:"\ub9e4\uac1c\ubcc0\uc218",children:"\ub9e4\uac1c\ubcc0\uc218"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"autoRequest"})," ",(0,o.jsx)(i.code,{children:"boolean"})," (\uae30\ubcf8\uac12: ",(0,o.jsx)(i.code,{children:"true"}),")","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"true\ub85c \uc124\uc815\ud558\uba74 \ud6c5\uc774 \ub9c8\uc6b4\ud2b8\ub420 \ub54c \uc790\ub3d9\uc73c\ub85c \uc54c\ub9bc \uad8c\ud55c\uc744 \uc694\uccad\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"\ubc18\ud658\uac12",children:"\ubc18\ud658\uac12"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"isSupported"})," ",(0,o.jsx)(i.code,{children:"boolean"})]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\ube0c\ub77c\uc6b0\uc800\uac00 Notification API\ub97c \uc9c0\uc6d0\ud558\ub294\uc9c0 \uc5ec\ubd80"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"show"})," ",(0,o.jsx)(i.code,{children:"(title: string, options?: NotificationOptions) => Notification | undefined"})]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\uc54c\ub9bc\uc744 \ud45c\uc2dc\ud558\ub294 \ud568\uc218"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"close"})," ",(0,o.jsx)(i.code,{children:"(notification?: Notification) => void"})]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\ud2b9\uc815 \uc54c\ub9bc\uc744 \ub2eb\ub294 \ud568\uc218"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"closeAll"})," ",(0,o.jsx)(i.code,{children:"() => void"})]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\ubaa8\ub4e0 \uc54c\ub9bc\uc744 \ub2eb\ub294 \ud568\uc218"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"ensurePermissions"})," ",(0,o.jsx)(i.code,{children:"() => Promise<boolean | undefined>"})]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\uc54c\ub9bc \uad8c\ud55c\uc744 \uc694\uccad\ud558\ub294 \ud568\uc218"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"permission"})," ",(0,o.jsx)(i.code,{children:"NotificationPermission"})]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\ud604\uc7ac \uc54c\ub9bc \uad8c\ud55c \uc0c1\ud0dc ('default', 'granted', 'denied')"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"permissionGranted"})," ",(0,o.jsx)(i.code,{children:"boolean"})]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\uc54c\ub9bc \uad8c\ud55c\uc774 \ud5c8\uc6a9\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"\uc8fc\uc758\uc0ac\ud56d",children:"\uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\uc6f9 \uc54c\ub9bc\uc740 \ubcf4\uc548 \ucee8\ud14d\uc2a4\ud2b8(HTTPS)\uc5d0\uc11c\ub9cc \uc791\ub3d9\ud569\ub2c8\ub2e4."}),"\n",(0,o.jsx)(i.li,{children:"\ubaa8\ubc14\uc77c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub294 \uc9c0\uc6d0\uc774 \uc81c\ud55c\uc801\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,o.jsx)(i.li,{children:"\uc0ac\uc6a9\uc790\uac00 \uc54c\ub9bc \uad8c\ud55c\uc744 \uac70\ubd80\ud55c \uacbd\uc6b0, \ube0c\ub77c\uc6b0\uc800 \uc124\uc815\uc5d0\uc11c \uc218\ub3d9\uc73c\ub85c \ubcc0\uacbd\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n"]})]})}function m(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(j,{...n})}):j(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>t,x:()=>c});var s=e(6540);const o={},r=s.createContext(o);function t(n){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),s.createElement(r.Provider,{value:i},n.children)}}}]);
import{u as D,j as e,M as c,B as b,r as f,D as _,A as V,L as y,d as T,C as L,z as I,a as h,H as k,R,b as p,c as A,e as C}from"./vendor.bad6f59a.js";const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}};M();const O="modulepreload",x={},$="./",v=function(t,s){return!s||s.length===0?t():Promise.all(s.map(r=>{if(r=`${$}${r}`,r in x)return;x[r]=!0;const l=r.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":O,l||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),l)return new Promise((j,E)=>{i.addEventListener("load",j),i.addEventListener("error",E)})})).then(()=>t())};var z="./assets/logo@2x.882f94f6.png",N="C:\\projects\\my-vite-app\\src\\Layout\\NavMenu.tsx";const{SubMenu:S}=c,F=({menus:u})=>{const t=D();return e.exports.jsxDEV(c,{style:{flex:"auto"},theme:"dark",mode:"horizontal",defaultSelectedKeys:[t.pathname],children:u.map(s=>!!s.subMenus&&s.subMenus.length>0?e.exports.jsxDEV(S,{title:s.name,children:s.subMenus.map(r=>r.code==="dispatchWork.dispatchDetail"||r.code==="dispatchSetting.Warning"?null:e.exports.jsxDEV(c.Item,{children:e.exports.jsxDEV(b,{target:"_blank",rel:"noopener noreferer",type:"link",href:r.url,children:[" ",r.name]},void 0,!0,{fileName:N,lineNumber:24,columnNumber:21},globalThis)},r.url,!1,{fileName:N,lineNumber:23,columnNumber:19},globalThis))},s.id,!1,{fileName:N,lineNumber:19,columnNumber:13},globalThis):e.exports.jsxDEV(c.Item,{children:e.exports.jsxDEV(b,{target:"_blank",rel:"noopener noreferer",type:"link",href:s.url,children:s.name},void 0,!1,{fileName:N,lineNumber:36,columnNumber:13},globalThis)},s.id,!1,{fileName:N,lineNumber:35,columnNumber:11},globalThis))},void 0,!1,{fileName:N,lineNumber:15,columnNumber:5},globalThis)},P="_content_1mehl_5",w="_header_1mehl_8",B="_logo_1mehl_13",H="_userInfo_1mehl_21",W="_action_1mehl_25",q="_userName_1mehl_34",K="_nav_1mehl_38";var d={content:P,header:w,logo:B,userInfo:H,action:W,userName:q,nav:K},n="C:\\projects\\my-vite-app\\src\\Layout\\UserInfo.tsx";const U=()=>e.exports.jsxDEV(c,{children:e.exports.jsxDEV(c.Item,{children:[e.exports.jsxDEV(y,{style:{marginRight:"8px"}},void 0,!1,{fileName:n,lineNumber:10,columnNumber:7},globalThis),"\u9000\u51FA\u767B\u5F55"]},"logout",!0,{fileName:n,lineNumber:9,columnNumber:5},globalThis)},void 0,!1,{fileName:n,lineNumber:8,columnNumber:3},globalThis),G=()=>{const[u,t]=f.exports.useState({name:"test"});return e.exports.jsxDEV("div",{className:d.userInfo,children:e.exports.jsxDEV(_,{overlay:e.exports.jsxDEV(U,{},void 0,!1,{fileName:n,lineNumber:20,columnNumber:26},globalThis),children:e.exports.jsxDEV("div",{className:d.action,children:[e.exports.jsxDEV(V,{size:"small",src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"},void 0,!1,{fileName:n,lineNumber:22,columnNumber:11},globalThis),e.exports.jsxDEV("span",{className:d.userName,children:u.name},void 0,!1,{fileName:n,lineNumber:23,columnNumber:11},globalThis)]},void 0,!0,{fileName:n,lineNumber:21,columnNumber:9},globalThis)},void 0,!1,{fileName:n,lineNumber:20,columnNumber:7},globalThis)},void 0,!1,{fileName:n,lineNumber:19,columnNumber:5},globalThis)};var a="C:\\projects\\my-vite-app\\src\\Layout\\index.tsx";const{Header:J,Content:Q}=h;T.locale("zh-cn");const X=({children:u})=>e.exports.jsxDEV(L,{locale:I,children:e.exports.jsxDEV(h,{className:d.content,children:[e.exports.jsxDEV(J,{className:d.header,children:[e.exports.jsxDEV("div",{className:d.logo,children:e.exports.jsxDEV("a",{href:"http://workbench.usercenter-userdev.dtwb.ibuscloud.com/dashboard_index",children:e.exports.jsxDEV("img",{src:z,alt:""},void 0,!1,{fileName:a,lineNumber:29,columnNumber:15},globalThis)},void 0,!1,{fileName:a,lineNumber:28,columnNumber:13},globalThis)},void 0,!1,{fileName:a,lineNumber:27,columnNumber:11},globalThis),e.exports.jsxDEV(F,{menus:[]},void 0,!1,{fileName:a,lineNumber:34,columnNumber:11},globalThis),e.exports.jsxDEV(G,{},void 0,!1,{fileName:a,lineNumber:37,columnNumber:11},globalThis)]},void 0,!0,{fileName:a,lineNumber:26,columnNumber:9},globalThis),e.exports.jsxDEV(Q,{className:"maincontents",children:u},void 0,!1,{fileName:a,lineNumber:40,columnNumber:9},globalThis)]},void 0,!0,{fileName:a,lineNumber:25,columnNumber:7},globalThis)},void 0,!1,{fileName:a,lineNumber:24,columnNumber:5},globalThis);var m="C:\\projects\\my-vite-app\\src\\App.tsx";const Y=f.exports.lazy(()=>v(()=>import("./index.26f1e988.js"),["assets/index.26f1e988.js","assets/index.ed209ab7.css","assets/vendor.bad6f59a.js","assets/vendor.2cd4397d.css"])),Z=f.exports.lazy(()=>v(()=>import("./index.ba3a70e6.js"),["assets/index.ba3a70e6.js","assets/vendor.bad6f59a.js","assets/vendor.2cd4397d.css"]));function ee(){return e.exports.jsxDEV(f.exports.Suspense,{fallback:e.exports.jsxDEV("div",{children:"loading..."},void 0,!1,{fileName:m,lineNumber:12,columnNumber:25},this),children:e.exports.jsxDEV(k,{children:e.exports.jsxDEV(X,{children:e.exports.jsxDEV(R,{children:[e.exports.jsxDEV(p,{path:"/",element:e.exports.jsxDEV(Y,{},void 0,!1,{fileName:m,lineNumber:16,columnNumber:38},this)},void 0,!1,{fileName:m,lineNumber:16,columnNumber:13},this),e.exports.jsxDEV(p,{path:"/about",element:e.exports.jsxDEV(Z,{},void 0,!1,{fileName:m,lineNumber:17,columnNumber:43},this)},void 0,!1,{fileName:m,lineNumber:17,columnNumber:13},this)]},void 0,!0,{fileName:m,lineNumber:15,columnNumber:11},this)},void 0,!1,{fileName:m,lineNumber:14,columnNumber:9},this)},void 0,!1,{fileName:m,lineNumber:13,columnNumber:7},this)},void 0,!1,{fileName:m,lineNumber:12,columnNumber:5},this)}var g="C:\\projects\\my-vite-app\\src\\main.tsx";A.render(e.exports.jsxDEV(C.StrictMode,{children:e.exports.jsxDEV(ee,{},void 0,!1,{fileName:g,lineNumber:8,columnNumber:5},globalThis)},void 0,!1,{fileName:g,lineNumber:7,columnNumber:3},globalThis),document.getElementById("root"));

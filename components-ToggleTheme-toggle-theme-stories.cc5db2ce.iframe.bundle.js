"use strict";(self.webpackChunkrodrigocichetto=self.webpackChunkrodrigocichetto||[]).push([[76],{"./src/components/ToggleTheme/toggle-theme.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const meta={title:"Components/ToggleTheme",component:__webpack_require__("./src/components/ToggleTheme/component.tsx").A,tags:["autodocs"]},Default={},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}},"./src/components/ToggleTheme/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),theme=__webpack_require__("./src/context/theme.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const modifiers={dark:()=>(0,styled_components_browser_esm.AH)(["background-color:#032b43;"]),light:()=>(0,styled_components_browser_esm.AH)(["background-color:#0984e3;"]),absolute:theme=>(0,styled_components_browser_esm.AH)(["position:absolute;top:",";right:",";"],theme.spacings.small,theme.spacings.small)},Wrapper=styled_components_browser_esm.Ay.label.withConfig({componentId:"sc-9599c529-0"})(["",""],(({theme,selectedTheme,absolute})=>(0,styled_components_browser_esm.AH)(["cursor:pointer;border-radius:1.6em;display:inline-block;margin-left:0.5rem;padding:0.2rem;position:relative;height:3rem;width:5rem;z-index:",";svg{position:absolute;width:2.5rem;height:1.5rem;top:0.7rem;}#sun{fill:#ffe4a1;right:0;}#moon{fill:#b9c6d3;left:0.25rem;}"," ",""],theme.layers.menu,modifiers[selectedTheme],absolute&&modifiers.absolute(theme)))),Input=styled_components_browser_esm.Ay.input.withConfig({componentId:"sc-9599c529-1"})(["visibility:hidden;"]),modifiersToggleButton={dark:()=>(0,styled_components_browser_esm.AH)(["left:2.7rem;"]),light:()=>(0,styled_components_browser_esm.AH)(["left:0.5rem;"])},ToggleButton=styled_components_browser_esm.Ay.span.withConfig({componentId:"sc-9599c529-2"})(["",""],(({theme,selectedTheme})=>(0,styled_components_browser_esm.AH)(["background-color:",";border-radius:1rem;display:inline-block;height:2rem;width:2rem;position:absolute;transition:left 0.1s ease;top:0.5rem;",""],theme.colors.white,modifiersToggleButton[selectedTheme]))),ToggleTheme=({absolute})=>{const{selectedTheme,toggleTheme}=(0,theme.D)();return(0,jsx_runtime.jsxs)(Wrapper,{selectedTheme:selectedTheme||"dark",absolute,children:[(0,jsx_runtime.jsx)(Input,{type:"checkbox",onChange:toggleTheme}),(0,jsx_runtime.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",id:"moon",className:"icon",children:[(0,jsx_runtime.jsx)("title",{children:"moon-fill"}),(0,jsx_runtime.jsx)("path",{d:"M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z"})]}),(0,jsx_runtime.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",id:"sun",className:"icon",children:[(0,jsx_runtime.jsx)("title",{children:"sun-fill"}),(0,jsx_runtime.jsx)("path",{d:"M16.001 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 7.999-3.582 7.999-8s-3.581-8-7.999-8v0zM14 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM4 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM2 14c1.105 0 2 0.895 2 2 0 1.107-0.895 2-2 2s-2-0.893-2-2c0-1.105 0.895-2 2-2zM4 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM14 30c0-1.109 0.895-2 2-2 1.108 0 2 0.891 2 2 0 1.102-0.892 2-2 2-1.105 0-2-0.898-2-2zM24 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM30 18c-1.104 0-2-0.896-2-2 0-1.107 0.896-2 2-2s2 0.893 2 2c0 1.104-0.896 2-2 2zM24 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2z"})]}),(0,jsx_runtime.jsx)(ToggleButton,{selectedTheme:selectedTheme||"dark"})]})};ToggleTheme.displayName="ToggleTheme";const component=ToggleTheme;ToggleTheme.__docgenInfo={description:"",methods:[],displayName:"ToggleTheme",props:{absolute:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);
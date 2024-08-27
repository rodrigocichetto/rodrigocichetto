"use strict";(self.webpackChunkrodrigocichetto=self.webpackChunkrodrigocichetto||[]).push([[127],{"./src/components/Text/text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Secondary:()=>Secondary,Span:()=>Span,Title:()=>Title,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/component.tsx");const meta={title:"Components/Text",component:_component__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"]},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component__WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:"Example"})},Title={args:{tag:"h1",size:"xxlarge",weight:"bold"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component__WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:"Example"})},Span={args:{tag:"span"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component__WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:"Example"})},Secondary={args:{family:"secondary"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component__WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:"Example"})},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["Default","Title","Span","Secondary"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <Text {...args}>Example</Text>\n}",...Default.parameters?.docs?.source}}},Title.parameters={...Title.parameters,docs:{...Title.parameters?.docs,source:{originalSource:"{\n  args: {\n    tag: 'h1',\n    size: 'xxlarge',\n    weight: 'bold'\n  },\n  render: args => <Text {...args}>Example</Text>\n}",...Title.parameters?.docs?.source}}},Span.parameters={...Span.parameters,docs:{...Span.parameters?.docs,source:{originalSource:"{\n  args: {\n    tag: 'span'\n  },\n  render: args => <Text {...args}>Example</Text>\n}",...Span.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    family: 'secondary'\n  },\n  render: args => <Text {...args}>Example</Text>\n}",...Secondary.parameters?.docs?.source}}}},"./src/components/Text/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.Ay.p.withConfig({componentId:"sc-ffe62d13-0"})(["",""],(({theme,size,color,weight,family,align})=>(0,styled_components_browser_esm.AH)(["color:",";font-family:",";font-size:",";font-weight:",";text-align:",";transition:color 0.4s ease-in-out;strong{font-weight:",";}"],theme.colors[color],theme.font[family],theme.font.sizes[size],theme.font.weights[weight],align,theme.font.weights.bold))),Text=({size="medium",color="text",weight="regular",family="primary",align="left",tag,children})=>(0,jsx_runtime.jsx)(Wrapper,{as:tag,size,color,weight,family,align,children});Text.displayName="Text";const component=Text;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'text'",computed:!1}},weight:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'regular'",computed:!1}},family:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},tag:{required:!1,tsType:{name:"ElementType"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}}}}]);
"use strict";(self.webpackChunk_govuk_react_bjss_storybook=self.webpackChunk_govuk_react_bjss_storybook||[]).push([[2221],{"../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("../../node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"../../components/button/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,z:()=>Button});var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../constants/src/index.tsx"),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../lib/src/index.tsx"),govuk_colours__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),polished__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/polished/dist/polished.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const BUTTON_SHADOW_SIZE=_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.gY,RAW_SPACING_2=_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.TF[2],RAW_BORDER_WIDTH=Number((0,polished__WEBPACK_IMPORTED_MODULE_5__.wA)(_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.gY)),RAW_SHADOW=Number((0,polished__WEBPACK_IMPORTED_MODULE_5__.wA)(BUTTON_SHADOW_SIZE)),HALF_SHADOW=RAW_SHADOW/2,BASE_PAD=RAW_SPACING_2-RAW_BORDER_WIDTH,StyledButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("button").withConfig({shouldForwardProp:prop=>!["isStart","buttonColour","buttonHoverColour","buttonShadowColour","buttonTextColour","icon"].includes(String(prop)),displayName:"src__StyledButton",componentId:"sc-idm4tz-0"})((_ref=>{let{isStart}=_ref;return _govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.cp.font({size:isStart?"24":"19",lineHeight:isStart?"1":"19px",weight:isStart?"bold":void 0})}),_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.jw,(_ref2=>{let{buttonColour=govuk_colours__WEBPACK_IMPORTED_MODULE_3__.g$,buttonHoverColour=(0,polished__WEBPACK_IMPORTED_MODULE_5__._j)(.05,buttonColour),buttonShadowColour=buttonColour===govuk_colours__WEBPACK_IMPORTED_MODULE_3__.g$?govuk_colours__WEBPACK_IMPORTED_MODULE_3__.lX:(0,polished__WEBPACK_IMPORTED_MODULE_5__._j)(.15,buttonColour),buttonTextColour=govuk_colours__WEBPACK_IMPORTED_MODULE_3__.Cj,isStart}=_ref2;return{boxSizing:"border-box",display:"inline-block",position:"relative",width:"100%",marginTop:0,padding:isStart?`${BASE_PAD}px ${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.TF[3]}px`:`${BASE_PAD-HALF_SHADOW}px ${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.TF[2]}px`,border:`${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.gY} solid transparent`,borderRadius:0,color:buttonTextColour,backgroundColor:buttonColour,boxShadow:`0 ${BUTTON_SHADOW_SIZE} 0 ${buttonShadowColour}`,textAlign:"center",verticalAlign:"top",cursor:"pointer",WebkitAppearance:"none",[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.qk.TABLET]:{width:"auto"},"&:link, &:visited, &:active, &:hover":{color:buttonTextColour,textDecoration:"none"},"&::-moz-focus-inner":{padding:0,border:0},"&:hover, &:focus":{backgroundColor:buttonHoverColour},":active":{top:BUTTON_SHADOW_SIZE,boxShadow:"none"},"::before":{content:'""',display:"block",position:"absolute",top:`-${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.gY}`,right:`-${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.gY}`,bottom:`-${RAW_BORDER_WIDTH+RAW_SHADOW}px`,left:`-${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.gY}`,background:"transparent"},"&:active::before":{top:`-${RAW_BORDER_WIDTH+RAW_SHADOW}px`},":disabled":{opacity:.5,background:buttonColour,":hover":{backgroundColor:buttonColour,cursor:"default"},":focus":{outline:"none"},":active":{top:0,boxShadow:`0 ${BUTTON_SHADOW_SIZE} 0 ${buttonShadowColour}`}}," svg":{maxWidth:"15px",[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.qk.TABLET]:{marginLeft:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.TF[2]}}}}),(_ref3=>{let{icon}=_ref3;if(icon)return{display:"flex",alignItems:"center",justifyContent:"space-between"}}),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.W0.withWhiteSpace({margin:{direction:"bottom",size:6,adjustment:RAW_SHADOW}})),ButtonContents=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("span").withConfig({displayName:"src__ButtonContents",componentId:"sc-idm4tz-1"})({flexGrow:1}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref4,ref)=>{let{start,children,icon,...props}=_ref4;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledButton,{ref,isStart:start,icon,...props,children:[icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonContents,{children}):children,icon]})}));Button.defaultProps={icon:void 0,start:!1,buttonColour:void 0,buttonHoverColour:void 0,buttonShadowColour:void 0,buttonTextColour:void 0},Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"Use the button component to help users carry out an action like starting an application or saving their information.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/button\n- https://design-system.service.gov.uk/components/button/",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},start:{defaultValue:{value:"false"},description:"Renders a large button if set to true",name:"start",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"undefined"},description:"Button icon",name:"icon",required:!1,type:{name:"ReactNode"}},buttonColour:{defaultValue:{value:"undefined"},description:"Override for default button colour",name:"buttonColour",required:!1,type:{name:"string"}},buttonHoverColour:{defaultValue:{value:"undefined"},description:"Override for default button hover colour,\nwhich defaults to `buttonColour` darkened by 5%",name:"buttonHoverColour",required:!1,type:{name:"string"}},buttonShadowColour:{defaultValue:{value:"undefined"},description:"Override for default button shadow colour,\nwhich defaults to `buttonColour` darkened by 15%",name:"buttonShadowColour",required:!1,type:{name:"string"}},buttonTextColour:{defaultValue:{value:"undefined"},description:"Override for default button text colour,\nwhich defaults to govuk white",name:"buttonTextColour",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"never"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/button/src/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"../../components/button/src/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"../../components/error-text/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,y:()=>ErrorText});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),govuk_colours__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../constants/src/index.tsx"),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../lib/src/index.tsx");const ErrorText=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)("span").withConfig({displayName:"src__ErrorText",componentId:"sc-1ckoy85-0"})(_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.cp.font({size:19,weight:"bold"}),{display:"block",marginBottom:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.TF[3],clear:"both",color:govuk_colours__WEBPACK_IMPORTED_MODULE_0__.h},_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.W0.withWhiteSpace());ErrorText.displayName="ErrorText";const __WEBPACK_DEFAULT_EXPORT__=ErrorText;try{ErrorText.displayName="ErrorText",ErrorText.__docgenInfo={description:"Follow the [validation pattern](https://design-system.service.gov.uk/patterns/validation/) and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/error-text\n- https://design-system.service.gov.uk/components/error-message/",displayName:"ErrorText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/error-text/src/index.tsx#ErrorText"]={docgenInfo:ErrorText.__docgenInfo,name:"ErrorText",path:"../../components/error-text/src/index.tsx#ErrorText"})}catch(__react_docgen_typescript_loader_error){}},"../../components/hint-text/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>HintText,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),govuk_colours__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../constants/src/index.tsx"),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../lib/src/index.tsx");const HintText=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)("span").withConfig({displayName:"src__HintText",componentId:"sc-uu5fgy-0"})(_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.cp.font({size:19}),{display:"block",marginBottom:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_1__.TF[3],color:`${govuk_colours__WEBPACK_IMPORTED_MODULE_0__.d7}`},_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.W0.withWhiteSpace());HintText.displayName="HintText";const __WEBPACK_DEFAULT_EXPORT__=HintText;try{HintText.displayName="HintText",HintText.__docgenInfo={description:"Use hint text alongside a form input for help that’s relevant to the majority of users, like how their information will be used, or where to find it.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/hint-text\n- https://design-system.service.gov.uk/components/text-input/#hint-text",displayName:"HintText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/hint-text/src/index.tsx#HintText"]={docgenInfo:HintText.__docgenInfo,name:"HintText",path:"../../components/hint-text/src/index.tsx#HintText"})}catch(__react_docgen_typescript_loader_error){}},"../../components/label-text/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>LabelText,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../lib/src/index.tsx");const LabelText=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)("span").withConfig({displayName:"src__LabelText",componentId:"sc-dqidg3-0"})(_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__.cp.font({size:19}),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__.cp.textColour,{display:"block",clear:"none",paddingBottom:"2px"},_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__.W0.withWhiteSpace({marginBottom:0}));LabelText.displayName="LabelText";const __WEBPACK_DEFAULT_EXPORT__=LabelText;try{LabelText.displayName="LabelText",LabelText.__docgenInfo={description:"Styled text to use as a label for a form input.\n\nThis is not a label element by default as it is assumed it will be wrapped with Label component.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/label-text",displayName:"LabelText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/label-text/src/index.tsx#LabelText"]={docgenInfo:LabelText.__docgenInfo,name:"LabelText",path:"../../components/label-text/src/index.tsx#LabelText"})}catch(__react_docgen_typescript_loader_error){}},"../../components/multi-choice/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,n:()=>MultiChoice});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),govuk_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),_govuk_react_bjss_label_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/label-text/src/index.tsx"),_govuk_react_bjss_error_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/error-text/src/index.tsx"),_govuk_react_bjss_hint_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../components/hint-text/src/index.tsx"),_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../constants/src/index.tsx"),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../lib/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledFieldset=(0,styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP)("div").withConfig({displayName:"src__StyledFieldset",componentId:"sc-kca8yl-0"})({padding:0,margin:0,border:0,boxSizing:"border-box",width:"100%",":after":{content:"''",display:"table",clear:"both"}},(_ref=>{let{error}=_ref;return{borderLeft:error?`${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_5__.IA} solid ${govuk_colours__WEBPACK_IMPORTED_MODULE_1__.h}`:void 0,marginRight:error?_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_5__.N_.SCALE_3:void 0,paddingLeft:error?_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_5__.N_.SCALE_2:void 0}}),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_6__.W0.withWhiteSpace({marginBottom:0})),MultiChoice=_ref2=>{let{meta,label,children,hint,...props}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(StyledFieldset,{error:meta.touched&&!!meta.error,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_govuk_react_bjss_label_text__WEBPACK_IMPORTED_MODULE_2__.Z,{children:label}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_govuk_react_bjss_hint_text__WEBPACK_IMPORTED_MODULE_4__.Z,{children:hint}),meta.touched&&meta.error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_govuk_react_bjss_error_text__WEBPACK_IMPORTED_MODULE_3__.Z,{children:meta.error}),children]})};MultiChoice.displayName="MultiChoice",MultiChoice.defaultProps={hint:void 0,meta:{}},MultiChoice.displayName="MultiChoice";const __WEBPACK_DEFAULT_EXPORT__=MultiChoice;try{MultiChoice.displayName="MultiChoice",MultiChoice.__docgenInfo={description:"For wrapping a set of radio buttons with a label, optional hint and optional error.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/multi-choice\n- https://design-system.service.gov.uk/components/radios/",displayName:"MultiChoice",props:{meta:{defaultValue:{value:"{}"},description:"",name:"meta",required:!1,type:{name:"{ error?: string | string[]; touched?: boolean; }"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},hint:{defaultValue:{value:"undefined"},description:"",name:"hint",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/multi-choice/src/index.tsx#MultiChoice"]={docgenInfo:MultiChoice.__docgenInfo,name:"MultiChoice",path:"../../components/multi-choice/src/index.tsx#MultiChoice"})}catch(__react_docgen_typescript_loader_error){}},"../../components/radio/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Radio,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),govuk_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../lib/src/index.tsx"),_govuk_react_bjss_hint_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/hint-text/src/index.tsx"),_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../constants/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const radioSize=_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.TF[7],labelPaddingLeftRight=_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.TF[3],RADIOS_FOCUS_WIDTH=`${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.RZ+1}px`,Label=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("label").withConfig({displayName:"src__Label",componentId:"sc-ig3d79-0"})(_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.cp.font({size:19}),{display:"block",position:"relative",minHeight:radioSize,padding:`0 0 0 ${radioSize}px`,clear:"left"},(_ref=>{let{inline}=_ref;return inline&&{[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.qk.LARGESCREEN]:{float:"left",clear:"none",marginRight:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.TF[4]}}}),(_ref2=>{let{sizeVariant}=_ref2;return"SMALL"===sizeVariant&&{span:{padding:"12px 15px 13px 0",fontSize:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.Kt.SIZE_16,[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.qk.LARGESCREEN]:{fontSize:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.Kt.SIZE_19,padding:"10px 15px 10px 1px"},":after":{top:15,left:7,borderWidth:5},":before":{top:8,width:24,height:24}}}}),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.W0.withWhiteSpace({marginBottom:2})),Input=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("input").withConfig({displayName:"src__Input",componentId:"sc-ig3d79-1"})({position:"absolute",zIndex:1,top:0,left:0,width:radioSize,height:radioSize,cursor:"pointer",opacity:0,":checked + span::after":{opacity:1},":focus + span::before":{outline:`${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.lT} solid transparent`,outlineOffset:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.lT,boxShadow:`0 0 0 ${RADIOS_FOCUS_WIDTH} ${govuk_colours__WEBPACK_IMPORTED_MODULE_1__.tL}`}},(_ref3=>{let{disabled}=_ref3;return{cursor:disabled?"auto":"pointer"," + span":{opacity:disabled?".5":"1",pointerEvents:disabled?"none":"auto"}}})),LabelText=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("span").withConfig({displayName:"src__LabelText",componentId:"sc-ig3d79-2"})({display:"inline-block",marginBottom:0,padding:`8px ${labelPaddingLeftRight}px ${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.TF[1]}px`,cursor:"pointer",MsTouchAction:"manipulation",touchAction:"manipulation",":before":{content:"''",boxSizing:"border-box",position:"absolute",top:0,left:0,width:radioSize,height:radioSize,border:`${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.gY} solid black`,borderRadius:"50%",background:"transparent"},":after":{content:"''",position:"absolute",top:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.TF[2],left:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.TF[2],width:0,height:0,border:`${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_4__.TF[2]}px solid`,borderRadius:"50%",background:"currentColor",opacity:0}}),StyledRadioHint=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(_govuk_react_bjss_hint_text__WEBPACK_IMPORTED_MODULE_3__.Z).withConfig({displayName:"src__StyledRadioHint",componentId:"sc-ig3d79-3"})({display:"block",paddingLeft:labelPaddingLeftRight,paddingRight:labelPaddingLeftRight}),Radio=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref4,ref)=>{let{inline,children,className,hint,sizeVariant,...input}=_ref4;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Label,{inline,className,sizeVariant,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input,{type:"radio",ref,...input}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LabelText,{children}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledRadioHint,{children:hint})]})}));Radio.defaultProps={hint:void 0,inline:!1,className:void 0,sizeVariant:"MEDIUM"},Radio.displayName="Radio";const __WEBPACK_DEFAULT_EXPORT__=Radio;try{Radio.displayName="Radio",Radio.__docgenInfo={description:"Use the radios component when users can only select one option from a list.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/radio\n- https://design-system.service.gov.uk/components/radios/",displayName:"Radio",props:{hint:{defaultValue:{value:"undefined"},description:"",name:"hint",required:!1,type:{name:"ReactNode"}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:"undefined"},description:"",name:"className",required:!1,type:{name:"string"}},sizeVariant:{defaultValue:{value:"MEDIUM"},description:"",name:"sizeVariant",required:!1,type:{name:"`${ComponentSizeVariant.MEDIUM}` | `${ComponentSizeVariant.SMALL}`"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/radio/src/index.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"../../components/radio/src/index.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"../../components/radio/src/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,RadioDisabled:()=>RadioDisabled,RadioInline:()=>RadioInline,RadioPreselected:()=>RadioPreselected,RadioPreselectedDisabled:()=>RadioPreselectedDisabled,RadioSmall:()=>RadioSmall,RadioStacked:()=>RadioStacked,RadioWithHintText:()=>RadioWithHintText,UsageWithFinalReduxFormMultiCheckboxValidation:()=>UsageWithFinalReduxFormMultiCheckboxValidation,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_final_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-final-form/dist/react-final-form.es.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_govuk_react_bjss_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/button/src/index.tsx"),_govuk_react_bjss_multi_choice__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../components/multi-choice/src/index.tsx"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../components/radio/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Radio",id:"radio",component:___WEBPACK_IMPORTED_MODULE_5__.Y},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Y,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={name:"group1",children:"Radio button text example"};const RadioSmall=Template.bind({});RadioSmall.args={children:"Small radio",sizeVariant:"SMALL"};const RadioStacked=Template.bind({});RadioStacked.args={name:"group1",children:"Waste from animal carcasses"},RadioStacked.decorators=[storyFn=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[storyFn(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Y,{name:"group1",children:"Waste from mines or quarries"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Y,{name:"group1",children:"Farm or agricultural waste"})]})];const RadioInline=Template.bind({});RadioInline.args={name:"group1",inline:!0,children:"Yes"},RadioInline.decorators=[storyFn=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[storyFn(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Y,{name:"group1",inline:!0,children:"No"})]})];const RadioDisabled=Template.bind({});RadioDisabled.args={name:"group1",disabled:!0,children:"Disabled checkbox option"};const RadioPreselected=Template.bind({});RadioPreselected.args={name:"group1",defaultChecked:!0,children:"Farm or agricultural waste"};const RadioPreselectedDisabled=Template.bind({});RadioPreselectedDisabled.args={name:"group1",defaultChecked:!0,disabled:!0,children:"Farm or agricultural waste"};const RadioWithHintText=Template.bind({});RadioWithHintText.args={name:"group1",hint:"You'll have a user ID if you've registered for Self Assessment or filed a tax return online before.",children:"Sign in with Government Gateway"},RadioWithHintText.decorators=[storyFn=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[storyFn(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Y,{name:"group1",hint:"You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.",children:"Sign in with GOV.UK Verify"})]})];const FinalFormWrapper=_ref=>{let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.l0,{onSubmit:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("submit"),render:_ref2=>{let{handleSubmit,form:{reset},submitting,pristine,values}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form",{onSubmit:handleSubmit,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_bjss_button__WEBPACK_IMPORTED_MODULE_3__.Z,{type:"submit",disabled:submitting,children:"Submit"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_bjss_button__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:reset,disabled:submitting||pristine,children:"Reset"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre",{children:JSON.stringify(values,null,2)})]})]})}})};FinalFormWrapper.displayName="FinalFormWrapper",FinalFormWrapper.displayName="Form";const RadioGroup=_ref3=>{let{label,hint,options,inline,input,meta}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_bjss_multi_choice__WEBPACK_IMPORTED_MODULE_4__.Z,{label,hint,meta,children:options.map((o=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Y,{...input,value:o.value,inline,checked:o.value===input.value,children:o.title})},o.value)))})};RadioGroup.displayName="RadioGroup",RadioGroup.defaultProps={input:void 0,meta:{},hint:void 0,inline:!1,options:[],label:void 0};const UsageWithFinalReduxFormMultiCheckboxValidation=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FinalFormWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.gN,{name:"likesAnimals",label:"Do you like animals?",hint:"You must tell us",component:RadioGroup,options:[{title:"Yep",value:"yes"},{title:"Nope",value:"no"}],validate:value=>value?void 0:"Required",inline:!0,...args})});UsageWithFinalReduxFormMultiCheckboxValidation.displayName="UsageWithFinalReduxFormMultiCheckboxValidation",UsageWithFinalReduxFormMultiCheckboxValidation.parameters={docs:{storyDescription:"See the Example Application source code for example implementation with Final Form."}}},"../../node_modules/govuk-colours/lib/index.js":(__unused_webpack_module,exports)=>{var BLUE=exports.Ej="#1d70b8",FUSCHIA=(exports.Wd="#2e358b","#912b88"),PINK="#d53880",RED="#d4351c",ORANGE=exports.ud="#f47738",YELLOW=exports.$R="#ffdd00",GRASS_GREEN="#85994b",LIGHT_BLUE=exports.F3="#2b8cc4",BLACK=exports.E5="#0b0c0c",GREY_1="#6f777b",GREY_2=exports.FU="#bfc1c3",GREY_3=exports.nx="#f3f2f1",GREY_4=exports.zT="#f8f8f8",WHITE=exports.Cj="#ffffff",LINK_COLOUR=exports.su=BLUE,FOOTER_LINK=(exports.KW=LIGHT_BLUE,exports.oh=LIGHT_BLUE,exports.Pf="#4c2c92",exports.g$="#00703c",exports.lX="#002413",exports.tL=YELLOW,exports.cK=BLACK,exports.d7=GREY_1,exports.DU=GREY_2,exports.h=RED,exports.gX="#2e3133",exports.Ll=GREY_3,exports.gr="#a1acb2",exports.et="#454a4c");exports.ar="#171819",exports.ZR=FOOTER_LINK}}]);
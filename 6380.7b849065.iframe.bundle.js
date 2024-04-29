"use strict";(self.webpackChunk_govuk_react_bjss_storybook=self.webpackChunk_govuk_react_bjss_storybook||[]).push([[6380],{"../constants/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YF:()=>BORDER_WIDTH,gY:()=>BORDER_WIDTH_FORM_ELEMENT,Ok:()=>BORDER_WIDTH_FORM_ELEMENT_ERROR,se:()=>BORDER_WIDTH_FORM_GROUP_ERROR,IA:()=>BORDER_WIDTH_MOBILE,SE:()=>BORDER_WIDTH_WIDE,j$:()=>BREAKPOINTS,vV:()=>CAPTION_SIZES,jw:()=>FOCUSABLE,Lf:()=>FOCUSABLE_FILL,lT:()=>FOCUS_WIDTH,RZ:()=>FOCUS_WIDTH_RAW,Kt:()=>FONT_SIZE,Ld:()=>FONT_STACK,Ou:()=>FONT_STACK_PRINT,OA:()=>FONT_STACK_TABULAR,Xw:()=>FONT_WEIGHTS,GO:()=>GUTTER,il:()=>GUTTER_HALF,nR:()=>HEADING_SIZES,lg:()=>LEVEL_SIZE,tB:()=>LEVEL_TAG,Ac:()=>LINE_HEIGHT,qk:()=>MEDIA_QUERIES,Pk:()=>MEDIA_QUERY_PRINT,$q:()=>NTA_LIGHT,Kh:()=>RESPONSIVE_4,PL:()=>SITE_WIDTH,N_:()=>SPACING,b_:()=>SPACING_MAP,TF:()=>SPACING_POINTS,X2:()=>TYPOGRAPHY_SCALE,n:()=>WIDTHS});var lib=__webpack_require__("../../node_modules/govuk-colours/lib/index.js");const FOCUS_WIDTH="3px",FOCUS_WIDTH_RAW=3,FOCUSABLE={"&:focus":{outline:`${FOCUS_WIDTH} solid ${lib.tL}`,outlineOffset:0}},FOCUSABLE_FILL={"&:focus":{outline:`${FOCUS_WIDTH} solid ${lib.tL}`,outlineOffset:0,backgroundColor:lib.tL}},RESPONSIVE_4={mobile:15,tablet:20},RESPONSIVE_6={mobile:20,tablet:30},RESPONSIVE_8={mobile:30,tablet:50},SPACING_MAP=[{mobile:0,tablet:0},{mobile:5,tablet:5},{mobile:10,tablet:10},{mobile:15,tablet:15},RESPONSIVE_4,{mobile:15,tablet:25},RESPONSIVE_6,{mobile:25,tablet:40},RESPONSIVE_8,{mobile:40,tablet:60}],SPACING_POINTS=(Array.from(Array(SPACING_MAP.length).keys()),{0:0,1:5,2:10,3:15,4:20,5:25,6:30,7:40,8:50,9:60}),WIDTHS={"one-quarter":"25%","one-third":"33.3333%","one-half":"50%","two-thirds":"66.6666%","three-quarters":"75%",full:"100%"},TYPOGRAPHY_SCALE={80:{mobile:{fontSize:53,lineHeight:55/53,spacing:RESPONSIVE_8.mobile},tablet:{fontSize:80,lineHeight:1,spacing:RESPONSIVE_8.tablet},print:{fontSize:53,lineHeight:1.1}},48:{mobile:{fontSize:32,lineHeight:35/32,spacing:RESPONSIVE_8.mobile},tablet:{fontSize:48,lineHeight:50/48,spacing:RESPONSIVE_8.tablet},print:{fontSize:32,lineHeight:1.15}},36:{mobile:{fontSize:24,lineHeight:25/24,spacing:RESPONSIVE_6.mobile},tablet:{fontSize:36,lineHeight:40/36,spacing:RESPONSIVE_6.tablet},print:{fontSize:24,lineHeight:1.05}},27:{mobile:{fontSize:18,lineHeight:20/18,spacing:RESPONSIVE_4.mobile},tablet:{fontSize:27,lineHeight:30/27,spacing:RESPONSIVE_4.tablet},print:{fontSize:18,lineHeight:1.15}},24:{mobile:{fontSize:18,lineHeight:20/18,spacing:RESPONSIVE_4.mobile},tablet:{fontSize:24,lineHeight:1.25,spacing:RESPONSIVE_4.tablet},print:{fontSize:18,lineHeight:1.15}},19:{mobile:{fontSize:16,lineHeight:1.25,spacing:RESPONSIVE_4.mobile},tablet:{fontSize:19,lineHeight:25/19,spacing:RESPONSIVE_4.tablet},print:{fontSize:14,lineHeight:1.15}},16:{mobile:{fontSize:14,lineHeight:16/14,spacing:RESPONSIVE_4.mobile},tablet:{fontSize:16,lineHeight:1.25,spacing:RESPONSIVE_4.tablet},print:{fontSize:14,lineHeight:1.2}},14:{mobile:{fontSize:12,lineHeight:1.25,spacing:RESPONSIVE_4.mobile},tablet:{fontSize:14,lineHeight:20/14,spacing:RESPONSIVE_4.tablet},print:{fontSize:12,lineHeight:1.2}}},HEADING_SIZES={XLARGE:48,XL:48,LARGE:36,L:36,MEDIUM:24,M:24,SMALL:19,S:19},CAPTION_SIZES={XLARGE:27,XL:27,LARGE:24,L:24,MEDIUM:19,M:19},LEVEL_TAG={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"},LEVEL_SIZE={1:"XLARGE",2:"LARGE",3:"MEDIUM",4:"SMALL",5:"SMALL",6:"SMALL"},FONT_WEIGHTS={bold:"700",regular:"400"},BORDER_WIDTH="5px",BORDER_WIDTH_WIDE="10px",BORDER_WIDTH_MOBILE="4px",BORDER_WIDTH_FORM_ELEMENT="2px",BORDER_WIDTH_FORM_ELEMENT_ERROR="4px",BORDER_WIDTH_FORM_GROUP_ERROR=BORDER_WIDTH,SITE_WIDTH="960px",BREAKPOINTS={SMALLSCREEN:"320px",LARGESCREEN:"641px",MOBILE:"320px",TABLET:"641px",DESKTOP:"769px"},GUTTER="30px",GUTTER_HALF="15px",SPACING={SCALE_1:"5px",SCALE_2:"10px",SCALE_3:"15px",SCALE_4:"20px",SCALE_5:"30px",SCALE_6:"60px"},MEDIA_QUERY_PRINT="@media print",MEDIA_QUERIES={LARGESCREEN:`@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`,MAX:"@media only screen and (min-width: 1020px)",PRINT:MEDIA_QUERY_PRINT,TABLET:`@media only screen and (min-width: ${BREAKPOINTS.TABLET})`,DESKTOP:`@media only screen and (min-width: ${BREAKPOINTS.DESKTOP})`},NTA_LIGHT='"nta", Arial, sans-serif',FONT_STACK=`${NTA_LIGHT}`,FONT_STACK_TABULAR=`${`"ntatabularnumbers", ${NTA_LIGHT}`}`,FONT_STACK_PRINT="sans-serif",FONT_SIZE={SIZE_14:"14px",SIZE_16:"16px",SIZE_18:"18px",SIZE_19:"19px",SIZE_20:"20px",SIZE_24:"24px",SIZE_27:"27px"},LINE_HEIGHT={SIZE_14:"1.1428571429",SIZE_16:"1.25",SIZE_18:"1.3",SIZE_19:"1.3",SIZE_24:"1.35"}},"../lib/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p4:()=>link_namespaceObject,mC:()=>shape_namespaceObject,W0:()=>spacing_namespaceObject,cp:()=>typography_namespaceObject,jy:()=>visually_hidden});var spacing_namespaceObject={};__webpack_require__.r(spacing_namespaceObject),__webpack_require__.d(spacing_namespaceObject,{ComponentSizeVariant:()=>ComponentSizeVariant,responsive:()=>responsive,responsiveMargin:()=>responsiveMargin,responsivePadding:()=>responsivePadding,simple:()=>simple,withWhiteSpace:()=>withWhiteSpace,withWidth:()=>withWidth});var typography_namespaceObject={};__webpack_require__.r(typography_namespaceObject),__webpack_require__.d(typography_namespaceObject,{common:()=>common,font:()=>font,responsive:()=>typography_responsive,textColor:()=>textColor,textColour:()=>textColour});var link_namespaceObject={};__webpack_require__.r(link_namespaceObject),__webpack_require__.d(link_namespaceObject,{common:()=>link_common,printFriendly:()=>printFriendly,styleDefault:()=>styleDefault,styleMuted:()=>styleMuted,styleNoVisitedState:()=>styleNoVisitedState,styleText:()=>styleText});var shape_namespaceObject={};function visually_hidden_visuallyHidden(){let{important:isImportant=!0,focusable:isFocusable=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const important=isImportant?" !important":"";return{position:`absolute${important}`,width:`1px${important}`,height:`1px${important}`,margin:`0${important}`,overflow:`hidden${important}`,clip:`rect(0 0 0 0)${important}`,clipPath:`inset(50%)${important}`,border:`0${important}`,whiteSpace:`nowrap${important}`,...isFocusable?{"&:active,&:focus":{position:`static${important}`,width:`auto${important}`,height:`auto${important}`,margin:`inherit${important}`,overflow:`visible${important}`,clip:`auto${important}`,clipPath:`none${important}`,whiteSpace:`inherit${important}`}}:{padding:`0${important}`}}}function focusable(){let{important=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return visually_hidden_visuallyHidden({important,focusable:!0})}__webpack_require__.r(shape_namespaceObject),__webpack_require__.d(shape_namespaceObject,{arrow:()=>arrow}),visually_hidden_visuallyHidden.focusable=focusable;const visually_hidden=visually_hidden_visuallyHidden;try{visually_hidden_visuallyHidden.displayName="visuallyHidden",visually_hidden_visuallyHidden.__docgenInfo={description:"",displayName:"visuallyHidden",props:{important:{defaultValue:null,description:"",name:"important",required:!1,type:{name:"boolean"}},focusable:{defaultValue:null,description:"",name:"focusable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/visually-hidden/index.tsx#visuallyHidden"]={docgenInfo:visually_hidden_visuallyHidden.__docgenInfo,name:"visuallyHidden",path:"../lib/src/visually-hidden/index.tsx#visuallyHidden"})}catch(__react_docgen_typescript_loader_error){}try{focusable.displayName="focusable",focusable.__docgenInfo={description:"",displayName:"focusable",props:{important:{defaultValue:{value:"true"},description:"",name:"important",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/visually-hidden/index.tsx#focusable"]={docgenInfo:focusable.__docgenInfo,name:"focusable",path:"../lib/src/visually-hidden/index.tsx#focusable"})}catch(__react_docgen_typescript_loader_error){}var src=__webpack_require__("../constants/src/index.tsx");function simple(size){const scale=src.TF[Math.abs(size)],polarity=size<0?-1:1;if(void 0===scale)throw Error(`Unknown spacing size ${size} - expected a point from the spacing scale.`);return scale*polarity}function styleForDirection(size,property){let direction=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{[direction&&"all"!==direction?`${property}-${direction}`:property]:size}}function responsive(_ref){let{size,property,direction=null,adjustment=0}=_ref;const scale=src.b_[Math.abs(Number(size))],polarity=Number(size)<0?-1:1;if(void 0===scale)throw Error(`Unknown responsive spacing size ${size} - expected a point from the responsive spacing scale.`);if(!property)throw Error("No property passed to responsiveSpacing");if(Array.isArray(direction))return Object.assign({},...direction.map((dir=>styleForDirection(scale.mobile*polarity+adjustment,property,dir))),{[src.qk.TABLET]:Object.assign({},...direction.map((dir=>styleForDirection(scale.tablet*polarity+adjustment,property,dir))))});return{...styleForDirection(scale.mobile*polarity+adjustment,property,direction),[src.qk.TABLET]:styleForDirection(scale.tablet*polarity+adjustment,property,direction)}}function responsiveMargin(value){if(Number.isInteger(value))return responsive({size:Number(value),property:"margin"});if("object"!=typeof value)throw Error("Expected padding value to be an object or integer");const{size,direction,adjustment}=value;return responsive({size,property:"margin",direction,adjustment})}function responsivePadding(value){if(Number.isInteger(value))return responsive({size:Number(value),property:"padding"});if("object"!=typeof value)throw Error("Expected padding value to be an object or integer");const{size,direction,adjustment}=value;return responsive({size,property:"padding",direction,adjustment})}function withWhiteSpace(){let config=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){let{margin=config.margin,padding=config.padding,mb:marginBottom=config.marginBottom}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const styles=[];return void 0!==margin&&(Array.isArray(margin)?styles.push(...margin.map((val=>responsiveMargin(val)))):styles.push(responsiveMargin(margin))),void 0!==padding&&(Array.isArray(padding)?styles.push(...padding.map((val=>responsivePadding(val)))):styles.push(responsivePadding(padding))),void 0!==marginBottom&&styles.push(responsiveMargin({size:marginBottom,direction:"bottom"})),styles}}function withWidth(){let config=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){let{setWidth=config.width}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(setWidth){const width=src.n[setWidth]||setWidth,{mediaQuery=src.qk.TABLET,noDefault}=config;return{width:noDefault?void 0:"100%",[mediaQuery]:{width}}}}}let ComponentSizeVariant=function(ComponentSizeVariant){return ComponentSizeVariant.XLARGE="XLARGE",ComponentSizeVariant.LARGE="LARGE",ComponentSizeVariant.MEDIUM="MEDIUM",ComponentSizeVariant.SMALL="SMALL",ComponentSizeVariant}({});try{simple.displayName="simple",simple.__docgenInfo={description:"",displayName:"simple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/spacing/index.tsx#simple"]={docgenInfo:simple.__docgenInfo,name:"simple",path:"../lib/src/spacing/index.tsx#simple"})}catch(__react_docgen_typescript_loader_error){}try{responsive.displayName="responsive",responsive.__docgenInfo={description:"",displayName:"responsive",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string | number"}},property:{defaultValue:null,description:"",name:"property",required:!0,type:{name:"string"}},direction:{defaultValue:{value:"null"},description:"",name:"direction",required:!1,type:{name:"string | string[]"}},adjustment:{defaultValue:{value:"0"},description:"",name:"adjustment",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/spacing/index.tsx#responsive"]={docgenInfo:responsive.__docgenInfo,name:"responsive",path:"../lib/src/spacing/index.tsx#responsive"})}catch(__react_docgen_typescript_loader_error){}try{responsiveMargin.displayName="responsiveMargin",responsiveMargin.__docgenInfo={description:"",displayName:"responsiveMargin",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string | number"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"string | string[]"}},adjustment:{defaultValue:null,description:"",name:"adjustment",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/spacing/index.tsx#responsiveMargin"]={docgenInfo:responsiveMargin.__docgenInfo,name:"responsiveMargin",path:"../lib/src/spacing/index.tsx#responsiveMargin"})}catch(__react_docgen_typescript_loader_error){}try{responsivePadding.displayName="responsivePadding",responsivePadding.__docgenInfo={description:"",displayName:"responsivePadding",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"string | string[]"}},adjustment:{defaultValue:null,description:"",name:"adjustment",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/spacing/index.tsx#responsivePadding"]={docgenInfo:responsivePadding.__docgenInfo,name:"responsivePadding",path:"../lib/src/spacing/index.tsx#responsivePadding"})}catch(__react_docgen_typescript_loader_error){}try{withWhiteSpace.displayName="withWhiteSpace",withWhiteSpace.__docgenInfo={description:"",displayName:"withWhiteSpace",props:{margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"Margin | Margin[]"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"Padding | Padding[]"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/spacing/index.tsx#withWhiteSpace"]={docgenInfo:withWhiteSpace.__docgenInfo,name:"withWhiteSpace",path:"../lib/src/spacing/index.tsx#withWhiteSpace"})}catch(__react_docgen_typescript_loader_error){}try{withWidth.displayName="withWidth",withWidth.__docgenInfo={description:"",displayName:"withWidth",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},mediaQuery:{defaultValue:null,description:"",name:"mediaQuery",required:!1,type:{name:"string"}},noDefault:{defaultValue:null,description:"",name:"noDefault",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/spacing/index.tsx#withWidth"]={docgenInfo:withWidth.__docgenInfo,name:"withWidth",path:"../lib/src/spacing/index.tsx#withWidth"})}catch(__react_docgen_typescript_loader_error){}var lib=__webpack_require__("../../node_modules/govuk-colours/lib/index.js");const textColour={color:lib.E5,[src.qk.PRINT]:{color:"#000"}},textColor=textColour;function common(){return{fontFamily:arguments.length>0&&void 0!==arguments[0]?arguments[0]:src.Ld,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",[src.Pk]:{fontFamily:src.Ou}}}function getSizeStyle(scale){let lineHeight=arguments.length>1&&void 0!==arguments[1]?arguments[1]:scale.lineHeight;return{fontSize:`${scale.fontSize}px`,lineHeight}}function typography_responsive(size,overrideLineHeight){const scale=src.X2[size];if(!scale)throw Error(`Unknown font size ${size} - expected a point from the typography scale.`);return{...getSizeStyle(scale.mobile,overrideLineHeight),[src.qk.TABLET]:getSizeStyle(scale.tablet,overrideLineHeight),[src.qk.PRINT]:getSizeStyle(scale.print,overrideLineHeight)}}function font(){let{size,weight="regular",tabular=!1,lineHeight}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...common(tabular?src.OA:void 0),...src.Xw[weight]?{fontWeight:src.Xw[weight]}:void 0,...size?typography_responsive(size,lineHeight):void 0}}try{common.displayName="common",common.__docgenInfo={description:"",displayName:"common",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/typography/index.tsx#common"]={docgenInfo:common.__docgenInfo,name:"common",path:"../lib/src/typography/index.tsx#common"})}catch(__react_docgen_typescript_loader_error){}try{font.displayName="font",font.__docgenInfo={description:"",displayName:"font",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"string"}},tabular:{defaultValue:{value:"false"},description:"",name:"tabular",required:!1,type:{name:"boolean"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/typography/index.tsx#font"]={docgenInfo:font.__docgenInfo,name:"font",path:"../lib/src/typography/index.tsx#font"})}catch(__react_docgen_typescript_loader_error){}const FOCUS_TEXT_COLOUR=lib.E5;function link_common(fontFamily){return[common(fontFamily),src.Lf]}const styleDefault={":link":{color:lib.su},":visited":{color:lib.Pf},":hover":{color:lib.oh},":active":{color:lib.KW},":focus":{color:FOCUS_TEXT_COLOUR}},styleMuted={"&:link, &:visited, &:hover, &:active":{color:lib.d7},"&:focus":{color:FOCUS_TEXT_COLOUR}},styleText={"&:link, &:visited, &:hover, &:active, &:focus":textColour},styleNoVisitedState={":link":{color:lib.su},":visited":{color:lib.su},":hover":{color:lib.oh},":active":{color:lib.KW},":focus":{color:FOCUS_TEXT_COLOUR}},printFriendly={[src.Pk]:{'&[href^="/"], &[href^="http://"], &[href^="https://"]':{"&::after":{content:'" (" attr(href) ")"',fontSize:"90%",wordWrap:"break-word"}}}};try{link_common.displayName="common",link_common.__docgenInfo={description:"",displayName:"common",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/link/index.tsx#common"]={docgenInfo:link_common.__docgenInfo,name:"common",path:"../lib/src/link/index.tsx#common"})}catch(__react_docgen_typescript_loader_error){}const root3=1.732;function equilateralHeight(base){return base/2*root3}function makeShape(direction,base,height){const perpendicular=base/2;switch(direction){case"up":return{clipPath:"polygon(50% 0%, 0% 100%, 100% 100%)",borderWidth:`0 ${perpendicular}px ${height}px ${perpendicular}px`,borderBottomColor:"inherit"};case"right":return{clipPath:"polygon(0% 0%, 100% 50%, 0% 100%)",borderWidth:`${perpendicular}px 0 ${perpendicular}px ${height}px`,borderLeftColor:"inherit"};case"down":return{clipPath:"polygon(0% 0%, 50% 100%, 100% 0%)",borderWidth:`${height}px ${perpendicular}px 0 ${perpendicular}px`,borderTopColor:"inherit"};case"left":return{clipPath:"polygon(0% 50%, 100% 100%, 100% 0%)",borderWidth:`${perpendicular}px ${height}px ${perpendicular}px 0`,borderRightColor:"inherit"};default:throw Error(`Invalid arrow direction: expected 'up', 'right', 'down' or 'left', got ${direction}`)}}function arrow(_ref){let{direction,base=0,height=equilateralHeight(base),display="block"}=_ref;return{display,width:0,height:0,borderStyle:"solid",borderColor:"transparent",...makeShape(direction,base,height)}}try{arrow.displayName="arrow",arrow.__docgenInfo={description:"",displayName:"arrow",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"string"}},base:{defaultValue:{value:"0"},description:"",name:"base",required:!1,type:{name:"number"}},height:{defaultValue:{value:"equilateralHeight(base)"},description:"",name:"height",required:!1,type:{name:"number"}},display:{defaultValue:{value:"block"},description:"",name:"display",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/shape/index.tsx#arrow"]={docgenInfo:arrow.__docgenInfo,name:"arrow",path:"../lib/src/shape/index.tsx#arrow"})}catch(__react_docgen_typescript_loader_error){}try{visuallyHidden.displayName="visuallyHidden",visuallyHidden.__docgenInfo={description:"",displayName:"visuallyHidden",props:{important:{defaultValue:null,description:"",name:"important",required:!1,type:{name:"boolean"}},focusable:{defaultValue:null,description:"",name:"focusable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../lib/src/index.tsx#visuallyHidden"]={docgenInfo:visuallyHidden.__docgenInfo,name:"visuallyHidden",path:"../lib/src/index.tsx#visuallyHidden"})}catch(__react_docgen_typescript_loader_error){}}}]);
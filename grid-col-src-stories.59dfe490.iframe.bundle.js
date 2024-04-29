"use strict";(self.webpackChunk_govuk_react_bjss_storybook=self.webpackChunk_govuk_react_bjss_storybook||[]).push([[4130],{"../../components/grid-col/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>GridCol,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../constants/src/index.tsx"),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../lib/src/index.tsx");const colValues={columnOneQuarter:"25%",columnOneThird:"33.3333%",columnOneHalf:"50%",columnTwoThirds:"66.6667%",columnThreeQuarters:"75%",columnFull:"100%"},widthFromProps=_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_1__.W0.withWidth({noDefault:!0}),desktopWidthFromProps=_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_1__.W0.withWidth({mediaQuery:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.qk.DESKTOP,noDefault:!0});function setGrowShrink(style){const hasAutoWidth=[void 0,"auto"].includes(style.width);return{...style,flexGrow:hasAutoWidth?1:0,flexShrink:hasAutoWidth?1:0}}const GridCol=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)("div").withConfig({displayName:"src__GridCol",componentId:"sc-18x01sh-0"})({boxSizing:"border-box",paddingRight:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.il,paddingLeft:_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.il},(props=>{let widthStyle=widthFromProps(props);if(!widthStyle){let widthValue;Object.entries(props).forEach((_ref=>{let[key,value]=_ref;if(colValues[key]&&!0===value){const newKey=key.replace("column","").replace(/^([A-Z][a-z]+)([A-Z])/,"$1-$2").toLocaleLowerCase();console.warn(`deprecated prop ${key} used in GridCol, please replace with setWidth="${newKey}"`),widthValue=colValues[key]}})),widthStyle={[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.qk.TABLET]:{width:widthValue}}}widthStyle[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.qk.TABLET]=setGrowShrink(widthStyle[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.qk.TABLET]);const desktopWidthStyle=desktopWidthFromProps({setWidth:props.setDesktopWidth});return desktopWidthStyle&&(desktopWidthStyle[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.qk.DESKTOP]=setGrowShrink(desktopWidthStyle[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.qk.DESKTOP])),{...widthStyle,...desktopWidthStyle}}));GridCol.defaultProps={children:void 0,columnOneQuarter:!1,columnOneThird:!1,columnOneHalf:!1,columnTwoThirds:!1,columnThreeQuarters:!1,columnFull:!1,setWidth:void 0,setDesktopWidth:void 0},GridCol.displayName="GridCol";const __WEBPACK_DEFAULT_EXPORT__=GridCol;try{GridCol.displayName="GridCol",GridCol.__docgenInfo={description:"Grid Column.\n\nShould always be wrapped by `GridRow`. Will always render a column at full width if\nthe browser width is below the `TABLET` breakpoint.\n\nNB our grid is based on flex-box, which differs from govuk-frontend, which instead uses\nfloats, however it is otherwise similar to use.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/grid-col",displayName:"GridCol",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},columnOneQuarter:{defaultValue:{value:"false"},description:"Dimension setting for the column (deprecated)",name:"columnOneQuarter",required:!1,type:{name:"boolean"}},columnOneThird:{defaultValue:{value:"false"},description:"Dimension setting for the column (deprecated)",name:"columnOneThird",required:!1,type:{name:"boolean"}},columnOneHalf:{defaultValue:{value:"false"},description:"Dimension setting for the column (deprecated)",name:"columnOneHalf",required:!1,type:{name:"boolean"}},columnTwoThirds:{defaultValue:{value:"false"},description:"Dimension setting for the column (deprecated)",name:"columnTwoThirds",required:!1,type:{name:"boolean"}},columnThreeQuarters:{defaultValue:{value:"false"},description:"Dimension setting for the column (deprecated)",name:"columnThreeQuarters",required:!1,type:{name:"boolean"}},columnFull:{defaultValue:{value:"false"},description:"Dimension setting for the column (deprecated)",name:"columnFull",required:!1,type:{name:"boolean"}},setWidth:{defaultValue:{value:"undefined"},description:"Explicitly set column to width using value or descriptive string\n(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)",name:"setWidth",required:!1,type:{name:"string | number"}},setDesktopWidth:{defaultValue:{value:"undefined"},description:"Explicitly set desktop column to width using value or descriptive string\n(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)",name:"setDesktopWidth",required:!1,type:{name:"string | number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/grid-col/src/index.tsx#GridCol"]={docgenInfo:GridCol.__docgenInfo,name:"GridCol",path:"../../components/grid-col/src/index.tsx#GridCol"})}catch(__react_docgen_typescript_loader_error){}},"../../components/grid-col/src/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColumnFourQuarters:()=>ColumnFourQuarters,ColumnHalves:()=>ColumnHalves,ColumnOneQuarterAndAutoFill:()=>ColumnOneQuarterAndAutoFill,ColumnOneThirdTwoThirds:()=>ColumnOneThirdTwoThirds,ColumnThirds:()=>ColumnThirds,ColumnTwoThirdsOneThird:()=>ColumnTwoThirdsOneThird,ColumnWidthsDifferingBetweenTabletAndDesktop:()=>ColumnWidthsDifferingBetweenTabletAndDesktop,CustomWidthsDifferingBetweenTabletAndDesktop:()=>CustomWidthsDifferingBetweenTabletAndDesktop,Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/grid-row/src/index.tsx"),_govuk_react_bjss_heading__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/heading/src/index.tsx"),_govuk_react_bjss_paragraph__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/paragraph/src/index.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../components/grid-col/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Page & Layout/Grid col",id:"grid-col",component:___WEBPACK_IMPORTED_MODULE_4__.$},Content=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({displayName:"stories__Content",componentId:"sc-15aczgl-0"})({textIndent:"-999em",backgroundColor:"#7DADD3",backgroundImage:"repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)"});Content.displayName="div";const Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-half",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_govuk_react_bjss_heading__WEBPACK_IMPORTED_MODULE_2__.H2,{children:"Half column"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_govuk_react_bjss_paragraph__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-half",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_govuk_react_bjss_heading__WEBPACK_IMPORTED_MODULE_2__.H2,{children:"Half column"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_govuk_react_bjss_paragraph__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data."})]})]});Default.displayName="Default";const ColumnHalves=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-half",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-half",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})})]});ColumnHalves.displayName="ColumnHalves";const ColumnThirds=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-third",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-third",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-third",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})})]});ColumnThirds.displayName="ColumnThirds";const ColumnTwoThirdsOneThird=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"two-thirds",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-third",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})})]});ColumnTwoThirdsOneThird.displayName="ColumnTwoThirdsOneThird";const ColumnOneThirdTwoThirds=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-third",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"two-thirds",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})})]});ColumnOneThirdTwoThirds.displayName="ColumnOneThirdTwoThirds";const ColumnFourQuarters=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-quarter",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-quarter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-quarter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-quarter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})})]});ColumnFourQuarters.displayName="ColumnFourQuarters";const ColumnOneQuarterAndAutoFill=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-quarter",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})})]});ColumnOneQuarterAndAutoFill.displayName="ColumnOneQuarterAndAutoFill";const ColumnWidthsDifferingBetweenTabletAndDesktop=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"one-quarter",setDesktopWidth:"one-third",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"three-quarters",setDesktopWidth:"auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})})]});ColumnWidthsDifferingBetweenTabletAndDesktop.displayName="ColumnWidthsDifferingBetweenTabletAndDesktop";const CustomWidthsDifferingBetweenTabletAndDesktop=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_govuk_react_bjss_grid_row__WEBPACK_IMPORTED_MODULE_1__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"60%",setDesktopWidth:"auto",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"30%",setDesktopWidth:"18%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.$,{setWidth:"auto",setDesktopWidth:"400px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{children:"content"})})]});CustomWidthsDifferingBetweenTabletAndDesktop.displayName="CustomWidthsDifferingBetweenTabletAndDesktop"},"../../components/grid-row/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>GridRow,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../constants/src/index.tsx"),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../lib/src/index.tsx");const GridRow=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)("div").withConfig({displayName:"src__GridRow",componentId:"sc-p7mm9l-0"})({display:"flex",flexDirection:"column",margin:`0 -${_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.il}`,[_govuk_react_bjss_constants__WEBPACK_IMPORTED_MODULE_0__.qk.LARGESCREEN]:{flexDirection:"row"}},_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_1__.W0.withWhiteSpace());GridRow.displayName="GridRow";const __WEBPACK_DEFAULT_EXPORT__=GridRow;try{GridRow.displayName="GridRow",GridRow.__docgenInfo={description:"Grid Row, to be used as a parent component for GridCol.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/grid-row",displayName:"GridRow",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/grid-row/src/index.tsx#GridRow"]={docgenInfo:GridRow.__docgenInfo,name:"GridRow",path:"../../components/grid-row/src/index.tsx#GridRow"})}catch(__react_docgen_typescript_loader_error){}},"../../components/heading/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>presets_H1,H2:()=>presets_H2,H3:()=>presets_H3,H4:()=>presets_H4,H5:()=>presets_H5,H6:()=>presets_H6,Z:()=>heading_src});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),src=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../constants/src/index.tsx")),lib_src=__webpack_require__("../lib/src/index.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledHeading=(0,styled_components_browser_esm.ZP)("h1").withConfig({displayName:"heading__StyledHeading",componentId:"sc-1flrnus-0"})(lib_src.cp.textColour,(_ref=>{let{size}=_ref;const actualSize=Number.isNaN(Number(size))?src.nR[size]:size;if(!actualSize)throw Error(`Unknown size ${size} used for heading.`);return{...lib_src.cp.font({size:actualSize,weight:"bold"})}}),{display:"block",marginTop:0},(_ref2=>{let{size}=_ref2;const actualSize=Number.isNaN(Number(size))?src.nR[size]:size,scaleInfo=src.X2[actualSize];return{marginBottom:scaleInfo.mobile.spacing,[src.qk.TABLET]:{marginBottom:scaleInfo.tablet.spacing}}}),lib_src.W0.withWhiteSpace()),Heading=_ref3=>{let{level,size,...props}=_ref3;return level&&(console.warn(`deprecated prop 'level' used in Heading, please replace with an "H${level}" component`),src.tB[level])?(0,jsx_runtime.jsx)(StyledHeading,{size:src.lg[level],...props,as:src.tB[level]}):(0,jsx_runtime.jsx)(StyledHeading,{size,...props})};Heading.displayName="Heading",Heading.defaultProps={level:void 0,size:"XLARGE",children:void 0},Heading.displayName="Heading";try{Heading.displayName="Heading",Heading.__docgenInfo={description:"Use heading tags, such as `<h1>`, `<h2>` and so on, to tag the headings on a page.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/heading\n- https://design-system.service.gov.uk/styles/typography/#headings",displayName:"Heading",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLHeadingElement>"}},size:{defaultValue:{value:"XLARGE"},description:"Visual size level, accepts:\n   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`\n   or a numeric size that fits in the GDS font scale list",name:"size",required:!1,type:{name:"string | number"}},level:{defaultValue:{value:"undefined"},description:"Semantic heading level value between 1 and 6 (deprecated)",name:"level",required:!1,type:{name:"string | number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"never"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"../../components/heading/src/heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}const presets_H1=props=>(0,jsx_runtime.jsx)(Heading,{as:"h1",size:src.lg[1],...props});presets_H1.displayName="H1";const presets_H2=props=>(0,jsx_runtime.jsx)(Heading,{as:"h2",size:src.lg[2],...props});presets_H2.displayName="H2";const presets_H3=props=>(0,jsx_runtime.jsx)(Heading,{as:"h3",size:src.lg[3],...props});presets_H3.displayName="H3";const presets_H4=props=>(0,jsx_runtime.jsx)(Heading,{as:"h4",size:src.lg[4],...props});presets_H4.displayName="H4";const presets_H5=props=>(0,jsx_runtime.jsx)(Heading,{as:"h5",size:src.lg[5],...props});presets_H5.displayName="H5";const presets_H6=props=>(0,jsx_runtime.jsx)(Heading,{as:"h6",size:src.lg[6],...props});presets_H6.displayName="H6";try{presets_H1.displayName="H1",presets_H1.__docgenInfo={description:"",displayName:"H1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H1"]={docgenInfo:presets_H1.__docgenInfo,name:"H1",path:"../../components/heading/src/presets.tsx#H1"})}catch(__react_docgen_typescript_loader_error){}try{presets_H2.displayName="H2",presets_H2.__docgenInfo={description:"",displayName:"H2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H2"]={docgenInfo:presets_H2.__docgenInfo,name:"H2",path:"../../components/heading/src/presets.tsx#H2"})}catch(__react_docgen_typescript_loader_error){}try{presets_H3.displayName="H3",presets_H3.__docgenInfo={description:"",displayName:"H3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H3"]={docgenInfo:presets_H3.__docgenInfo,name:"H3",path:"../../components/heading/src/presets.tsx#H3"})}catch(__react_docgen_typescript_loader_error){}try{presets_H4.displayName="H4",presets_H4.__docgenInfo={description:"",displayName:"H4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H4"]={docgenInfo:presets_H4.__docgenInfo,name:"H4",path:"../../components/heading/src/presets.tsx#H4"})}catch(__react_docgen_typescript_loader_error){}try{presets_H5.displayName="H5",presets_H5.__docgenInfo={description:"",displayName:"H5",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H5"]={docgenInfo:presets_H5.__docgenInfo,name:"H5",path:"../../components/heading/src/presets.tsx#H5"})}catch(__react_docgen_typescript_loader_error){}try{presets_H6.displayName="H6",presets_H6.__docgenInfo={description:"",displayName:"H6",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H6"]={docgenInfo:presets_H6.__docgenInfo,name:"H6",path:"../../components/heading/src/presets.tsx#H6"})}catch(__react_docgen_typescript_loader_error){}const heading_src=Heading;try{H1.displayName="H1",H1.__docgenInfo={description:"",displayName:"H1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H1"]={docgenInfo:H1.__docgenInfo,name:"H1",path:"../../components/heading/src/index.tsx#H1"})}catch(__react_docgen_typescript_loader_error){}try{H2.displayName="H2",H2.__docgenInfo={description:"",displayName:"H2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H2"]={docgenInfo:H2.__docgenInfo,name:"H2",path:"../../components/heading/src/index.tsx#H2"})}catch(__react_docgen_typescript_loader_error){}try{H3.displayName="H3",H3.__docgenInfo={description:"",displayName:"H3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H3"]={docgenInfo:H3.__docgenInfo,name:"H3",path:"../../components/heading/src/index.tsx#H3"})}catch(__react_docgen_typescript_loader_error){}try{H4.displayName="H4",H4.__docgenInfo={description:"",displayName:"H4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H4"]={docgenInfo:H4.__docgenInfo,name:"H4",path:"../../components/heading/src/index.tsx#H4"})}catch(__react_docgen_typescript_loader_error){}try{H5.displayName="H5",H5.__docgenInfo={description:"",displayName:"H5",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H5"]={docgenInfo:H5.__docgenInfo,name:"H5",path:"../../components/heading/src/index.tsx#H5"})}catch(__react_docgen_typescript_loader_error){}try{H6.displayName="H6",H6.__docgenInfo={description:"",displayName:"H6",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H6"]={docgenInfo:H6.__docgenInfo,name:"H6",path:"../../components/heading/src/index.tsx#H6"})}catch(__react_docgen_typescript_loader_error){}},"../../components/link/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>Link});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../lib/src/index.tsx");const Link=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)("a").withConfig({shouldForwardProp:prop=>!["noVisitedState","textColour","muted"].includes(prop),displayName:"src__Link",componentId:"sc-t3bsy3-0"})(..._govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__.p4.common(),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleDefault,_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__.p4.printFriendly,(_ref=>{let{muted}=_ref;return muted?_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleMuted:void 0}),(_ref2=>{let{textColour}=_ref2;return textColour?_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleText:void 0}),(_ref3=>{let{noVisitedState}=_ref3;return noVisitedState?_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleNoVisitedState:void 0}));Link.defaultProps={muted:!1,textColour:!1,noVisitedState:!1},Link.displayName="Link";const __WEBPACK_DEFAULT_EXPORT__=Link;try{Link.displayName="Link",Link.__docgenInfo={description:"Link/Anchor element.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/link\n- https://design-system.service.gov.uk/styles/typography/#links",displayName:"Link",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},muted:{defaultValue:{value:"false"},description:'show link in a "muted" (grey) style',name:"muted",required:!1,type:{name:"boolean"}},textColour:{defaultValue:{value:"false"},description:"ensure link is shown in plain text colour",name:"textColour",required:!1,type:{name:"boolean"}},noVisitedState:{defaultValue:{value:"false"},description:'ensure there is no "visited" style',name:"noVisitedState",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/link/src/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"../../components/link/src/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"../../components/paragraph/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,n:()=>Paragraph});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react_markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-markdown/lib/react-markdown.js"),react_markdown__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../lib/src/index.tsx"),_govuk_react_bjss_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/link/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledParagraph=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(react_markdown__WEBPACK_IMPORTED_MODULE_1___default()).withConfig({displayName:"src__StyledParagraph",componentId:"sc-1nyx5wp-0"})({margin:0,"> p":{margin:0},"> p > code":{padding:"0.2em 0.4em",margin:"0",fontSize:"85%",backgroundColor:"rgba(27,31,35,0.05)",borderRadius:"3px"},"> pre":{padding:"16px",overflow:"auto",fontSize:"85%",lineHeight:"1.45",backgroundColor:"#f6f8fa",borderRadius:"3px"},"> pre > code":{display:"inline",padding:"0",margin:"0",border:"0",overflow:"visible",lineHeight:"inherit",wordWrap:"normal"}},(_ref=>{let{supportingText}=_ref;return _govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.cp.font({size:supportingText?16:19})}),_govuk_react_bjss_lib__WEBPACK_IMPORTED_MODULE_2__.W0.withWhiteSpace({marginBottom:4})),Paragraph=_ref2=>{let{children,...props}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledParagraph,{source:children,escapeHtml:!1,skipHtml:!0,allowedTypes:["paragraph","emphasis","strong","link","inlineCode","code","text"],renderers:{link:props.linkRenderer},...props})};Paragraph.displayName="Paragraph",Paragraph.defaultProps={children:"",supportingText:!1,linkRenderer:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_govuk_react_bjss_link__WEBPACK_IMPORTED_MODULE_3__.Z,{...props})},Paragraph.displayName="Paragraph";const __WEBPACK_DEFAULT_EXPORT__=Paragraph;try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"Markdown Formatter.\n\nSupports bold, italic, links, inline code and block code in Markdown ONLY.\nThis is to ensure we follow GDS as closely as possible.\nIt is worth noting that GDS recommends avoiding bold and italics.\n\nBold should be avoided in general as not only can it dilute the message, it will also\ncause Screenreaders to increase the volume of any bold text to reflect the increase in\nfont-weight.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/paragraph\n- https://design-system.service.gov.uk/styles/typography/",displayName:"Paragraph",props:{children:{defaultValue:{value:""},description:"Text content supporting markdown",name:"children",required:!1,type:{name:"string & ReactNode"}},supportingText:{defaultValue:{value:"false"},description:"Is this paragraph supporting text for another element?",name:"supportingText",required:!1,type:{name:"boolean"}},linkRenderer:{defaultValue:{value:"(props) => <Link {...props} />"},description:"",name:"linkRenderer",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/paragraph/src/index.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"../../components/paragraph/src/index.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}}}]);
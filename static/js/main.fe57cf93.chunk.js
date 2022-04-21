(this["webpackJsonpreactjs-custom-accordion-example"]=this["webpackJsonpreactjs-custom-accordion-example"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.widthStyles=t.getButtonStyles=t.backgroundStyles=void 0;t.getButtonStyles=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#fff",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"1.3rem";return{fontSize:t||a,color:e||n}};t.widthStyles=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"80%";return{width:e||t}};t.backgroundStyles=function(e,t){return{background:e||t,border:e===t?"2px solid #333":"none"}}},109:function(e,t,n){"use strict";n.r(t);n(57);var a=n(0),l=n.n(a),r=n(54),o=n.n(r),c=n(9),u=[{title:"What is ReactJS",description:"ReactJS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."},{title:"Who developed ReactJS",description:"ReactJS was developed by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."}];var i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"\ud83d\ude80 Default"),l.a.createElement(c.Accordion,{data:u}))},s=n(111),d=n(28);var m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"\ud83d\ude80 With Custom Icons "),l.a.createElement(c.Accordion,{data:u,PlusIcon:d.a,MinusIcon:s.a,headerBackground:"#0d1537"}))};var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"\ud83d\ude80 With Open Accordion (Index Based) & Rounded Border "),l.a.createElement(c.Accordion,{data:u,defaultOpen:!0,defaultOpenIndex:0,roundedBorders:!0}))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h1",{class:"slate-h1"},l.a.createElement("span",null,"Custom Accordion for "),l.a.createElement("span",{className:"grad-color"},l.a.createElement("span",{className:"grad-span"},"ReactJS & NextJS")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://theinfosecguy.xyz",className:"hover-underline-animation"},l.a.createElement("small",null,"By @theinfosecguy")))),l.a.createElement(i,null),l.a.createElement(m,null),l.a.createElement(f,null),l.a.createElement("footer",null,l.a.createElement("a",{href:"https://github.com/theinfosecguy/reactjs-custom-accordion",className:"hover-underline-animation"},l.a.createElement("small",null,"GitHub"))," ","|"," ",l.a.createElement("a",{href:"https://www.npmjs.com/package/reactjs-custom-accordion",className:"hover-underline-animation"},l.a.createElement("small",null,"NPM"))," ","|"," ",l.a.createElement("a",{href:"https://theinfosecguy.xyz",className:"hover-underline-animation"},l.a.createElement("small",null,"@theinfosecguy"))))};o.a.render(l.a.createElement(p,null),document.getElementById("root"))},56:function(e,t,n){e.exports=n(109)},57:function(e,t,n){},62:function(e,t,n){"use strict";n(63),n(86);var a=n(99);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(0)),r=n(110);n(105);var o=n(106);function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var u=function(e){var t=e.data,n=e.PlusIcon,c=e.MinusIcon,u=e.headerBackground,i=e.footerBackground,s=e.plusIconSize,d=e.minusIconSize,m=e.plusIconColor,f=e.minusIconColor,p=e.accordionWidth,v=e.roundedBorders,h=void 0!==v&&v,y=e.defaultOpen,g=void 0!==y&&y,E=e.defaultOpenIndex,b=void 0===E?0:E,S=e.defaultAllOpen,O=void 0!==S&&S,k=e.rootClass,w=void 0===k?"":k,N=e.cardClass,j=void 0===N?"":N,I=e.headerClass,B=void 0===I?"":I,P=e.footerClass,x=void 0===P?"":P,M=(0,l.useState)(g),_=a(M,2),A=_[0],C=_[1],J=(0,l.useState)(b),R=a(J,2),W=R[0],F=R[1],z=(0,o.getButtonStyles)(m,s),D=(0,o.getButtonStyles)(f,d),q=(0,o.widthStyles)(p),G=(0,o.backgroundStyles)(u),H=(0,o.backgroundStyles)(i);return l.default.createElement("section",{className:"accordion-root ".concat(w)},t.map((function(e,t){return l.default.createElement("div",{className:"accordion-card ".concat(j),key:t,style:q},l.default.createElement("div",{style:G,className:"accordion-head flex bg-gray-900 text-white ".concat(h?A&&W===t?"rounded-t":"rounded":""," ").concat(B),onClick:function(){return function(e){C(!A),F(e),W!==e&&C(!0)}(t)}},l.default.createElement("span",null,null===e||void 0===e?void 0:e.title),A&&W===t||O?c?l.default.createElement(c,{style:D,className:"minus-icon"}):l.default.createElement(r.AiOutlineMinusSquare,{className:"minus-icon",style:D}):n?l.default.createElement(n,{style:z,className:"plus-icon"}):l.default.createElement(r.AiOutlinePlusSquare,{className:"plus-icon",style:z})),A&&W===t||O?l.default.createElement("div",{className:"accordion-body ".concat(h?"rounded-b":""," ").concat(x),style:H},l.default.createElement("span",null,null===e||void 0===e?void 0:e.description)):null)})))};t.default=u},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Accordion",{enumerable:!0,get:function(){return l.default}});var a,l=(a=n(62))&&a.__esModule?a:{default:a}}},[[56,1,2]]]);
//# sourceMappingURL=main.fe57cf93.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[161,15,165],{1235:function(t,e,r){"use strict";r(895)},1236:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".box-shadow[data-v-fb60a948]{border-width:5px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));transition:.2s}",""]),n.locals={},t.exports=n},1237:function(t,e,r){var content=r(1473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("6ec2cbfe",content,!0,{sourceMap:!1})},1261:function(t,e){},1262:function(t,e){},1263:function(t,e){},1264:function(t,e){},1265:function(t,e){},1311:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(18),r(401),r(279),{name:"side-pages-pdf",props:{pdf:{type:Object},slideDimentions:{type:Object},pageNum:{type:Number},activePage:{type:Boolean}},methods:{getPdfPages:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pdf.getPage(t.pageNum).then((function(e){var canvas=t.$refs.sideCanvas,r=canvas.getContext("2d"),n=e.getViewport({scale:.3});canvas.width=180,canvas.height=300,canvas.style.width="100%",canvas.style.height="100%",e.render({canvasContext:r,viewport:n})}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getPdfPages()},watch:{pdf:function(){this.getPdfPages()}}}),c=(r(1235),r(1)),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{ref:"sideCanvasContainer",staticClass:"text-sm cursor-pointer w-full p-2",class:[this.activePage?"box-shadow":""]},[t("canvas",{ref:"sideCanvas"})])}),[],!1,null,"fb60a948",null);e.default=component.exports},1472:function(t,e,r){"use strict";r(1237)},1473:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".pdf-page-aside[data-v-22b74f10]{display:none;height:100%;max-height:100%;width:250px;gap:0.75rem;overflow:hidden;background-color:rgb(113 113 113 / var(--tw-bg-opacity));--tw-bg-opacity:0.4;padding-top:1rem;padding-bottom:1rem}@media (min-width: 768px){.pdf-page-aside[data-v-22b74f10]{display:grid}}.pdf-page-aside[data-v-22b74f10]{grid-template-rows:1fr max-content}.custom-scrollbar[data-v-22b74f10]::-webkit-scrollbar-thumb{background-color:rgb(107 114 128 / var(--tw-bg-opacity));--tw-bg-opacity:0.3;border-radius:3px}.custom-scrollbar[data-v-22b74f10]::-webkit-scrollbar-thumb:hover{cursor:pointer;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-bg-opacity:1}",""]),n.locals={},t.exports=n},1618:function(t,e,r){"use strict";r.r(e);r(401);var n=r(0),o=r(673),c=r(279),l=r.n(c),d=(r(939),r(1036),r(1311)),f=n.default.extend({components:{ArrowWithStickIcon:o.default,SidePages:d.default},name:"PdfPageAside",data:function(){return{slideDimentions:{},currentPages:1}},props:{numPages:{type:Number},prevPage:{type:Function},currentPage:{type:Number},nextPage:{type:Function},pdf:{type:Object},sideSetScrollPage:{type:Function}},mounted:function(){},watch:{currentPage:function(){var t=l()(".sideScroll").outerHeight(!0);this.currentPage<=1?l()(".side-scroll-container").animate({scrollTop:0},0):l()(".side-scroll-container").animate({scrollTop:this.currentPage*t-t},0)}}}),h=(r(1472),r(1)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("aside",{staticClass:"pdf-page-aside"},[e("div",{staticClass:"overflow-y-auto custom-scrollbar px-5 side-scroll-container"},t._l(t.numPages,(function(i){return e("div",{key:i,ref:"sidescroll",refInFor:!0,staticClass:"bg-white h-56 mb-5 sideScroll overflow-hidden flex justify-center",on:{click:function(e){return t.$emit("sideSetScrollPage",i)}}},[e("side-pages",{attrs:{pdf:t.pdf,pageNum:i,activePage:t.currentPage==i,slideDimentions:t.slideDimentions}})],1)})),0),t._v(" "),e("div",{staticClass:"px-5"},[e("div",{staticClass:"flex gap-2"},[e("button",{staticClass:"circle circle-15 bg-[#626262] text-white",on:{click:function(e){return t.$emit("prevPage")}}},[e("arrow-with-stick-icon")],1),t._v(" "),e("div",{staticClass:"flex-1 grid place-items-center h-7 bg-white text-sm px-1 py-0.5"},[t._v("\n        "+t._s(t.currentPage<=t.numPages?t.currentPage+"/":"")+" "+t._s(t.numPages)+"\n      ")]),t._v(" "),e("button",{staticClass:"circle circle-15 bg-[#626262] text-white",on:{click:function(e){return t.$emit("nextPage")}}},[e("arrow-with-stick-icon",{staticClass:"transform rotate-180"})],1)])])])}),[],!1,null,"22b74f10",null);e.default=component.exports},673:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"ArrowWithStickIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",height:16,width:16/448*512}},[t("path",{attrs:{fill:"currentColor",d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"}})])}),[],!1,null,null,null);e.default=component.exports},895:function(t,e,r){var content=r(1236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("d1aa811e",content,!0,{sourceMap:!1})},940:function(t,e){}}]);
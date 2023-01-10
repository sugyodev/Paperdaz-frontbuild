(window.webpackJsonp=window.webpackJsonp||[]).push([[261,15,16,32,111,235],{1811:function(e,t,n){"use strict";n.r(t);n(8);var r=n(0),l=n(76),o=(n(102),n(797),n(705),n(264),n(702),n(4),n(151),n(609)),c=n(698),d=r.default.extend({name:"ResetPasswordSuccess",auth:"guest",layout:"landing",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:o.default,MessageAlertWidget:c.default},model:{},props:{},data:function(){return{user_email:localStorage.getItem("reset_user_mail"),alertMessage:{isSuccess:!1,message:""}}},watch:{},mounted:function(){},methods:{handleClickResend:function(){var e=this;this.$axios.$post("/users",{action:"forgot_password",email:this.user_email}).then((function(t){e.alertMessage.isSuccess=!0,e.alertMessage.message="resend request"})).catch((function(t){var n=t.response;e.alertMessage.isSuccess=!1,e.alertMessage.message=n.data.message||"unable to reset password"})).finally((function(){}))}}}),h=n(1),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"bg-gradient-to-t from-white to-transparent text-center"},[t("div",{staticClass:"container py-20"},[t("div",{staticClass:"w-full max-w-md mx-auto bg-white shadow-2xl rounded-xl px-6 py-10"},[t("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:e.alertMessage.message,expression:"alertMessage.message"}],staticClass:"mb-8",attrs:{message:e.alertMessage.message,type:e.alertMessage.isSuccess?"success":"error"}}),e._v(" "),t("div",{staticClass:"flex justify-center pb-2"},[t("CheckedFillIcon",{attrs:{width:"70"}})],1),e._v(" "),t("h1",{staticClass:"text-lg font-medium mb-2 text-[#737373]"},[e._v("Reset Link Sent")]),e._v(" "),t("div",[t("span",{staticClass:"text-[12px] text-[#737373]"},[e._v("Haven't received the link on "+e._s(e.user_email)+" ?")]),e._v(" "),t("button",{staticClass:"ml-1 text-paperdazgreen-300 text-[12px]",on:{click:e.handleClickResend}},[e._v(" Resend")])]),e._v(" "),e._m(0)],1)])])}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"mt-6"},[t("span",{staticClass:"text-[12px] text-[#737373]"},[e._v("Need assistance?")]),e._v(" "),t("button",{staticClass:"ml-1 text-paperdazgreen-300 text-[12px]"},[e._v(" Click here")])])}],!1,null,"74c4d2bc",null);t.default=component.exports},608:function(e,t,n){"use strict";n.r(t);var r=n(0).default.extend({name:"CheckIcon"}),l=n(1),component=Object(l.a)(r,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);t.default=component.exports},609:function(e,t,n){"use strict";n.r(t);var r=n(0).default.extend({name:"CheckFillIcon",props:["width","height"]}),l=n(1),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:"104",viewBox:"0 0 107 104",fill:"none"}},[t("path",{attrs:{d:"M53.5 0C23.9989 0 0 23.326 0 52C0 80.674 23.9989 104 53.5 104C83.0011 104 107 80.674 107 52C107 23.326 83.0011 0 53.5 0Z",fill:"#77C360"}}),e._v(" "),t("path",{attrs:{d:"M78.6775 41.1786L49.3593 68.8395C48.4797 69.6693 47.3251 70.087 46.1705 70.087C45.0159 70.087 43.8614 69.6693 42.9818 68.8395L28.3231 55.009C26.559 53.3454 26.559 50.6555 28.3231 48.9918C30.0863 47.3274 32.9365 47.3274 34.7006 48.9918L46.1705 59.8137L72.3 35.1614C74.0633 33.497 76.9134 33.497 78.6775 35.1614C80.4408 36.825 80.4408 39.5141 78.6775 41.1786Z",fill:"#FAFAFA"}})])}),[],!1,null,null,null);t.default=component.exports},610:function(e,t,n){"use strict";n.r(t);var r=n(0).default.extend({name:"ExclamationIcon"}),l=n(1),component=Object(l.a)(r,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);t.default=component.exports},694:function(e,t,n){var content=n(707);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("07fbc454",content,!0,{sourceMap:!1})},698:function(e,t,n){"use strict";n.r(t);var r=n(13),l=n(0),o=n(608),c=n(610),d=n(76),h=n(81),f=l.default.extend({components:{ExclamationIcon:c.default,CheckIcon:o.default,TimesIcon:h.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),x=(n(706),n(1)),component=Object(x.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(r.a)({},e.type,!0)},[t("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===e.type||"error"===e.type?t("exclamation-icon",{attrs:{width:"12",height:"12"}}):t("check-icon",{attrs:{width:"10",height:"10"}})],1),e._v(" "),t("div",{staticClass:"flex-1"},[e._t("default",(function(){return[t("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[t("p",{staticClass:"flex-1"},[e._v(e._s(e.message))]),e._v(" "),t("div",[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:e.message})],2)])}),[],!1,null,"ab037030",null);t.default=component.exports},704:function(e,t,n){"use strict";var r=n(5),l=n(387);r({target:"String",proto:!0,forced:n(388)("fontsize")},{fontsize:function(e){return l(this,"font","size",e)}})},705:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n(386),n(704),n(77),n(25),n(8),n(28),n(389),n(32);var r=n(151),l=n(742),o=n.n(l),c=function(e,t){var n=t.substring(t.indexOf(e)+e.length+1,t.indexOf("px"));return parseFloat(n.trim())},d=function(e){var t=e.parent,n=e.subParent,r=e.tools,l=e.elem,o=e.axisX,d=e.axisY,h=e.fontsize;t.data.push({page_number:n.indexOf(l),type:"DrawText",text:r,axisX:o[1]-o[0],axisY:d[1]>d[0]?d[1]-d[0]:d[0]-d[1],size:c("font-size",h)})},h=function(e){var t=e.parent,n=e.subParent,r=e.tools,option=e.option,l=e.elem,o=e.type,c=e.axisX,d=e.axisY,h=e.length,f=e.svgImagePath,x=e.svgWidth,m=e.svgHeight;t.data.push({page_number:n.indexOf(l),svgPath:r,axisX:c[1]-c[0],axisY:d[1]>d[0]?d[1]-d[0]:d[0]-d[1],type:o||"Annotation",option:option,length:h,svgImagePath:f,svgWidth:x,svgHeight:m})},f=function(e){var t=e.downloadLink,n=e.file,l=e.pdfOffset_y,c=e.pdfOffset_x,f=e.signLabel,x={pdf_url:t||"",pdfWidth:null,pdfHeight:null,data:[]},m=document.querySelectorAll(".pdf-single-page-outer"),v=document.querySelectorAll(".pdf-page"),C=Array.from(m);v.length?(x.pdfHeight="CANVAS"==v[0].children[0].tagName?v[0].children[0].getBoundingClientRect().height:v[0].children[1].getBoundingClientRect().height,x.pdfWidth="CANVAS"==v[0].children[0].tagName?v[0].children[0].getBoundingClientRect().width:v[0].children[1].getBoundingClientRect().width):(x.pdfHeight=0,x.pdfWidth=0),C.forEach((function(element){var e,t,o,m,v,option;if((n||{}).fileAction==r.a.CONFIRM&&(e={parent:x,subParent:C,signaturePath:n.signaturePath,elem:element,option:"sign"},t=e.parent,o=e.subParent,m=e.signaturePath,v=e.elem,option=e.option,e.type,t.data.push({page_number:o.indexOf(v),signaturePath:m,option:option,type:"confirm"}),function(e){var t=e.parent,n=e.subParent,text=e.text,r=e.elem,option=e.option;e.type,t.data.push({page_number:n.indexOf(r),text:text,option:option,type:"confirm"})}({parent:x,subParent:C,text:String(n.text).trim(),elem:element,option:"text"})),element.children.length>1){Array.from(element.children).forEach((function(e){e.classList.contains("tool-wrapper")&&Array.from((e.children[1]||e.children[0]).children).forEach((function(t){var n;switch(t.tagName){case"svg":h({parent:x,subParent:C,option:t.children[0].getAttribute("options"),elemScale:t.getAttribute("elemscale"),elem:element,type:t.children[0].getAttribute("type"),axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-c],length:e.getBoundingClientRect().width,svgImagePath:t.children[0].getAttribute("svgToImage"),svgWidth:t.getBoundingClientRect().width,svgHeight:t.getBoundingClientRect().height});break;case"BUTTON":!function(e){var t=e.parent,n=e.subParent,r=e.elem,l=e.tool,o=e.axisX,c=e.axisY,d=e.axisX2,h=e.axisY2,f=e.uploaded;t.data.push({page_number:n.indexOf(r),type:"Image",uploaded:f,axisX:o[1]-o[0],axisY:c[1]>c[0]?c[1]-c[0]:c[0]-c[1],axisX2:d[1]-d[0],axisY2:h[1]-h[0],base64:l.children[0].src})}({parent:x,subParent:C,uploaded:t.getAttribute("uploaded"),elem:element,tool:t,axisY:[element.getBoundingClientRect().top,e.children[0].children[0].children[0].getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().left-c],axisX2:[e.children[0].children[0].children[0].getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().right],axisY2:[e.children[0].children[0].children[0].getBoundingClientRect().top,e.children[0].children[0].children[0].getBoundingClientRect().bottom],type:t.children[0].getAttribute("type")}),d({parent:x,subParent:C,axisY:[element.getBoundingClientRect().top-t.children[0].getBoundingClientRect().height,e.children[0].children[0].children[0].getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().left-c],attr:e.getAttribute("style"),tools:f,elem:element,fontsize:"8"});break;case"DIV":switch(null===(n=t.children[0])||void 0===n?void 0:n.tagName){case"svg":h({parent:x,subParent:C,elem:element,axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-c],svgWidth:t.children[0].getBoundingClientRect().width,svgHeight:t.children[0].getBoundingClientRect().height,svgImagePath:t.children[0].children[0].getAttribute("svgToImage"),type:"DrawLine"});break;case"P":d({parent:x,subParent:C,axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-c],tools:t.children[0].textContent,elem:element,fontsize:t.children[0].getAttribute("style")});break;case"IMG":!function(e){var t=e.parent,n=e.subParent,r=e.tools,l=e.elem,o=e.axisX,c=e.axisY,d=(e.height,e.axisX2),h=e.axisY2;t.data.push({page_number:n.indexOf(l),base64:r,type:"Image",axisX:o[1]-o[0],axisX2:d[1]-d[0],axisY2:h[1]-h[0],axisY:c[1]>c[0]?c[1]-c[0]:c[0]-c[1],uploaded:"true"})}({parent:x,subParent:C,attr:e.getAttribute("style"),elemScale:t.getAttribute("elemscale"),tools:t.children[0].src,elem:element,axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-l],axisY2:[t.children[0].getBoundingClientRect().top,t.children[0].getBoundingClientRect().bottom],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-c],axisX2:[e.children[0].children[0].children[0].getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().right],height:t.children[0].getBoundingClientRect().height}),d({parent:x,subParent:C,axisY:[element.getBoundingClientRect().top-t.children[0].getBoundingClientRect().height,e.getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-c],tools:f,elem:element,fontsize:"8"})}break;default:console.log("it is default"+t.tagName)}}))}))}}));var w=document.querySelectorAll(".pdf-page");return Array.from(w).forEach((function(element){Array.from(element.children).forEach((function(e){if(e.classList.contains("annotationLayer")){var t=o()(".annotationLayer").find(":input");Array.from(t).forEach((function(e){switch(e.type){case"text":case"textarea":case"date":x.data.push({type:"PDFTextField",fieldName:e.name,value:e.value});break;case"checkbox":x.data.push({type:"PDFCheckBox",fieldName:e.name,isCheck:e.checked});break;case"select-one":case"select":x.data.push({type:"PDFDropdown",fieldName:e.name,value:e.value});break;case"radio":x.data.push({type:"PDFRadioGroup",fieldName:e.name,value:e.checked,checkedIndex:0})}}))}}))})),[x,[]]}},706:function(e,t,n){"use strict";n(694)},707:function(e,t,n){var r=n(17)((function(i){return i[1]}));r.push([e.i,".message-alert-widget.info[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-ab037030]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-ab037030]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-ab037030]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),r.locals={},e.exports=r},708:function(e,t){},709:function(e,t){},710:function(e,t){},711:function(e,t){},712:function(e,t){},713:function(e,t){},714:function(e,t){},715:function(e,t){},716:function(e,t){},717:function(e,t){},797:function(e,t,n){"use strict";n(385),n(386),n(77),n(25),n(8),n(28)}}]);
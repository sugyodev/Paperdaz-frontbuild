(window.webpackJsonp=window.webpackJsonp||[]).push([[253,20,21,34,227],{1812:function(t,e,n){"use strict";n.r(e);n(7);var r=n(0),o=n(56),c=(n(105),n(762),n(274),n(272),n(708),n(4),n(104),n(625)),l=n(707),d=r.default.extend({name:"ResetPasswordSuccess",auth:"guest",layout:"landing",components:{SpinnerDottedIcon:o.default,CheckedFillIcon:c.default,MessageAlertWidget:l.default},model:{},props:{},data:function(){return{user_email:localStorage.getItem("reset_user_mail"),alertMessage:{isSuccess:!1,message:""}}},watch:{},mounted:function(){},methods:{handleClickResend:function(){var t=this;this.$axios.$post("/users",{action:"forgot_password",email:this.user_email}).then((function(e){t.alertMessage.isSuccess=!0,t.alertMessage.message="resend request"})).catch((function(e){var n=e.response;t.alertMessage.isSuccess=!1,t.alertMessage.message=n.data.message||"unable to reset password"})).finally((function(){}))}}}),f=n(1),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"bg-gradient-to-t from-white to-transparent text-center"},[e("div",{staticClass:"container py-20"},[e("div",{staticClass:"w-full max-w-md mx-auto bg-white shadow-2xl rounded-xl px-6 py-10"},[e("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:t.alertMessage.message,expression:"alertMessage.message"}],staticClass:"mb-8",attrs:{message:t.alertMessage.message,type:t.alertMessage.isSuccess?"success":"error"}}),t._v(" "),e("div",{staticClass:"flex justify-center pb-2"},[e("CheckedFillIcon",{attrs:{width:"70"}})],1),t._v(" "),e("h1",{staticClass:"text-lg font-medium mb-2 text-[#737373]"},[t._v("Reset Link Sent")]),t._v(" "),e("div",[e("span",{staticClass:"text-[12px] text-[#737373]"},[t._v("Haven't received the link on "+t._s(t.user_email)+" ?")]),t._v(" "),e("button",{staticClass:"ml-1 text-paperdazgreen-300 text-[12px]",on:{click:t.handleClickResend}},[t._v(" Resend")])]),t._v(" "),t._m(0)],1)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mt-6"},[e("span",{staticClass:"text-[12px] text-[#737373]"},[t._v("Need assistance?")]),t._v(" "),e("button",{staticClass:"ml-1 text-paperdazgreen-300 text-[12px]"},[t._v(" Click here")])])}],!1,null,"74c4d2bc",null);e.default=component.exports},625:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"CheckFillIcon",props:["width","height"]}),o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:"104",viewBox:"0 0 107 104",fill:"none"}},[e("path",{attrs:{d:"M53.5 0C23.9989 0 0 23.326 0 52C0 80.674 23.9989 104 53.5 104C83.0011 104 107 80.674 107 52C107 23.326 83.0011 0 53.5 0Z",fill:"#77C360"}}),t._v(" "),e("path",{attrs:{d:"M78.6775 41.1786L49.3593 68.8395C48.4797 69.6693 47.3251 70.087 46.1705 70.087C45.0159 70.087 43.8614 69.6693 42.9818 68.8395L28.3231 55.009C26.559 53.3454 26.559 50.6555 28.3231 48.9918C30.0863 47.3274 32.9365 47.3274 34.7006 48.9918L46.1705 59.8137L72.3 35.1614C74.0633 33.497 76.9134 33.497 78.6775 35.1614C80.4408 36.825 80.4408 39.5141 78.6775 41.1786Z",fill:"#FAFAFA"}})])}),[],!1,null,null,null);e.default=component.exports},626:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"ExclamationIcon"}),o=n(1),component=Object(o.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);e.default=component.exports},627:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"CheckIcon"}),o=n(1),component=Object(o.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);e.default=component.exports},704:function(t,e,n){var content=n(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("07fbc454",content,!0,{sourceMap:!1})},707:function(t,e,n){"use strict";n.r(e);var r=n(11),o=n(0),c=n(627),l=n(626),d=n(56),f=n(86),v=o.default.extend({components:{ExclamationIcon:l.default,CheckIcon:c.default,TimesIcon:f.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),w=(n(709),n(1)),component=Object(w.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(r.a)({},t.type,!0)},[e("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===t.type||"error"===t.type?e("exclamation-icon",{attrs:{width:"12",height:"12"}}):e("check-icon",{attrs:{width:"10",height:"10"}})],1),t._v(" "),e("div",{staticClass:"flex-1"},[t._t("default",(function(){return[e("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[e("p",{staticClass:"flex-1"},[t._v(t._s(t.message))]),t._v(" "),e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:t.message})],2)])}),[],!1,null,"ab037030",null);e.default=component.exports},709:function(t,e,n){"use strict";n(704)},710:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".message-alert-widget.info[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-ab037030]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-ab037030]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-ab037030]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),r.locals={},t.exports=r},714:function(t,e){},715:function(t,e){},716:function(t,e){},717:function(t,e){},718:function(t,e){},719:function(t,e){},720:function(t,e){},721:function(t,e){},722:function(t,e){},723:function(t,e){},762:function(t,e,n){"use strict";n(401),n(196),n(57),n(23),n(7),n(24)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[137,79],{1256:function(t,e,n){"use strict";n.r(e);n(30),n(27),n(34),n(84);var o=n(11),r=(n(7),n(0)),l=n(56),c=n(629),d=(n(272),n(60)),v=(n(706),r.default.extend({name:"UpdateSubscription",components:Object(o.a)({SpinnerDottedIcon:l.default,TickIcon:c.default,ArrowDownIcon:d.default},"SpinnerDottedIcon",l.default),model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},subscriptionPlan:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",isMonthly:!0,promoted:void 0,stagingPackageArray:{},itemPackageWidth:null,navigationButtonDisplay:"prev",proceedToNext:!0,isLoading:!1}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible,this.getDefaultPackge()},computed:{tags:function(){var t;return this.promoted=null===(t=this.stagingPackage)||void 0===t?void 0:t.tag,!(""==this.promoted||!this.promoted)},user:function(){return this.$auth.user}},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/slider-component/swiper.css"}]}},methods:{nextPackage:function(){this.navigationButtonDisplay=null;var t=document.querySelectorAll(".swiper-slide");this.itemPackageWidth/t[0].clientWidth>=t.length-1?this.navigationButtonDisplay="next":(this.itemPackageWidth+=t[0].clientWidth,this.$refs.scrollwrapper.style.transform="translateX(-".concat(this.itemPackageWidth,"px)"))},prevPackage:function(){this.navigationButtonDisplay=null;var t=document.querySelectorAll(".swiper-slide");this.itemPackageWidth/t[0].clientWidth<=0?this.navigationButtonDisplay="prev":(this.itemPackageWidth-=t[0].clientWidth,this.$refs.scrollwrapper.style.transform="translateX(-".concat(this.itemPackageWidth,"px)"))},closeModal:function(){this.$emit("updateVisibility",!1)},getDefaultPackge:function(){var t=this;this.$axios.get("/packages/?type=default&isActive=1").then((function(e){t.stagingPackageArray=e.data})).catch((function(e){t.errorMessage="No package gotten"}))},changeUserSubscription:function(t){var e=this;if(!this.isLoading){this.isLoading=!0;var n={packageId:t.id,isMonthly:this.isMonthly,isUpdate:!0};this.$axios.post("/subscriptions",n).then((function(t){e.$notify.success({title:"subscription",message:"subscribe successful"}),e.closeModal(),e.$nuxt.refresh()})).catch((function(t){t.response;e.$notify.error({title:"subscription",message:"could not update subscription"})})).finally((function(){e.isLoading=!1}))}}}})),h=(n(994),n(1)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-xl"},[t._v("Upgrade Subscription")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("main",[t.proceedToNext?e("section",[e("div",{staticClass:"text-center py-4"},[e("ul",{staticClass:"w-full text-left list-disc px-4"},[e("li",{staticClass:"py-1"},[t._v("To upgrade subscription, previous subscription will be deleted")]),t._v(" "),e("li",{staticClass:"py-1"},[t._v("These process is irreversible")]),t._v(" "),e("li",{staticClass:"py-1"},[t._v("Charges applies")])]),t._v(" "),e("button",{staticClass:"py-2 mt-8 px-4 text-[15px] bg-red-500 text-white rounded-md my-2",on:{click:function(e){t.proceedToNext=!1}}},[t._v("Proceed to package")])])]):e("section",[t.errorMessage||t.stagingPackageArray.length<1?e("div",{staticClass:"text-center w-full"},[t._v("\n      "+t._s(this.errorMessage||"No package found")+"\n    ")]):e("div",{staticClass:"swiper mySwiperPackage"},[e("div",{ref:"scrollwrapper",staticClass:"swiper-wrapper"},t._l(t.stagingPackageArray,(function(n,o){return e("div",{key:o+"package",staticClass:"swiper-slide reletive"},[e("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative pb-5"},[t.tags?e("div",{staticClass:"promoted-banner"},[t._v(t._s(n.tag))]):t._e(),t._v(" "),e("h4",{ref:"packagename",refInFor:!0,staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold no-outline truncate",attrs:{contenteditable:t.edited}},[t._v("\n      "+t._s((n||{}).name)+"\n    ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[t.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[e("span",[t._v("$\n        "),e("span",{staticClass:"text-5xl font-medium"},[t._v(t._s(t.isMonthly?(n||{}).monthlyPrice:(n||{}).yearlyPrice))]),t._v("\n        /"+t._s(t.isMonthly?"mo":"yr"))])]),t._v(" "),e("div",{staticClass:"px-5 py-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[e("span",{staticClass:"mr-2"},[t._v("Yeary")]),t._v(" "),e("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[t.isMonthly?"justify-end bg-paperdazgreen-300":"bg-paperdazgray-500"],on:{click:function(e){t.isMonthly=!t.isMonthly}}},[e("span",{staticClass:"circle circle-12",class:[t.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),t._v(" "),e("span",{staticClass:"text-paperdazgray-300"},[t._v("Monthly")])]),t._v(" "),e("ul",{staticClass:"package-list"},[e("li",{},[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((n||{}).paperlink)+" Paperlink files")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((n||{}).teamMembers)+" Team members ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((n||{}).cc)+" CC Flow ")])]),t._v(" "),t._l(n.features,(function(n){return e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",{staticClass:"truncate",attrs:{title:"".concat(n.title,"\n ").concat(n.description)}},[t._v("\n             "+t._s(n.title)+" ")])])}))],2)]),t._v(" "),e("div",{staticClass:"grid place-items-center"},[e("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 rounded-lg shadow h-9 px-5 flex items-center",class:[t.isLoading?"opacity-50":"opacity-100"],attrs:{disabled:t.isLoading},on:{click:function(e){return t.changeUserSubscription(n)}}},[t._v("\n        Start Now\n        "),e("SpinnerDottedIcon",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin ml-2",attrs:{width:"20",height:"20"}})],1)])])])})),0),t._v(" "),"next"==t.navigationButtonDisplay||t.isLoading?t._e():e("div",{staticClass:"swiper-button-next",on:{click:t.nextPackage}},[e("button",{staticClass:"bg-white/30 backdrop-blur-sm shadow -rotate-90 transform absolute -translate-y-1/2 z-10 -translate-x-5 w-[40px] h-[40px] grid place-content-center rounded-full"},[e("ArrowDownIcon")],1)]),t._v(" "),"prev"==t.navigationButtonDisplay||t.isLoading?t._e():e("div",{staticClass:"swiper-button-prev",on:{click:t.prevPackage}},[e("button",{staticClass:"bg-white/30 backdrop-blur-sm shadow rotate-90 transform absolute -translate-y-1/2 z-10 translate-x-4 w-[40px] h-[40px] grid place-content-center rounded-full"},[e("arrow-down-icon")],1)])])])])])}),[],!1,null,"2bbea4a4",null);e.default=component.exports},629:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({name:"TickIcon"}),r=n(1),component=Object(r.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"stroke-current",attrs:{width:"43",height:"26",viewBox:"0 0 43 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1.37402 15.5652L12.2321 23.7977L42.3007 1","stroke-width":"2"}})])}),[],!1,null,null,null);e.default=component.exports},706:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(85),n(86);function o(t){var e,n,o,r,l,c,d,v,h,m;console.log("error-handler",t);var f=(null===(n=null===(e=t)||void 0===e?void 0:e.data)||void 0===n?void 0:n.errors[0])||(null===(r=null===(o=t)||void 0===o?void 0:o.data)||void 0===r?void 0:r.message);return console.log("error-handler",f),(null===(l=(null==f?void 0:f.message)||f)||void 0===l?void 0:l.includes("email"))?"Email already exists":(null===(c=(null==f?void 0:f.message)||f)||void 0===c?void 0:c.includes("phone"))?"Phone number already exists":(null===(d=(null==f?void 0:f.message)||f)||void 0===d?void 0:d.includes("Invalid login"))?"Email or password is Incorrect":null==f?"Network error":(null===(v=(null==f?void 0:f.message)||f)||void 0===v?void 0:v.includes("subscriptions.userId"))?"You are already a subscribe user":(null===(h=(null==f?void 0:f.message)||f)||void 0===h?void 0:h.includes("Cannot read properties of undefined (reading 'teamMembers')"))?"Team trying to join does not exist":(null===(m=(null==f?void 0:f.message)||f)||void 0===m?void 0:m.includes("Stripe"))?"Error occured, Trying to send card info":void 0}},868:function(t,e,n){var content=n(995);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("170398c9",content,!0,{sourceMap:!1})},994:function(t,e,n){"use strict";n(868)},995:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-2bbea4a4] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-2bbea4a4] .el-dialog__header{padding-bottom:20px}*[data-v-2bbea4a4] .el-dialog__footer,*[data-v-2bbea4a4] .el-dialog__header{text-align:left!important}*[data-v-2bbea4a4] .el-dialog__body{background:#fcfcfd}*[data-v-2bbea4a4] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}.no-outline[data-v-2bbea4a4]{outline:none!important}.package-list[data-v-2bbea4a4]{width:-moz-min-content;width:min-content;margin-left:auto;margin-right:auto;}.package-list li[data-v-2bbea4a4]{margin-bottom:0.75rem;display:inline-grid;gap:0.75rem;white-space:nowrap;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr}.package-list li[data-v-2bbea4a4]>:nth-child(2){color:#606060}.package-list li[data-v-2bbea4a4]:last-child{margin-bottom:0px}.promoted-banner[data-v-2bbea4a4]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0}.swiper-wrapper[data-v-2bbea4a4]{transition:.3s}",""]),o.locals={},t.exports=o}}]);
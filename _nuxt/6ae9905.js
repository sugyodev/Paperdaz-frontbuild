(window.webpackJsonp=window.webpackJsonp||[]).push([[226,28,38,45,143],{1020:function(e,t,r){var content=r(1363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("092788b0",content,!0,{sourceMap:!1})},1362:function(e,t,r){"use strict";r(1020)},1363:function(e,t,r){var n=r(15)((function(i){return i[1]}));n.push([e.i,".ref-small-card[data-v-898c8cea]{display:grid;height:50px;grid-template-columns:50px 1fr;align-items:center;gap:0.5rem;border-radius:0.75rem;border-width:2px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgb(144 144 144 / var(--tw-text-opacity))}[data-v-898c8cea] .el-dialog{background:rgba(80,80,80,.8)}[data-v-898c8cea] .el-dialog__header{padding:0}[data-v-898c8cea] .el-dialog__body{height:100%}",""]),n.locals={},e.exports=n},1592:function(e,t,r){"use strict";r.r(t);r(25),r(51);var n=r(3),l=(r(29),r(7),r(18),r(0)),o=r(647),c=r(198),d=(r(272),r(662)),h=r(663),f=r(56),v=r(676),m=r(733),C=r(274),_=r(153),w=l.default.extend({name:"ReferralTab",components:{ShareIcon:c.default,FileSolidIcon:o.default,CreditIcon:d.default,LeavesIcon:h.default,SpinnerDottedIcon:f.default,InviteEarnLogo:v.default,FilePagination:m.default,ShareFilesModal:C.default,QrcodeShare:_.default},data:function(){return{user:{},referalLink:"",teamMembers:[],referalsIsLoaded:!0,totalreferee:null,returnRefereePage:0,showShareCompanyFiles:!1,showQrcodeFiles:!1}},fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){this.getAllReferee(this.returnRefereePage),this.referalLink="".concat(window.location.origin,"/register/?referreeCode=").concat(this.$auth.user.referralCode),this.$nuxt.$emit("tableScrollObserver"),this.user=this.$auth.user},updated:function(){this.$nuxt.$emit("tableScrollObserver")},methods:{showQrcodeFileFunc:function(){this.showQrcodeFiles=!0},showShareCompanyFilesFunc:function(){this.showShareCompanyFiles=!0},getAllReferee:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.$get("/referral/?referralCode=".concat(t.$auth.user.referralCode,"&$sort[id]=-1&$skip=").concat(e)).then((function(e){t.teamMembers=e.data,t.totalreferee=e.total})).catch((function(){})).finally((function(){t.referalsIsLoaded=!1}));case 2:case"end":return r.stop()}}),r)})))()},setPage:function(e){this.referalsIsLoaded=!0,this.returnRefereePage=e},copyReferalLink:function(){navigator.clipboard.writeText(this.referalLink),this.$notify.info({title:"",message:"referal copied"})},getStatusClass:function(e){switch(e.toLowerCase()){case"active":return"text-white bg-paperdazgreen-400";case"pending":return"text-white bg-[#5078B5]";default:return"text-white bg-[#909090]"}}},watch:{returnRefereePage:function(){this.getAllReferee(this.returnRefereePage)}}}),x=(r(1362),r(1)),component=Object(x.a)(w,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",[t("div",{staticClass:"grid grid-cols-1 md:grid-cols-[1fr,max-content] gap-6 mb-8"},[t("div",{staticClass:"rounded-2xl p-4 bg-white text-paperdazgreen-400"},[t("h3",{staticClass:"text-lg font-semibold text-center mb-6"},[e._v("\n        Help keep everyone safe and the world green!\n      ")]),e._v(" "),t("p",{staticClass:"text-sm text-black mb-2"},[e._v("Referral Link")]),e._v(" "),t("form",{staticClass:"grid grid-cols-[1fr,min-content] items-center gap-4"},[t("div",{staticClass:"h-10 sm:h-12 rounded-2xl border-2 border-paperdazgreen-400 flex items-center overflow-hidden gap-2 text-sm"},[t("input",{staticClass:"flex-1 h-full outline-none pl-4 text-[#909090]",attrs:{type:"text"},domProps:{value:e.referalLink}}),e._v(" "),t("span",{staticClass:"block pr-4 cursor-pointer",on:{click:e.copyReferalLink}},[t("file-solid-icon")],1)]),e._v(" "),t("div",{staticClass:"circle circle-22 bg-paperdazgreen-400 text-white cursor-pointer",on:{click:e.showShareCompanyFilesFunc}},[t("share-icon")],1)])]),e._v(" "),t("div",{staticClass:"bg-white py-4 px-6 rounded-2xl grid grid-cols-1 gap-5"},[t("h3",{staticClass:"text-lg font-semibold text-center text-paperdazgreen-400"},[e._v("\n        Credits Earned\n      ")]),e._v(" "),t("div",{staticClass:"ref-small-card"},[t("div",[t("CreditIcon",{attrs:{width:"41",height:"38"}})],1),e._v(" "),t("p",[t("span",{staticClass:"truncate"},[e._v(e._s(e.user.totalCreditsEarned))]),e._v(" USD\n        ")])]),e._v(" "),t("div",{staticClass:"ref-small-card"},[t("div",[t("LeavesIcon",{attrs:{width:"33",height:"33"}})],1),e._v(" "),t("p",[t("span",{staticClass:"truncate"},[e._v(e._s(e.user.totalLeavesEarned))]),e._v(" Leaves\n        ")])])])]),e._v(" "),t("div",{staticClass:"rounded-2xl bg-white overflow-x-auto custom-scrollbar p-6 relative"},[t("h2",{staticClass:"text-center text-2xl text-paperdazgreen-400 font-semibold pb-3 border-b border-paperdazgreen-400"},[e._v("\n    "+e._s(e.teamMembers.length>0?"Referral Credit Info":"Invite & Earn")+"\n    ")]),e._v(" "),e.referalsIsLoaded?t("div",{staticClass:"absolute w-full top-0 left-0 h-full z-10 bg-white flex justify-center items-center"},[t("SpinnerDottedIcon",{staticClass:"text-paperdazgreen-400/70 animate-spin"})],1):e._e(),e._v(" "),e.teamMembers.length>0?t("table",{staticClass:"custom-table"},[e._m(0),e._v(" "),t("tbody",{staticClass:"text-[#505050]"},e._l(e.teamMembers,(function(r,i){return t("tr",{key:i+"teamMembers"},[t("td",{staticClass:"text-left"},[t("span",{staticClass:"text-sm"},[e._v(e._s(r.newUserName))])]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n            "+e._s(r.newUserCompanyName||"No businessname")+"\n          ")]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n            "+e._s("payment"==r.type?"PAID":"FREE")+"\n          ")]),e._v(" "),t("td",{staticClass:"text-sm text-center"},[e._v("\n            "+e._s((r.createdAt||"").replace(/T|.000Z/g," "))+"\n          ")]),e._v(" "),t("td",{staticClass:"text-center flex items-center justify-center font-[500]"},[t("span",{staticClass:"inline-flex w-[50%] justify-end"},["payment"==r.type?t("CreditIcon",{staticClass:"mr-[4px]",attrs:{width:"25",height:"25"}}):t("LeavesIcon",{staticClass:"mr-[4px]",attrs:{width:"25",height:"25"}})],1),e._v(" "),t("span",{staticClass:"inline-block w-[50%] text-left"},[e._v("\n              "+e._s("payment"!=r.type?r.leavesEarned:r.creditEarned)+"\n            ")])])])})),0)]):t("div",{staticClass:"w-full bg-white flex justify-center py-8"},[t("InviteEarnLogo",{attrs:{width:"356",height:"331"}})],1)]),e._v(" "),t("FilePagination",{attrs:{totalFile:e.totalreferee},on:{setPage:e.setPage}}),e._v(" "),t("ShareFilesModal",{attrs:{link:e.referalLink},on:{qrLoad:e.showQrcodeFileFunc},model:{value:e.showShareCompanyFiles,callback:function(t){e.showShareCompanyFiles=t},expression:"showShareCompanyFiles"}}),e._v(" "),t("QrcodeShare",{attrs:{link:e.referalLink},model:{value:e.showQrcodeFiles,callback:function(t){e.showQrcodeFiles=t},expression:"showQrcodeFiles"}}),e._v(" "),t("el-dialog",{attrs:{visible:!0,fullscreen:"","show-close":!1,"append-to-body":!0}},[t("div",{staticClass:"flex justify-center items-center h-full text-[80px] font-semibold text-white"},[e._v("\n      Coming soon..\n    ")])])],1)}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("thead",{staticClass:"text-[#414142]"},[t("tr",[t("th",{staticClass:"text-left"},[e._v("Name")]),e._v(" "),t("th",{},[e._v("Business Name")]),e._v(" "),t("th",{},[e._v("User")]),e._v(" "),t("th",{},[e._v("Date & Time")]),e._v(" "),t("th",[e._v("Earned Credit")])])])}],!1,null,"898c8cea",null);t.default=component.exports},647:function(e,t,r){"use strict";r.r(t);var n=r(0).default.extend({name:"FileSolidIcon"}),l=r(1),component=Object(l.a)(n,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"19",height:"22",viewBox:"0 0 19 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM13 4L19 10V20C19 21.1 18.1 22 17 22H5.99C4.89 22 4 21.1 4 20L4.01 6C4.01 4.9 4.9 4 6 4H13ZM12 11H17.5L12 5.5V11Z"}})])}),[],!1,null,null,null);t.default=component.exports},662:function(e,t,r){"use strict";r.r(t);var n={name:"creditIcon",props:["width","height"]},l=r(1),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("svg",{attrs:{width:e.width,height:e.height,viewBox:"0 0 41 38",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_4286_11048)"}},[t("path",{attrs:{d:"M30.1934 19.0029L30.5926 34.125",stroke:"#EBE330","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),t("path",{attrs:{d:"M34.2064 21.6582L28.2942 21.8007C27.5624 21.8183 26.8674 22.0887 26.3619 22.5524C25.8564 23.016 25.5818 23.635 25.5987 24.2731C25.6155 24.9111 25.9224 25.5161 26.4517 25.9548C26.981 26.3935 27.6895 26.6301 28.4212 26.6124L32.3627 26.5175C33.0944 26.4998 33.8029 26.7364 34.3322 27.1751C34.8615 27.6138 35.1684 28.2188 35.1852 28.8569C35.2021 29.4949 34.9275 30.1139 34.422 30.5775C33.9165 31.0412 33.2215 31.3116 32.4897 31.3292L25.7893 31.4907",stroke:"#EBE330","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),e._v(" "),t("g",{attrs:{"clip-path":"url(#clip1_4286_11048)"}},[t("path",{attrs:{d:"M26.0182 5.95208L6.17721 13.6065C4.95967 14.0763 4.35687 15.4414 4.83082 16.6557L9.97983 29.8479C10.4538 31.0622 11.825 31.6658 13.0425 31.1961L22.6264 28.1312C19.3787 23.0597 20.7842 13.6633 32.7281 16.6448L29.0809 7.30028C28.6069 6.08597 27.2357 5.48236 26.0182 5.95208Z",stroke:"#EBE330","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),t("path",{attrs:{d:"M6.81514 19.7875L18.3611 15.1254L24.1561 12.8491L29.907 10.4633",stroke:"#EBE330","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),t("path",{attrs:{d:"M27.6024 7.57149C26.5217 5.93038 22.2046 8.2852 7.71295 14.1172C5.90803 14.8436 5.42703 17.2004 6.81027 18.6084L28.7766 9.93814L27.6024 7.57149Z",fill:"#EBE330",stroke:"#EBE330"}})]),e._v(" "),t("defs",[t("clipPath",{attrs:{id:"clip0_4286_11048"}},[t("rect",{attrs:{width:"18.9245",height:"16.5032",fill:"white",transform:"matrix(0.99971 -0.0240897 0.0263944 0.999652 20.7148 18.5439)"}})]),e._v(" "),t("clipPath",{attrs:{id:"clip1_4286_11048"}},[t("rect",{attrs:{width:"28.3758",height:"28.3021",fill:"white",transform:"matrix(0.932295 -0.359671 0.363861 0.932243 1.1543 10.4844)"}})])])])}),[],!1,null,"6f2defdf",null);t.default=component.exports},663:function(e,t,r){"use strict";r.r(t);var n={name:"leavesIcon",props:["width","height"]},l=r(1),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("svg",{attrs:{width:e.width,height:e.height,viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_4288_11127)"}},[t("path",{attrs:{d:"M16.1916 7.10985C25.2865 6.10967 28.242 0.356241 28.2516 0.356241C28.4009 0.0694545 28.7543 -0.04198 29.0411 0.107243C29.1857 0.182497 29.2924 0.314755 29.3354 0.472018C32.3585 10.7246 30.7087 17.7934 27.2386 21.9871C25.8952 23.6217 24.1745 24.9053 22.2248 25.7273C20.4288 26.489 18.4792 26.8194 16.5325 26.6921C12.8052 26.4316 9.40265 24.4409 7.82359 20.8743C7.41902 19.9626 7.15755 18.9939 7.04853 18.0024C6.82799 16.0152 7.216 14.0078 8.16127 12.2458C9.17608 10.3656 10.7919 8.88001 12.7505 8.02641C13.8434 7.54489 15.0042 7.23575 16.1916 7.10985Z",fill:"#45B549"}}),e._v(" "),t("path",{attrs:{d:"M28.1867 0.57094C28.1947 0.247813 28.4631 -0.00777862 28.7862 0.000180974C29.1093 0.00814057 29.3649 0.276516 29.357 0.599643C29.3564 0.623442 29.3543 0.647079 29.3508 0.670636C29.3508 0.69958 28.8395 7.42423 22.2756 14.2293L22.2145 14.2936C20.6725 15.8753 18.9804 17.3035 17.1622 18.558L21.105 19.2913C21.4193 19.3671 21.6126 19.6833 21.5368 19.9975C21.4681 20.282 21.2 20.472 20.9088 20.4426L15.7632 19.4778C11.0711 22.4494 3.11791 25.1926 2.42325 31.6664C2.38024 31.9868 2.08565 32.2117 1.76526 32.1687C1.4603 32.1278 1.23912 31.8577 1.25906 31.5507C2.08879 23.7905 9.97443 21.7933 15.2937 18.4004L15.3677 18.3522C17.4905 17.0087 19.4569 15.4328 21.2304 13.6536L20.7641 9.03867C20.7211 8.71827 20.946 8.42369 21.2664 8.38067C21.5868 8.33766 21.8814 8.56254 21.9244 8.88293C21.9261 8.8962 21.9275 8.90954 21.9283 8.92289L22.2821 12.5055C27.7526 6.36296 28.1835 0.596668 28.1867 0.57094Z",fill:"#009549"}})]),e._v(" "),t("defs",[t("clipPath",{attrs:{id:"clip0_4288_11127"}},[t("rect",{attrs:{width:"32.174",height:"32.174",fill:"white"}})])])])}),[],!1,null,"333d0228",null);t.default=component.exports},714:function(e,t,r){var content=r(736);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("4d131c3c",content,!0,{sourceMap:!1})},733:function(e,t,r){"use strict";r.r(t);r(272);var n=r(59),l={name:"filePagination",props:{setPage:{type:Function},totalFile:{}},data:function(){return{returnedDataPage:0,eachPageTotal:10}},components:{ArrowDownIcon:n.default},methods:{buttonFilePage:function(e){this.returnedDataPage=this.eachPageTotal*(e-1),this.$emit("setPage",this.returnedDataPage)}},watch:{returnedDataPage:function(){}},computed:{availablePages:function(){return Math.floor(this.totalFile/this.eachPageTotal)>5?Math.floor(this.totalFile/this.eachPageTotal):Math.floor(this.totalFile/this.eachPageTotal)+2},arrayPages:function(){for(var e=[],i=1;i<this.availablePages;i++)e.push(i);return e}}},o=(r(735),r(1)),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return e.totalFile>e.eachPageTotal?t("div",{staticClass:"grid place-items-center py-5"},[t("div",[t("paginate",{attrs:{"page-count":e.arrayPages.length+1,"click-handler":e.buttonFilePage,"prev-text":"&#8249;","next-text":"&#8250;","container-class":"paginate","page-class":"page-item"}})],1)]):e._e()}),[],!1,null,"b8bb5c98",null);t.default=component.exports},735:function(e,t,r){"use strict";r(714)},736:function(e,t,r){var n=r(15)((function(i){return i[1]}));n.push([e.i,".page-item[data-v-b8bb5c98]{background:red!important}.pagination-arrow-left[data-v-b8bb5c98]{height:2.25rem;min-width:36px;border-radius:0.25rem;padding-left:0.75rem;padding-right:0.75rem;font-size:0.75rem;line-height:1rem;font-weight:500;transform:rotate(90deg)}.pagination-arrow-right[data-v-b8bb5c98]{height:2.25rem;min-width:36px;border-radius:0.25rem;padding-left:0.75rem;padding-right:0.75rem;font-size:0.75rem;line-height:1rem;font-weight:500;transform:rotate(-90deg)}",""]),n.locals={},e.exports=n}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[157,21],{1231:function(t,e,n){var content=n(1465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("bb0dba46",content,!0,{sourceMap:!1})},1464:function(t,e,n){"use strict";n(1231)},1465:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-268fb651] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-268fb651] .el-dialog__header{padding-bottom:20px}*[data-v-268fb651] .el-dialog__footer,*[data-v-268fb651] .el-dialog__header{text-align:left!important}*[data-v-268fb651] .el-dialog__body{background:#fcfcfd}*[data-v-268fb651] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1614:function(t,e,n){"use strict";n.r(e);n(25),n(51);var o=n(0),l=n(56),d=(n(106),n(769),n(275),n(272),n(709),n(4),n(58),n(625)),r=o.default.extend({name:"SuccessFileModal",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:d.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,newSaveData:{},sendAction:null}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),c=(n(1464),n(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"text-center font-semibold text-xl"})]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"flex justify-center pb-2"},[e("CheckedFillIcon",{attrs:{width:"70"}})],1),t._v(" "),e("span",{staticClass:"w-full text-center block py-0 px-2 pb-8 text-[16px] break-normal"},[t._v("File "+t._s("".concat((t.file.fileAction+"ed").replace("ee","e")))+", a copy sent to "),e("span",{staticClass:"text-paperdazgreen-300"},[t._v(t._s(t.file.user.firstName)+" "+t._s(t.file.user.lastName))]),t._v(" another sent to your email.")]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{disabled:t.loading},on:{click:function(e){return t.closeModal()}}},[e("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[t._v("\n        Ok\n        "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"268fb651",null);e.default=component.exports},625:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({name:"CheckFillIcon",props:["width","height"]}),l=n(1),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:"104",viewBox:"0 0 107 104",fill:"none"}},[e("path",{attrs:{d:"M53.5 0C23.9989 0 0 23.326 0 52C0 80.674 23.9989 104 53.5 104C83.0011 104 107 80.674 107 52C107 23.326 83.0011 0 53.5 0Z",fill:"#77C360"}}),t._v(" "),e("path",{attrs:{d:"M78.6775 41.1786L49.3593 68.8395C48.4797 69.6693 47.3251 70.087 46.1705 70.087C45.0159 70.087 43.8614 69.6693 42.9818 68.8395L28.3231 55.009C26.559 53.3454 26.559 50.6555 28.3231 48.9918C30.0863 47.3274 32.9365 47.3274 34.7006 48.9918L46.1705 59.8137L72.3 35.1614C74.0633 33.497 76.9134 33.497 78.6775 35.1614C80.4408 36.825 80.4408 39.5141 78.6775 41.1786Z",fill:"#FAFAFA"}})])}),[],!1,null,null,null);e.default=component.exports},715:function(t,e){},716:function(t,e){},717:function(t,e){},718:function(t,e){},719:function(t,e){},720:function(t,e){},721:function(t,e){},722:function(t,e){},723:function(t,e){},724:function(t,e){},769:function(t,e,n){"use strict";n(401),n(196),n(57),n(23),n(7),n(24)}}]);
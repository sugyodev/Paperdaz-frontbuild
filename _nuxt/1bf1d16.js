(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1196:function(t,e,o){"use strict";o(877)},1197:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-9fbefc96] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-9fbefc96] .el-dialog__header{padding-bottom:20px}*[data-v-9fbefc96] .el-dialog__footer,*[data-v-9fbefc96] .el-dialog__header{text-align:left!important}*[data-v-9fbefc96] .el-dialog__body{background:#fcfcfd}*[data-v-9fbefc96] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1215:function(t,e,o){"use strict";o.r(e);var n=o(0),l=o(59),d=n.default.extend({name:"DoneModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,newSaveData:{},sendAction:null}},computed:{isComplete:function(){return String(this.file.fileAction).toLowerCase()===l.a.COMPLETE}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){window.location.assign("/dashboard"),this.$emit("updateVisibility",!1)}}}),r=(o(1196),o(1)),component=Object(r.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-2xl text-gray-800 pb-2"},[t._v("\n      "+t._s(t.isComplete?"Check Email":"You are Done!")+"\n    ")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("span",{staticClass:"w-full text-center block py-0 px-2 pb-8 text-[16px]"},[t._v("\n    "+t._s(t.isComplete?"PDF copy has been sent!":"Check your email")+"\n  ")])])}),[],!1,null,"9fbefc96",null);e.default=component.exports},877:function(t,e,o){var content=o(1197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("4842988e",content,!0,{sourceMap:!1})}}]);
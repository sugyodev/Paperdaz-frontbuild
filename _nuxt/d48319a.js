(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{715:function(e,t){},716:function(e,t){},717:function(e,t){},718:function(e,t){},719:function(e,t){},720:function(e,t){},721:function(e,t){},722:function(e,t){},723:function(e,t){},724:function(e,t){},725:function(e,t,n){var content=n(738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("e97e6fb2",content,!0,{sourceMap:!1})},737:function(e,t,n){"use strict";n(725)},738:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,".color-white[data-v-5f398dd0]{fill:#fff!important}*[data-v-5f398dd0] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-5f398dd0] .el-dialog__header{padding-bottom:20px}*[data-v-5f398dd0] .el-dialog__footer,*[data-v-5f398dd0] .el-dialog__header{text-align:left!important}*[data-v-5f398dd0] .el-dialog__body{background:#fcfcfd}*[data-v-5f398dd0] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}.icons-container button[data-v-5f398dd0]{display:inline-flex;height:40px;width:40px;align-items:center;justify-content:center;border-radius:9999px;background-color:rgb(119 195 96 / 0.2)}",""]),r.locals={},e.exports=r},749:function(e,t,n){"use strict";n.r(t);n(34),n(37),n(53),n(54);var r=n(11),o=n(3),l=(n(18),n(7),n(24),n(57),n(23),n(196),n(38),n(29),n(0)),d=n(56),c=n(64),f=n(65),m=n(66),h=n(199),v=n(204),w=n(205),x=n(203),y=n(153);n(709),n(275);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=l.default.extend({name:"request-modal",components:{SpinnerDottedIcon:d.default,FacebookIcon:c.default,TwitterIcon:f.default,EnvelopeIcon:m.default,PlusIcon:h.default,LinkIcon:v.default,EnvelopeIconShare:w.default,QrcodeIcon:x.default,QrcodeShare:y.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},userFile:{type:Object},visible:{type:Boolean,default:!1}},data:function(){return{showQrcodeFiles:!1,folderTextareaData:"",showModal:!1,loading:!1,twiterLink:"",inputs:[0],generateFileProperty:{},proceedToRequest:!0,generatedFile:{}}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{generateAndUploadPdf:function(){},addEmailinputs:function(){var e=!0;Array.from(this.$refs.form.elements).forEach((function(element){"email"!=element.type||element.value.trim()||(e=!1)})),e&&this.inputs.push(this.inputs.length)},showQrcodeFileFuncEmit:function(){this.$emit("qrLoad"),this.$emit("updateVisibility",!1)},closeModal:function(){this.$emit("updateVisibility",!1)},_generatePdf:function(e){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},uploadGeneratedFile:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(Object.keys(t.generateFileProperty).length<1)){n.next=2;break}return n.abrupt("return");case 2:return r={isEditing:!0,downloadLink:e.downloadLink,key:e.key,originalFileId:t.userFile.id,userId:t.$auth.user.id,fileAction:t.userFile.fileAction},n.next=5,t.$axios.$post("/files",k({},r)).then((function(e){t.generatedFile=e})).catch((function(e){t.proceedToRequest=!1}));case 5:case"end":return n.stop()}}),n)})))()},onSubmit:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null==e||e.preventDefault(),t.loading=!0,r={},o=[],Array.from(e.target.elements).forEach((function(element){"email"==element.type&&o.push(element.value)})),r=k(k({action:"referral_link"},r),{},{link:"".concat(window.location.origin,"/pdf/").concat(t.userFile.paperLink),fileId:t.userFile.id,emails:o,note:t.folderTextareaData}),t.$axios.$post("/request",r).then((function(e){t.$notify.success({title:"Request",message:"Request sent Successfully"}),t.$emit("updateVisibility",!1),t.$emit("refresh"),t.$nuxt.refresh()})).catch((function(e){t.$notify.error({title:"Request",message:"Request Failed"})})).finally((function(){t.loading=!1}));case 7:case"end":return n.stop()}}),n)})))()}}}),C=(n(737),n(1)),component=Object(C.a)(O,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-center font-semibold text-xl"},[e._v("Request")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("div",{staticClass:"text-centerfont-medium flex justify-between item mx-auto mb-4 whitespace-none"},[t("p",{staticClass:"w-[87%]"},e._l(e.inputs,(function(input){return t("input",{key:input,staticClass:"py-2 focus:border-paperdazgray-500 px-4 w-full mb-2 rounded-md border-[1px] border-paperdazgray-500",attrs:{required:"",type:"email",placeholder:"E-mail"}})})),0),e._v(" "),t("button",{staticClass:"w-[35px] h-[35px] rounded-full bg-paperdazgray-500 grid place-content-center",on:{click:function(t){return t.preventDefault(),e.addEmailinputs.apply(null,arguments)}}},[t("span",{staticClass:"text-white text-[30px]"},[e._v("+")])])]),e._v(" "),t("p",{staticClass:"text-center block font-medium mx-auto mb-4 whitespace-none"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.folderTextareaData,expression:"folderTextareaData"}],staticClass:"w-full py-2 px-4 focus:border-paperdazgray-500 outline-none rounded-md h-28 resize-none border-[1px] border-paperdazgray-500",attrs:{required:"",placeholder:"Note..."},domProps:{value:e.folderTextareaData},on:{input:function(t){t.target.composing||(e.folderTextareaData=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[900%] text-white rounded-xl shadow bg-paperdazgreen-400",attrs:{disabled:e.loading}},[t("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[e._v("\n         Send\n          "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])])}),[],!1,null,"5f398dd0",null);t.default=component.exports}}]);
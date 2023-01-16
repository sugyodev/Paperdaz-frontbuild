(window.webpackJsonp=window.webpackJsonp||[]).push([[214,220],{1284:function(t,e,r){"use strict";r.r(e);r(30),r(935);var o=r(3),n=r(11),l=(r(38),r(25),r(196),r(37),r(7),r(278),r(813),r(74),r(34),r(53),r(24),r(54),r(18),r(22)),c=r(729),d=(r(272),r(936)),m=r(56),f=r(45),h=(r(937),r(938)),v=r(708),w=r(706);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D=Object(l.a)(f.a).extend(Object(n.a)({name:"CompanyForm",components:{InputField:c.default,SpinnerDottedIcon:m.default,MessageAlertWidget:v.default},data:function(){return Object(n.a)({dropDownContent:[],setDropDown:!1,country:"",state:"",errorMessage:"",formData:{name:this.$auth.user.companyName,email:this.$auth.user.email,state:"",country:"",phone:"",timezone:""},countries:[],states:[],timezones:d.a,loading:!1},"errorMessage","")},props:{editingDetails:{type:Boolean,default:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCountries();case 2:return e.next=4,t.fetchStates();case 4:t.formData.state=t.$auth.user?t.$auth.user.state:"";case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},beforeMount:function(){for(var t=0,e=Object.keys(this.formData);t<e.length;t++){var r,o=e[t];(null===(r=this.$auth)||void 0===r?void 0:r.user)[o]&&(this.formData[o]=this.$auth.user[o])}this.country=this.$auth.user.country,this.state=this.$auth.user.state},methods:{inputValid:function(t,title){var e=!0;return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(t)&&(this.errorMessage="".concat(title," format not correct"),e=!1),e},inputPhone:function(t,title){var e=!0;return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-Z]/.test(t)&&(this.errorMessage="".concat(title," format not correct"),e=!1),e},cancleOut:function(t){"LI"!=t.target.tagname&&(this.setDropDown=!1)},setCountryInfo:function(t){var e=this;this.country=t.target.textContent.trim().toLowerCase(),this.setDropDown=!1;try{var r=h.a.filter((function(t){return t.name.common.toLowerCase().startsWith(e.country)}))[0];this.formData.timezone=r.timezones[0],this.state=r.capital[0]}catch(t){this.state=""}},displayCountry:function(){var t=this;""!=this.country.trim()?(this.setDropDown=!0,this.dropDownContent=h.a.map((function(t){return t})).filter((function(e){return e.name.common.toLowerCase().startsWith(t.country)})).sort((function(a,b){return a.name.common.localeCompare(b.name.common)}))):this.setDropDown=!1},fetchCountries:function(){},fetchStates:function(){},onSubmit:function(){var t,e,r=this;if(null===(t=event)||void 0===t||t.preventDefault(),this.inputValid(this.formData.name,"Company name")&&this.inputValid(this.country,"Country")&&this.inputPhone(this.formData.phone,"Phone")){var n=x(x({},this.formData),{},{companyName:this.formData.name,country:this.country});if(!this.loading){var l=null===(e=this.$auth.user)||void 0===e?void 0:e.id;this.loading=!0,this.errorMessage="",this.$axios.$patch("/users/".concat(l),n).then(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.filterUsers(),r.$notify.success({title:"Data write",message:"Data updated successfully!"}),r.loading=!1,t.next=5,r.$nextTick();case 5:r.$emit("stop-editing");case 6:case"end":return t.stop()}}),t)})))).catch((function(t){var e=t.response,o=Object(w.a)(e);r.errorMessage=o})).finally((function(){r.loading=!1}))}}else this.$refs.form.scrollIntoView()}},watch:{"$auth.user":function(){for(var t=0,e=Object.keys(this.formData);t<e.length;t++){var r=e[t];this.formData[r]=this.$auth.user?this.$auth.user[r]:""}this.formData.name=this.$auth.user.companyName}}},"mounted",(function(){}))),C=(r(994),r(1)),component=Object(C.a)(D,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("form",{ref:"form",staticClass:"profile-info-form grid grid-cols-1 gap-5",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"my-2 w-[100%] ml-[0%]",attrs:{message:t.errorMessage,type:"error"}}),t._v(" "),e("div",{staticClass:"flex justify-between w-full"},[e("div",{staticClass:"mx-2 w-1/2"},[e("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),e("el-input",{attrs:{placeholder:"email",type:"text",disabled:!t.editingDetails},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),e("div",{staticClass:"mx-2 w-1/2"},[e("label",{attrs:{for:""}},[t._v("Phone")]),t._v(" "),e("el-input",{attrs:{placeholder:"Enter phone number...",disabled:!t.editingDetails,type:"phone"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1)]),t._v(" "),e("div",{staticClass:"mx-2 w-full"},[e("label",{attrs:{for:""}},[t._v("Business Name")]),t._v(" "),e("el-input",{staticClass:"pr-4",attrs:{placeholder:"business name",type:"text",disabled:!t.editingDetails},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),e("div",{staticClass:"flex justify-between w-full"},[e("div",{staticClass:"mx-2 w-1/2"},[e("label",{staticClass:"mb block",attrs:{for:""}},[t._v("Country")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],ref:"countryInitial",staticClass:"custom-input py-2 px-2 text-[14px] width-full pl-4 text-paperdazgray-300",class:[0==t.editingDetails?"text-black":"text-paperdazgray-300"],attrs:{disabled:!t.editingDetails,type:"text",placeholder:"country"},domProps:{value:t.country},on:{input:[function(e){e.target.composing||(t.country=e.target.value)},t.displayCountry]}}),t._v(" "),t.setDropDown?e("div",{staticClass:"dropdown cursor-pointer z-10"},t._l(t.dropDownContent,(function(r,i){return e("div",{staticClass:"flex items-center my-2 px-1"},[e("img",{staticClass:"w-8 h-6 rounded-md mr-2 dd-image",attrs:{src:r.flags.png}}),t._v(" "),e("li",{attrs:{id:r.dial_code},on:{click:t.setCountryInfo}},[t._v("\n            "+t._s(r.name.common)+"\n          ")])])})),0):t._e()]),t._v(" "),e("div",{staticClass:"mx-2 w-1/2"},[e("label",{attrs:{for:""}},[t._v("Timezone")]),t._v(" "),e("el-select",{staticClass:"w-full",attrs:{placeholder:"Timezone",filterable:"",disabled:!t.editingDetails},model:{value:t.formData.timezone,callback:function(e){t.$set(t.formData,"timezone",e)},expression:"formData.timezone"}},t._l(t.timezones,(function(t,i){return e("el-option",{key:i,attrs:{value:t,label:t}})})),1)],1)]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.editingDetails,expression:"editingDetails"}],staticClass:"flex items-center justify-center mt-2"},[e("button",{staticClass:"shadow h-10 px-5 text-white rounded-md bg-paperdazgreen-300 disabled:opacity-50",attrs:{disabled:!t.editingDetails||t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Update")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])])],1)}),[],!1,null,"7631ad48",null);e.default=component.exports},824:function(t,e,r){var o=r(127).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},825:function(t,e,r){var o=r(127);t.exports=/MSIE|Trident/.test(o)},826:function(t,e,r){var o=r(127).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},867:function(t,e,r){var content=r(995);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("3daa1281",content,!0,{sourceMap:!1})},994:function(t,e,r){"use strict";r(867)},995:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".profile-info-form label[data-v-7631ad48]{margin-bottom:0.125rem;display:block;font-weight:500;color:#282533}.dropdown[data-v-7631ad48]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.5rem;max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.dropdown[data-v-7631ad48]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-7631ad48]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-7631ad48]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>div>li[data-v-7631ad48]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem;transition:.2s}.dd-image[data-v-7631ad48]{transition:.2s}.dropdown>div:hover .dd-image[data-v-7631ad48]{width:20px;height:20px;border-radius:50px}.dropdown>div>li[data-v-7631ad48]:hover{padding-left:10px}.custom-input[data-v-7631ad48]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-7631ad48]{width:100%;text-align:left}",""]),o.locals={},t.exports=o}}]);
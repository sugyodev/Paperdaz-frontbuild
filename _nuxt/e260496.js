(window.webpackJsonp=window.webpackJsonp||[]).push([[239,21],{1551:function(t,e,r){var content=r(1730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("6a611796",content,!0,{sourceMap:!1})},1729:function(t,e,r){"use strict";r(1551)},1730:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".dropdown[data-v-544691cd]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.form-outer[data-v-544691cd]{background-color:#fff!important}.register-btn[data-v-544691cd]{background-color:#77b550!important}.dropdown[data-v-544691cd]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-544691cd]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-544691cd]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>li[data-v-544691cd]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem}.custom-input[data-v-544691cd]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-544691cd]{width:100%;text-align:left}",""]),o.locals={},t.exports=o},1834:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-lg-6 md:order-1 order-2"},[e("div",{staticClass:"flex flex-col w-full h-full items-center mt-[30px]"},[e("img",{staticClass:"w-[300px]",attrs:{src:r(1550),alt:""}}),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"text-2xl text-[#8E8989] font-bold px-3 text-center"},[t._v("Thank you for "),e("br"),t._v("being "),e("br"),t._v("Responsible!!")])])])])}],n=(r(38),r(34),r(37),r(53),r(24),r(54),r(3)),d=r(11),l=(r(18),r(25),r(7),r(0)),c=r(627),f=r(56),v=r(109),m=r(729),h=r(708),w=r(797),x=r(45),y=r(706),_=r(626),C=r(828),P=r(847),O=r(709),k=r.n(O);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var M=l.default.extend({name:"confirm-password",auth:!1,mixins:[x.a],components:Object(d.a)({SocialAuth:P.default,InputField:m.default,PasswordField:w.default,SvgIcon:v.default,CheckIcon:c.default,MessageAlertWidget:h.default,SpinnerDottedIcon:f.default,ExclamationIcon:_.default,SignUpEmailVerify:C.default},"SocialAuth",P.default),layout:"landing",data:function(){return{confirmPassword:void 0,setDropDown:!1,countrycode:"",country:"",dropDownContent:[],totalCountriesArray:[],isTeamLoggin:!1,teamMemberLinkMessage:"Already have an account?",showEmailVerification:!1,ConfirmedPassword:!1,verificationEmail:"",userParams:this.$route.query.verificationToken,decodedUserInfo:{},registered:!1,user:{password:void 0,confirmPassword:void 0,action:"reset_password",token:"",isEmailVerified:!0},isLoading:!1,errorMessage:"",isRedirecting:!1,acceptTermsConditions:!1}},watch:{"user.password":function(){this.checkPasswordStrength()}},computed:{username:function(){var t=this.decodedUserInfo;return t.firstName+" "+t.lastName||""},isPasswordEqual:function(){return this.user.password==this.user.confirmPassword}},beforeRouteLeave:function(t,e,r){this.$auth.logout(),r()},mounted:function(){var t=k.a.verify(this.userParams,"+Erqnl5F0JnIsW++d9U0BfwpJ6w=");this.decodedUserInfo=E({},t.data),this.user.token=k.a.sign({data:this.decodedUserInfo.user_id},"+Erqnl5F0JnIsW++d9U0BfwpJ6w=")},methods:{checkPasswordStrength:function(){/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.user.password)&&/[0-9]/.test(this.user.password)&&/[A-Za-z]/.test(this.user.password)&&this.user.password.length>8?this.ConfirmedPassword=!1:this.ConfirmedPassword=!0},cancleOut:function(t){"LI"!=t.target.tagname&&(this.setDropDown=!1)},termsConditionClick:function(t){t.target.checked?this.acceptTermsConditions=!0:this.acceptTermsConditions=!1},submit:function(){var t,e=this;if(null===(t=event)||void 0===t||t.preventDefault(),!this.isLoading&&(this.isLoading=!0,this.errorMessage="",this.user.confirmPassword===this.user.password)){var r=this.user;r.newPassword=r.password,delete r.password,delete r.confirmPassword,this.$axios.$patch("/users/1",E({},r)).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$nuxt.$router.push("/login");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=t.response,o=Object(y.a)(r);e.errorMessage=o})).finally((function(){e.isLoading=!1}))}}}}),I=M,S=(r(1729),r(1)),component=Object(S.a)(I,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"bg-gradient-to-t from-white to-transparent"},[e("div",{staticClass:"container py-20"},[e("div",{staticClass:"reset-pass-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("form",{staticClass:"col-lg-6 md:order-2 order-1",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"left-form"},[e("div",{staticClass:"form form-outer shadow-2xl"},[e("div",{staticClass:"heading"},[e("h1",[t._v("Welcome Back!")]),t._v(" "),e("h3",{staticClass:"capitalize"},[t._v(t._s(t.username))])]),t._v(" "),e("h6",[t._v("Create a password")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",disabled:t.isLoading||t.isRedirecting,required:"",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),t.ConfirmedPassword?e("span",{staticClass:"text-red text-[11px]"},[t._v("\n                    Password must contain alphabet, number, special character. length must be graeter than 8")]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Retype password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",disabled:t.isLoading||t.isRedirecting,placeholder:"Password"},domProps:{value:t.user.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.user,"confirmPassword",e.target.value)}}}),t._v(" "),t.isPasswordEqual?t._e():e("span",{staticClass:"text-red text-[11px]"},[t._v("\n                     Password does not match")])]),t._v(" "),e("button",{staticClass:"register-btn h-10 w-full mt-6 text-white rounded-lg shadow px-5 text-sm disabled:bg-opacity-70",class:[t.isLoading?"cursor-progress":""],attrs:{disabled:t.isLoading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Register")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22",color:"white"}})],1)])],1)])])])]),t._v(" "),t._m(0)])])])]),t._v(" "),e("SignUpEmailVerify",{attrs:{verificationEmail:t.verificationEmail},model:{value:t.showEmailVerification,callback:function(e){t.showEmailVerification=e},expression:"showEmailVerification"}})],1)}),o,!1,null,"544691cd",null);e.default=component.exports},625:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"CheckFillIcon",props:["width","height"]}),n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:"104",viewBox:"0 0 107 104",fill:"none"}},[e("path",{attrs:{d:"M53.5 0C23.9989 0 0 23.326 0 52C0 80.674 23.9989 104 53.5 104C83.0011 104 107 80.674 107 52C107 23.326 83.0011 0 53.5 0Z",fill:"#77C360"}}),t._v(" "),e("path",{attrs:{d:"M78.6775 41.1786L49.3593 68.8395C48.4797 69.6693 47.3251 70.087 46.1705 70.087C45.0159 70.087 43.8614 69.6693 42.9818 68.8395L28.3231 55.009C26.559 53.3454 26.559 50.6555 28.3231 48.9918C30.0863 47.3274 32.9365 47.3274 34.7006 48.9918L46.1705 59.8137L72.3 35.1614C74.0633 33.497 76.9134 33.497 78.6775 35.1614C80.4408 36.825 80.4408 39.5141 78.6775 41.1786Z",fill:"#FAFAFA"}})])}),[],!1,null,null,null);e.default=component.exports},706:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(85),r(86);function o(t){var e,r,o,n,d,l,c,f,v,m;console.log("error-handler",t);var h=(null===(r=null===(e=t)||void 0===e?void 0:e.data)||void 0===r?void 0:r.errors[0])||(null===(n=null===(o=t)||void 0===o?void 0:o.data)||void 0===n?void 0:n.message);return console.log("error-handler",h),(null===(d=(null==h?void 0:h.message)||h)||void 0===d?void 0:d.includes("email"))?"Email already exists":(null===(l=(null==h?void 0:h.message)||h)||void 0===l?void 0:l.includes("phone"))?"Phone number already exists":(null===(c=(null==h?void 0:h.message)||h)||void 0===c?void 0:c.includes("Invalid login"))?"Email or password is Incorrect":null==h?"Network error":(null===(f=(null==h?void 0:h.message)||h)||void 0===f?void 0:f.includes("subscriptions.userId"))?"You are already a subscribe user":(null===(v=(null==h?void 0:h.message)||h)||void 0===v?void 0:v.includes("Cannot read properties of undefined (reading 'teamMembers')"))?"Team trying to join does not exist":(null===(m=(null==h?void 0:h.message)||h)||void 0===m?void 0:m.includes("Stripe"))?"Error occured, Trying to send card info":void 0}},740:function(t,e,r){var content=r(812);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("05969d5e",content,!0,{sourceMap:!1})},811:function(t,e,r){"use strict";r(740)},812:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-005ac2fa] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-005ac2fa] .el-dialog__header{padding-bottom:20px}*[data-v-005ac2fa] .el-dialog__footer,*[data-v-005ac2fa] .el-dialog__header{text-align:left!important}*[data-v-005ac2fa] .el-dialog__body{background:#fcfcfd}*[data-v-005ac2fa] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},828:function(t,e,r){"use strict";r.r(e);r(38),r(34),r(37),r(7),r(53),r(24),r(54);var o=r(11),n=r(0),d=r(56),l=(r(277),r(625));r(709);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f=n.default.extend({name:"SuccessFileModal",components:{SpinnerDottedIcon:d.default,CheckedFillIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},verificationInfo:{type:Object}},data:function(){return{showModal:!1,isLoading:!1,newSaveData:{},file:{},sendAction:null,refuse:!0}},watch:{visible:function(t){this.showModal=t}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},reSendVerification:function(){var t=this;this.$axios.$post("/verify",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({action:"resendToken"},verificationInfo)).then((function(e){t.$notify.success({message:"Message sent to email successfully"}),t.closeModal()})).catch((function(){t.$notify.error({message:"Failed to send"})}))}}}),v=f,m=(r(811),r(1)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!1,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",{staticClass:"text-center font-semibold text-xl"},[t._v("Sign up")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}}),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-[17px] text-center pb-8 break-normal font-semibold"},[t._v("Verify your email address")]),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[t._v("A verification email has been sent to"),e("br"),t._v(" "),e("b",{staticClass:"font-semibold text-paperdazgreen-400"},[t._v(t._s(t.verificationEmail))]),e("br"),t._v("\n    Please follow the instructions in the email to complete registration"),e("br"),t._v("\n    If you did not see the email "),e("button",{staticClass:"text-paperdazgreen-400 font-semibold",on:{click:t.reSendVerification}},[t._v(" click here ")]),t._v(" and we will resend it\n    ")])])}),[],!1,null,"005ac2fa",null);e.default=component.exports}}]);
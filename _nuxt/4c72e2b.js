(window.webpackJsonp=window.webpackJsonp||[]).push([[249,41,71,203],{1210:function(t,e,r){var content=r(1438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("1c20692a",content,!0,{sourceMap:!1})},1235:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(18),r(196),r(7),r(30),r(29),r(0).default.extend({props:["width"]})),l=r(1),d=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.width,height:t.width,viewBox:"0 0 15 15",fill:"none"}},[e("rect",{attrs:{width:"15",height:"15",fill:"url(#pattern0)"}}),t._v(" "),e("defs",[e("pattern",{attrs:{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1"}},[e("use",{attrs:{"xlink:href":"#image0_5788_2548",transform:"scale(0.0333333)"}})]),t._v(" "),e("image",{attrs:{id:"image0_5788_2548",width:"30",height:"30","xlink:href":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABXklEQVRIie3WPU7DMBgG4PcrHRAMMMMRmJA4RNWINhITGxwBCZEsqI7E0IY7wMRU1EaAUTdWBlaOgMTKxELzMVSRUpMYN7E79d0S23n8E8cBVllSyMVDQ9k9Y9AlAx9Aehp7D2/O4VD6goFe7tYXU6MVt0ev+XoN23BBtojTyYXsHDiF+14iCIhUHGjcWodD6YtQ+kKHE7BjFc7WlIGeDifwldKR+qjywKjvJSJfJ+uIFbgIzcJEg7g9DnXtK8E61BRfeI1N0JnM37rihUZsijIgYi9Rt1Q12CZqDNtGjWAX6L+wK1QLu0QBzXbitekQRGNdYwKiKqgWHrQe31PGTWnHAKF+Bq3AszT//DlkaNWRGsHX3vCTf9JdEHeyaa8zvaURLyfrwVP3vKgsmBzu5Y+9upl7q0PpHzFwb3K61M3cVDNwDADEHJSN3FaayvU+gBEz3W1sbj+7hFdZWn4BP5mn2nIMSYMAAAAASUVORK5CYII="}})])])}),[],!1,null,"41730533",null).exports,c=(r(133),r(45)),f=r(22),h=r(56),m=r(705),v=Object(f.a)(c.a).extend({name:"profile-top-info",props:["userInfo"],data:function(){return{editEnalble:!0,showScanner:!1,profilePicsSrc:"",qrCls:"qrcode",qrText:"https://photophobic.web.app",size:170,background:"transparent",phone:"",address:"",name:"",isLoading:!1}},components:{Pencil:d,SpinnerDottedIcon:h.default},methods:{getTeamPublicFolder:function(){this.$axios.get()},patchUser:function(){var t=this;""==this.address.trim()&&""==this.phone.trim()||this.isLoading||(this.isLoading=!0,this.$axios.$patch("/users/".concat(this.$auth.user.id),{address:this.address,phone:this.phone}).then((function(){t.$notify.success({message:"Updated successfully"}),t.initialInput=!0,t.initialInput2=!0,t.showUpdateButton=!1,t.isLoading=!1})).catch((function(e){var r=e.response,n=Object(m.a)(r);t.$notify.error({message:n}).finally((function(){t.isLoading=!1}))})))},toggleInput:function(){this.editEnalble=!this.editEnalble},changeProfileimage:function(){this.$refs.referenceInput.click()},uploadProfilePicture:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!((n=t.target).files.length<1||n.files[0].size/1024/1024>2)){r.next=4;break}return e.$notify.error({message:"File size must be less than 2MB"}),r.abrupt("return");case 4:return(o=new FormData).append("upload",n.files[0],"user-profile-picture.jpg"),o.append("type","profilePicture"),o.append("userId",e.user.id),r.next=10,e.$axios.$patch("/files",o).then((function(){e.filterUsers()})).catch((function(){e.$notify.error({message:"Unable to upload profile picture"})}));case 10:case"end":return r.stop()}}),r)})))()}},mounted:function(){var t,e,r;console.log(">>>>>>>>>>>>???",this.userInfo),this.phone=null===(t=this.userInfo)||void 0===t?void 0:t.phone,this.address=null===(e=this.userInfo)||void 0===e?void 0:e.address,this.name=null===(r=this.userInfo)||void 0===r?void 0:r.companyName},computed:{firstCompanyName:function(){var t;return((null===(t=this.userInfo)||void 0===t?void 0:t.companyName)||"").charAt(0).toUpperCase()},showUpdateButton:function(){return!this.editEnalble||!this.editEnalble},qrCodeurl:function(){var t;return"".concat(window.origin,"/public/profile/").concat(null===(t=this.userInfo)||void 0===t?void 0:t.id)},login:function(){return this.$auth.loggedIn},user:function(){var t;return null===(t=this.$auth)||void 0===t?void 0:t.user},isUser:function(){var t,e;return(null===(t=this.user)||void 0===t?void 0:t.id)==(null===(e=this.userInfo)||void 0===e?void 0:e.id)},profilePhoto:function(){var t;return null===(t=this.userInfo)||void 0===t?void 0:t.profilePicture}},watch:{"$auth.user":function(){var t,e;this.address=(null===(t=this.$auth.user)||void 0===t?void 0:t.address)||"",this.phone=(null===(e=this.$auth.user)||void 0===e?void 0:e.phone)||""}}}),w=(r(997),Object(l.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"flex flex-wrap w-full md:justify-between font-family"},[e("div",{staticClass:"bg-white md:w-3/12 lg:w-[19%] w-full profile-image-container"},[e("div",{staticClass:"icon-img relative",on:{click:t.changeProfileimage}},[e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"referenceInput",staticClass:"hidden",attrs:{type:"file"},on:{change:t.uploadProfilePicture}}),t._v(" "),null!=t.profilePhoto?e("img",{staticClass:"top-profile-image cursor-pointer",attrs:{src:t.profilePhoto,id:"referenceImg"}}):e("span",[t._v("\n        "+t._s(t.firstCompanyName)+"\n      ")])]),t._v(" "),t.isUser?e("div",{staticClass:"text-wrapper"},[t._v("Click to upload an image")]):t._e()]),t._v(" "),e("div",{staticClass:"bg-white sm:w-12/12 md:w-9/12 lg:w-[80%] w-full profile-dental-container"},[e("div",{staticClass:"input-wrapper-title"},[e("span",{staticClass:"text-2xl text-grey pl-3"},[t._v(" "+t._s(t.userInfo.companyName))]),t._v(" "),e("button",{staticClass:"float-right",on:{click:t.toggleInput}},[e("Pencil",{attrs:{width:18}})],1)]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],class:[t.editEnalble?"text-gray-400":"text-black"],attrs:{type:"text",placeholder:"Company`s address",disabled:t.editEnalble},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],class:[t.editEnalble?"text-gray-400":"text-black"],attrs:{type:"number",placeholder:"Company`s phone number",disabled:t.editEnalble},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full grid place-items-center"},[t.showUpdateButton?e("button",{staticClass:"w-[160px] flex justify-center items-center text-white py-2 mt-3 text-center border-none bg-paperdazgreen-400 rounded-md",class:[t.isLoading?"opacity-50":"opacity-100"],attrs:{disabled:t.isloading},on:{click:t.patchUser}},[t._v("\n        Update\n        "),t.isLoading?e("SpinnerDottedIcon",{staticClass:"animate-spin ml-2",attrs:{height:"20",width:"20"}}):t._e()],1):t._e()])])])}),[],!1,null,"0f31372a",null));e.default=w.exports},1437:function(t,e,r){"use strict";r(1210)},1438:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".folder-search[data-v-559b72a2]{width:170px;border-radius:0.375rem;border-width:1.3px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:6px;padding-bottom:6px;padding-left:0.5rem;padding-right:0.5rem;font-size:13px}.search-container[data-v-559b72a2]{display:flex;width:66.666667%;align-items:center;justify-content:flex-end;padding-right:0.75rem}.name-container[data-v-559b72a2]{display:flex;width:33.333333%;justify-content:flex-start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:1rem;font-size:17px;font-weight:700;--tw-text-opacity:1;color:rgb(98 164 78 / var(--tw-text-opacity))}.search-icon[data-v-559b72a2]{margin-left:0.5rem;margin-right:0.5rem;display:flex;height:28px;width:28px;align-items:center;justify-content:center;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px}[data-v-559b72a2]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}[data-v-559b72a2]::-webkit-scrollbar-thumb{background-color:#77c360;width:5px;border-radius:50px;cursor:pointer}[data-v-559b72a2]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity))}.folder-box-container[data-v-559b72a2]{display:flex;width:100%;border-bottom-width:1.5px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:0.5rem;padding-bottom:0.5rem}.font-family[data-v-559b72a2]{font-family:inherit}.arrow-icon[data-v-559b72a2]{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}",""]),n.locals={},t.exports=n},1584:function(t,e,r){"use strict";r.r(e);var n=r(26),o=r(62),l=(r(37),r(7),r(84),r(85),r(40)),d=r(640),c=r(214),f=r(649),h=r(58),m=r(905),v={name:"rofile-folder",components:{SearchIcon:l.default,FolderIcon:c.default,ScribbleIcon:d.default,FolderSolidIcon:f.default,ArrowDownIcon:h.default,EmptyFileFolder:m.default},data:function(){return{flipContainer:!0,contentFolder:[],show:!1,userContent:{folder:[{id:1,foldername:"azudi-folder",totalfiles:102},{id:2,foldername:"Jayz-branch",totalfiles:102},{id:1,foldername:"Crazy-folder",totalfiles:102},{id:1,foldername:"program-Men",totalfiles:102}]}}},mounted:function(){this.contentFolder=Object(o.a)(this.userContent.folder)},methods:{filterList:function(){var t=this.userContent.folder,e=this.$refs.searchFolder.value.toLowerCase();"object"==Object(n.a)(t)&&t.length>0&&(this.contentFolder=t.filter((function(t){return t.foldername.toLowerCase().includes(e)})))}}},w=(r(1437),r(1)),component=Object(w.a)(v,(function(){var t=this,e=t._self._c;return e("section",[t.userContent.folder.length>0?e("div",{staticClass:"bg-white mt-3 rounded-xl font-family"},[e("h3",{staticClass:"flex flex-wrap w-full items-center border-b-[1.5px] border-paperdazgray-200 py-2"},[e("div",{staticClass:"name-container"},[t._v("Folders")]),t._v(" "),e("div",{staticClass:"search-container"},[e("input",{ref:"searchFolder",staticClass:"folder-search",class:[t.show?"left-roll":"no-roll"],attrs:{type:"text",placeholder:"search folder..."}}),t._v(" "),e("button",{staticClass:"search-icon",on:{click:t.filterList}},[e("search-icon",{attrs:{currentcolor:"white",width:"16",height:"16"}})],1),t._v(" "),e("button",{staticClass:"arrow-icon",on:{click:function(e){t.flipContainer=!t.flipContainer}}},[e("ArrowDownIcon",{class:[t.flipContainer?"rotate-0 transition":"rotate-180 transition"],attrs:{width:"16",height:"16"}})],1)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.flipContainer,expression:"flipContainer"}],staticClass:"flex flex-wrap justify-center pl-3 max-h-[120px] overflow-y-scroll"},t._l(t.contentFolder,(function(n,o){return e("div",{key:n.id,staticClass:"folder-box-container"},[e("img",{staticClass:"w-5",attrs:{src:r(994)}}),t._v(" "),e("label",{staticClass:"text-[0.88rem] font-[500] pl-2"},[e("nuxt-link",{attrs:{to:"../profile-folder/"+n.foldername}},[t._v(t._s(n.foldername))])],1)])})),0)]):t._e()])}),[],!1,null,"559b72a2",null);e.default=component.exports},1818:function(t,e,r){"use strict";r.r(e);var n,o=r(3),l=r(11),d=(r(29),r(30),r(18),r(0)),c=r(1584),f=r(1444),h=r(1785),m=(r(895),r(272),r(4)),v=d.default.extend((n={name:"ProfilePage",components:{ProfileFolder:c.default,ProfileCard:f.default,FolderContentFile:h.default},data:function(){return Object(l.a)({folderName:this.$route.params,files:[],filesPage:0,userInfo:{},isInfoReady:!1},"folderName","")},auth:!1,computed:{isMainUser:function(){return this.$auth.loggedIn&&this.$route.params.form==this.$auth.user.id}},mounted:function(){this.getPublicFiles(this.filesPage),this.files=this.folder,this.getTeamPublicInfo()},layout:"profile"},Object(l.a)(n,"auth",!1),Object(l.a)(n,"methods",{getTeamPublicInfo:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.get("users/?id=".concat(t)).then((function(t){var r=t.data.data,n=r[0];e.isInfoReady=!0,e.$auth.user.role==m.a.TEAM?e.getMainPaidUser(n.id):e.userInfo=r[0]})).catch((function(){e.$notify.error({message:"Could not get user"})}));case 2:case"end":return r.stop()}}),r)})))()},getPublicFiles:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.$get("/folders/?id=".concat(e.$route.params.form,"&$skip=").concat(t)).then(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.files=r.data[0].files,t.next=3,e.getTeamPublicInfo(r.data[0].userId);case 3:e.folderName=r.data[0].name;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$notify.error({message:"Could not get folder"})}));case 2:case"end":return r.stop()}}),r)})))()}}),n)),w=v,x=r(1),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",[t.isInfoReady?e("ProfileTopInfo",{attrs:{userInfo:t.userInfo}}):t._e(),t._v(" "),e("FolderContentFile",{attrs:{folderContent:t.files,header:t.folderName}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProfileTopInfo:r(1235).default})},640:function(t,e,r){"use strict";r.r(e);var n={},o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;return t("svg",{staticClass:"fill-current",attrs:{width:"281",height:"214",viewBox:"0 0 281 214",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_2677:1355)"}},[t("path",{attrs:{d:"M240.28 173.309C198.871 205.688 123.773 191.009 109.658 145.481C109.44 144.888 109.258 144.272 109.103 143.646C108.407 140.842 110.632 138.196 113.503 137.87C152.846 133.398 190.924 115.461 196.223 90.9289C201.059 67.8088 168.979 58.3267 146.373 69.7781C121.103 82.6785 102.009 102.58 97.0286 125.188C96.5003 127.586 94.4657 129.428 92.0102 129.397C67.2831 129.09 44.0978 121.721 32.1821 103.079C11.0463 69.8534 45.9709 29.9914 89.0968 20.8773C93.6991 20.1354 92.0907 14.8696 87.4884 15.6115C28.3314 23.1066 -6.39897 79.8723 30.5114 118.002C44.1416 131.835 66.824 138.266 91.3102 138.865C93.9603 138.93 96.132 140.987 96.6037 143.595C100.779 166.689 124.615 186.419 153.685 195.916C189.637 207.536 224.259 197.391 247.465 178.276C251.235 175.266 244.02 170.664 240.28 173.309ZM133.621 90.8112C142.278 83.4101 153.53 75.1103 167.337 72.8846C180.641 70.6196 184.132 84.1099 184.177 89.9878C184.109 97.3256 176.57 103.345 169.646 107.945C156.585 117.224 136.219 124.73 115.103 127.982C111.79 128.492 109.069 125.532 110.2 122.377C114.372 110.736 123.52 99.9502 133.621 90.8112Z"}}),this._v(" "),t("path",{attrs:{d:"M264.012 159.559C249.959 158.461 235.348 158.054 221.598 159.55C215.993 160.213 218.074 165.883 223.652 165.585C234.807 164.988 246.322 166.254 257.334 167.482C256.462 172.186 255.561 177.256 254.186 181.921C252.898 185.492 248.957 190.692 251.683 194.576C253.046 196.519 255.555 196.715 258.122 196.181C264.287 194.827 264.885 187.163 266.203 183.227C268.221 176.776 269.207 170.612 269.72 164.042C269.891 161.854 267.023 159.794 264.012 159.559Z"}})])])}),[],!1,null,null,null);e.default=component.exports},649:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"FolderSolidIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("rect",{attrs:{width:"30",height:"30",fill:"url(#pattern0)"}}),t._v(" "),e("defs",[e("pattern",{attrs:{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1"}},[e("use",{attrs:{"xlink:href":"#image0_3848_19071",transform:"scale(0.0333333)"}})]),t._v(" "),e("image",{attrs:{id:"image0_3848_19071",width:"30",height:"30","xlink:href":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABPklEQVRIie3SsUrDQBjA8f93Ci2+ggri7gtE8wQ+g1gHO3YSdBEyCBoQXO2gYFdBNApOKthJJ0VQKI4OZiyIikg+h2jaNNUpScH2v91xfD+OOxj035P2xfLl/CwiVWC0y8k71My59u5tGrDpGL7dFQVQpiA4cC5KxTTg+I3rJU1jaDJ9QrTsztROf3bMX8fTS8ZUTbV9JycYBMZ7AnfWM7j/EoCV+sKaoktAIWPvHXTTtfdWDYCilRxQgCJIBb4/l8BNDmiYhFZ4YxEvN1fVi2Ax5jA3GD2O4A1r5xHkIQf3ft2uNSI4TI+yVkVbRgQbE2T+zoFp/aUILliTV8Bzhq4/Mj1xnYAdcQIVPckQ9hxxggQMoGqye2eN/6EY/Dn0cobQTB0Vmh/Dr+e/wlvW/htoGfBTZH1RFsPZg/qpL4z0WxxCKWZhAAAAAElFTkSuQmCC"}})])])}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(84),r(85);function n(t){var e,r,n,o,l,d,c,f,h,m;console.log("error-handler",t);var v=(null===(r=null===(e=t)||void 0===e?void 0:e.data)||void 0===r?void 0:r.errors[0])||(null===(o=null===(n=t)||void 0===n?void 0:n.data)||void 0===o?void 0:o.message);return console.log("error-handler",v),(null===(l=(null==v?void 0:v.message)||v)||void 0===l?void 0:l.includes("email"))?"Email already exists":(null===(d=(null==v?void 0:v.message)||v)||void 0===d?void 0:d.includes("phone"))?"Phone number already exists":(null===(c=(null==v?void 0:v.message)||v)||void 0===c?void 0:c.includes("Invalid login"))?"Email or password is Incorrect":null==v?"Network error":(null===(f=(null==v?void 0:v.message)||v)||void 0===f?void 0:f.includes("subscriptions.userId"))?"You are already a subscribe user":(null===(h=(null==v?void 0:v.message)||v)||void 0===h?void 0:h.includes("Cannot read properties of undefined (reading 'teamMembers')"))?"Team trying to join does not exist":(null===(m=(null==v?void 0:v.message)||v)||void 0===m?void 0:m.includes("Stripe"))?"Error occured, Trying to send card info":void 0}},858:function(t,e,r){var content=r(998);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("264527cb",content,!0,{sourceMap:!1})},895:function(t,e,r){"use strict";var n=r(4);e.a={created:function(){},watch:{"$auth.user":function(){this.$auth.user.role!==n.a.PAID&&this.$auth.user.role!==n.a.TEAM&&this.$nuxt.$router.push("/dashboard")}}}},994:function(t,e,r){t.exports=r.p+"img/OpenedFolder.203499a.svg"},997:function(t,e,r){"use strict";r(858)},998:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".font-family[data-v-0f31372a]{font-family:inherit!important}.profile-image-container[data-v-0f31372a]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;border-radius:10px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:1rem;padding-bottom:1rem}.profile-image-container .icon-img[data-v-0f31372a]{display:grid;height:10rem;width:10rem;cursor:pointer;place-items:center;border-radius:8px;border-width:2px;border-color:rgb(119 181 80 / 0.6);font-size:6em;font-weight:900;--tw-text-opacity:1;color:rgb(98 164 78 / var(--tw-text-opacity));text-shadow:1px 5px 7px #949494}.profile-image-container .text-wrapper[data-v-0f31372a]{margin-top:0.25rem;display:block;width:100%;text-align:center;font-size:0.8rem;--tw-text-opacity:1;color:rgb(148 148 148 / var(--tw-text-opacity))}.profile-dental-container[data-v-0f31372a]{border-radius:10px;padding-top:1rem;padding-bottom:1rem}.profile-dental-container h1[data-v-0f31372a]{border-bottom-width:2px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:1rem;padding-bottom:1rem;padding-left:1rem;font-size:1.2rem;font-weight:500}.profile-dental-container .input-wrapper[data-v-0f31372a]{--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:0.5rem;padding-bottom:0.5rem}.profile-dental-container .input-wrapper input[data-v-0f31372a]{border-style:none;background-color:transparent;padding-left:0.75rem;padding-right:0.75rem;font-size:16px;width:calc(100% - 40px);outline:none!important}.profile-dental-container .input-wrapper-title[data-v-0f31372a]{padding-top:0.5rem;padding-bottom:0.5rem}.profile-dental-container .input-wrapper-title input[data-v-0f31372a]{border-style:none;background-color:transparent;padding-left:0.75rem;padding-right:0.75rem;font-size:24px;width:calc(100% - 40px);outline:none!important}.scanner-container[data-v-0f31372a]{border-radius:10px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:1rem;padding-bottom:1rem}.scanner-container b[data-v-0f31372a]{display:block;text-align:center;font-size:0.8rem}.top-profile-image[data-v-0f31372a]{position:absolute;margin:0.5rem;margin-top:5%;margin-left:5%;height:90%;width:90%;border-radius:0.5rem;-o-object-fit:cover;object-fit:cover}",""]),n.locals={},t.exports=n}}]);
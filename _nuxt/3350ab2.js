(window.webpackJsonp=window.webpackJsonp||[]).push([[203,205],{1361:function(t,e,r){t.exports=r.p+"img/PAPERDAZ-pro.b295f91.svg"},1628:function(t,e,r){var content=r(1742);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("07649910",content,!0,{sourceMap:!1})},1740:function(t,e,r){t.exports=r.p+"img/shareGrayIcon.94a9ae5.svg"},1741:function(t,e,r){"use strict";r(1628)},1742:function(t,e,r){var o=r(17)((function(i){return i[1]}));o.push([t.i,".font-family[data-v-6c070810]{font-family:inherit}.folder-search[data-v-6c070810]{width:160px;border-radius:0.375rem;border-width:1.3px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:6px;padding-bottom:6px;padding-left:0.5rem;padding-right:0.5rem;font-size:13px}.search-container[data-v-6c070810]{display:flex;width:66.666667%;align-items:center;justify-content:flex-end;padding-right:0.75rem}.name-container[data-v-6c070810]{display:flex;width:33.333333%;justify-content:flex-start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:1rem;font-size:17px;font-weight:700;--tw-text-opacity:1;color:rgb(98 164 78 / var(--tw-text-opacity))}.search-icon[data-v-6c070810]{margin-left:0.5rem;margin-right:0.5rem;display:flex;height:28px;width:28px;align-items:center;justify-content:center;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px}[data-v-6c070810]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}[data-v-6c070810]::-webkit-scrollbar-thumb{background-color:#77c360;width:5px;border-radius:50px;cursor:pointer}[data-v-6c070810]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity))}.folder-box-container[data-v-6c070810]{display:flex;width:100%;align-items:center;border-bottom-width:1.5px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:0.5rem;padding-bottom:0.5rem}.folder-box-container label[data-v-6c070810]{width:calc(100% - 106px)}.icon-container[data-v-6c070810]{display:flex}.icon-container button[data-v-6c070810]{display:flex;width:30px;justify-content:center}.arrow-icon[data-v-6c070810]{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}",""]),o.locals={},t.exports=o},1800:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this._self._c;return t("button",[t("img",{staticClass:"w-[1.15em]",attrs:{src:r(1740)}})])}],n=r(24),l=r(59),c=(r(43),r(8),r(79),r(80),r(58)),d=r(36),f=r(85),w=r(873),h=r(56),v={name:"rofile-folder",components:{SearchIcon:d.default,HeartOutlineIcon:c.default,ShareOutlineIcon:f.default,EmptyFileFolder:w.default,ArrowDownIcon:h.default},data:function(){return{flipContainer:!0,contentDisplay:[],show:!1,userContent:{folder:[{id:1,foldername:"azudi-folder",totalfiles:102},{id:2,foldername:"Jayz-branch",totalfiles:102},{id:3,foldername:"Crazy-folder",totalfiles:102},{id:4,foldername:"program-Men",totalfiles:102},{id:5,foldername:"Spatacus",totalfiles:102},{id:6,foldername:"badz-bois",totalfiles:102}]}}},mounted:function(){this.contentDisplay=Object(l.a)(this.userContent.folder)},methods:{filterList:function(){var t=this.userContent.folder,e=this.$refs.searchInput.value.toLowerCase();"object"==Object(n.a)(t)&&t.length>0&&(this.contentDisplay=t.filter((function(t){return t.foldername.toLowerCase().includes(e)})))}}},m=(r(1741),r(1)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("section",[t.userContent.folder.length>0?e("div",{staticClass:"bg-white mt-4 rounded-xl font-family"},[e("h3",{staticClass:"flex flex-wrap w-full items-center border-b-[1.5px] border-paperdazgray-200 py-2"},[e("div",{staticClass:"name-container"},[t._v("Files")]),t._v(" "),e("div",{staticClass:"search-container"},[e("input",{ref:"searchInput",staticClass:"folder-search",class:[t.show?"left-roll":"no-roll"],attrs:{type:"text",placeholder:"search files..."}}),t._v(" "),e("button",{staticClass:"search-icon",on:{click:t.filterList}},[e("search-icon",{attrs:{currentcolor:"white",width:"16",height:"16"}})],1),t._v(" "),e("button",{staticClass:"arrow-icon",on:{click:function(e){t.flipContainer=!t.flipContainer}}},[e("ArrowDownIcon",{class:[t.flipContainer?"rotate-0 transition":"rotate-180 transition"],attrs:{width:"16",height:"16"}})],1)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.flipContainer,expression:"flipContainer"}],staticClass:"flex flex-wrap justify-center pl-3 max-h-[200px] overflow-y-scroll"},t._l(t.contentDisplay,(function(o,n){return e("div",{key:o.id,staticClass:"folder-box-container"},[e("img",{staticClass:"w-4",attrs:{src:r(1361)}}),t._v(" "),e("label",{staticClass:"text-[0.85rem] font-[400] pl-2 truncate"},[t._v(t._s(o.foldername))]),t._v(" "),e("div",{staticClass:"icon-container"},[t._m(0,!0),t._v(" "),e("button",[e("HeartOutlineIcon",{staticStyle:{fill:"rgb(158 158 158)"}})],1),t._v(" "),e("button",[e("ShareOutlineIcon",{staticStyle:{fill:"rgb(158 158 158)"}})],1)])])})),0)]):t._e()])}),o,!1,null,"6c070810",null);e.default=component.exports},772:function(t,e,r){var content=r(870);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("6277c4a4",content,!0,{sourceMap:!1})},869:function(t,e,r){"use strict";r(772)},870:function(t,e,r){var o=r(17)((function(i){return i[1]}));o.push([t.i,".name-container[data-v-75858566]{display:flex;width:33.333333%;justify-content:flex-start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:1rem;font-size:17px;font-weight:700;--tw-text-opacity:1;color:rgb(98 164 78 / var(--tw-text-opacity))}.empty-content[data-v-75858566]{display:inline-block;text-align:center}.empty-content b[data-v-75858566]{margin-bottom:0.5rem;display:block;width:100%;text-align:center;font-size:17px}.empty-content button[data-v-75858566]{border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;padding-left:2rem;padding-right:2rem;font-size:15px;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.empty-container[data-v-75858566]{display:flex;height:300px;width:100%;align-items:center;justify-content:center}.font-family[data-v-75858566]{font-family:inherit!important}",""]),o.locals={},t.exports=o},873:function(t,e,r){"use strict";r.r(e);var o={},n=(r(869),r(1)),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white mt-5 rounded-lg overflow-hidden font-family"},[e("h3",{staticClass:"flex flex-wrap w-full items-center border-b-[1.5px] border-paperdazgray-200 py-2"},[e("div",{staticClass:"name-container"},[t._v("Folders / file")])]),t._v(" "),e("div",{staticClass:"empty-container"},[e("div",{staticClass:"empty-content"},[e("b",[t._v("Your public profile is empty")]),t._v(" "),e("button",[t._v("Turn files to paperlink")])])])])}],!1,null,"75858566",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1117:function(t,e,n){"use strict";n(899)},1118:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,".input-annotation[data-v-4f1b2f15]:focus{border:1px solid #5fa348;border-top:none;border-right:none;background-color:transparent}.input-annotation[data-v-4f1b2f15]:blur{border:transparent}",""]),o.locals={},t.exports=o},1397:function(t,e,n){"use strict";n.r(e);n(385),n(123);var o=n(390),r={props:{isActive:Boolean,fontSize:Number,value:String,file:Object,justMounted:Boolean},data:function(){return{text:null}},created:function(){this.text=this.value},mounted:function(){this.$refs.text_box&&this.$refs.text_box.focus()},watch:{value:function(t){this.text!=t&&(this.text=t)},text:function(t){var e=this;if(this.value!=t&&this.$emit("input",t),this.$refs.text_box&&this.$refs.text_hidden)if(t&&1!==t.length){var n=this.fontSize||11;if(t.length<this.value.length){var o=this.$refs.text_hidden.clientWidth;this.$refs.text_box.style.width="".concat(o,"px")}else{var r=this.$refs.text_hidden.clientWidth+n;this.$refs.text_box.style.width="".concat(r,"px")}}else setTimeout((function(){var t=e.$refs.text_hidden.clientWidth;e.$refs.text_box.style.width="".concat(t,"px")}),200)},fontSize:function(){if(this.$refs.text_box&&this.$refs.text_hidden){var t=this.fontSize||11,e=this.$refs.text_hidden.clientWidth+t;this.$refs.text_box.style.width="".concat(e,"px")}}},computed:{isCreator:function(){return this.file.userId==this.$auth.user.id||this.$auth.user.teamAccess==o.a.COMPANY_FILE&&this.$auth.user.teamId==this.file.userId},style:function(){return{fontSize:"".concat(this.fontSize||11,"px")}},hideStyle:function(){return{fontSize:"".concat(this.fontSize||11,"px"),visibility:"hidden"}}}},l=(n(1117),n(1)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-field tool",staticStyle:{height:"19px",display:"flex","align-items":"end"}},[!t.isActive&&!t.justMounted||t.isCreator?e("p",{style:t.style},[t._v(t._s(t.text||"Type here..."))]):e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"text_box",staticClass:"input-annotation",style:t.style,attrs:{type:"text",placeholder:"Type here..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),e("span",{ref:"text_hidden",style:t.hideStyle},[t._v(t._s(t.text||"Type here..."))])])}),[],!1,null,"4f1b2f15",null);e.default=component.exports},899:function(t,e,n){var content=n(1118);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5ae69de0",content,!0,{sourceMap:!1})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1117:function(t,e,n){"use strict";n(899)},1118:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,".input-annotation[data-v-484a48d6]:focus{border:1px solid #5fa348;border-top:none;border-right:none;background-color:transparent}.input-annotation[data-v-484a48d6]:blur{border:transparent}",""]),o.locals={},t.exports=o},1397:function(t,e,n){"use strict";n.r(e);n(385);var o=n(390),r={props:{isActive:Boolean,fontSize:Number,value:String,file:Object,justMounted:Boolean},data:function(){return{text:null}},created:function(){this.text=this.value},mounted:function(){this.$refs.text_box&&this.$refs.text_box.focus()},watch:{value:function(t){this.text!=t&&(this.text=t)},text:function(t){this.value!=t&&this.$emit("input",t)}},computed:{isCreator:function(){return this.file.userId==this.$auth.user.id||this.$auth.user.teamAccess==o.a.COMPANY_FILE&&this.$auth.user.teamId==this.file.userId},style:function(){return{fontSize:"".concat(this.fontSize||11,"px")}}}},l=(n(1117),n(1)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-field tool",staticStyle:{height:"19px",display:"flex","align-items":"end"}},[!t.isActive&&!t.justMounted||t.isCreator?e("p",{style:t.style},[t._v(t._s(t.text||"Type here..."))]):e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"text_box",staticClass:"input-annotation",style:t.style,attrs:{type:"text",placeholder:"Type here..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])}),[],!1,null,"484a48d6",null);e.default=component.exports},899:function(t,e,n){var content=n(1118);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("73ab4ccc",content,!0,{sourceMap:!1})}}]);
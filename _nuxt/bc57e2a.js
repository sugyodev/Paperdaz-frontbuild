(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1006:function(t,e,n){"use strict";n(871)},1007:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,".input-annotation[data-v-da81b9be]:focus{border:1px solid #5fa348;border-top:none;border-right:none;background-color:transparent}.input-annotation[data-v-da81b9be]:blur{border:transparent}",""]),o.locals={},t.exports=o},1258:function(t,e,n){"use strict";n.r(e);n(401),n(104);var o=n(402),r={props:{isActive:Boolean,fontSize:Number,value:String,file:Object,justMounted:Boolean},data:function(){return{text:null,inputWidth:0}},created:function(){this.text=this.value},mounted:function(){this.$refs.text_box&&this.$refs.text_box.focus()},methods:{onBlur:function(){console.log("onBlur")}},watch:{value:function(t){this.text!=t&&(this.text=t)},text:function(t){var e=this;if(this.value!=t&&this.$emit("input",t),this.$refs.text_box&&this.$refs.text_hidden)if(t&&1!==t.length){var n=this.fontSize||11;if(t.length<this.value.length){var o=this.$refs.text_hidden.clientWidth;this.$refs.text_box.style.width="".concat(o,"px"),this.inputWidth=o}else{var r=this.$refs.text_hidden.clientWidth+n;this.$refs.text_box.style.width="".concat(r,"px"),this.inputWidth=r}}else setTimeout((function(){var t=e.$refs.text_hidden.clientWidth;e.$refs.text_box.style.width="".concat(t,"px"),e.inputWidth=t}),200)},fontSize:function(){if(this.$refs.text_box&&this.$refs.text_hidden){var t=this.fontSize||11,e=this.$refs.text_hidden.clientWidth+t;this.$refs.text_box.style.width="".concat(e,"px"),this.inputWidth=e}}},computed:{isCreator:function(){return this.file.userId==this.$auth.user.id||this.$auth.user.teamAccess==o.a.COMPANY_FILE&&this.$auth.user.teamId==this.file.userId},style:function(){return{fontSize:"".concat(this.fontSize||11,"px")}},hideStyle:function(){return{fontSize:"".concat(this.fontSize||11,"px"),visibility:"hidden",position:"absolute"}}}},l=(n(1006),n(1)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-field tool",staticStyle:{height:"19px",display:"flex","align-items":"end"}},[!t.isActive&&!t.justMounted||t.isCreator?e("p",{style:t.style},[t._v(t._s(t.text||"Type here..."))]):e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"text_box",staticClass:"input-annotation",style:t.style,attrs:{type:"text",placeholder:"Type here..."},domProps:{value:t.text},on:{blur:function(e){return t.$emit("onBlur")},input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),e("span",{ref:"text_hidden",style:t.hideStyle},[t._v(t._s(t.text||"Type here..."))])])}),[],!1,null,"da81b9be",null);e.default=component.exports},871:function(t,e,n){var content=n(1007);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("51305315",content,!0,{sourceMap:!1})}}]);
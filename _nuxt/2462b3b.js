(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{708:function(t,e){},709:function(t,e){},710:function(t,e){},711:function(t,e){},712:function(t,e){},713:function(t,e){},714:function(t,e){},715:function(t,e){},716:function(t,e){},717:function(t,e){},770:function(t,e,o){var content=o(868);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("95ed67ce",content,!0,{sourceMap:!1})},867:function(t,e,o){"use strict";o(770)},868:function(t,e,o){var n=o(17)((function(i){return i[1]}));n.push([t.i,".social-card[data-v-5bbea032]{display:flex;min-width:120px;align-items:center;justify-content:center;gap:0.5rem;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;padding-top:0.75rem;padding-bottom:0.75rem;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.social-card[data-v-5bbea032]:hover{--tw-text-opacity:1;color:rgb(65 65 66 / var(--tw-text-opacity))}",""]),n.locals={},t.exports=n},872:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(21),o(0)),c=o(700),l=o.n(c),d=r.default.extend({created:function(){},data:function(){return{socialState:void 0}},methods:{socialSignIn:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:o.prev=0,o.t0=t,o.next="facebook"===o.t0?4:"google"===o.t0?6:"twitter"===o.t0?8:10;break;case 4:return e.socialState=new e.$fireModule.auth.FacebookAuthProvider,o.abrupt("break",10);case 6:return e.socialState=new e.$fireModule.auth.GoogleAuthProvider,o.abrupt("break",10);case 8:return e.socialState=new e.$fireModule.auth.TwitterAuthProvider,o.abrupt("break",10);case 10:return o.next=12,e.$fire.auth.signInWithPopup(e.socialState);case 12:r=(r=o.sent).user._delegate.providerData[0],r={displayName:null===(n=r)||void 0===n?void 0:n.displayName,email:r.email,phoneNumber:r.phoneNumber,photoURL:r.photoURL,id:r.uid,provider:r.providerId.substring(0,r.providerId.indexOf("."))},c=l.a.sign(r,"eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"),window.location.assign("/login?token=".concat(c)),o.next=22;break;case 19:o.prev=19,o.t1=o.catch(0),console.log(o.t1);case 22:case"end":return o.stop()}}),o,null,[[0,19]])})))()}}}),f=(o(867),o(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"flex flex-wrap gap-2 xs:gap-4 text-sm font-medium text-paperdazgray-400"},[e("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(e){return t.socialSignIn("facebook")}}},[e("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/facebook.png",alt:""}}),t._v(" "),e("span",[t._v("Facebook")])]),t._v(" "),e("div",{staticClass:"flex-1 social-card cursor-pointer",on:{click:function(e){return t.socialSignIn("google")}}},[e("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/google.png",alt:""}}),t._v(" "),e("span",[t._v("Google")])]),t._v(" "),e("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(e){return t.socialSignIn("twitter")}}},[e("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/twitter.png",alt:""}}),t._v(" "),e("span",[t._v("Twitter")])])])])}),[],!1,null,"5bbea032",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1296:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(18),n(401),{props:{scale:Number,generatePDF:Boolean},computed:{style:function(){return{width:"".concat(11*(this.scale||1),"px"),height:"".concat(11*(this.scale||1),"px")}}},watch:{},data:function(){return{svgToImageData:""}},methods:{svgToImage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.svgToImageData="",n="",e.next=4,htmlToImage.toPng(t.$refs.crossbox).then((function(t){n=t})).catch((function(t){console.error("oops, something went wrong!",t)}));case 4:t.svgToImageData=n;case 5:case"end":return e.stop()}}),e)})))()}}}),A=n(1),component=Object(A.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"tool"},[t("svg",{ref:"crossbox",style:this.style,attrs:{viewBox:"0 0 19 19",fill:"black",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{svgToImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAYBJREFUWEfF2W2SwiAMBuB4Mvcmqyfb9SbrzZy3M3HSLg35IvJPi+UxQAP0QvtyI6IrEd0P33d9/CGiJxH9coMX0TJwqICCCt1ItA0DCtrekAyUODZ3IiWO29+QAI5wncgR7o0EEJH6VgbZykhqOJAe3MWfQE5x6F05STqRJpycJHLMre5uM24E5EfMKqQLdwZchXTjNGA1MoSbAauQYZwFmEWmcFZgFJnGeYBeZAnOC7QiUY9XJaMM+phc3/1GZhIlHe8uzTKOdh8XLhJBa8ZJR45vEIlgBOmOXAXQMia3JZNnzB1Dn4kg7jWbrfwnwtuHDNCCk8MhhIwCPbgUMgKM4MJIL3CGw4RAKVtPeoAWHGeQ2cPcvBGzAj0463PShLQAI7gy5AyYwZUgNWAFLo08A1biUsgRcAUujDwCV+JCSAnswLmRDOzEuZAAfgJnRs4OMFOLTeMmR0uLd+0IuAOnRfJ9BMyV5FFwJ26E/HeILpFfmT2EsVvPqqG7/+RriBe0s4oo0F+4rgAAAABJRU5ErkJggg==",options:"fill",d:"M19 17.0864L17.0864 19L9.5 11.4136L1.91357 19L0 17.0864L7.58643 9.5L0 1.91357L1.91357 0L9.5 7.58643L17.0864 0L19 1.91357L11.4136 9.5L19 17.0864Z",fill:"black"}})])])}),[],!1,null,"5f660d2f",null);e.default=component.exports}}]);
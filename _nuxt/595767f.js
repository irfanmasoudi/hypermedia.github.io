(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{253:function(t,e,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(103).default)("be0eec98",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";n.r(e);var r={name:"CustomPage",props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String,required:!0}}},c=(n(255),n(22)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5"},[n("div",{staticClass:"jumbotron"},[n("h1",{staticClass:"display-4"},[t._v(t._s(t.title))]),t._v(" "),n("img",{attrs:{src:t.image,alt:""}}),t._v(" "),n("hr",{staticClass:"my-4"}),t._v(" "),n("p",{staticClass:"lead"},[t._v(t._s(t.description))])])])}),[],!1,null,"d02759d2",null);e.default=component.exports},255:function(t,e,n){"use strict";n(253)},256:function(t,e,n){var r=n(102)(!1);r.push([t.i,"img[data-v-d02759d2]{height:300px;margin:20px 0}.page[data-v-d02759d2]{text-align:center;max-width:800px;margin:0 auto}p[data-v-d02759d2]{text-align:left}",""]),t.exports=r},268:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(58),n(31),n(46),{name:"IndexPage",components:{CustomPage:n(254).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data,title,image,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.get("/api/page-info/index");case 3:return r=e.sent,data=r.data,title=data.title,image=data.image,c=data.description,e.abrupt("return",{title:title,description:c,image:image});case 9:case"end":return e.stop()}}),e)})))()}}),o=n(22),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("custom-page",{attrs:{title:t.title,image:t.image,description:t.description}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomPage:n(254).default})}}]);
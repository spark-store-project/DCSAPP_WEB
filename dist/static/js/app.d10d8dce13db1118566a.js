webpackJsonp([1],{"0IHM":function(t,e){},"83Xn":function(t,e){},CqgO:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a={name:"App",data:function(){return{}},methods:{clickTitle:function(){window.open("/")}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"right"},[e("center",[e("router-view",{staticClass:"showRouterPage"})],1)],1)])},staticRenderFns:[]};var s=n("VU/8")(a,r,!1,function(t){n("0IHM")},null,null).exports,c=n("/ocq"),i={name:"HelloWorld",data:function(){return{}},methods:{Dream:function(){window.open("http://www.shenmo.tech:420/?p=91","_self","")},FeedBack:function(){window.open("http://www.shenmo.tech:420/?p=419","_self","")},Proposal:function(){window.open("http://www.shenmo.tech:420/?p=422","_self","")},Search:function(){this.$router.push({name:"Search"})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("center",[n("br"),n("br"),t._v(" "),n("h1",{staticClass:"title"},[t._v("Spark Store")]),t._v(" "),n("h3",{staticClass:"more-info"},[t._v("\n        Have more.\n      ")]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{staticClass:"bt-feedback",attrs:{disabled:""},on:{click:t.Search}},[t._v("搜索应用(暂未开放)")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Dream}},[t._v("愿望墙")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.FeedBack}},[t._v("问题反馈")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Proposal}},[t._v("APP建议")]),t._v(" "),n("br")])])],1)},staticRenderFns:[]};var m=n("VU/8")(i,l,!1,function(t){n("83Xn")},"data-v-a3768dba",null).exports,p=n("mtWM"),u=n.n(p),d={name:"categoryComponent",props:["category"],data:function(){return{list:[],downloadContent:"DOWNLOAD"}},methods:{getInfo:function(){var t=this;u.a.get("http://img.shenmo.tech:38324/store/"+this.category+"/applist.json").then(function(e){t.list=e.data})},GotoJson:function(t){console.log("http://img.shenmo.tech:38324/store/"+this.category+"/"+t+"/app.json"),window.open("http://img.shenmo.tech:38324/store/"+this.category+"/"+t+"/app.json","_self","")}},mounted:function(){this.getInfo()}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("br"),t._v(" "),n("br"),t._v(" "),n("center",[n("div",{staticClass:"list"},t._l(t.list,function(e){return n("div",{key:e.tip,staticClass:"item"},[n("span",{staticClass:"show"},[n("img",{staticClass:"icon-m",attrs:{src:"http://dcstore.shenmo.tech/store/"+t.category+"/"+e.Pkgname+"/icon.png",alt:"icon"},on:{click:function(n){return t.GotoJson(e.Pkgname)}}}),t._v(" "),n("span",{staticClass:"app-title"},[n("h3",{staticClass:"app-name"},[t._v(t._s(e.Name))])]),t._v(" "),n("a",{attrs:{target:"_blank"}},[n("button",{staticClass:"download-bt",attrs:{title:t.downloadContent},on:{click:function(n){return t.GotoJson(e.Pkgname)}}},[t._v("\n                详情>>\n              ")])])])])}),0)])],1)},staticRenderFns:[]};var f=n("VU/8")(d,h,!1,function(t){n("lAdT")},"data-v-00a8b48b",null).exports,v={name:"Games",components:{categoryComponent:f}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"development"}})],1)},staticRenderFns:[]},_=n("VU/8")(v,g,!1,null,null,null).exports,C={name:"Games",components:{categoryComponent:f}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"themes"}})],1)},staticRenderFns:[]},b=n("VU/8")(C,y,!1,null,null,null).exports,w={name:"Games",components:{categoryComponent:f}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"music"}})],1)},staticRenderFns:[]},R=n("VU/8")(w,k,!1,null,null,null).exports,F={name:"Games",components:{categoryComponent:f}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"games"}})],1)},staticRenderFns:[]},V=n("VU/8")(F,x,!1,null,null,null).exports,$={name:"Games",components:{categoryComponent:f}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"image_graphics"}})],1)},staticRenderFns:[]},G=n("VU/8")($,E,!1,null,null,null).exports,U={name:"Games",components:{categoryComponent:f}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"chat"}})],1)},staticRenderFns:[]},A=n("VU/8")(U,P,!1,null,null,null).exports,I={name:"Games",components:{categoryComponent:f}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"tools"}})],1)},staticRenderFns:[]},S=n("VU/8")(I,O,!1,null,null,null).exports,q={name:"Games",components:{categoryComponent:f}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"network"}})],1)},staticRenderFns:[]},D=n("VU/8")(q,N,!1,null,null,null).exports,H={name:"Games",components:{categoryComponent:f}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"office"}})],1)},staticRenderFns:[]},T=n("VU/8")(H,M,!1,null,null,null).exports,W={name:"Games",components:{categoryComponent:f}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"others"}})],1)},staticRenderFns:[]},J=n("VU/8")(W,j,!1,null,null,null).exports,B={name:"Games",components:{categoryComponent:f}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"reading"}})],1)},staticRenderFns:[]},X=n("VU/8")(B,L,!1,null,null,null).exports,z={name:"Games",components:{categoryComponent:f},data:function(){return{}},methods:{},mounted:function(){}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"video"}})],1)},staticRenderFns:[]},Q=n("VU/8")(z,K,!1,null,null,null).exports,Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("br"),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search-input",attrs:{placeholder:"搜索您想要的应用"},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),n("button",{staticClass:"search-button",on:{click:t.search}},[t._v("搜索")])])},staticRenderFns:[]};var Z=n("VU/8")({name:"Search",data:function(){return{list:[],searchInput:"",downloadContent:"DOWNLOAD"}},methods:{search:function(){}},mounted:function(){}},Y,!1,function(t){n("CqgO"),n("qfqr")},"data-v-59488643",null).exports;o.a.use(c.a);var tt=new c.a({routes:[{path:"/",name:"MainPage",component:m},{path:"/programming",name:"Programming",component:_},{path:"/themes",name:"Themes",component:b},{path:"/musicandsound",name:"MusicAndSound",component:R},{path:"/games",name:"Games",component:V},{path:"/photos",name:"Photos",component:G},{path:"/relations",name:"Relations",component:A},{path:"/tools",name:"Tools",component:S},{path:"/network",name:"Network",component:D},{path:"/office",name:"Office",component:T},{path:"/others",name:"Others",component:J},{path:"/reading",name:"Reading",component:X},{path:"/videos",name:"Videos",component:Q},{path:"/search",name:"Search",component:Z}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:tt,components:{App:s},template:"<App/>"})},lAdT:function(t,e){},qfqr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d10d8dce13db1118566a.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/DaN":function(e,t,n){"use strict";n.r(t);var i=n("vDqi"),r=n.n(i),s=n("sEfC"),o=n.n(s),a=n("Snq/"),c=n.n(a),u=n("HFWk"),l={props:{},data:function(){return{users:[],selectedUser:[]}},methods:{getUsers:o()(function(e,t){var n=this;r.a.get("api/users",{params:{"filter[name]":e,"filter[is_admin]":0}}).then(function(e){n.users=e.data.data}).catch(function(e){console.log(e)}).finally(function(){t(!1)})},200),onSearchChange:function(e,t){e.length<3?this.users=[]:(t(!0),this.getUsers(e,t))},onSelect:function(e){r.a.post("impersonation",{user_id:e}).then(function(e){window.location="/calendar"}).catch(function(e){console.log(e)})}},components:{icon:u.a,"v-select":c.a}},d=n("KHd+"),f=Object(d.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"flex items-center"},[n("icon",{staticClass:"w-4 flex-shrink-0",attrs:{icon:"view-show"}}),e._v(" "),n("label",{staticClass:"screen-reader",attrs:{for:"user_id"}},[e._v("\n            Select user to impersonate\n        ")]),e._v(" "),n("v-select",{class:{"flex-grow":!0,vs__empty:0===e.users.length},attrs:{name:"user_id",placeholder:"Impersonate user...",label:"name",searchable:!0,clearable:!1,options:e.users,reduce:function(e){return e.id}},on:{input:e.onSelect,search:e.onSearchChange},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}},[n("span",{attrs:{slot:"open-indicator"},slot:"open-indicator"}),e._v(" "),n("span",{attrs:{slot:"no-options"},slot:"no-options"},[e._v("Type to start search...")])])],1)])},[],!1,null,null,null);t.default=f.exports},0:function(e,t,n){n("bUC5"),n("pyCd"),e.exports=n("YT72")},"2EVj":function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>'},"5dyc":function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/></svg>'},"5wfY":function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>'},"79yS":function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path fill-rule=evenodd d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z"/></svg>'},"7hL+":function(e,t,n){(function(e){var i,r,s,o;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"undefined"!=typeof self&&self,o=function(e,t){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===a(e)&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({"00fd":function(e,t,n){var i=n("9e69"),r=Object.prototype,s=r.hasOwnProperty,o=r.toString,a=i?i.toStringTag:void 0;e.exports=function(e){var t=s.call(e,a),n=e[a];try{e[a]=void 0;var i=!0}catch(e){}var r=o.call(e);return i&&(t?e[a]=n:delete e[a]),r}},1310:function(e,t){e.exports=function(e){return null!=e&&"object"==a(e)}},"1a8c":function(e,t){e.exports=function(e){var t=a(e);return null!=e&&("object"==t||"function"==t)}},"28e9":function(e,t,n){var i;"undefined"!=typeof self&&self,e.exports=(i=n("8bbf"),function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===a(e)&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({"8bbf":function(e,t){e.exports=i},fb15:function(e,t,n){"use strict";var i;n.r(t),"undefined"!=typeof window&&(i=window.document.currentScript)&&(i=i.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=i[1]);var r=n("8bbf"),s=n.n(r);function o(e){return(o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var c=function(){return s.a.observable({})},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(Array.isArray(e)||"object"!==o(e))return e;var n=Array.isArray(t)?t:Object.keys(t),i=!Array.isArray(t);return n.reduce(function(n,r){return n[i?t[r]:r]=e[r],n},{})};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=e.nameForComputed,i=void 0===n?null:n,r=e.props,o=void 0!==r&&r,a=e.attrs,d=void 0!==a&&a,f=e.listeners,h=void 0!==f&&f,p=e.include,g=void 0!==p&&p,v=e.inheritAs,m=void 0!==v&&v;if(t){var b="",w=i||t;return{beforeCreate:function(){this[b="$_reactiveProvide-".concat(t,"-Data")]=c()},provide:function(){return l({},t,this[b])},inject:m?l({},m,{from:t,default:{}}):void 0,computed:l({},w,function(){var e={};return m&&Object.assign(e,this[m]),g&&Object.assign(e,u(this,g)),o&&Object.assign(e,this.$props),d&&Object.assign(e,this.$attrs),h&&Object.assign(e,this.$listeners),e}),watch:l({},w,{immediate:!0,handler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this[b];Object.keys(e).forEach(function(n){t.hasOwnProperty(n)?t[n]=e[n]:s.a.set(t,n,e[n])})}})}}!function(e){console.error("[vue-reactive-provide]: ".concat(e))}("[vue-reactive-provide]: No name property found on options object when trying to create mixin.\n      the 'name' property is required.")}function f(e){return(f="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var h=s.a.config.optionMergeStrategies,p=h.provide,g=h.computed,v=h.inject,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=void 0===t?"reactiveProvide":t;return{beforeCreate:function(){var e=this,t=this.$options[n];if(t&&("function"==typeof t&&(t=t.call(this,this)),"object"===f(t))){var i=d(t),r=i.beforeCreate,s=i.provide,o=i.inject,a=i.computed,c=i.watch;r.call(this,this),this.$options.computed=g(this.$options.computed,a,this,"computed"),this.$options.provide=p(this.$options.provide,s,this,"provide"),this.$options.inject=v(this.$options.inject,o,this,"inject"),this.$once("hook:created",function(){var n=e.$watch(function(){return e[t.name]},c[t.name].handler,{immediate:!0});e.$on("hook:beforeDestroy",n)})}}}},b={install:function(e,t){e.mixin(m(t))},version:"0.3.0"};n.d(t,"ReactiveProvideMixin",function(){return d}),t.default=b}}))},"29f3":function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},"2b3e":function(e,t,n){var i=n("585a"),r="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,s=i||r||Function("return this")();e.exports=s},"345a":function(e,t,n){var i=n("cb16"),r=n("6428"),s=n("b4b0");e.exports=function(e,t,n){return t=r(t),void 0===n?(n=t,t=0):n=r(n),e=s(e),i(e,t,n)}},3729:function(e,t,n){var i=n("9e69"),r=n("00fd"),s=n("29f3"),o="[object Null]",a="[object Undefined]",c=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?a:o:c&&c in Object(e)?r(e):s(e)}},"408c":function(e,t,n){var i=n("2b3e");e.exports=function(){return i.Date.now()}},5456:function(e,t,n){"use strict";var i=n("b047"),r=n.n(i),s=n("28e9"),o=n("345a"),a=n.n(o);function c(e,t,n,i,r,s,o,a){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}var u=c({data:function(){return{}},inject:["time"],computed:{isInView:function(){return a()(this.time.current,this.time.start,this.time.end)},left:function(){return(this.time.current-this.time.start)/this.time.duration*100}}},function(){var e=this.$createElement,t=this._self._c||e;return this.isInView?t("div",{class:{"segel-indicator":!0},style:{left:this.left+"%"}}):this._e()},[],!1,null,null,null).exports,l=c({props:["labels"]},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"segel-ruler"},[n("ul",e._l(e.labels,function(t){return n("li",[n("span",[e._v("\n        "+e._s(t)+"\n      ")])])}),0)])},[],!1,null,null,null).exports,d=n("9720"),f=n.n(d),h=n("8bbf"),p=new(n.n(h).a),g={};g.create=function(e,t,n){return i={x:e/n,y:t},[f.a.createSnapGrid(i)];var i},g.round=function(e,t,n){var i=t/n,r=e%i,s=e-r;return r>=i/2?s+i:s};var v=g,m=c({props:{id:{type:[String,Number],required:!0},resource:{type:[String,Number],required:!0},status:{type:String,default:"confirmed"},editable:{type:Boolean,default:!0},start:{type:Number,required:!0},end:{type:Number,required:!0},classes:{type:Array,required:!1,default:function(){return[]}},title:{type:String,required:!1,default:""}},data:function(){return{isInteractDragging:!1,isInteractResizing:!1,interactPosition:{x:0,y:0},interactSize:{width:null,height:null}}},inject:["config","grid","time"],watch:{isEditable:function(e){f()(this.$el).draggable().enabled=e,f()(this.$el).resizable().enabled=e},grid:{handler:function(){this.handleResize()},deep:!0}},computed:{isEditable:function(){return!!this.config.editable&&!!this.editable&&"updating"!==this.status&&(!!this.config.editableInPast||this.start>this.time.current)},isInView:function(){return a()(this.start,this.time.start,this.time.end)||a()(this.end,this.time.start,this.time.end)||this.start<this.time.start&&this.end>this.time.start||this.end<this.time.end&&this.end>this.time.end},duration:function(){return this.end-this.start},styleLeft:function(){return"".concat((this.start-this.time.start)/this.time.duration*100,"%")},styleWidth:function(){return this.isInteractResizing?"".concat(this.interactSize.width,"px"):"".concat(this.duration/this.time.duration*100,"%")},styleTransform:function(){if(this.isInteractDragging||this.isInteractResizing){var e=this.interactPosition,t=e.x,n=e.y;return"translate(".concat(t,"px, ").concat(n,"px)")}return null},classAttribute:function(){var e={"segel-booking":!0,editable:this.isEditable,dragging:this.isInteractDragging,resizing:this.isInteractResizing};return Array.isArray(this.classes)&&this.classes.length>0&&this.classes.forEach(function(t){e[t]=!0}),e},styleAttribute:function(){return{left:this.styleLeft,width:this.styleWidth,transform:this.styleTransform}}},methods:{handleDblclick:function(){this.isEditable&&(p.$emit("bookings-delete",{id:this.id}),window.document.documentElement.setAttribute("style",""))},handleResize:function(){f()(this.$el).draggable().modifiers[0].options.targets=this.grid.snap,f()(this.$el).resizable().modifiers[0].options.targets=this.grid.snap,f()(this.$el).resizable().modifiers[1].options.min=this.grid.size.min,f()(this.$el).resizable().modifiers[1].options.max=this.grid.size.max},interactSetPosition:function(e){var t=e.x,n=void 0===t?0:t,i=e.y,r=void 0===i?0:i;this.interactPosition={x:n,y:r}},interactResetPosition:function(){this.interactSetPosition({x:0,y:0})},interactSetSize:function(e){var t=e.width,n=void 0===t?0:t,i=e.height,r=void 0===i?0:i;this.interactSize={width:n,height:r}},interactResetSize:function(){this.interactSetSize({width:null,height:null})}},mounted:function(){this.$nextTick(function(){var e=this;null===this.grid.height&&p.$emit("grid-height",this.$el.offsetHeight+1),f()(this.$el).draggable({enabled:void 0===this.isEditable||this.isEditable,modifiers:[f.a.modifiers.snap({enabled:!0,targets:this.grid.snap,offset:"startCoords"})],restrict:{restriction:".segel-resources"},onstart:function(){e.isInteractDragging=!0},onmove:function(t){var n=e.interactPosition.x+t.dx,i=e.interactPosition.y+t.dy;e.interactSetPosition({x:n,y:i})},onend:function(){e.isInteractDragging=!1}}),f()(this.$el).resizable({enabled:void 0===this.isEditable||this.isEditable,modifiers:[f.a.modifiers.snap({enabled:!0,targets:this.grid.snap,offset:"startCoords"}),f.a.modifiers.restrictSize(this.grid.size)],edges:{top:!1,bottom:!1,left:".segel-resize-handle__left",right:".segel-resize-handle__right"},onstart:function(){e.isInteractResizing=!0},onmove:function(t){var n=e.interactPosition.x+t.deltaRect.left,i=e.interactPosition.y+t.deltaRect.top,r=t.rect.width,s=t.rect.height;e.interactSetPosition({x:n,y:i}),e.interactSetSize({width:r,height:s})},onend:function(){var t=Math.round((e.$el.offsetLeft+e.interactPosition.x)/e.$parent.$el.clientWidth*e.time.duration),n=Math.round(e.$el.getBoundingClientRect().width/e.$parent.$el.clientWidth*e.time.duration);p.$emit("bookings-update",{id:e.id,resource:e.resource,start:v.round(e.time.start+t,e.time.duration,e.config.steps),end:v.round(e.time.start+t+n,e.time.duration,e.config.steps),editable:e.editable,classes:e.classes,status:e.status,title:e.title}),e.isInteractResizing=!1,e.interactResetSize(),e.interactResetPosition()}})})},beforeDestroy:function(){f()(this.$el).unset()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isInView?n("li",{class:e.classAttribute,style:e.styleAttribute,attrs:{title:e.title},on:{dblclick:e.handleDblclick}},[e.isEditable?n("span",{staticClass:"segel-resize-handle segel-resize-handle__left"},[e._v("⋮")]):e._e(),e.isEditable?n("span",{staticClass:"segel-resize-handle segel-resize-handle__right"},[e._v("⋮")]):e._e(),"updating"===e.status?n("div",{staticClass:"progress"}):e._e()]):e._e()},[],!1,null,null,null).exports,b=new Date(1e4,1,1),w={booking:function(e){return e.start=this.date(e.start),e.end=this.date(e.end),e},resource:function(e){return e},date:function(e){var t=e;switch("[object String]"===Object.prototype.toString.call(e)&&/^\d+$/.test(e)&&(e=parseInt(e)),Object.prototype.toString.call(e)){case"[object Date]":t=e.getTime()/1e3;break;case"[object Number]":t=1e3*e>b.getTime()?e/1e3:e;break;default:t=new Date(e).getTime()}return Math.floor(t)}},y=w,x=c({props:{id:{type:[String,Number],required:!0},name:{type:String,required:!0},bookings:{type:Array,default:function(){return[]}}},data:function(){return{dropTarget:!1}},inject:["config","time"],methods:{handleDblclick:function(e){if(this.config.editable&&"segel-bookings"===e.target.className){var t=Math.round(e.offsetX/this.$parent.$el.clientWidth*this.time.duration),n=this.time.duration/this.config.steps,i=v.round(t+this.time.start,this.time.duration,this.config.steps);p.$emit("bookings-create",{resource:this.id,start:i,end:i+2*n})}}},mounted:function(){this.$nextTick(function(){var e=this;f()(this.$el).dropzone({ondragenter:function(){e.$el.classList.add("droppable")},ondragleave:function(){e.$el.classList.remove("droppable")},ondrop:function(t){var n=t.relatedTarget.__vue__,i=Math.round(n.interactPosition.x/e.$el.clientWidth*e.time.duration),r={resource:e.id,start:y.date(parseInt(n.start)+i),end:y.date(parseInt(n.end)+i)};t.dragEvent.altKey?p.$emit("bookings-create",r):(r.id=n.id,p.$emit("bookings-update",r)),e.$el.classList.remove("droppable"),n.interactResetPosition()}})})},beforeDestroy:function(){f()(this.$el).unset()},components:{"segel-booking":m}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"segel-resource"},[e._v("\n  "+e._s(e.name)+"\n\n  "),n("ul",{staticClass:"segel-bookings",on:{dblclick:e.handleDblclick}},e._l(e.bookings,function(t){return n("segel-booking",{key:t.id,attrs:{id:t.id,resource:e.id,status:t.status,start:t.start,end:t.end,editable:t.editable,classes:t.classes,title:t.title}})}),1)])},[],!1,null,null,null).exports,_=c({props:{resources:{type:Array,default:function(){return[]}},bookings:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{relatedBookings:function(e){return this.bookings.filter(function(t){return t.resource===e})}},components:{"segel-resource":x}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"segel-resources"},[e._l(e.resources,function(t){return n("segel-resource",{key:t.id,attrs:{id:t.id,name:t.name,bookings:e.relatedBookings(t.id)}})}),0===e.resources.length?n("li",{staticClass:"segel-no-resources"},[e._v("\n    No resources have been selected.\n  ")]):e._e()],2)},[],!1,null,null,null).exports,S=(n("fb98"),c({props:{editable:{type:Boolean,default:function(){return!1}},editableInPast:{type:Boolean,default:function(){return!1}},bookings:{type:Array,default:function(){return[]}},resources:{type:Array,default:function(){return[]}},start:{type:Number,default:function(){return y.date((new Date).setHours(0,0,0,0)-60*(new Date).getTimezoneOffset()*1e3)}},end:{type:Number,default:function(){return y.date((new Date).setHours(24,0,0,0)-60*(new Date).getTimezoneOffset()*1e3)}},steps:{type:Number,default:function(){return 48}},labels:{type:[Array,String],default:function(){return Array(24).fill(1).map(function(e,t){return("0"+t).slice(-2)})}}},data:function(){return{timer:null,current:y.date((new Date).getTime()-60*(new Date).getTimezoneOffset()*1e3),snap:null,size:null,height:null}},computed:{duration:function(){return this.end-this.start}},mixins:[Object(s.ReactiveProvideMixin)({name:"config",include:["editable","editableInPast","steps"]}),Object(s.ReactiveProvideMixin)({name:"grid",include:["height","size","snap"]}),Object(s.ReactiveProvideMixin)({name:"time",include:["start","end","current","duration"]})],methods:{updateTimer:function(){this.current=y.date((new Date).getTime()-60*(new Date).getTimezoneOffset()*1e3)},cancelTimer:function(){clearInterval(this.timer)},handleResize:function(){this.snap=v.create(this.$el.clientWidth,this.height||36,this.steps),this.size={min:{width:this.$el.clientWidth/this.steps,height:1},max:{width:this.$el.clientWidth,height:40}}}},created:function(){var e=this;this.timer=setInterval(this.updateTimer,1e3),p.$on("grid-height",function(t){e.height=t,e.handleResize()}),p.$on("bookings-create",function(t){e.$emit("bookings-create",t)}),p.$on("bookings-update",function(t){e.$emit("bookings-update",t)}),p.$on("bookings-delete",function(t){e.$emit("bookings-delete",t)})},mounted:function(){this.handleResize(),window.addEventListener("resize",r()(this.handleResize.bind(),150))},beforeDestroy:function(){this.cancelTimer(),window.removeEventListener("resize",r()(this.handleResize.bind(),150))},components:{"segel-indicator":u,"segel-ruler":l,"segel-resources":_}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{ref:"main",staticClass:"segel"},[n("div",{staticClass:"segel-container"},[n("ul",{staticClass:"segel-grid"},e._l(e.labels.length,function(t){return n("li",[e._v(" ")])}),0),n("segel-indicator"),n("segel-ruler",{attrs:{labels:e.labels}}),n("segel-resources",{attrs:{resources:e.resources,bookings:e.bookings}})],1)])},[],!1,null,null,null));t.a=S.exports},"585a":function(e,t,n){(function(t){var n="object"==a(t)&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("c8ba"))},6428:function(e,t,n){var i=n("b4b0"),r=1/0,s=17976931348623157e292;e.exports=function(e){return e?(e=i(e))===r||e===-r?(e<0?-1:1)*s:e==e?e:0:0===e?e:0}},"8bbf":function(t,n){t.exports=e},9720:function(e,n){e.exports=t},"9e69":function(e,t,n){var i=n("2b3e").Symbol;e.exports=i},b047:function(e,t,n){var i=n("1a8c"),r=n("408c"),s=n("b4b0"),o="Expected a function",a=Math.max,c=Math.min;e.exports=function(e,t,n){var u,l,d,f,h,p,g=0,v=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function w(t){var n=u,i=l;return u=l=void 0,g=t,f=e.apply(i,n)}function y(e){var n=e-p;return void 0===p||n>=t||n<0||m&&e-g>=d}function x(){var e=r();if(y(e))return _(e);h=setTimeout(x,function(e){var n=t-(e-p);return m?c(n,d-(e-g)):n}(e))}function _(e){return h=void 0,b&&u?w(e):(u=l=void 0,f)}function S(){var e=r(),n=y(e);if(u=arguments,l=this,p=e,n){if(void 0===h)return function(e){return g=e,h=setTimeout(x,t),v?w(e):f}(p);if(m)return clearTimeout(h),h=setTimeout(x,t),w(p)}return void 0===h&&(h=setTimeout(x,t)),f}return t=s(t)||0,i(n)&&(v=!!n.leading,d=(m="maxWait"in n)?a(s(n.maxWait)||0,t):d,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==h&&clearTimeout(h),g=0,u=p=l=h=void 0},S.flush=function(){return void 0===h?f:_(r())},S}},b4b0:function(e,t,n){var i=n("1a8c"),r=n("ffd6"),s=NaN,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=c.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):a.test(e)?s:+e}},b635:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return r});var i=n("5456");function r(e){r.installed||(r.installed=!0,e.component("Segel",i.a))}var s={install:r},o=null;"undefined"!=typeof window?o=window.Vue:void 0!==e&&(o=e.Vue),o&&o.use(s),t.a=i.a}).call(this,n("c8ba"))},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":a(window))&&(n=window)}e.exports=n},cb16:function(e,t){var n=Math.max,i=Math.min;e.exports=function(e,t,r){return e>=i(t,r)&&e<n(t,r)}},f6fd:function(e,t){!function(e){var t=e.getElementsByTagName("script");"currentScript"in e||Object.defineProperty(e,"currentScript",{get:function(){try{throw new Error}catch(i){var e,n=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(i.stack)||[!1])[1];for(e in t)if(t[e].src==n||"interactive"==t[e].readyState)return t[e];return null}}})}(document)},fb15:function(e,t,n){"use strict";var i;n.r(t),"undefined"!=typeof window&&(n("f6fd"),(i=window.document.currentScript)&&(i=i.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=i[1]));var r=n("b635");n.d(t,"install",function(){return r.b}),t.default=r.a},fb98:function(e,t,n){},ffd6:function(e,t,n){var i=n("3729"),r=n("1310"),s="[object Symbol]";e.exports=function(e){return"symbol"==a(e)||r(e)&&i(e)==s}}})},"object"===a(t)&&"object"===a(e)?e.exports=o(n("XuX8"),n("zrvf")):(r=[n("XuX8"),n("zrvf")],void 0===(s="function"==typeof(i=o)?i.apply(t,r):i)||(e.exports=s))}).call(this,n("YuTi")(e))},"7l0Y":function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"/></svg>'},"8rd4":function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"/></svg>'},EJd9:function(e,t,n){var i={"./box.svg":"PR/m","./calendar.svg":"nu0A","./cheveron-left.svg":"5dyc","./cheveron-right.svg":"KEYf","./computer-desktop.svg":"7l0Y","./date-add.svg":"boaE","./download.svg":"2EVj","./folder.svg":"XOeJ","./lock-closed.svg":"pZjJ","./mobile-devices.svg":"bTgt","./search.svg":"5wfY","./stand-by.svg":"79yS","./tag.svg":"xT6C","./trash.svg":"zSjP","./upload.svg":"a80x","./user-group.svg":"8rd4","./view-hide.svg":"f8kd","./view-show.svg":"V+Wz"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id="EJd9"},KEYf:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>'},"PR/m":function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2H0V2zm1 3h18v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5zm6 2v2h6V7H7z"/></svg>'},"V+Wz":function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>'},XOeJ:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/></svg>'},YT72:function(e,t){},a80x:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z"/></svg>'},bTgt:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>'},bUC5:function(e,t,n){"use strict";n.r(t);var i=n("XuX8"),r=n.n(i),s=n("7hL+"),o=n.n(s),a=n("sEfC"),c=n.n(a),u=n("khX2"),l=n("L2JU"),d=n("vDqi"),f=n.n(d).a.create({baseURL:HYDROFON.baseURL+"/api/",withCredentials:!0}),h={namespaced:!0,state:{items:[]},mutations:{items:function(e,t){e.items=t},add:function(e,t){e.items.push({id:t.id,resource:t.resource,user:t.user,start:t.start,end:t.end,status:t.status||"confirmed",editable:HYDROFON.isAdmin||HYDROFON.user===t.user,classes:HYDROFON.user===t.user?["owner","bg-indigo-300"]:[]})},replace:function(e,t){var n=e.items.findIndex(function(e){return e.id===t.id});e.items.splice(n,1,{id:t.id,resource:t.resource,user:t.user,start:t.start,end:t.end,status:t.status||"confirmed",editable:HYDROFON.isAdmin||HYDROFON.user===t.user,classes:HYDROFON.user===t.user?["owner","bg-indigo-300"]:[]})},remove:function(e,t){var n=e.items.findIndex(function(e){return e.id===t});e.items.splice(n,1)}},actions:{fetch:function(e,t){f.get("bookings",{params:t}).then(function(t){var n=t.data.data;n.forEach(function(e){e.editable=HYDROFON.isAdmin||HYDROFON.user===e.user,e.classes=HYDROFON.user===e.user?["owner","bg-indigo-300"]:[]}),e.commit("items",n)}).catch(function(e){console.log(e)})},store:function(e,t){var n=Math.random().toString(36).substring(2);e.commit("add",Object.assign({id:n,user:HYDROFON.user,status:"updating"},t)),f.post("bookings",t).then(function(t){e.commit("add",t.data),e.commit("remove",n)}).catch(function(t){e.commit("remove",n),console.log(t)})},update:function(e,t){e.commit("replace",Object.assign({status:"updating"},t)),f.put("bookings/"+t.id,t).then(function(t){e.commit("replace",t.data)}).catch(function(e){console.log(e)})},delete:function(e,t){f.delete("bookings/"+t).then(function(n){e.commit("remove",t)}).catch(function(e){console.log(e)})}}};r.a.use(l.a);var p=new l.a.Store({modules:{bookings:h},state:{date:null},mutations:{setDate:function(e,t){history.pushState(null,null,window.HYDROFON.baseURL+"/calendar/"+new Date(1e3*t).toISOString().split("T")[0]),e.date=t}}});new r.a({el:"#app",data:{categories:[],resources:[],treeSelected:[],updatedResources:new Map},computed:{date:function(){return this.$store.state.date},expandedCategories:function(){return this.categories.filter(function(e){return e.expanded})},selectedResources:function(){var e=this;return this.resources.filter(function(t){return e.treeSelected.indexOf(t.id)>-1})}},store:p,provide:function(){return{treeSelected:this.treeSelected}},methods:{initialData:function(){this.$store.commit("setDate",window.HYDROFON.date||(new Date).setHours(0,0,0,0)/1e3),this.categories=window.HYDROFON.categories||[],this.resources=window.HYDROFON.resources||[];var e=[];sessionStorage.getItem("categories-expanded")&&(e=JSON.parse(sessionStorage.getItem("categories-expanded"))),this.categories.forEach(function(t){return t.expanded=e.indexOf(t.id)>-1});var t=[];window.HYDROFON.selectedResources&&window.HYDROFON.selectedResources.length>0?t=window.HYDROFON.selectedResources:sessionStorage.getItem("resources-selected")&&(t=JSON.parse(sessionStorage.getItem("resources-selected"))),u.a.$emit("resources-selected",t.map(function(e){return{id:e,selected:!0}}))},fetchBookings:function(){this.selectedResources.length>0&&this.$store.dispatch("bookings/fetch",{resource_id:this.selectedResources.map(function(e){return e.id}),"filter[between]":this.$store.state.date+","+(this.$store.state.date+86400),include:"user"})},handleCreateBooking:function(e){this.$store.dispatch("bookings/store",e)},handleUpdateBooking:function(e){this.$store.dispatch("bookings/update",e)},handleDeleteBooking:function(e){this.$store.dispatch("bookings/delete",e.id)},updateSelectedResources:c()(function(){var e=this;this.updatedResources.forEach(function(t,n){if(t)e.treeSelected.push(n);else for(var i=e.treeSelected.length;i--;)e.treeSelected[i]===n&&e.treeSelected.splice(i,1)}),this.updatedResources.clear()},1250)},watch:{date:function(){this.fetchBookings()},expandedCategories:function(){sessionStorage.setItem("categories-expanded",JSON.stringify(this.expandedCategories.map(function(e){return e.id})))},selectedResources:function(){this.fetchBookings(),sessionStorage.setItem("resources-selected",JSON.stringify(this.treeSelected))}},components:{segel:o.a,"calendar-header":n("h4Rw").default,"resourcelist-root":n("kc6Z").default,"topbar-impersonation":n("/DaN").default},created:function(){var e=this;u.a.$on("resources-selected",function(t){t.forEach(function(t){e.updatedResources.set(t.id,t.selected)}),e.updateSelectedResources()}),u.a.$on("categories-expanded",function(t){var n=e.categories.findIndex(function(e){return e.id===t.id});e.$set(e.categories,n,Object.assign(e.categories[n],{expanded:t.expanded}))}),this.initialData()}})},boaE:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M15 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h2V0h2v2h6V0h2v2zM3 6v12h14V6H3zm6 5V9h2v2h2v2h-2v2H9v-2H7v-2h2z"/></svg>'},f8kd:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"/></svg>'},h4Rw:function(e,t,n){"use strict";n.r(t);var i=n("HFWk"),r=(n("khX2"),{props:{date:Number},data:function(){return{}},computed:{dateString:function(){return new Date(1e3*this.$store.state.date).toISOString().split("T")[0]}},methods:{handleUpdateDate:function(e){this.$store.commit("setDate",e)}},components:{icon:i.a}}),s=n("KHd+"),o=Object(s.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v(e._s(e.dateString))]),e._v(" "),n("button",{attrs:{title:"Previous"},on:{click:function(t){return e.handleUpdateDate(e.$store.state.date-86400)}}},[n("icon",{staticClass:"inline-block w-6",attrs:{icon:"cheveron-left"}}),e._v(" "),n("span",{staticClass:"screen-reader"},[e._v("Previous")])],1),e._v(" "),n("button",{attrs:{title:"Next"},on:{click:function(t){return e.handleUpdateDate(e.$store.state.date+86400)}}},[n("span",{staticClass:"screen-reader"},[e._v("Next")]),e._v(" "),n("icon",{staticClass:"inline-block w-6",attrs:{icon:"cheveron-right"}})],1)])},[],!1,null,null,null);t.default=o.exports},kc6Z:function(e,t,n){"use strict";n.r(t);var i=n("w48C"),r=n.n(i),s=n("HFWk"),o=n("khX2"),a={props:{item:Object},inject:["treeSelected"],data:function(){return{checked:this.treeSelected.indexOf(this.item.id)>-1}},methods:{handleClick:function(){o.a.$emit("resources-selected",[{id:this.item.id,selected:this.checked}])}},watch:{treeSelected:{handler:function(){this.checked=this.treeSelected.indexOf(this.item.id)>-1},deep:!0}}},c=n("KHd+"),u=Object(c.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"resourcelist-resource"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",name:"resources[]"},domProps:{value:e.item.id,checked:Array.isArray(e.checked)?e._i(e.checked,e.item.id)>-1:e.checked},on:{change:[function(t){var n=e.checked,i=t.target,r=!!i.checked;if(Array.isArray(n)){var s=e.item.id,o=e._i(n,s);i.checked?o<0&&(e.checked=n.concat([s])):o>-1&&(e.checked=n.slice(0,o).concat(n.slice(o+1)))}else e.checked=r},this.handleClick]}}),e._v("\n        "+e._s(e.item.name)+"\n    ")])])},[],!1,null,null,null).exports,l={name:"resourcelist-category",props:{item:Object},inject:["treeSelected"],data:function(){return{expanded:this.item.expanded}},computed:{hasChildren:function(){return this.item.categories&&this.item.categories.length>0||this.item.resources&&this.item.resources.length>0}},methods:{handleClick:function(e){var t=this;if(e.altKey){var n=this.item.resources.findIndex(function(e){return-1===t.treeSelected.indexOf(e.id)});o.a.$emit("resources-selected",this.item.resources.map(function(e){return{id:e.id,selected:n>-1}}))}else this.expanded=!this.expanded,o.a.$emit("categories-expanded",{id:this.item.id,expanded:this.expanded})}},components:{icon:s.a,"resourcelist-resource":u}},d=Object(c.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:{"resourcelist-category":!0,"has-children":e.hasChildren}},[n("span",{on:{click:this.handleClick}},[n("icon",{staticClass:"w-5",attrs:{icon:"folder"}}),e._v("\n        "+e._s(e.item.name)+"\n    ")],1),e._v(" "),e.hasChildren&&e.expanded?n("ul",{staticClass:"list-none resourcelist-children"},[e._l(e.item.categories,function(e){return n("resourcelist-category",{key:"category"+e.id,attrs:{item:e}})}),e._v(" "),e._l(e.item.resources,function(e){return n("resourcelist-resource",{key:"resource"+e.id,attrs:{item:e}})})],2):e._e()])},[],!1,null,null,null).exports,f={props:{date:Number,categories:Array,resources:Array},data:function(){return{collapsed:!1,datepickerConfig:{locale:{firstDayOfWeek:1}}}},computed:{dateString:function(){return new Date(1e3*this.$store.state.date).toISOString().split("T")[0]},hasChildren:function(){return this.categories&&this.categories.length>0||this.resources&&this.resources.length>0},rootResources:function(){return this.resources.filter(function(e){return 0===e.categories.length})},tree:function(){var e=this,t=this.categories;return t.forEach(function(t){t.categories=e.categories.filter(function(e){return e.parent===t.id}),t.resources=e.resources.filter(function(e){return e.categories.indexOf(t.id)>-1})}),t.filter(function(e){return null===e.parent})}},methods:{handleDateChange:function(e){this.$store.commit("setDate",new Date(e)/1e3)}},components:{"flat-pickr":r.a,icon:s.a,"resourcelist-category":d,"resourcelist-resource":u}},h=Object(c.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{class:{resourcelist:!0,collapsed:this.collapsed}},[n("section",{staticClass:"resourcelist-date"},[n("flat-pickr",{staticClass:"field",attrs:{config:e.datepickerConfig,value:e.dateString},on:{input:e.handleDateChange}}),e._v(" "),n("input",{staticClass:"btn btn-primary screen-reader",attrs:{type:"submit",value:"Show calendar"}})],1),e._v(" "),e.hasChildren?n("ul",{staticClass:"resourcelist-base list-none px-4 py-2"},[e._l(e.tree,function(e){return n("resourcelist-category",{key:"category"+e.id,attrs:{item:e}})}),e._v(" "),e._l(e.rootResources,function(e){return n("resourcelist-resource",{key:"resource"+e.id,attrs:{item:e}})})],2):e._e(),e._v(" "),n("button",{staticClass:"resourcelist-toggle",attrs:{id:"resourcelist-toggle"},on:{click:function(t){e.collapsed=!e.collapsed}}},[e.collapsed?e._e():n("icon",{attrs:{icon:"cheveron-left"}}),e._v(" "),e.collapsed?n("icon",{attrs:{icon:"cheveron-right"}}):e._e()],1)])},[],!1,null,null,null);t.default=h.exports},khX2:function(e,t,n){"use strict";var i=n("XuX8"),r=new(n.n(i).a);t.a=r},nu0A:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/></svg>'},pZjJ:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>'},pyCd:function(e,t){},xT6C:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>'},zSjP:function(e,t){e.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>'}},[[0,1,2]]]);
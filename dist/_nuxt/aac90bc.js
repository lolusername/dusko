(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{318:function(e,t,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("1b30ee58",content,!0,{sourceMap:!1})},319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const l=r(n(101)),o={types:{span:"span",image:"img"},marks:{strong:"strong",em:"em",link:"a"},styles:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",normal:"p",blockquote:"blockquote"},listItem:"li",container:"div"};let c=1;function d(e){if(!e)return{};const t=Object.entries(e).reduce(((e,[t,n])=>{switch(!0){case["_key","key"].includes(t):return e.key=n||null,e;case["class","href","src"].includes(t):return e.attrs[t]=n,e;case["_type"].includes(t):return e;default:return e.props[t]=n,e}}),{props:{},attrs:{}});return t.props={level:c,...t.props},t}function f(e,t){if(!e)return;const{_type:n,listItem:r}=e;return r?t.listItem||"li":n&&n in t.types?t.types[n]:n&&n in t.marks?t.marks[n]:void 0}function m(e,content,[mark,...t]=[],n=o,r=[]){if(!mark)return content;const l=mark in n.marks?{_type:mark,_key:""}:r.find((e=>e._key===mark));return e(f(l,n)||"span",d(l),[m(e,content,t,n,r)])}function h(e,t){const{length:n}=e;if(!t.level)return e.push(t),e;const{_type:r,children:l,level:o}=e[n-1]||{};return"list"===r&&l?o===t.level?l.push(t):h(l,t):e.push({_type:"list",children:[t],level:t.level}),e}function y(e,t,n,r=!1){return(r?t:t.reduce(h,[])).map((t=>{const r=function(e,{style:style,listItem:t},n,r){const l=style?style.match(/^h(\d)$/):[];return!t&&l&&l.length>1&&(c=Number(l[1])),!t&&style&&n.styles[style]?e(n.styles[style],{},r):r}(e,t,n,function(e,t,content,n){const r=f(t,n);return r?[e(r,d(t),content)]:content}(e,t,"block"===t._type?(t.children||[]).map((r=>"span"!==r._type?e(f(r,n)||"span",d(r),[m(e,r.text,r.marks,n,t.markDefs)]):m(e,r.text,r.marks,n,t.markDefs))):[],n));return r}))}const x={name:"SanityContent",functional:!0,props:{blocks:{type:Array,default:()=>[]},serializers:{type:Object,default:()=>({})},renderContainerOnSingleChild:{type:Boolean,default:!1}},render(e,{props:t,data:data}){const n=l.default(t.serializers,o);return n.types.list=n.types.list||{name:"ListComponent",functional:!0,props:{children:{type:Array,default:()=>[]}},render:(h2,{props:e})=>h2(e.children.length&&"number"===e.children[0].listItem?"ol":"ul",{},y(h2,e.children,n,!0))},e(n.container,data,y(e,t.blocks||[],n))}};t.SanityContent=x,t.default=x},321:function(e,t,n){"use strict";n(318)},322:function(e,t,n){var r=n(58)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.welcome-text p{\n  margin-bottom:1.5rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},327:function(e,t,n){"use strict";n.r(t);function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=n(8);n(49);encodeURIComponent;const o=String.raw||((e,...t)=>{const n=e.length-1;return e.slice(0,n).reduce(((e,n,r)=>e+n+t[r]),"")+e[n]});var c,d,f={name:"home",asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var n,l,f,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$sanity,console.log(),l=o(c||(c=r(['*[_type == "character"]']))),f=o(d||(d=r(['*[_id == "about"][0]']))),t.next=6,n.fetch(l);case 6:return m=t.sent,t.next=9,n.fetch(f);case 9:return h=t.sent,t.abrupt("return",{characters:m,globalInfo:h});case 11:case"end":return t.stop()}}),t)})))()}},m=(n(321),n(18)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"dark container mx-auto"},[n("section",{staticClass:"flex justify-between space-x-16 pt-24"},[n("img",{staticClass:"max-w-lg border-8",attrs:{src:e.$urlFor(e.globalInfo.welcomeImage),alt:"Artwork representing the collection",loading:"lazy"}}),e._v(" "),n("div",{staticClass:"text-3xl"},[n("h1",{staticClass:"font-heading text-6xl font-bold mb-3"},[e._v("Welcome")]),e._v(" "),n("article",{staticClass:"font-bold border-b pb-12 welcome-text"},[n("SanityContent",{attrs:{blocks:e.globalInfo.welcomeText}})],1)])]),e._v(" "),n("section",{staticClass:"max-w-6xl mx-auto mb-24"},[n("h3",{staticClass:"font-heading text-center text-5xl font-bold mt-12 text-green-300"},[e._v("\n      VOL.2 Character NFTs:\n    ")]),e._v(" "),n("div",{staticClass:"grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 p-4 border"},e._l(e.characters,(function(t){return n("article",{key:t._id},[n("a",{staticClass:"inline",attrs:{href:""}},[n("img",{attrs:{src:e.$urlFor(t.charImage),alt:t.description,loading:"lazy"}}),e._v(" "),n("p",{staticClass:"\n              text-yellow-300\n              capitalize\n              text-3xl text-center\n              pt-2\n              font-heading\n            "},[e._v("\n            "+e._s(t.name)+"\n          ")])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SanityContent:n(319).default})}}]);
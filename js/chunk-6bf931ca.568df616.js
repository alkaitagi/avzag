(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bf931ca"],{"07ac":function(e,t,n){var c=n("23e7"),r=n("6f53").values;c({target:"Object",stat:!0},{values:function(e){return r(e)}})},"13d5":function(e,t,n){"use strict";var c=n("23e7"),r=n("d58f").left,a=n("a640"),o=n("ae40"),u=n("2d00"),i=n("605d"),s=a("reduce"),l=o("reduce",{1:0}),b=!i&&u>79&&u<83;c({target:"Array",proto:!0,forced:!s||!l||b},{reduce:function(e){return r(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1e10":function(e,t,n){"use strict";n("b738")},"21ae":function(e,t,n){"use strict";n("6fc0")},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n("6b75");function r(e){if(Array.isArray(e))return Object(c["a"])(e)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var o=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e){return r(e)||a(e)||Object(o["a"])(e)||u()}},"293e":function(e,t,n){"use strict";n("8b20")},"3c94":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),r=Object(c["O"])("data-v-71753b3c");Object(c["v"])("data-v-71753b3c");var a={key:0,class:"section col-1"},o={class:"col-1"},u={class:"row"},i={key:1,class:"col-1 flex"},s={class:"scroll"},l={key:0,class:"col"},b={class:"col-0"},d={key:1,class:"col-0"};Object(c["t"])();var f=r((function(e,t,n,r,f,O){var j=Object(c["B"])("toggle"),v=Object(c["B"])("btn"),p=Object(c["B"])("PhraseCard");return e.corpus?(Object(c["s"])(),Object(c["d"])("div",a,[Object(c["h"])("div",o,[Object(c["h"])("div",u,[Object(c["h"])(j,{modelValue:e.searching,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searching=t}),icon:"search"},null,8,["modelValue"]),e.searching?Object(c["N"])((Object(c["s"])(),Object(c["d"])("input",{key:0,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.query=t}),class:"flex",type:"text",placeholder:"Search all phrases..."},null,512)),[[c["I"],e.query]]):(Object(c["s"])(),Object(c["d"])("h2",i,[Object(c["N"])(Object(c["h"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.section=t}),style:{flex:"none"},onChange:t[4]||(t[4]=function(t){return e.select(e.section)})},[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.corpus,(function(e){return Object(c["s"])(),Object(c["d"])("option",{key:e.id,value:e},Object(c["D"])(e.name),9,["value"])})),128))],544),[[c["H"],e.section]])]))]),Object(c["h"])("div",s,[e.searching?(Object(c["s"])(),Object(c["d"])("div",l,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.phrases,(function(t,n){return Object(c["s"])(),Object(c["d"])("div",{key:n,class:"col"},[Object(c["h"])("h2",null,Object(c["D"])(e.corpus[n].name),1),Object(c["h"])("div",b,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t,(function(t){return Object(c["s"])(),Object(c["d"])(v,{key:t,text:e.corpus[n].phrases[t].name,"is-on":e.phrase===e.corpus[n].phrases[t],onClick:function(c){return e.select(e.corpus[n],e.corpus[n].phrases[t])}},null,8,["text","is-on","onClick"])})),128))])])})),128))])):(Object(c["s"])(),Object(c["d"])("div",d,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.phrases,(function(t){return Object(c["s"])(),Object(c["d"])(v,{key:t.id,text:t.name,"is-on":e.phrase===t,onClick:function(n){return e.select(null,t)}},null,8,["text","is-on","onClick"])})),128))]))])]),e.phrase?(Object(c["s"])(),Object(c["d"])("div",{key:e.phrase.id,class:"col-1"},[Object(c["h"])(p,{phrase:e.phrase},null,8,["phrase"]),(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.phrasebooks,(function(t,n){return Object(c["s"])(),Object(c["d"])(p,{key:n,lect:n,phrase:t[e.phrase.id]},null,8,["lect","phrase"])})),128))])):Object(c["e"])("",!0)])):Object(c["e"])("",!0)})),O=(n("4de4"),n("caad"),n("d81d"),n("13d5"),n("2532"),n("3835")),j=Object(c["O"])("data-v-d6768886");Object(c["v"])("data-v-d6768886");var v={key:0,class:"col card flag"},p={key:0,class:"row small wrap",style:{width:"100%"}},h={class:"flex"},y={class:"row"},g={class:"row wrap flex"};Object(c["t"])();var m=j((function(e,t,n,r,a,o){var u=Object(c["B"])("Flag"),i=Object(c["B"])("toggle"),s=Object(c["B"])("btn"),l=Object(c["B"])("Context"),b=Object(c["B"])("Block"),d=Object(c["B"])("Notes");return e.phrase?(Object(c["s"])(),Object(c["d"])("div",v,[Object(c["h"])(u,{lect:e.lect,class:"blur"},null,8,["lect"]),e.lect?(Object(c["s"])(),Object(c["d"])("div",p,[Object(c["h"])("h2",h,Object(c["D"])(e.lect),1),Object(c["h"])("div",y,[Object(c["h"])(i,{modelValue:e.playing,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.playing=t}),icon:"play_arrow"},null,8,["modelValue"]),Object(c["h"])(s,{icon:"content_copy",onClick:e.copy},null,8,["onClick"]),Object(c["h"])(i,{modelValue:e.glossed,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.glossed=t}),icon:"layers"},null,8,["modelValue"])])])):Object(c["e"])("",!0),Object(c["h"])(l,{translation:e.lect?e.phrase.context:null,blocks:e.vblocks},null,8,["translation","blocks"]),Object(c["h"])("div",g,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.phrase.blocks,(function(t,n){return Object(c["s"])(),Object(c["d"])("div",{key:n,class:"blocks row"},[Object(c["h"])("p",{class:"playback",style:{width:e.playbacks[n]}},null,4),Object(c["h"])(b,{block:t,glossed:e.glossed,onUpdate:function(t){return e.vblocks[n]=t}},null,8,["block","glossed","onUpdate"])])})),128))]),Object(c["h"])(d,{class:"text-caption",notes:e.phrase.notes},null,8,["notes"])])):Object(c["e"])("",!0)})),k=(n("a15b"),n("2909")),x=n("5794"),w=n("72e9"),C=n("d9c7"),S=n("f929"),E=n("e7de"),B=Object(c["i"])({components:{Context:x["a"],Block:w["a"],Notes:C["a"],Flag:S["a"]},props:{lect:{type:String,default:""},phrase:{type:Object,default:void 0}},setup:function(e){var t=Object(c["y"])(!1),n=Object(c["w"])([]),r=Object(c["b"])((function(){return n.filter((function(e){var t=e.state;return t})).map((function(e){var t=e.text;return t})).join(" ")}));function a(){navigator.clipboard.writeText(r.value)}var o=Object(c["y"])([]);Object(c["K"])(n,(function(t){return E["a"].getUrls(o,e.lect,t.map((function(e){var t=e.state;return null===t||void 0===t?void 0:t.texts.map((function(e){var t=e.plain;return t}))})).map((function(e){var t;return"phrasebook/"+(null!==(t=null===e||void 0===e?void 0:e.join(""))&&void 0!==t?t:"")})))}));var u=Object(c["b"])({get:function(){return E["a"].url&&o.value.includes(E["a"].url)},set:function(e){e?E["a"].play.apply(E["a"],Object(k["a"])(o.value)):E["a"].stop()}}),i=Object(c["y"])([]);return Object(c["K"])([function(){return E["a"].playback},function(){return E["a"].index},u],(function(e,t){var n=Object(O["a"])(e,3),c=n[0],r=n[1],a=n[2],o=Object(O["a"])(t,2),u=o[1];i.value[u]="0",a&&(i.value[r]=100*c+"%")})),{glossed:t,vblocks:n,copy:a,playing:u,playbacks:i}}});n("6aee");B.render=m,B.__scopeId="data-v-d6768886";var D=B,_=(n("96cf"),n("1da1")),z=n("3a0b"),A=Object(c["C"])([]),P=Object(c["C"])(),V=Object(c["C"])(),I=Object(c["C"])(),U=Object(z["a"])(Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(z["b"])("phrasebook");case 2:return A.value=e.sent,e.next=5,Object(z["c"])("phrasebook");case 5:P.value=e.sent,V.value=A.value[0],I.value=V.value.phrases[0];case 8:case"end":return e.stop()}}),e)})))),R=n("7ec3"),T=Object(c["i"])({components:{PhraseCard:D},setup:function(){U();var e=Object(c["y"])({});Object(c["K"])(I,(function(t){return Object(R["c"])(e,null===t||void 0===t?void 0:t.context)}),{immediate:!0}),Object(c["u"])("context",e);var t=Object(c["y"])(!1),n=Object(c["y"])(""),r=Object(c["b"])((function(){var e;return t.value?A.value.reduce((function(e,t,c){return e[c]=t.phrases.map((function(e,t){return[e,t]})).filter((function(e){var t=Object(O["a"])(e,1),c=t[0];return c.name.includes(n.value)})).map((function(e){var t=Object(O["a"])(e,2),n=t[1];return n})),e[c].length||delete e[c],e}),{}):null===(e=V.value)||void 0===e?void 0:e.phrases}));function a(e,t){var n;e&&(V.value=e),I.value=null!==t&&void 0!==t?t:null===(n=V.value)||void 0===n?void 0:n.phrases[0]}return{searching:t,query:n,corpus:A,section:V,phrase:I,select:a,phrases:r,phrasebooks:P}}});n("1e10");T.render=f,T.__scopeId="data-v-71753b3c";t["default"]=T},"45fc":function(e,t,n){"use strict";var c=n("23e7"),r=n("b727").some,a=n("a640"),o=n("ae40"),u=a("some"),i=o("some");c({target:"Array",proto:!0,forced:!u||!i},{some:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5794:function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["O"])("data-v-40007e60");Object(c["v"])("data-v-40007e60");var a={class:"row text-caption wrap"},o=Object(c["h"])("div",{class:"icon"},"info",-1),u=Object(c["g"])("…");Object(c["t"])();var i=r((function(e,t,n,r,i,s){return Object(c["s"])(),Object(c["d"])("div",a,[o,e.any?(Object(c["s"])(!0),Object(c["d"])(c["a"],{key:0},Object(c["z"])(e.translated,(function(e,t){return Object(c["s"])(),Object(c["d"])(c["a"],{key:t},[e.length?(Object(c["s"])(!0),Object(c["d"])(c["a"],{key:0},Object(c["z"])(e,(function(e){return Object(c["s"])(),Object(c["d"])("p",{key:e+"--"+t,class:"colored-dot-"+t},Object(c["D"])(e),3)})),128)):Object(c["e"])("",!0)],64)})),128)):(Object(c["s"])(),Object(c["d"])(c["a"],{key:1},[u],64))])})),s=(n("4de4"),n("4160"),n("d81d"),n("45fc"),n("4fad"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),l=n("3835"),b=n("b85c"),d=Object(c["i"])({name:"Context",props:{translation:{type:Object,default:function(){return{}}},blocks:{type:Array,default:function(){return[]}}},setup:function(e){var t=Object(c["l"])("context",{}),n=Object(c["b"])((function(){var t,n={},c=Object(b["a"])(e.blocks);try{for(c.s();!(t=c.n()).done;){var r=t.value.state,a=null===r||void 0===r?void 0:r.conditions;a&&Object.entries(a).forEach((function(e){var t=Object(l["a"])(e,2),c=t[0],r=t[1];return Object.entries(r).forEach((function(e){var t=Object(l["a"])(e,1),r=t[0];n[c]||(n[c]=new Set),n[c].add(r)}))}))}}catch(o){c.e(o)}finally{c.f()}return n}));function r(e,t){return(null===e||void 0===e?void 0:e[t])||t}var a=Object(c["b"])((function(){return Object.entries(t.value).map((function(t){var c=Object(l["a"])(t,2),a=c[0],o=c[1];return Object(s["a"])(o).filter((function(e){var t;return!(null!==(t=n.value[a])&&void 0!==t&&t.has(e))})).map((function(t){var n;return r(null===(n=e.translation)||void 0===n?void 0:n[a],t)}))}))})),o=Object(c["b"])((function(){return a.value.some((function(e){return null===e||void 0===e?void 0:e.length}))}));return{translated:a,any:o}}});n("5e8b");d.render=i,d.__scopeId="data-v-40007e60";t["a"]=d},"5e8b":function(e,t,n){"use strict";n("cbef")},"6aee":function(e,t,n){"use strict";n("6ddf")},"6ddf":function(e,t,n){},"6fc0":function(e,t,n){},"72e9":function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["O"])("data-v-380e7c9d"),a=r((function(e,t,n,r,a,o){var u=Object(c["B"])("VState");return e.state?Object(c["N"])((Object(c["s"])(),Object(c["d"])("button",{key:0,class:["small",{disabled:e.disabled,glossed:e.glossed}],onClick:t[2]||(t[2]=function(){return e.move&&e.move.apply(e,arguments)})},[Object(c["h"])(u,{glossed:e.glossed,state:e.state,onText:t[1]||(t[1]=function(t){return e.text=t})},null,8,["glossed","state"])],2)),[[c["J"],e.text]]):Object(c["e"])("",!0)})),o=(n("c975"),n("3835")),u=n("af66"),i=n("7ec3"),s=Object(c["i"])({name:"Block",components:{VState:u["a"]},props:{block:{type:Array,default:void 0},glossed:Boolean},emits:["update"],setup:function(e,t){var n=t.emit,r=Object(c["y"])(),a=Object(c["y"])("");Object(c["K"])([r,a],(function(e){var t=Object(o["a"])(e,2),c=t[0],r=t[1];return n("update",{state:c,text:r})}),{immediate:!0});var u=Object(c["b"])((function(){var e;return!(null!==(e=r.value)&&void 0!==e&&e.transition)})),s=Object(c["l"])("context",{});function l(e){var t;Object(c["E"])(e)!==Object(c["E"])(r.value)&&(Object(i["a"])(s,null===(t=r.value)||void 0===t?void 0:t.conditions,!1),Object(i["a"])(s,null===e||void 0===e?void 0:e.conditions,!0),r.value=e)}function b(){var t,n;if(!u.value){var a,o=null===(t=r.value)||void 0===t?void 0:t.transition,b=e.block;if("next"===o){var d=r.value?b.indexOf(Object(c["E"])(r.value)):-1;a=b[(d+1)%b.length]}else o&&(a=Object(i["d"])(o,b,s.value));l(a),Object(i["b"])(null===(n=a)||void 0===n?void 0:n.conditions,s.value)[0]<0&&(r.value=void 0)}}return Object(c["K"])(s,(function(t){var n=Object(i["d"])(void 0,e.block,t);l(n)}),{immediate:!0,deep:!0}),{move:b,state:r,disabled:u,text:a}}});n("dc2a");s.render=a,s.__scopeId="data-v-380e7c9d";t["a"]=s},"7ec3":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return i}));n("4160"),n("d81d"),n("4fad"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0");var c=n("3835");function r(){return{texts:[{plain:"new state"}],transition:"next",conditions:{}}}function a(e,t){t&&(e.value={},t.forEach((function(t){var n=t.entity;return e.value[n]=new Set})))}function o(e,t){if(!e)return[1,0];for(var n=0,r=0,a=0,o=Object.entries(e);a<o.length;a++)for(var u=Object(c["a"])(o[a],2),i=u[0],s=u[1],l=0,b=Object.entries(s);l<b.length;l++){var d,f=Object(c["a"])(b[l],2),O=f[0],j=f[1],v=null===(d=t[i])||void 0===d?void 0:d.has(O);if(!j&&!v)return[-1,0];v&&(n+=1),r+=1}return[n/(r||1),r]}function u(e,t,n){var r,a,u=-1,i=0,s=null!==(r=null===e||void 0===e?void 0:e.map((function(e){return t[e]})))&&void 0!==r?r:t;return s.forEach((function(e){var t=o(e.conditions,n),r=Object(c["a"])(t,2),s=r[0],l=r[1];(1===u?1===s&&l>i:s>u)&&(a=e,u=s,i=l)})),a}function i(e,t,n){t&&e.value&&Object.entries(t).forEach((function(t){var r=Object(c["a"])(t,2),a=r[0],o=r[1];return Object.entries(o).forEach((function(t){var r=Object(c["a"])(t,2),o=r[0],u=r[1],i=e.value[a];u&&i&&(n?i.add(o):i.delete(o))}))}))}},"891a":function(e,t,n){},"8b20":function(e,t,n){},"99af":function(e,t,n){"use strict";var c=n("23e7"),r=n("d039"),a=n("e8b5"),o=n("861d"),u=n("7b0b"),i=n("50c4"),s=n("8418"),l=n("65f0"),b=n("1dde"),d=n("b622"),f=n("2d00"),O=d("isConcatSpreadable"),j=9007199254740991,v="Maximum allowed index exceeded",p=f>=51||!r((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),h=b("concat"),y=function(e){if(!o(e))return!1;var t=e[O];return void 0!==t?!!t:a(e)},g=!p||!h;c({target:"Array",proto:!0,forced:g},{concat:function(e){var t,n,c,r,a,o=u(this),b=l(o,0),d=0;for(t=-1,c=arguments.length;t<c;t++)if(a=-1===t?o:arguments[t],y(a)){if(r=i(a.length),d+r>j)throw TypeError(v);for(n=0;n<r;n++,d++)n in a&&s(b,d,a[n])}else{if(d>=j)throw TypeError(v);s(b,d++,a)}return b.length=d,b}})},a8d4:function(e,t,n){},ade3:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))},af66:function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["O"])("data-v-661aca89");Object(c["v"])("data-v-661aca89");var a={class:"segments"},o={class:"row dashes"};Object(c["t"])();var u=r((function(e,t,n,r,u,i){return Object(c["s"])(),Object(c["d"])("div",{class:["display row",{glossed:e.canGloss}]},[Object(c["h"])("div",a,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.types,(function(t,n){return Object(c["s"])(),Object(c["d"])("p",{key:t,class:"text-"+t},[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.texts[n],(function(t,n){return Object(c["s"])(),Object(c["d"])("span",{key:n,class:e.textColors[n]},Object(c["D"])(t),3)})),128))],2)})),128))]),Object(c["h"])("div",o,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.dashColors,(function(e,t){return Object(c["s"])(),Object(c["d"])("p",{key:t,class:e},null,2)})),128))])],2)})),i=(n("4de4"),n("c975"),n("a15b"),n("d81d"),n("45fc"),n("4fad"),n("b64b"),n("07ac"),n("3835")),s=Object(c["i"])({name:"State",props:{state:{type:Object,default:function(){return{}}},glossed:{type:Boolean,default:!1}},emits:["text"],setup:function(e,t){var n=t.emit,r=Object(c["l"])("context",{}),a=Object(c["b"])((function(){return Object.keys(r.value)})),o=Object(c["b"])((function(){return e.glossed&&e.state.texts.some((function(e){var t=e.ipa,n=e.gloss;return t||n}))})),u=Object(c["b"])((function(){return o.value?["ipa","gloss"]:["plain"]})),s=Object(c["b"])((function(){return u.value.map((function(t){var n;return null===(n=e.state.texts)||void 0===n?void 0:n.map((function(e){return e[t]}))}))}));Object(c["K"])(s,(function(e){if(e){var t=e.map((function(e){return null===e||void 0===e?void 0:e.join("")})),c=1===t.length?t[0]:t.join("\n");n("text",c)}}),{immediate:!0,deep:!0});var l=Object(c["b"])((function(){return e.state.texts.map((function(e){var t=e.entity;return null!==t&&void 0!==t?t:""})).map((function(e){return a.value.indexOf(e)})).map((function(e){return"colored-"+e}))})),b=Object(c["b"])((function(){return e.state.transition&&e.state.conditions?Object.entries(e.state.conditions).filter((function(e){var t=Object(i["a"])(e,2),n=t[1];return Object.values(n).some((function(e){return e}))})).map((function(e){var t=Object(i["a"])(e,1),n=t[0];return a.value.indexOf(n)})).map((function(e){return"colored-back-"+e})):[]}));return{types:u,texts:s,canGloss:o,textColors:l,dashColors:b}}});n("293e");s.render=u,s.__scopeId="data-v-661aca89";t["a"]=s},b64b:function(e,t,n){var c=n("23e7"),r=n("7b0b"),a=n("df75"),o=n("d039"),u=o((function(){a(1)}));c({target:"Object",stat:!0,forced:u},{keys:function(e){return a(r(e))}})},b738:function(e,t,n){},c178:function(e,t,n){"use strict";n("a8d4")},c975:function(e,t,n){"use strict";var c=n("23e7"),r=n("4d64").indexOf,a=n("a640"),o=n("ae40"),u=[].indexOf,i=!!u&&1/[1].indexOf(1,-0)<0,s=a("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});c({target:"Array",proto:!0,forced:i||!s||!l},{indexOf:function(e){return i?u.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},cbef:function(e,t,n){},d58f:function(e,t,n){var c=n("1c0b"),r=n("7b0b"),a=n("44ad"),o=n("50c4"),u=function(e){return function(t,n,u,i){c(n);var s=r(t),l=a(s),b=o(s.length),d=e?b-1:0,f=e?-1:1;if(u<2)while(1){if(d in l){i=l[d],d+=f;break}if(d+=f,e?d<0:b<=d)throw TypeError("Reduce of empty array with no initial value")}for(;e?d>=0:b>d;d+=f)d in l&&(i=n(i,l[d],d,s));return i}};e.exports={left:u(!1),right:u(!0)}},d9c7:function(e,t,n){"use strict";var c=n("7a23"),r={key:0,class:"col"},a={key:0},o={key:1,class:"highlight-font"},u={key:2},i={key:3,class:"text-ipa"};function s(e,t,n,s,l,b){return e.notes.length?(Object(c["s"])(),Object(c["d"])("div",r,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.pieces,(function(e,t){return Object(c["s"])(),Object(c["d"])("p",{key:t},[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e,(function(e,t){var n=e.text,r=e.display;return Object(c["s"])(),Object(c["d"])(c["a"],{key:t},["plain"===r?(Object(c["s"])(),Object(c["d"])("span",a,Object(c["D"])(n),1)):"highlight"===r?(Object(c["s"])(),Object(c["d"])("span",o,Object(c["D"])(n),1)):"grapheme"===r?(Object(c["s"])(),Object(c["d"])("b",u,Object(c["D"])(n),1)):(Object(c["s"])(),Object(c["d"])("span",i,Object(c["D"])(n),1))],64)})),128))])})),128))])):Object(c["e"])("",!0)}n("d81d"),n("fb6a"),n("ac1f"),n("1276");var l=n("3835"),b=Object(c["i"])({props:{notes:{type:Array,default:function(){return[]}}},setup:function(e){function t(e,t,n){return e[0]===t&&e[e.length-1]===n}function n(e){for(var n=[["*","*","highlight"],["/","/","phoneme"],["<",">","grapheme"]],c=0,r=n;c<r.length;c++){var a=Object(l["a"])(r[c],3),o=a[0],u=a[1],i=a[2];if(t(e,o,u))return{text:e.slice(1,-1),display:i}}return{text:e,display:"plain"}}var r=Object(c["b"])((function(){var t=/(\/[^/]+\/|<[^<>]+>|\*[^*]+\*)/g;return e.notes.map((function(e){return e.split(t).map((function(e){return n(e)}))}))}));return{pieces:r}}});b.render=s;t["a"]=b},dbb4:function(e,t,n){var c=n("23e7"),r=n("83ab"),a=n("56ef"),o=n("fc6a"),u=n("06cf"),i=n("8418");c({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,n,c=o(e),r=u.f,s=a(c),l={},b=0;while(s.length>b)n=r(c,t=s[b++]),void 0!==n&&i(l,t,n);return l}})},dc2a:function(e,t,n){"use strict";n("891a")},e439:function(e,t,n){var c=n("23e7"),r=n("d039"),a=n("fc6a"),o=n("06cf").f,u=n("83ab"),i=r((function(){o(1)})),s=!u||i;c({target:"Object",stat:!0,forced:s,sham:!u},{getOwnPropertyDescriptor:function(e,t){return o(a(e),t)}})},e7de:function(e,t,n){"use strict";n("99af"),n("caad"),n("d81d"),n("d3b7"),n("2532"),n("96cf"),n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var c=n("ade3");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=n("1da1"),u=n("7a23"),i=n("3a0b"),s=new Audio;s.ontimeupdate=function(){return l.playback=s.currentTime/s.duration},s.oncanplaythrough=s.play,s.onended=j,s.onerror=j;var l=Object(u["w"])({playback:0,index:-1,url:void 0,urls:[]});function b(e,t,n){return d.apply(this,arguments)}function d(){return d=Object(o["a"])(regeneratorRuntime.mark((function e(t,n,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c.map((function(e){return"".concat(i["d"]).concat(n,"/audio/").concat(e,".mp3")})).map((function(e,n){return fetch(e).then((function(e){return e.blob()})).then((function(e){var t=e.type;return t.includes("audio")})).then((function(c){return t.value[n]=c?e:""}))}));case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(){return O.apply(this,arguments)}function O(){return O=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,c,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(v(),l.index=-1,t=r.length,n=new Array(t),c=0;c<t;c++)n[c]=r[c];l.urls=n,l.url=n[0],j();case 6:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(){l.url||v(),l.index+=1,l.url=l.urls[l.index],l.playback=0,l.index>=l.urls.length?v():s.src=l.url}function v(){s.pause(),l.playback=0,l.index=-1,l.url=void 0,l.urls.length=0}t["a"]=Object(u["x"])(a(a({},Object(u["F"])(l)),{},{getUrls:b,play:f,stop:v,next:j}))},f929:function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["O"])("data-v-54304c3e"),a=r((function(e,t,n,r,a,o){return e.lect?(Object(c["s"])(),Object(c["d"])("img",{key:0,src:e.src,class:"no-select"},null,8,["src"])):Object(c["e"])("",!0)})),o=n("3a0b"),u=Object(c["i"])({props:{lect:{type:String,default:""}},setup:function(e){var t=Object(c["b"])((function(){return o["d"]+e.lect+"/flag.png"}));return{src:t}}});n("21ae"),n("c178");u.render=a,u.__scopeId="data-v-54304c3e";t["a"]=u}}]);
//# sourceMappingURL=chunk-6bf931ca.568df616.js.map
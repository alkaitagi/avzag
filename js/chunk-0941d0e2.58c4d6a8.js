(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0941d0e2"],{2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n("6b75");function a(t){if(Array.isArray(t))return Object(c["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){return a(t)||r(t)||Object(o["a"])(t)||u()}},"293e":function(t,e,n){"use strict";n("8b20")},"2bc4":function(t,e,n){"use strict";n("8722")},"3b5b":function(t,e,n){},"3c94":function(t,e,n){"use strict";n.r(e);n("b0c0");var c=n("7a23"),a=Object(c["N"])("data-v-262378b6");Object(c["w"])("data-v-262378b6");var r={key:0,class:"section col-1"},o={class:"col-1"},u={class:"row-1"},i={key:1,class:"col-1 flex"},l={class:"scroll"},s={key:0,class:"col"},b={class:"col-0"},d={key:1,class:"col-0"};Object(c["u"])();var O=a((function(t,e,n,a,O,j){var f=Object(c["B"])("toggle"),v=Object(c["B"])("btn"),p=Object(c["B"])("PhraseCard");return t.corpus?(Object(c["t"])(),Object(c["d"])("div",r,[Object(c["h"])("div",o,[Object(c["h"])("div",u,[Object(c["h"])(f,{modelValue:t.searching,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.searching=e}),icon:"search"},null,8,["modelValue"]),t.searching?Object(c["M"])((Object(c["t"])(),Object(c["d"])("input",{key:0,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.query=e}),class:"flex",type:"text",placeholder:"Search all phrases..."},null,512)),[[c["H"],t.query]]):(Object(c["t"])(),Object(c["d"])("h2",i,[Object(c["M"])(Object(c["h"])("select",{"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.section=e}),style:{flex:"none"},onChange:e[4]||(e[4]=function(e){return t.select(t.section)})},[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.corpus,(function(t){return Object(c["t"])(),Object(c["d"])("option",{key:t.id,value:t},Object(c["D"])(t.name),9,["value"])})),128))],544),[[c["G"],t.section]])]))]),Object(c["h"])("div",l,[t.searching?(Object(c["t"])(),Object(c["d"])("div",s,[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.phrases,(function(e,n){return Object(c["t"])(),Object(c["d"])("div",{key:n,class:"col"},[Object(c["h"])("h2",null,Object(c["D"])(t.corpus[n].name),1),Object(c["h"])("div",b,[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e,(function(e){return Object(c["t"])(),Object(c["d"])(v,{key:e,text:t.corpus[n].phrases[e].name,"is-on":t.phrase===t.corpus[n].phrases[e],onClick:function(c){return t.select(t.corpus[n],t.corpus[n].phrases[e])}},null,8,["text","is-on","onClick"])})),128))])])})),128))])):(Object(c["t"])(),Object(c["d"])("div",d,[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.phrases,(function(e){return Object(c["t"])(),Object(c["d"])(v,{key:e.id,text:e.name,"is-on":t.phrase===e,onClick:function(n){return t.select(null,e)}},null,8,["text","is-on","onClick"])})),128))]))])]),t.phrase?(Object(c["t"])(),Object(c["d"])("div",{key:t.phrase.id,class:"col-1"},[Object(c["h"])(p,{phrase:t.phrase},null,8,["phrase"]),(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.phrasebooks,(function(e,n){return Object(c["t"])(),Object(c["d"])(p,{key:n,lect:n,phrase:e[t.phrase.id]},null,8,["lect","phrase"])})),128))])):Object(c["e"])("",!0)])):Object(c["e"])("",!0)})),j=(n("4de4"),n("caad"),n("d81d"),n("13d5"),n("2532"),n("3835")),f=Object(c["N"])("data-v-6cd1d69b");Object(c["w"])("data-v-6cd1d69b");var v={key:0,class:"col card"},p={key:0,class:"row small wrap",style:{width:"100%"}},h={class:"flex"},y={class:"row"},m={class:"row wrap flex"};Object(c["u"])();var k=f((function(t,e,n,a,r,o){var u=Object(c["B"])("toggle"),i=Object(c["B"])("btn"),l=Object(c["B"])("Context"),s=Object(c["B"])("Block"),b=Object(c["B"])("Notes");return t.phrase?(Object(c["t"])(),Object(c["d"])("div",v,[t.lect?(Object(c["t"])(),Object(c["d"])("div",p,[Object(c["h"])("h2",h,Object(c["D"])(t.lect),1),Object(c["h"])("div",y,[Object(c["h"])(u,{modelValue:t.playing,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.playing=e}),icon:"play_arrow"},null,8,["modelValue"]),Object(c["h"])(i,{icon:"content_copy",onClick:t.copy},null,8,["onClick"]),Object(c["h"])(u,{modelValue:t.glossed,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.glossed=e}),icon:"layers"},null,8,["modelValue"])])])):Object(c["e"])("",!0),Object(c["h"])(l,{translation:t.contextTranslation,blocks:t.blocks},null,8,["translation","blocks"]),Object(c["h"])("div",m,[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.phrase.blocks,(function(e,n){return Object(c["t"])(),Object(c["d"])("div",{key:n,class:"blocks row"},[Object(c["h"])("p",{class:"playback",style:{width:t.playbacks[n]+"%"}},null,4),Object(c["h"])(s,{ref:function(e){return t.blocks.push(e)},block:e,glossed:t.glossed},null,8,["block","glossed"])])})),128))]),Object(c["h"])(b,{class:"text-caption",notes:t.phrase.notes},null,8,["notes"])])):Object(c["e"])("",!0)})),x=(n("99af"),n("4160"),n("a15b"),n("159b"),n("2909")),g=n("5794"),w=n("72e9"),C=n("d9c7"),B=n("3a0b"),E=n("e7de"),S=Object(c["i"])({components:{Context:g["a"],Block:w["a"],Notes:C["a"]},props:{lect:{type:String,default:""},phrase:{type:Object,default:void 0}},setup:function(t){var e=Object(c["y"])(!1),n=Object(c["b"])((function(){return t.lect?t.phrase.context:void 0}));Object(c["p"])((function(){return a.length=0}));var a=Object(c["x"])([]),r=Object(c["b"])((function(){return a.filter((function(t){var e=t.state;return e})).map((function(t){var e=t.text;return e})).join(" ")}));function o(){navigator.clipboard.writeText(r.value)}var u=Object(c["b"])((function(){return B["d"]+t.lect+"/phrasebook/"})),i=Object(c["b"])((function(){return a.map((function(t){var e=t.state;return null===e||void 0===e?void 0:e.texts.map((function(t){var e=t.plain;return e}))})).map((function(t){return u.value+(null===t||void 0===t?void 0:t.join(""))+".mp3"}))})),l=Object(c["b"])({get:function(){return E["playing"].value&&E["id"].value===t.lect},set:function(e){e?E["play"].apply(E,[t.lect].concat(Object(x["a"])(i.value))):E["stop"]()}}),s=Object(c["y"])([]);return Object(c["J"])([E["playback"],E["current"],l],(function(t){var e=Object(j["a"])(t,3),n=e[0],c=e[1],a=e[2];i.value.forEach((function(t,e){return s.value[e]=a&&e===c?100*n:0}))})),{glossed:e,blocks:a,copy:o,contextTranslation:n,urls:i,playing:l,playbacks:s,playback:E["playback"]}}});n("2bc4");S.render=k,S.__scopeId="data-v-6cd1d69b";var V=S,_=(n("96cf"),n("1da1")),z=Object(c["C"])([]),A=Object(c["C"])(),I=Object(c["C"])(),N=Object(c["C"])(),T=Object(B["a"])(Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(B["b"])("phrasebook");case 2:return z.value=t.sent,t.next=5,Object(B["c"])("phrasebook");case 5:A.value=t.sent,I.value=z.value[0],N.value=I.value.phrases[0];case 8:case"end":return t.stop()}}),t)})))),J=n("7ec3"),D=Object(c["i"])({components:{PhraseCard:V},setup:function(){T();var t=Object(c["y"])({});Object(c["J"])(N,(function(e){return Object(J["c"])(t,null===e||void 0===e?void 0:e.context)}),{immediate:!0}),Object(c["v"])("context",t);var e=Object(c["y"])(!1),n=Object(c["y"])(""),a=Object(c["b"])((function(){var t;return e.value?z.value.reduce((function(t,e,c){return t[c]=e.phrases.map((function(t,e){return[t,e]})).filter((function(t){var e=Object(j["a"])(t,1),c=e[0];return c.name.includes(n.value)})).map((function(t){var e=Object(j["a"])(t,2),n=e[1];return n})),t[c].length||delete t[c],t}),{}):null===(t=I.value)||void 0===t?void 0:t.phrases}));function r(t,e){var n;t&&(I.value=t),N.value=null!==e&&void 0!==e?e:null===(n=I.value)||void 0===n?void 0:n.phrases[0]}return{searching:e,query:n,corpus:z,section:I,phrase:N,select:r,phrases:a,phrasebooks:A}}});n("a8e9");D.render=O,D.__scopeId="data-v-262378b6";e["default"]=D},"45fc":function(t,e,n){"use strict";var c=n("23e7"),a=n("b727").some,r=n("a640"),o=n("ae40"),u=r("some"),i=o("some");c({target:"Array",proto:!0,forced:!u||!i},{some:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"4d5a":function(t,e,n){"use strict";n("5917")},5794:function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["N"])("data-v-caacf090");Object(c["w"])("data-v-caacf090");var r={class:"row text-caption wrap"},o=Object(c["h"])("div",{class:"icon"},"info",-1),u=Object(c["g"])("…");Object(c["u"])();var i=a((function(t,e,n,a,i,l){return Object(c["t"])(),Object(c["d"])("div",r,[o,t.any?(Object(c["t"])(!0),Object(c["d"])(c["a"],{key:0},Object(c["z"])(t.translated,(function(t,e){return Object(c["t"])(),Object(c["d"])(c["a"],{key:e},[t.length?(Object(c["t"])(!0),Object(c["d"])(c["a"],{key:0},Object(c["z"])(t,(function(t){return Object(c["t"])(),Object(c["d"])("p",{key:t+"--"+e,class:"colored-dot-"+e},Object(c["D"])(t),3)})),128)):Object(c["e"])("",!0)],64)})),128)):(Object(c["t"])(),Object(c["d"])(c["a"],{key:1},[u],64))])})),l=(n("4de4"),n("4160"),n("d81d"),n("45fc"),n("4fad"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),s=n("3835"),b=n("b85c"),d=Object(c["i"])({name:"Context",props:{translation:{type:Object,default:function(){return{}}},blocks:{type:Array,default:function(){return[]}}},setup:function(t){var e=Object(c["l"])("context",{}),n=Object(c["b"])((function(){var e,n={},c=Object(b["a"])(t.blocks);try{for(c.s();!(e=c.n()).done;){var a=e.value.state,r=null===a||void 0===a?void 0:a.conditions;r&&Object.entries(r).forEach((function(t){var e=Object(s["a"])(t,2),c=e[0],a=e[1];return Object.entries(a).forEach((function(t){var e=Object(s["a"])(t,1),a=e[0];n[c]||(n[c]=new Set),n[c].add(a)}))}))}}catch(o){c.e(o)}finally{c.f()}return n}));function a(t,e){return(null===t||void 0===t?void 0:t[e])||e}var r=Object(c["b"])((function(){return Object.entries(e.value).map((function(e){var c=Object(s["a"])(e,2),r=c[0],o=c[1];return Object(l["a"])(o).filter((function(t){var e;return!(null!==(e=n.value[r])&&void 0!==e&&e.has(t))})).map((function(e){var n;return a(null===(n=t.translation)||void 0===n?void 0:n[r],e)}))}))})),o=Object(c["b"])((function(){return r.value.some((function(t){return null===t||void 0===t?void 0:t.length}))}));return{translated:r,any:o}}});n("4d5a");d.render=i,d.__scopeId="data-v-caacf090";e["a"]=d},5917:function(t,e,n){},"72e9":function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["N"])("data-v-354bd589"),r=a((function(t,e,n,a,r,o){var u=Object(c["B"])("VState");return t.state?Object(c["M"])((Object(c["t"])(),Object(c["d"])("button",{key:0,class:["small",{disabled:t.disabled,glossed:t.glossed}],onClick:e[2]||(e[2]=function(){return t.move&&t.move.apply(t,arguments)})},[Object(c["h"])(u,{glossed:t.glossed,state:t.state,onText:e[1]||(e[1]=function(e){return t.text=e})},null,8,["glossed","state"])],2)),[[c["I"],t.text]]):Object(c["e"])("",!0)})),o=(n("c975"),n("af66")),u=n("7ec3"),i=Object(c["i"])({name:"Block",components:{VState:o["a"]},props:{block:{type:Array,default:void 0},glossed:Boolean},emits:["update:modelValue"],setup:function(t){var e=Object(c["y"])(),n=Object(c["b"])((function(){var t;return!(null!==(t=e.value)&&void 0!==t&&t.transition)})),a=Object(c["y"])(""),r=Object(c["l"])("context",{});function o(t){var n;Object(c["E"])(t)!==Object(c["E"])(e.value)&&(Object(u["a"])(r,null===(n=e.value)||void 0===n?void 0:n.conditions,!1),Object(u["a"])(r,null===t||void 0===t?void 0:t.conditions,!0),e.value=t)}function i(){var a,i;if(!n.value){var l,s=null===(a=e.value)||void 0===a?void 0:a.transition,b=t.block;if("next"===s){var d=e.value?b.indexOf(Object(c["E"])(e.value)):-1;l=b[(d+1)%b.length]}else s&&(l=Object(u["d"])(s,b,r.value));o(l),Object(u["b"])(null===(i=l)||void 0===i?void 0:i.conditions,r.value)[0]<0&&(e.value=void 0)}}return Object(c["J"])(r,(function(e){var n=Object(u["d"])(void 0,t.block,e);o(n)}),{immediate:!0,deep:!0}),{move:i,state:e,disabled:n,text:a}}});n("92f8");i.render=r,i.__scopeId="data-v-354bd589";e["a"]=i},"7ec3":function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return i}));n("4160"),n("d81d"),n("4fad"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0");var c=n("3835");function a(){return{texts:[{plain:"new state"}],transition:"next",conditions:{}}}function r(t,e){e&&(t.value={},e.forEach((function(e){var n=e.entity;return t.value[n]=new Set})))}function o(t,e){if(!t)return[1,0];for(var n=0,a=0,r=0,o=Object.entries(t);r<o.length;r++)for(var u=Object(c["a"])(o[r],2),i=u[0],l=u[1],s=0,b=Object.entries(l);s<b.length;s++){var d,O=Object(c["a"])(b[s],2),j=O[0],f=O[1],v=null===(d=e[i])||void 0===d?void 0:d.has(j);if(!f&&!v)return[-1,0];v&&(n+=1),a+=1}return[n/(a||1),a]}function u(t,e,n){var a,r,u=-1,i=0,l=null!==(a=null===t||void 0===t?void 0:t.map((function(t){return e[t]})))&&void 0!==a?a:e;return l.forEach((function(t){var e=o(t.conditions,n),a=Object(c["a"])(e,2),l=a[0],s=a[1];(1===u?1===l&&s>i:l>u)&&(r=t,u=l,i=s)})),r}function i(t,e,n){e&&t.value&&Object.entries(e).forEach((function(e){var a=Object(c["a"])(e,2),r=a[0],o=a[1];return Object.entries(o).forEach((function(e){var a=Object(c["a"])(e,2),o=a[0],u=a[1],i=t.value[r];u&&i&&(n?i.add(o):i.delete(o))}))}))}},8722:function(t,e,n){},"8b20":function(t,e,n){},"92f8":function(t,e,n){"use strict";n("3b5b")},"99af":function(t,e,n){"use strict";var c=n("23e7"),a=n("d039"),r=n("e8b5"),o=n("861d"),u=n("7b0b"),i=n("50c4"),l=n("8418"),s=n("65f0"),b=n("1dde"),d=n("b622"),O=n("2d00"),j=d("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",p=O>=51||!a((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),h=b("concat"),y=function(t){if(!o(t))return!1;var e=t[j];return void 0!==e?!!e:r(t)},m=!p||!h;c({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,c,a,r,o=u(this),b=s(o,0),d=0;for(e=-1,c=arguments.length;e<c;e++)if(r=-1===e?o:arguments[e],y(r)){if(a=i(r.length),d+a>f)throw TypeError(v);for(n=0;n<a;n++,d++)n in r&&l(b,d,r[n])}else{if(d>=f)throw TypeError(v);l(b,d++,r)}return b.length=d,b}})},a15b:function(t,e,n){"use strict";var c=n("23e7"),a=n("44ad"),r=n("fc6a"),o=n("a640"),u=[].join,i=a!=Object,l=o("join",",");c({target:"Array",proto:!0,forced:i||!l},{join:function(t){return u.call(r(this),void 0===t?",":t)}})},a8e9:function(t,e,n){"use strict";n("c5ea")},af66:function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["N"])("data-v-661aca89");Object(c["w"])("data-v-661aca89");var r={class:"segments"},o={class:"row dashes"};Object(c["u"])();var u=a((function(t,e,n,a,u,i){return Object(c["t"])(),Object(c["d"])("div",{class:["display row",{glossed:t.canGloss}]},[Object(c["h"])("div",r,[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.types,(function(e,n){return Object(c["t"])(),Object(c["d"])("p",{key:e,class:"text-"+e},[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.texts[n],(function(e,n){return Object(c["t"])(),Object(c["d"])("span",{key:n,class:t.textColors[n]},Object(c["D"])(e),3)})),128))],2)})),128))]),Object(c["h"])("div",o,[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.dashColors,(function(t,e){return Object(c["t"])(),Object(c["d"])("p",{key:e,class:t},null,2)})),128))])],2)})),i=(n("4de4"),n("c975"),n("a15b"),n("d81d"),n("45fc"),n("4fad"),n("b64b"),n("07ac"),n("3835")),l=Object(c["i"])({name:"State",props:{state:{type:Object,default:function(){return{}}},glossed:{type:Boolean,default:!1}},emits:["text"],setup:function(t,e){var n=e.emit,a=Object(c["l"])("context",{}),r=Object(c["b"])((function(){return Object.keys(a.value)})),o=Object(c["b"])((function(){return t.glossed&&t.state.texts.some((function(t){var e=t.ipa,n=t.gloss;return e||n}))})),u=Object(c["b"])((function(){return o.value?["ipa","gloss"]:["plain"]})),l=Object(c["b"])((function(){return u.value.map((function(e){var n;return null===(n=t.state.texts)||void 0===n?void 0:n.map((function(t){return t[e]}))}))}));Object(c["J"])(l,(function(t){if(t){var e=t.map((function(t){return null===t||void 0===t?void 0:t.join("")})),c=1===e.length?e[0]:e.join("\n");n("text",c)}}),{immediate:!0,deep:!0});var s=Object(c["b"])((function(){return t.state.texts.map((function(t){var e=t.entity;return null!==e&&void 0!==e?e:""})).map((function(t){return r.value.indexOf(t)})).map((function(t){return"colored-"+t}))})),b=Object(c["b"])((function(){return t.state.transition&&t.state.conditions?Object.entries(t.state.conditions).filter((function(t){var e=Object(i["a"])(t,2),n=e[1];return Object.values(n).some((function(t){return t}))})).map((function(t){var e=Object(i["a"])(t,1),n=e[0];return r.value.indexOf(n)})).map((function(t){return"colored-back-"+t})):[]}));return{types:u,texts:l,canGloss:o,textColors:s,dashColors:b}}});n("293e");l.render=u,l.__scopeId="data-v-661aca89";e["a"]=l},c5ea:function(t,e,n){},c975:function(t,e,n){"use strict";var c=n("23e7"),a=n("4d64").indexOf,r=n("a640"),o=n("ae40"),u=[].indexOf,i=!!u&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),s=o("indexOf",{ACCESSORS:!0,1:0});c({target:"Array",proto:!0,forced:i||!l||!s},{indexOf:function(t){return i?u.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-0941d0e2.58c4d6a8.js.map
import{a as e,_ as a}from"./EditorCard.d4d361a8.js";import{k as l,d as n}from"./index.43ac6aad.js";import{b as o,f as p}from"./editor.e698c371.js";import{e as d,r as i,d as t,x as s,y as r,o as m,h as u,n as c,G as f,H as v,F as g,z as V,k,A as h}from"./vendor.c8bf7c27.js";import"./file-manager.9a2fdd9a.js";var y=d({setup(){o({default:{default:[0,0],mappings:[]},filename:"converter"});const e=i(),a=t((()=>{var e,a,l;return null==(l=null==(a=null==(e=p.value)?void 0:e.mappings)?void 0:a[0])?void 0:l.pairs})),n=t((()=>{var n,o,d;const i=null!=(o=null==(n=p.value)?void 0:n.sample)?o:"";if(!a.value)return i;const t=l(i,a.value);return(null==(d=e.value)?void 0:d.pairs)?l(t,e.value.pairs.map((([e,a])=>[a,e]))):t}));return{file:p,mapping:e,converted:n}}});const U=h();s("data-v-4bb123b1");const b={key:0,class:"section col-2 small grid"},x={class:"col-2"};r();const _=U(((l,o,p,d,i,t)=>{const s=e,r=a,h=n;return l.file?(m(),u("div",b,[c("div",x,[c(s,{icon:"text_snippet",header:"Sample Text"},{default:U((()=>[f(c("textarea",{"onUpdate:modelValue":o[1]||(o[1]=e=>l.file.sample=e)},null,512),[[v,l.file.sample]]),f(c("textarea",{"onUpdate:modelValue":o[2]||(o[2]=e=>l.converted=e),readonly:""},null,512),[[v,l.converted]])])),_:1}),c(s,{icon:"call_merge",header:"Mappings"},{header:U((()=>[c(r,{modelValue:l.file.mappings,"onUpdate:modelValue":o[3]||(o[3]=e=>l.file.mappings=e),item:l.mapping,"onUpdate:item":o[4]||(o[4]=e=>l.mapping=e),add:{},"shift-two":"",remove:""},null,8,["modelValue","item"])])),default:U((()=>[(m(!0),u(g,null,V(l.file.mappings,((e,a)=>f((m(),u("input",{key:a,"onUpdate:modelValue":a=>e.name=a,class:"selectable",type:"text",placeholder:"mapping #"+a,readonly:l.mapping!==e,onClick:a=>l.mapping=e},null,8,["onUpdate:modelValue","placeholder","readonly","onClick"])),[[v,e.name]]))),128))])),_:1})]),l.mapping?(m(),u(s,{key:0,icon:"format_list_numbered",header:"Pairs"},{header:U((()=>[c(r,{modelValue:l.mapping.pairs,"onUpdate:modelValue":o[5]||(o[5]=e=>l.mapping.pairs=e),add:[]},null,8,["modelValue"])])),default:U((()=>[(m(!0),u(g,null,V(l.mapping.pairs,((e,a)=>(m(),u("div",{key:a,class:"row"},[c(h,{icon:"add",onClick:e=>l.mapping.pairs.splice(a,0,[])},null,8,["onClick"]),f(c("input",{"onUpdate:modelValue":a=>e[0]=a,type:"text",placeholder:"from"},null,8,["onUpdate:modelValue"]),[[v,e[0]]]),f(c("input",{"onUpdate:modelValue":a=>e[1]=a,type:"text",placeholder:"to"},null,8,["onUpdate:modelValue"]),[[v,e[1]]]),c(h,{icon:"clear",onClick:e=>l.mapping.pairs.splice(a,1)},null,8,["onClick"])])))),128))])),_:1})):k("",!0)])):k("",!0)}));y.render=_,y.__scopeId="data-v-4bb123b1";export default y;

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"523b5dc8742893f4f461eff0a76de260"},{url:"assets/audio-player.de5b376e.js",revision:"cfd520c9085897d8c5c28e55b0845e12"},{url:"assets/CorpusEditor.0268b338.css",revision:"6ff17055f4c91eaadf0fadcf97679b25"},{url:"assets/CorpusEditor.7bd4171e.js",revision:"4368718e7c794343bfe9778a4048b677"},{url:"assets/Editor.19a03e2f.js",revision:"908cd339a2a13ebfd185b130a5ffbf69"},{url:"assets/Editor.488c6bbe.js",revision:"42eed29f428d2b3ee885760110a5bb05"},{url:"assets/Editor.6c2a920a.css",revision:"3c6dcc71585feac78cfba7b1a6a249f7"},{url:"assets/Editor.6de7f2bb.js",revision:"165a7ca61f48ad4736a8935284a4528b"},{url:"assets/Editor.754352ad.css",revision:"9e7feeb68395ac3cf58cdc012dbaf996"},{url:"assets/Editor.7e321a3a.css",revision:"501f137beae6977fab819721ee7e9fb2"},{url:"assets/Editor.9c3fef38.css",revision:"90a56c1d77010f0778cf32e38bddc6d1"},{url:"assets/Editor.acf6f426.js",revision:"5f742ed63276d25e2425b1debdef1cff"},{url:"assets/Editor.ad76a190.js",revision:"65ed6052c67186140f816c6ccf17322a"},{url:"assets/Editor.b37d8f6a.css",revision:"898f8ef07d0dd963d0b4eeb35e295d69"},{url:"assets/editor.e698c371.js",revision:"37f37919a9bedf2f3434f2e0f17fdd1c"},{url:"assets/EditorCard.84fe7593.css",revision:"7b78583f3d109295caf2ad62a3dbf410"},{url:"assets/EditorCard.d4d361a8.js",revision:"4e6e3a9aeecd87851197b99f7f04af69"},{url:"assets/EditorNavigation.bc2fd678.css",revision:"8f2de7c6b09bf93be15e6ee2d3337fec"},{url:"assets/EditorNavigation.fd7a9974.js",revision:"957c1884c4a6ee5e664bb8e1966dda3e"},{url:"assets/file-manager.9a2fdd9a.js",revision:"6c89565010c6b1d1e6d8fbdff2b745de"},{url:"assets/Flag.57192830.css",revision:"3a0ff92c219366076023f0a4bfb57c4d"},{url:"assets/Flag.bdcb6c05.js",revision:"8686c4fab6b34b65ae5316ce45ce1384"},{url:"assets/index.09de23dd.css",revision:"82c09f8866a20a1b0d13856e3b12cb49"},{url:"assets/index.0ef8c241.css",revision:"acde313381ac4c4acff580b52a247461"},{url:"assets/index.19ea6d5c.css",revision:"44ec4d4e173d37d3b5ea3b75fb01b646"},{url:"assets/index.32e7c8cd.css",revision:"7775dc99b357021f69ebb9f096a93f00"},{url:"assets/index.43ac6aad.js",revision:"89b4983f69e18089bec56be39fc2231a"},{url:"assets/index.4762e9dd.js",revision:"ec8579fe1ee01c7770578fc671fa224d"},{url:"assets/index.51e46028.js",revision:"43c12d6fcb1fdeef8a1826cee257543d"},{url:"assets/index.56d19424.js",revision:"156552497fd790281b45332c85f97fff"},{url:"assets/index.8f68c5d5.css",revision:"87158b533a523ad5c91717045289ddfc"},{url:"assets/index.ba5af318.js",revision:"f6d0d3e9b1ef682fc014ceb317cebfb8"},{url:"assets/index.bc0f7e7b.css",revision:"4f1b25a1be2aa4beecf953134488f59e"},{url:"assets/index.cbab1530.js",revision:"a692b11716936f5d7a593240af8cdfe3"},{url:"assets/index.d4a079a9.js",revision:"4b65c03934b87053232aaef391676e66"},{url:"assets/index.db3918de.js",revision:"3c81a143c9dbab80ac400d08c1a7fcd8"},{url:"assets/index.e1b1f002.css",revision:"313c10547af6b91896997c63e25399c5"},{url:"assets/Navigation.3b78d6e4.js",revision:"f62ce689daec7f4c238c581481f33d5e"},{url:"assets/Navigation.a06d9b94.css",revision:"d61761f47cda0ed84892f078ef5413bb"},{url:"assets/NotesEditor.a52acbd0.js",revision:"850f5e0db5eea2544ef6d4dbcf605874"},{url:"assets/search.f060bdbd.js",revision:"954022bfec87ad5e50da813a38fb4443"},{url:"assets/Seeker.7110ab0c.js",revision:"4f76f76678464d07b32db110486a6105"},{url:"assets/Seeker.e7e6ce0a.css",revision:"5af13ab48a5532a4518eae7dd4c4069e"},{url:"assets/TableEntry.28ab263e.css",revision:"b744fff5b1adc4784e3af8f2f93403b9"},{url:"assets/TableEntry.6c130267.js",revision:"102e7d6b9ec98e28ca80a92b798b9fee"},{url:"assets/types.a423ec07.js",revision:"767a87923daffeeeba3630a8da9c93c5"},{url:"assets/types.c828ff55.css",revision:"3b24057c5779790852b6ad3329f30038"},{url:"assets/vendor.c8bf7c27.js",revision:"4ea33c77f26a6e9d9a025a7e57fee5c6"},{url:"index.html",revision:"1281166ad11865b9d5aff254d9728a5f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map

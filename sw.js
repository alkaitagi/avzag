if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,d,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+e.slice(1)};return Promise.all(d.map((e=>{switch(e){case"exports":return a;case"module":return r;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"523b5dc8742893f4f461eff0a76de260"},{url:"assets/audio-player.6c8743a6.js",revision:"cb76e3a27162501c454d32cbc3977bd0"},{url:"assets/CorpusEditor.0268b338.css",revision:"6ff17055f4c91eaadf0fadcf97679b25"},{url:"assets/CorpusEditor.18b98115.js",revision:"7d1552a7df043f28e32c92a0d89c65bf"},{url:"assets/editor.2707a92f.js",revision:"8e69d7c45411791740d1dd7dcb19033a"},{url:"assets/Editor.31dceac6.js",revision:"d0407e7aa088c2a46bea79d2c043a7b2"},{url:"assets/Editor.33dc40bf.css",revision:"23cb708df4804784e1b1e9991b63863a"},{url:"assets/Editor.660c039b.js",revision:"b56a98cef7237ebc62b33432fb85a095"},{url:"assets/Editor.6c2a920a.css",revision:"3c6dcc71585feac78cfba7b1a6a249f7"},{url:"assets/Editor.7e321a3a.css",revision:"501f137beae6977fab819721ee7e9fb2"},{url:"assets/Editor.8716a915.js",revision:"4ad131b151c585e9921d0cc8160cffed"},{url:"assets/Editor.8d19a136.js",revision:"d8f1a8b95a5e7b90204d9a7078d9846c"},{url:"assets/Editor.9c3fef38.css",revision:"90a56c1d77010f0778cf32e38bddc6d1"},{url:"assets/Editor.b37d8f6a.css",revision:"898f8ef07d0dd963d0b4eeb35e295d69"},{url:"assets/Editor.cd5eb5f3.js",revision:"e850558c2f82db341f1ed5272c2921d6"},{url:"assets/EditorCard.84fe7593.css",revision:"7b78583f3d109295caf2ad62a3dbf410"},{url:"assets/EditorCard.fc9436a6.js",revision:"95d3c9be4a941717e6d8ad81b9097e4f"},{url:"assets/EditorNavigation.a4f4174d.css",revision:"a92207ca6ecfb3dafbb9bdd5c4e7b2e2"},{url:"assets/EditorNavigation.e1c32277.js",revision:"de4d4ebb4c88c013564b17e52cd1ac7c"},{url:"assets/file-manager.9a2fdd9a.js",revision:"6c89565010c6b1d1e6d8fbdff2b745de"},{url:"assets/Flag.57192830.css",revision:"3a0ff92c219366076023f0a4bfb57c4d"},{url:"assets/Flag.9c998460.js",revision:"eeaa2e32e6bd1cbac177b6be4f16d6b6"},{url:"assets/index.09de23dd.css",revision:"82c09f8866a20a1b0d13856e3b12cb49"},{url:"assets/index.0ef8c241.css",revision:"acde313381ac4c4acff580b52a247461"},{url:"assets/index.19ea6d5c.css",revision:"44ec4d4e173d37d3b5ea3b75fb01b646"},{url:"assets/index.24f1d4a2.css",revision:"115fad0c5fa68c09d00a7f19cca59d0e"},{url:"assets/index.32e7c8cd.css",revision:"7775dc99b357021f69ebb9f096a93f00"},{url:"assets/index.354de788.js",revision:"2179cf0d32088ddd24d407b607f4759a"},{url:"assets/index.35f6c006.js",revision:"7bf670add7493238cc0db6ac0eb60fd4"},{url:"assets/index.4762e9dd.js",revision:"ec8579fe1ee01c7770578fc671fa224d"},{url:"assets/index.8f68c5d5.css",revision:"87158b533a523ad5c91717045289ddfc"},{url:"assets/index.9d9fe253.js",revision:"4d118734139d7b5b6598d540b58256df"},{url:"assets/index.c798b2d2.js",revision:"f8bae5b6e3ddeb973aa19d48f41b96a3"},{url:"assets/index.cbab1530.js",revision:"a692b11716936f5d7a593240af8cdfe3"},{url:"assets/index.e1b1f002.css",revision:"313c10547af6b91896997c63e25399c5"},{url:"assets/index.e6c5675a.js",revision:"945bbb16067aafce9a7f3f1c0091c74f"},{url:"assets/index.f9bede76.js",revision:"4542247de2f2c9373b402aa75d2f8548"},{url:"assets/Navigation.3637c8c7.js",revision:"7bc93dd6d07b8560ffd3367156e87b19"},{url:"assets/Navigation.a06d9b94.css",revision:"d61761f47cda0ed84892f078ef5413bb"},{url:"assets/NotesEditor.1646d6f7.js",revision:"6d0a17c41b5981b25bd1a6dad0995be8"},{url:"assets/search.f060bdbd.js",revision:"954022bfec87ad5e50da813a38fb4443"},{url:"assets/Seeker.7110ab0c.js",revision:"4f76f76678464d07b32db110486a6105"},{url:"assets/Seeker.e7e6ce0a.css",revision:"5af13ab48a5532a4518eae7dd4c4069e"},{url:"assets/TableEntry.28ab263e.css",revision:"b744fff5b1adc4784e3af8f2f93403b9"},{url:"assets/TableEntry.6c130267.js",revision:"102e7d6b9ec98e28ca80a92b798b9fee"},{url:"assets/types.a423ec07.js",revision:"767a87923daffeeeba3630a8da9c93c5"},{url:"assets/types.c828ff55.css",revision:"3b24057c5779790852b6ad3329f30038"},{url:"assets/vendor.c8bf7c27.js",revision:"4ea33c77f26a6e9d9a025a7e57fee5c6"},{url:"index.html",revision:"62822c048efb1e8f3c1961f609181151"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map

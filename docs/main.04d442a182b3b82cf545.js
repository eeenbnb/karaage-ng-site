(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{0:function(t,e,n){t.exports=n("zUnb")},whtk:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){return t.Article="article",t.Feature="feature",t}({})},zUnb:function(t,e,n){"use strict";n.r(e);var r=n("jhN1"),o=n("fXoL"),i=n("tk/3"),a=n("lR5k"),c=n("tyNb"),s=n("whtk");const d=[{path:"",loadChildren:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"0sRJ")).then(t=>t.TopModule)},{path:"article",loadChildren:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"hOEO")).then(t=>t.ArticleModule),data:{articleType:s.a.Article}},{path:"feature",loadChildren:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"hOEO")).then(t=>t.ArticleModule),data:{articleType:s.a.Feature}}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Cb({type:t}),t.\u0275inj=o.Bb({imports:[[c.e.forRoot(d,{useHash:!0})],c.e]}),t})();var l=n("ofXK");let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Cb({type:t}),t.\u0275inj=o.Bb({imports:[[l.b,c.e]]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Cb({type:t}),t.\u0275inj=o.Bb({imports:[[l.b,c.e,h]]}),t})();var g=n("pLZG");const b="G-HXVPXJTZLN";let f=(()=>{class t{constructor(t){this.document=t}useGA(){return"undefined"!=typeof gtag}firstAddGaScript(t=(()=>{})){setTimeout(()=>{const e=this.document.createElement("script");e.type="text/javascript",e.src="https://www.googletagmanager.com/gtag/js?id=G-HXVPXJTZLN",this.document.head.appendChild(e);const n=this.document.createElement("script");n.type="text/javascript",n.text="window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)};gtag('js', new Date());",this.document.head.appendChild(n),t()},2e3)}sendPageView(t){this.useGA()?(t.startsWith("/")||(t=`<code data-enlighter-language="generic" class="EnlighterJSRAW">/${t}</code>`),gtag("config",b,{page_path:t})):this.firstAddGaScript(()=>{this.sendPageView(t)})}sendEvent(t,e,n,r){this.useGA()&&gtag("event",t,{event_category:t,event_action:e,event_label:n,value:r})}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(l.c))},t.\u0275prov=o.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.yb({type:t,selectors:[["root-header"]],decls:4,vars:0,consts:[[1,"root-header"],["routerLink","/",1,"root-header-a"],[1,"root-header-h1"]],template:function(t,e){1&t&&(o.Hb(0,"div",0),o.Hb(1,"a",1),o.Hb(2,"h1",2),o.Wb(3,"Sushi karaage"),o.Gb(),o.Gb(),o.Gb())},directives:[c.d],styles:[".root-header[_ngcontent-%COMP%]{width:100%;height:100%;background-color:var(--color-Highlight);box-shadow:0 3px 6px rgba(0,0,0,.16);display:flex;align-items:center;justify-content:center}.root-header-h1[_ngcontent-%COMP%]{font-size:32px;color:var(--color-Paragraph)}"]}),t})();const v=["*"];let w=(()=>{class t{constructor(t,e){this.router=t,this.gaService=e,this.navigationEndSubscription=this.router.events.pipe(Object(g.a)(t=>t instanceof c.b)).subscribe(t=>{this.gaService.sendPageView(t.url)})}ngOnInit(){}ngOnDestroy(){this.navigationEndSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Eb(c.c),o.Eb(f))},t.\u0275cmp=o.yb({type:t,selectors:[["root-content"]],ngContentSelectors:v,decls:6,vars:0,consts:[[1,"root-content"],[1,"root-content-header"],[1,"root-content-main"],[1,"root-content-main-inner"]],template:function(t,e){1&t&&(o.Pb(),o.Hb(0,"main",0),o.Hb(1,"header",1),o.Fb(2,"root-header"),o.Gb(),o.Hb(3,"div",2),o.Hb(4,"div",3),o.Ob(5),o.Gb(),o.Gb(),o.Gb())},directives:[m],styles:[".root-content[_ngcontent-%COMP%]{min-height:calc(100vh);background-color:var(--color-Background);background-image:url(/assets/background/bg.svg);background-size:72px 72px}.root-content-header[_ngcontent-%COMP%]{width:100vw;height:var(--size-header);position:fixed;top:0;left:0}.root-content-main[_ngcontent-%COMP%]{padding-top:var(--size-header);display:flex;justify-content:center}.root-content-main-inner[_ngcontent-%COMP%]{margin-top:var(--size-itemDistanceMargin);margin-bottom:var(--size-itemDistanceMargin)}@media (max-width:720px){.root-content-main-inner[_ngcontent-%COMP%]{width:100%;margin-left:var(--size-itemInnerPadding);margin-right:var(--size-itemInnerPadding)}}@media (min-width:720px){.root-content-main-inner[_ngcontent-%COMP%]{width:var(--size-conteinerSize)}}"]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.yb({type:t,selectors:[["app-root"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Hb(0,"root-content"),o.Fb(1,"router-outlet"),o.Gb())},directives:[w,c.f],styles:[""]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Cb({type:t,bootstrap:[y]}),t.\u0275inj=o.Bb({providers:[],imports:[[r.a,i.b,a.b.forRoot(),u,p]]}),t})();Object(o.S)(),r.c().bootstrapModule(P).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,1,6]]]);
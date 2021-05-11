(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0sRJ":function(t,e,r){"use strict";r.r(e),r.d(e,"TopModule",function(){return B});var i=r("ofXK"),n=r("tyNb"),a=r("fXoL"),o=r("fWfP"),s=r("sbAP");let c=(()=>{class t{constructor(t,e){this.httpService=t,this.transferStateService=e}getTopData(t=1){return console.log(t),this.transferStateService.useScullyTransferState("top-"+t,this.httpService.getURLDataToResponseTypeJson(`assets/data/top-${t}.json`))}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(o.a),a.Nb(s.b))},t.\u0275prov=a.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=r("6QEU"),p=r("lbD/"),u=r("OOW1"),b=r("AHJF"),d=r("q1tI"),m=r("vOnD");const h=m.a.div`
  padding: var(--size-itemInnerPadding);
  background-color: var(--color-Main);
  border: 3px solid var(--color-Paragraph);
  border-radius: var(--size-cardBorder);
`,g=t=>d.createElement(h,{style:{padding:t.isNoPadding?"0px":""}},t.children),v=m.a.h1`
`,f=t=>d.createElement(g,null,d.createElement(v,null,t.title));var w=r("NCu3");const C=function(t){return{title:t}};let E=(()=>{class t{constructor(){this.title="",this.reactCardOriginTitle=f}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.zb({type:t,selectors:[["card-origin-title"]],inputs:{title:"title"},decls:1,vars:4,consts:[[3,"reactCompoent","prop"]],template:function(t,e){1&t&&a.Gb(0,"react-wrapper",0),2&t&&a.Vb("reactCompoent",e.reactCardOriginTitle)("prop",a.Wb(2,C,e.title))},directives:[w.a],styles:[""]}),t})();const y=m.a.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-gap: 0 var(--size-itemDistanceMargin);
`,I=m.a.div`
  width: 120px;
  height: 120px;
`,O=m.a.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`,S=m.a.div`
  display: flex;
  flex-direction: column;
`,D=m.a.h2`
  color: var(--color-Paragraph);
  font-size: 16px;
  @include line-clamp(2);
`,M=m.a.button`
  margin-top: auto;
  width: 100%;
  height: 40px;
  border: none;
  background-color: var(--color-Button);
  color: var(--color-Paragraph);
  font-size: 14px;
`,k=t=>d.createElement(g,null,d.createElement(y,null,d.createElement(I,null,d.createElement(O,{src:t.article.thumbnail,alt:"\u8a18\u4e8b\u306e\u753b\u50cf"})),d.createElement(S,null,d.createElement(D,null,t.article.title),d.createElement(M,null,"\u898b\u308b")))),x=function(t){return["article",t]},T=function(t){return{article:t}};let z=(()=>{class t{constructor(){this.article={path:"",title:"",thumbnail:""},this.ReactCardOriginArticle=k}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.zb({type:t,selectors:[["card-origin-artric"]],inputs:{article:"article"},decls:2,vars:7,consts:[[1,"link",3,"routerLink"],[3,"reactCompoent","prop"]],template:function(t,e){1&t&&(a.Kb(0,"a",0),a.Gb(1,"react-wrapper",1),a.Jb()),2&t&&(a.Vb("routerLink",a.Wb(3,x,e.article.path)),a.wb(1),a.Vb("reactCompoent",e.ReactCardOriginArticle)("prop",a.Wb(5,T,e.article)))},directives:[n.f,w.a],styles:[".link[_ngcontent-%COMP%]{text-decoration:none}"]}),t})(),F=(()=>{class t{constructor(t){this.elementRef=t,this.viewEvent=new a.n}ngOnInit(){}ngAfterViewInit(){new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&this.viewEvent.emit()})}).observe(this.elementRef.nativeElement)}}return t.\u0275fac=function(e){return new(e||t)(a.Fb(a.l))},t.\u0275cmp=a.zb({type:t,selectors:[["item-intersection-observer"]],outputs:{viewEvent:"viewEvent"},decls:0,vars:0,template:function(t,e){},styles:[""]}),t})();function J(t,e){if(1&t&&(a.Kb(0,"list-child"),a.Gb(1,"card-origin-artric",3),a.Jb()),2&t){const t=e.$implicit;a.wb(1),a.Vb("article",t)}}function L(t,e){if(1&t){const t=a.Lb();a.Kb(0,"item-intersection-observer",4),a.Qb("viewEvent",function(){return a.Yb(t),a.Sb().bottomLoad()}),a.Jb()}}const P=[{path:"",component:(()=>{class t{constructor(t,e,r){this.httpTopService=t,this.breadcrumbService=e,this.titleMetaService=r,this.topItems=[],this.pageCount=1,this.isFirstLoadComplate=!1,this.isEnd=!1}ngOnInit(){this.getItems(),this.breadcrumbService.setBreadcrumbs([]),this.titleMetaService.setTitle("sushi karaage"),this.titleMetaService.setMetaData(this.titleMetaService.getCoalescenceMetaDefinition([{name:"description",content:"sushi karaage\u306e\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3067\u3059"},{name:"og:description",content:"sushi karaage\u306e\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3067\u3059"}]))}ngOnDestroy(){this.titleMetaService.removeMetaData()}getItems(){this.isEnd||this.httpTopService.getTopData(this.pageCount).subscribe(t=>{t&&(this.topItems=this.topItems.concat(t),this.isFirstLoadComplate=!0,this.pageCount++)},t=>{this.isEnd=!0})}bottomLoad(){this.getItems()}}return t.\u0275fac=function(e){return new(e||t)(a.Fb(c),a.Fb(l.a),a.Fb(p.a))},t.\u0275cmp=a.zb({type:t,selectors:[["app-top"]],decls:5,vars:2,consts:[["title","\u8a18\u4e8b\u4e00\u89a7 | sushi karaage"],[4,"ngFor","ngForOf"],[3,"viewEvent",4,"ngIf"],[3,"article"],[3,"viewEvent"]],template:function(t,e){1&t&&(a.Kb(0,"list-parent"),a.Kb(1,"list-child"),a.Gb(2,"card-origin-title",0),a.Jb(),a.bc(3,J,2,1,"list-child",1),a.bc(4,L,1,0,"item-intersection-observer",2),a.Jb()),2&t&&(a.wb(3),a.Vb("ngForOf",e.topItems),a.wb(1),a.Vb("ngIf",e.isFirstLoadComplate))},directives:[u.a,b.a,E,i.h,i.i,z,F],styles:[".top-article[_ngcontent-%COMP%], .top-memo[_ngcontent-%COMP%]{margin-top:var(--size-itemDistanceMargin);margin-bottom:var(--size-itemDistanceMargin)}"]}),t})()}];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Db({type:t}),t.\u0275inj=a.Cb({imports:[[n.g.forChild(P)],n.g]}),t})();var R=r("TOcW");let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Db({type:t}),t.\u0275inj=a.Cb({imports:[[i.b,n.g,R.a]]}),t})(),K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Db({type:t}),t.\u0275inj=a.Cb({imports:[[i.b,R.a]]}),t})(),W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Db({type:t}),t.\u0275inj=a.Cb({imports:[[i.b]]}),t})();var A=r("04em"),N=r("r8oi");let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Db({type:t}),t.\u0275inj=a.Cb({imports:[[i.b,j,V,K,W,A.a,N.a]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{hOEO:function(t,e,i){"use strict";i.r(e),i.d(e,"ArticleModule",function(){return y});var r=i("ofXK"),a=i("tyNb"),s=i("whtk"),n=i("fXoL"),o=i("LRne"),c=i("fWfP"),l=i("sbAP");let h=(()=>{class t{constructor(t,e){this.httpService=t,this.transferStateService=e}getArticleData(t){if(!t)return Object(o.a)("");let e=t.split("-");return 3!=e.length?Object(o.a)(""):this.transferStateService.useScullyTransferState(t,this.httpService.getURLDataToResponseTypeText(`assets/md-article/${e[0]}/${e[1]}/${e[2]}.md`))}getFeatureData(t){return t?this.httpService.getURLDataToResponseTypeText(`assets/md-feature/${t}.md`):Object(o.a)("")}}return t.\u0275fac=function(e){return new(e||t)(n.Nb(c.a),n.Nb(l.b))},t.\u0275prov=n.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=i("6QEU"),d=i("lbD/"),u=i("76T7"),b=i("lR5k");let m=(()=>{class t{constructor(){this.markdown=""}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.zb({type:t,selectors:[["item-article"]],inputs:{markdown:"markdown"},decls:2,vars:1,consts:[[1,"item-article","markdown-body"],[3,"data"]],template:function(t,e){1&t&&(n.Kb(0,"div",0),n.Gb(1,"markdown",1),n.Jb()),2&t&&(n.wb(1),n.Vb("data",e.markdown))},directives:[b.a],styles:['@charset "UTF-8";.info{display:flex}.info__date{color:var(--color-Stroke);font-size:14px;margin-right:4px}.info__date:before{content:"\ud83d\udcc5";margin-right:4px}.info__tags{display:flex}.info__tags__one{margin-right:4px;padding-left:4px;padding-right:4px;color:var(--color-Stroke);font-size:14px;border:1px solid var(--color-Headline);border-radius:8px}'],encapsulation:2}),t})();const f=[{path:":date",component:(()=>{class t{constructor(t,e,i,r){this.activatedRoute=t,this.httpArticleService=e,this.breadcrumbService=i,this.titleMetaService=r,this.date="",this.title="",this.markdown="",this.isNoContent=!1,this.articleType=s.a.Article,this.articleType=this.activatedRoute.snapshot.data.articleType,this.routerSubscription=this.activatedRoute.paramMap.subscribe(t=>{t.get("date")?this.getArticleData(t.get("date")||""):this.setError()})}ngOnInit(){}ngOnDestroy(){this.routerSubscription.unsubscribe(),this.titleMetaService.removeMetaData()}getArticleData(t){this.articleType==s.a.Article&&this.getArticleDataByAricle(t),this.articleType==s.a.Feature&&this.getArticleDataByFeaure(t)}getArticleDataByAricle(t){this.httpArticleService.getArticleData(t).subscribe(e=>{this.markdown=e,this.setInfoData(t)},t=>{this.setError()})}getArticleDataByFeaure(t){this.httpArticleService.getFeatureData(t).subscribe(e=>{this.markdown=e,this.setInfoData(t)},t=>{this.setError()})}setInfoData(t){this.title=this.markdown.split("\n")[0].replace("#",""),this.breadcrumbService.setBreadcrumbs([{path:["/"],name:"top"},{path:["/",this.articleType,t],name:this.title}]),this.titleMetaService.setTitle(this.title+" | sushi karaage"),this.titleMetaService.setMetaData(this.titleMetaService.getCoalescenceMetaDefinition([{name:"description",content:this.markdown.slice(0,300)},{name:"og:site_name",content:this.title+" | sushi karaage"},{name:"og:description",content:this.markdown.slice(0,300)},{name:"og:title",content:this.title+" | sushi karaage"},{name:"og:url",content:"https://sushi.karaage.tokyo/#/"+[this.articleType,t].join("/")}]))}setError(){this.isNoContent=!0}}return t.\u0275fac=function(e){return new(e||t)(n.Fb(a.a),n.Fb(h),n.Fb(p.a),n.Fb(d.a))},t.\u0275cmp=n.zb({type:t,selectors:[["app-article"]],decls:3,vars:1,consts:[[1,"article"],[3,"markdown"]],template:function(t,e){1&t&&(n.Kb(0,"div",0),n.Kb(1,"card-origin"),n.Gb(2,"item-article",1),n.Jb(),n.Jb()),2&t&&(n.wb(2),n.Vb("markdown",e.markdown))},directives:[u.a,m],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Db({type:t}),t.\u0275inj=n.Cb({imports:[[a.g.forChild(f)],a.g]}),t})();var v=i("MbRX");let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Db({type:t}),t.\u0275inj=n.Cb({imports:[[r.b,b.b.forChild()]]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Db({type:t}),t.\u0275inj=n.Cb({imports:[[r.b,g,v.a,w]]}),t})()}}]);
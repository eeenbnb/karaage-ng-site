(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{fWfP:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("fXoL"),o=n("tk/3");let i=(()=>{class t{constructor(t){this.httpClient=t}getURLDataToResponseTypeJson(t){return this.httpClient.get(t,{responseType:"json"})}getURLDataToResponseTypeText(t){return this.httpClient.get(t,{responseType:"text"})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(o.a))},t.\u0275prov=a.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"lbD/":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("fXoL"),o=n("jhN1");let i=(()=>{class t{constructor(t,e){this.title=t,this.meta=e,this.defaultMetaDefinition=[{name:"keywords",content:"blog, Angular"},{name:"description",content:""},{name:"og:site_name",content:"sushi karaage"},{name:"og:description",content:""},{name:"og:title",content:"sushi karaage"},{name:"og:url",content:"https://sushi.karaage.tokyo/#/"},{name:"og:image",content:"https://sushi.karaage.tokyo/assets/img/no-img.png"},{name:"twitter:image",content:"https://sushi.karaage.tokyo/assets/img/no-img.png"},{name:"og:type",content:"website"},{name:"og:locale",content:"ja_JP"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@sushi_karaage"}]}setTitle(t){this.title.setTitle(t)}setMetaData(t){this.meta.addTags(t)}getDefaultMetaDefinition(){return this.defaultMetaDefinition}getCoalescenceMetaDefinition(t){return this.defaultMetaDefinition.map(e=>{let n=t.filter(t=>e.name==t.name);return n.length>0&&(e=n[0]),e})}removeMetaData(){this.defaultMetaDefinition.forEach(t=>{this.meta.removeTag(`name='${t.name}'`)})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(o.d),a.Nb(o.c))},t.\u0275prov=a.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
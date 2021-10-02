import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleMetaService {
  defaultMetaDefinition:MetaDefinition[] = [
    { name: 'keywords',content: 'blog, Angular' },
    { name: 'description',content: '' },
    { name: 'og:site_name', content: 'sushi karaage' },
    { name: 'og:description', content: '' },
    { name: 'og:title', content:  "sushi karaage" },
    { name: 'og:url', content: 'https://sushi.karaage.tokyo/#/' },
    { name: 'og:image', content: "https://sushi.karaage.tokyo/assets/img/no-img.png" },
    { name: 'twitter:image', content: "https://sushi.karaage.tokyo/assets/img/no-img.png" },
    { name: 'og:type', content: 'website' },
    { name: 'og:locale', content: 'ja_JP' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@sushi_karaage' },
  ]

  constructor(
    private title:Title,
    private meta:Meta,
  ) { }

  setTitle(title:string):void{
    this.title.setTitle(title);
  }

  setMetaData(meta:MetaDefinition[]):void{
    this.meta.addTags(meta);
  }

  getDefaultMetaDefinition():MetaDefinition[]{
    return this.defaultMetaDefinition;
  }

  getCoalescenceMetaDefinition(meta:MetaDefinition[]):MetaDefinition[]{
    return this.defaultMetaDefinition.map((v)=>{
      let item = meta.filter(m =>v.name == m.name);
      if(item.length > 0){
        v = item[0];
      }
      return v;
    });
  }

  removeMetaData():void{
    this.defaultMetaDefinition.forEach((v)=>{
      this.meta.removeTag(`name='${v.name}'`);
    })
  }
}

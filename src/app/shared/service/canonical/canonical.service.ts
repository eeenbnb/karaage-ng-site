import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {
  constructor(
    @Inject(DOCUMENT) private dom:any,
  ) { }

  setCanonicalURL() {
    this.deleteCanonicalURL();

    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', this.dom.URL);

    this.dom.head.appendChild(link);
  }

  private deleteCanonicalURL() {
    let doms = Array.from(this.dom.head.querySelectorAll("[rel='canonical']"));
    doms.forEach((elm:any)=>{
      this.dom.head.removeChild(elm);
    })
  }
}

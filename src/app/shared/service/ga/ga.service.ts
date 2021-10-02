import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

declare let gtag: any; // グローバル変数gtagを解決

@Injectable({
  providedIn: 'root',
})
export class GaService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  private useGA(): boolean {
    return typeof gtag != 'undefined';
  }

  private firstAddGaScript(cb = () => {}) {
    setTimeout(() => {
      const s1 = this.document.createElement('script');
      s1.type = 'text/javascript';
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${environment.analytics.id}`;
      this.document.head.appendChild(s1);

      const s2 = this.document.createElement('script');
      s2.type = 'text/javascript';
      s2.text = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)};gtag('js', new Date());`;
      this.document.head.appendChild(s2);

      cb();
    }, 2000);
  }

  /**
   * ページトラッキング
   * @param  {string} url URLのパス。スラッシュで始まる必要がある。
   */
  sendPageView(url: string): void {
    if (!environment.analytics.id) {
      return;
    }
    if (!this.useGA()) {
      this.firstAddGaScript(() => {
        this.sendPageView(url);
      });
      return;
    }
    if (!url.startsWith('/')) {
      url = `<code data-enlighter-language="generic" class="EnlighterJSRAW">/${url}</code>`;
    }

    gtag('config', environment.analytics.id, {
      page_path: url,
    });
  }

  /**
   * イベントトラッキング
   * @param  {string} eventCategory (e.g. 'Video')
   * @param  {string} eventAction (e.g. 'play')
   * @param  {string} eventLabel (e.g. 'play campaign CM')
   */
  sendEvent(
    eventCategory: string,
    eventAction: string,
    eventLabel: any,
    eventValue: any
  ): void {
    if (!this.useGA()) {
      return;
    }
    gtag('event', eventCategory, {
      event_category: eventCategory,
      event_action: eventAction,
      event_label: eventLabel,
      value: eventValue,
    });
  }
}

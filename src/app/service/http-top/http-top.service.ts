import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { TransferStateService } from '@scullyio/ng-lib';

import { Observable, of } from 'rxjs';
import { KaraageArticle } from 'src/@types/karaage-article';

@Injectable({
  providedIn: 'root'
})
export class HttpTopService {

  constructor(
    private httpService:HttpService,
    private transferStateService:TransferStateService
  ) { }

  getTopData(page = 1):Observable<KaraageArticle[]>{
    return this.transferStateService.useScullyTransferState(
      "top-" + page,
      this.httpService.getURLDataToResponseTypeJson(`assets/data/top-${page}.json`)
    );
  }
}

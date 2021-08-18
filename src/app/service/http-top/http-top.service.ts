import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { Observable, of } from 'rxjs';
import { KaraageArticle } from 'src/@types/karaage-article';

@Injectable({
  providedIn: 'root'
})
export class HttpTopService {

  constructor(
    private httpService:HttpService,
  ) { }

  getTopData(page = 1):Observable<KaraageArticle[]>{
    return this.httpService.getURLDataToResponseTypeJson(`assets/data/top-${page}.json`);
  }

  getTopPageCount():Observable<{count:number}>{
    return this.httpService.getURLDataToResponseTypeJson(`assets/data/page.json`);
  }
}

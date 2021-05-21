import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpArticleService {

  constructor(
    private httpService:HttpService,
    private transferStateService:TransferStateService
  ) { }

  getArticleData(date:string):Observable<string>{
    if(!date){
      return of("");
    }
    let parseData:string[] = date.split("-");

    if(parseData.length != 3){
      return of("");
    }

    return this.transferStateService.useScullyTransferState(
      date,
      this.httpService.getURLDataToResponseTypeText(`assets/md-article/${parseData[0]}/${parseData[1]}/${parseData[2]}.md`)
    );
  }

  getFeatureData(name:string):Observable<string>{
    if(!name){
      return of("");
    }
    return this.transferStateService.useScullyTransferState(
      name,
      this.httpService.getURLDataToResponseTypeText(`assets/md-feature/${name}.md`)
    );
  }
}

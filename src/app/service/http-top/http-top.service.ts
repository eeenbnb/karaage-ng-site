import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'

import { Observable, of } from 'rxjs';

export interface TopItem{
  path:string,
  title:string,
}
export type TopItems = TopItem[];

@Injectable({
  providedIn: 'root'
})
export class HttpTopService {

  constructor(
    private httpService:HttpService
  ) { }

  getTopData(page = 1):Observable<TopItems>{
    return this.httpService.getURLDataToResponseTypeJson(`assets/data/top-${page}.json`);
  }
}

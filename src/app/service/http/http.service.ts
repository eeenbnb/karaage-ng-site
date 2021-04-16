import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getURLDataToResponseTypeText(URL:string): Observable<string>{
    return this.httpClient.get(URL,{
      responseType: "text"
    });
  };
}

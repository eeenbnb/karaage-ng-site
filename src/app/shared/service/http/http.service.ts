import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getURLDataToResponseTypeJson(URL: string): Observable<any> {
    return this.httpClient.get(environment.apiRoot + URL, {
      responseType: 'json',
    });
  }

  getURLDataToResponseTypeText(URL: string): Observable<string> {
    return this.httpClient.get(environment.apiRoot + URL, {
      responseType: 'text',
    });
  }
}

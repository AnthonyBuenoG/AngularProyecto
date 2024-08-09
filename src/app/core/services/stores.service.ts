import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { stores } from 'src/app/global/endpoints';
import { GetTiendasResponse } from '@Models/Store'

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders ({})
  }

  getStores(): Observable<GetTiendasResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetTiendasResponse>(stores.get, null, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
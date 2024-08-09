import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { profiles } from 'src/app/global/endpoints';
import { GetPerfilesResponse } from '@Models/Profile'

@Injectable({
  providedIn: 'root',
})
export class PerfilesService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders ({})
  }

  getProfiles(): Observable<GetPerfilesResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetPerfilesResponse>(profiles.get, null, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
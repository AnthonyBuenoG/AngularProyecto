import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'src/app/global/endpoints';
import { LoginRequest, LoginResponse } from 'src/app/core/models/login'
import { RegistroRequest, RegistroResponse } from '../models/registro';
@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders ({})
  }
  auth(insert:RegistroRequest): Observable<RegistroResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<RegistroResponse>(auth.insert, insert, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
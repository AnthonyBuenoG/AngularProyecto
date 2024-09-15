import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { login } from 'src/app/global/endpoints';
import { StudentInsertRequest, GetStudentsResponse, StudentUpdateRequest } from '../models/students';
import { LoginInsertRequest } from '@Models/Auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({})
  }



  insertLogin(Login:LoginInsertRequest): Observable<boolean> {
    const httpOptions = {headers:this.headers}
    return this.http.post<boolean>(login.insert, Login, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
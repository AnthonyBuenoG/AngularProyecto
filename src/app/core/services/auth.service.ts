import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroInsertRequest } from '../models/registro';
import { RegistroResponse } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = ' https://localhost:5031';  // URL de tu API para login

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  registro(credentials: RegistroInsertRequest): Observable<RegistroResponse> {
    return this.http.post<RegistroResponse>(`${this.apiUrl}/registro`, credentials);

  }
  }

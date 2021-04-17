import { Injectable } from '@angular/core';
import { Register, Login } from '../models/auth';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'api/auth';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }

  register(data: Register): Observable<any> {
    console.log(data);
    return this.http.post(this.authUrl + '/register', data, this.httpOptions);
  }

  login(data: Login): Observable<any> {
    return this.http.post(this.authUrl + '/login', data, this.httpOptions);
  }

  test(): Observable<any> {
    const url = 'https://random-word-api.herokuapp.com/word?number=1';
    return this.http.get(url);
  }
}

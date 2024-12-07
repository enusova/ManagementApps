import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';


const urlApi = "http://localhost:9020/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  register(signupRequest: any): Observable<any> {
    return this.http.post(urlApi + "api/auth/signup", signupRequest);
  }


  login(loginRequest: any): Observable<any> {
    return this.http.post(urlApi + "api/auth/login", loginRequest);
  }
}

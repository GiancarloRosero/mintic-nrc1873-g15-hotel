import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from 'src/app/models/user-login';
import { UserLoginSucess } from 'src/app/models/user-login-success';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogin: any;

  constructor(private http: HttpClient) { }

  isLoginUser():UserLoginSucess {
    this.userLogin = sessionStorage.getItem("isLogin");
    return JSON.parse(this.userLogin);
  }

  login(user: UserLogin): Observable<any> {
    return this.http.post(environment.urlBase + '/auth/login', user);
  }
}

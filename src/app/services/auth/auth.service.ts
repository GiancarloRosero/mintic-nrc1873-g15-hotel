import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/user-login';
import { UserLoginSucess } from 'src/app/models/user-login-success';
import { HttpClientService } from '../http-client/http-client.service';
import { ENDPOINTS } from 'src/app/config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLoggedIn = new BehaviorSubject(false);

  userLogin: any;

  constructor(private httpClientService: HttpClientService) { }

  isLoginUser():UserLoginSucess {
    this.userLogin = sessionStorage.getItem("isLogin");
    return JSON.parse(this.userLogin);
  }

  login(user: UserLogin): Observable<any> {
    return this.httpClientService.post<any>(ENDPOINTS.login, user)
  }


  getLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }

  getLoggedInValue(): boolean {
    return this.userLoggedIn.getValue();
  }

  setLoggedIn(val: boolean) {
    this.userLoggedIn.next(val);
  }
}

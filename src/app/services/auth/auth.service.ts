import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/user-login';
import { UserLoginSucess } from 'src/app/models/user-login-success';
import { HttpClientService } from '../http-client/http-client.service';
import { ENDPOINTS } from 'src/app/config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogin: any;

  constructor(private httpClientService: HttpClientService) { }

  isLoginUser():UserLoginSucess {
    this.userLogin = sessionStorage.getItem("isLogin");
    return JSON.parse(this.userLogin);
  }

  login(user: UserLogin): Observable<any> {
    return this.httpClientService.post<any>(ENDPOINTS.login, user)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from 'src/app/models/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: UserLogin): Observable<any> {
    return this.http.post(environment.urlBase+'/auth/login', user);
  }
}

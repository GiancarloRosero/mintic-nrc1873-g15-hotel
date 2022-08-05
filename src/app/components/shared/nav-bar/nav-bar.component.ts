import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginSucess } from 'src/app/models/user-login-success';
import { AuthService } from 'src/app/services/auth/auth.service';

const INVALID_DATA = ["", null, undefined, "null", "undefined"];
const ADMIN_SUPERADMIN_ROL = [2, 3];

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isLogin: boolean = false;
  userLogin: UserLoginSucess = new UserLoginSucess();

  @Output()
  public sidenavToggle = new EventEmitter();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogin = !INVALID_DATA.includes(String(this.authService.isLoginUser()));
    if (this.isLogin) {
      this.userLogin = this.authService.isLoginUser();
      console.log(this.userLogin);
    }
  }

  public onToggleSidenav = (): void => {
    this.sidenavToggle.emit();
  }

  closeSession(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
      this.ngOnInit();
    });
  }

  isAdminOrSuperadmin(): boolean {
    return ADMIN_SUPERADMIN_ROL.includes(this.userLogin.rol);
  }



}

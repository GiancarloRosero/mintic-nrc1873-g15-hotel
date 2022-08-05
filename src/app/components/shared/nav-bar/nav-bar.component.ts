import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserLoginSucess } from 'src/app/models/user-login-success';
import { AuthService } from 'src/app/services/auth/auth.service';

const ADMIN_SUPERADMIN_ROL = [2, 3];
const INVALID_DATA = [null, undefined, "", "null", "undefined"];

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userLogin: UserLoginSucess = new UserLoginSucess();

  public userLoggedIn: boolean = false;
  private subscription: Subscription;

  @Output()
  public sidenavToggle = new EventEmitter();

  constructor(private router: Router, private authService: AuthService) {
    this.subscription = this.authService.getLoggedIn().subscribe(value => {
      this.userLoggedIn = value;
    });
  }

  ngOnInit(): void {
    this.authService.setLoggedIn(!INVALID_DATA.includes(String(this.authService.isLoginUser())));
    if (this.userLoggedIn) {
      this.userLogin = this.authService.isLoginUser();
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
      this.authService.setLoggedIn(false);
      this.subscription.unsubscribe();
    });
  }

  isAdminOrSuperadmin(): boolean {
    return ADMIN_SUPERADMIN_ROL.includes(this.userLogin.rol);
  }



}

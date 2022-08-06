import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user-login';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  sessionOk: number = 0;

  constructor(private router: Router, private authService: AuthService, private spinnerService: SpinnerService, private snackBarService: SnackBarService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',),]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(() => this.sessionOk = 0);
  }

  onSubmit() {
    var spinnerRef = this.spinnerService.start("Iniciando sesión...");

    if (!this.loginForm.valid) {
      return;
    }
    const user: UserLogin = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }
    this.authService.login(user).subscribe((data) => {
      this.spinnerService.stop(spinnerRef);
      if (data.statusCode && data.statusCode == 200) {
        this.sessionOk = 1;
        this.snackBarService.openSnackBar("Inicio de sesión exitoso!!!");
        sessionStorage.setItem('isLogin', JSON.stringify(data))
        this.authService.setLoggedIn(true);
        this.router.navigate(['/']);
      } else {
        this.snackBarService.openSnackBar("Fallo al iniciar sesión!!!");
        this.sessionOk = 2;
      }
    }, (_) => {
      this.spinnerService.stop(spinnerRef);
    });
  }

}

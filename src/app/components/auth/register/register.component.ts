import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/providers/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{1,63}$',),]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{1,63}$',),]),
      document: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,10}$',),]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',),]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
    },
    {validators: this.checkPasswords} );
  }

  ngOnInit(): void {
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')!.value;
    let confirmPass = group.get('repeatPassword')!.value
    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      return;
    }
    /* localStorage.setItem('user', this.registerForm.value)
    this.router.navigate(['/home']) */
  }

}

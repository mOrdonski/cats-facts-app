import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  hide: boolean = true;

  logInForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  logIn() {
    this.authService.accounts.find((account) => {
      if (
        account.username === this.logInForm.value.username &&
        account.password === this.logInForm.value.password
      ) {
        this.authService.isLoggedIn = true;
        this.router.navigate(['/cat-facts']);
      }
    });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  accounts = [
    {
      username: 'admin',
      password: 'admin123',
    },
  ];
}

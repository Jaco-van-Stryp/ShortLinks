import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_interfaces/user';
import { Account } from '../_interfaces/account';
import { BaseService } from './base.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private HttpClient: HttpClient, private base: BaseService, private router: Router) {}

  Login(account: Account) {
    return this.HttpClient.post<User>(
      this.base.BaseURL + 'User/Login',
      account
    ).pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  Register(account: Account) {
    return this.HttpClient.post<User>(
      this.base.BaseURL + 'User/Register',
      account
    ).pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("Home");
}

  GetCurrentUser() {
    const local = localStorage.getItem('user');
    if (local !== null) {
      try {
        const user: User = JSON.parse(local);
        return user;
      } catch (e) {
        console.error('Error parsing user data:', e);
        return null; // or throw an error, depending on your error handling strategy
      }
    } else {
      this.logout();
    }
    return null;
  }
}

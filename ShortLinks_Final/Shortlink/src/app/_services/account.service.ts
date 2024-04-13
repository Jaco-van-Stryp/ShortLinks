import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_interfaces/user';
import { Account } from '../_interfaces/account';
import { BaseService } from './base.service';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private HttpClient: HttpClient, private base: BaseService) {}

  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

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
    this.currentUserSource.next(user);
  }
}

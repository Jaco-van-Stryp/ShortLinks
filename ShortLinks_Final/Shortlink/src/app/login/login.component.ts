import { AccountService } from './../_services/account.service';
import { Component } from '@angular/core';
import { Account } from '../_interfaces/account';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  User: Account = {} as Account;

  constructor(
    private AccountService: AccountService,
    private Toastr: ToastrService,
    private router: Router
  ) {}

  Login(User: Account) {
    this.AccountService.Login(User).subscribe({
      next: (res: any) => {
        this.Toastr.success('Login Successful');
        this.router.navigateByUrl('/MyLinks');
      },
      error: () => {
        this.Toastr.error('Invalid Username or Password');
      },
    });
  }
}

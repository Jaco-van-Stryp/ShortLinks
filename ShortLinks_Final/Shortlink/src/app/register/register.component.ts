import { Component } from '@angular/core';
import { Account } from '../_interfaces/account';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  User: Account = {} as Account;

  constructor(
    private AccountService: AccountService,
    private Toastr: ToastrService,
    private router: Router
  ) {}

  Register(User: Account) {
    //validation:

    if (
      User.Username == null ||
      User.Password == null ||
      User.Name == null ||
      User.Surname == null ||
      User.Name == '' ||
      User.Surname == '' ||
      User.Username == '' ||
      User.Password == ''
    ) {
      this.Toastr.error(
        'Please make sure you enter all required fields when registering an account.'
      );
      return;
    }
    if (User.Password.length < 8 || User.Password.length > 100) {
      this.Toastr.error(
        'Your password should be a minimum of 8 characters and no more than 100 characters.'
      );
      return;
    }

    this.AccountService.Register(User).subscribe({
      next: (res: any) => {
        this.Toastr.success('Registration Successful');
        this.router.navigateByUrl('/MyLinks');
      },
      error: () => {
        this.Toastr.error('User Already Exists');
      },
    });
  }
}

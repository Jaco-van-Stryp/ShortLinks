import { Component } from '@angular/core';
import { Account } from '../_interfaces/account';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  User: Account = {} as Account;

  constructor(
    private AccountService: AccountService,
    private Toastr: ToastrService
  ) {}

  Register(User: Account) {
    this.AccountService.Register(User).subscribe({
      next: (res: any) => {
        this.Toastr.success('Registration Successful');
        var currentUser = this.AccountService.GetCurrentUser();
        console.log(currentUser.token);
      },
      error: () => {
        this.Toastr.error('User Already Exists');
      },
    });
  }
}

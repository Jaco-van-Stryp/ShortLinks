import { URLService } from './../_services/url.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { linkMod } from '../_interfaces/linkMod';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-generate-url',
  templateUrl: './generate-url.component.html',
  styleUrls: ['./generate-url.component.scss'],
})
export class GenerateURLComponent {
  Url: linkMod = {} as linkMod;
  btnEnabled: boolean = false;
  @Output() linkOut = new EventEmitter<linkMod>();

  constructor(
    private URLService: URLService,
    private toastr: ToastrService,
    private accountService: AccountService
  ) {}

  saveURL(link: linkMod) {
    this.btnEnabled = true;
    if (
      link.longURL == null ||
      link.shortURL == null ||
      link.longURL == '' ||
      link.shortURL == '' ||
      link.shortURL.length > 250
    ) {
      this.toastr.error(
        'Please make sure to enter a Long Url, and Shortened Reference Url before generating. The maximum length for short URLs are 250 Characters'
      );
      this.btnEnabled = false;
    } else {
      this.URLService.CreateShortURL(link).subscribe({
        next: (res: any) => {
          this.toastr.success('Your URL has been created Successfully.');
          link.interactions = 0;
          this.linkOut.emit(link);
          this.btnEnabled = false;
        },
        error: (error: any) => {
          if (error.error == 'Short URL Already Exists') {
            this.toastr.error(
              'Whoops! Looks like this Short URL is already in use. Please try using another!'
            );
          } else {
            this.toastr.error(
              'Something went wrong while generating your URL. Please try again later.'
            );
          }
          this.btnEnabled = false;
        },
      });
    }
  }

  logout() {
    this.accountService.logout();
  }
}

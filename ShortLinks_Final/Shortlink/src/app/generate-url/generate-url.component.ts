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
  DataURL: linkMod = {} as linkMod;
  @Output() linkOut = new EventEmitter<linkMod>();

  constructor(
    private URLService: URLService,
    private toastr: ToastrService,
    private accountService: AccountService
  ) {}

  saveURL(link: linkMod) {
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
    } else {
      link.shortURL = link.shortURL.replaceAll(' ', '%20');
      link.longURL = link.longURL.replaceAll(' ', '%20');
      this.DataURL.longURL = '';
      this.DataURL.shortURL = '';

      this.URLService.CreateShortURL(link).subscribe({
        next: (res: any) => {
          this.toastr.success('Your URL has been created Successfully.');
          this.linkOut.emit(link);
        },
        error: (error: any) => {
          console.log(error.error);
          if (error.error === 'Short URL Already Exists') {
            this.toastr.error(
              'Whoops! Looks like this Short URL is already in use. Please try using another!'
            );
          } else if (error.error === 'Short Link Limit Reached') {
            this.toastr.error(
              'Whoops! Looks like you have reached your URL Limit, please either upgrade or delete existing URLs.'
            );
          } else {
            this.toastr.error(
              'Something went wrong while generating your URL. Please try again later.'
            );
          }
        },
      });
    }
  }

  logout() {
    this.accountService.logout();
  }
}

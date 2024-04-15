import { Component } from '@angular/core';
import { linkMod } from '../_interfaces/linkMod';
import { URLService } from '../_services/url.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_interfaces/user';
import { AccountService } from '../_services/account.service';
@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss'],
})
export class LinkPageComponent {
  Links: linkMod[] = [];
  User: User | any;
  constructor(
    private accountService: AccountService,
    private URLService: URLService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.User = this.accountService.GetCurrentUser();
    this.loadURLS();
  }

  loadURLS() {
    this.URLService.GetLinksForUser().subscribe({
      next: (res: linkMod[] | any) => {
        this.Links = res;
      },
    });
  }

  addLink(newLink: linkMod) {
    var L: linkMod = {
      longURL: newLink.longURL,
      shortURL: newLink.shortURL,
      interactions: 0,
    };
    this.Links.push(L);
  }

  removeLink(removeLink: linkMod) {
    var index = this.Links.indexOf(removeLink);
    this.Links.splice(index, 1);
    this.URLService.DeleteShortURL(removeLink.shortURL).subscribe({
      next: (res) => {
        this.toastr.success(
          'Short URL has been successfully Deleted and Disabled for other users.'
        );
      },
      error: (error) => {
        this.toastr.error('Something went wrong whilst deleting your URL');
      },
    });
  }
}

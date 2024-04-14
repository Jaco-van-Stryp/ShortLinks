import { URLService } from './../_services/url.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { linkMod } from '../_interfaces/linkMod';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-one-link',
  templateUrl: './one-link.component.html',
  styleUrls: ['./one-link.component.scss'],
})
export class OneLinkComponent {
  @Input() LinkData: linkMod = {} as linkMod;
  @Output() DeletedLink = new EventEmitter<linkMod>();

  constructor(private urlService: URLService, private toastr: ToastrService) {}

  DeleteURL(Url: linkMod) {
    this.urlService.DeleteShortURL(Url.shortURL).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success(
          'Short URL has been successfully Deleted and Disabled for other users.'
        );
        this.DeletedLink.emit(Url);
      },
      error: (error) => {
        console.log(error);
        this.toastr.error('Something went wrong whilst deleting your URL');
      },
    });
  }
}

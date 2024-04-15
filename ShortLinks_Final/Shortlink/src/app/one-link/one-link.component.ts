import { URLService } from './../_services/url.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { linkMod } from '../_interfaces/linkMod';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-one-link',
  templateUrl: './one-link.component.html',
  styleUrls: ['./one-link.component.scss'],
})
export class OneLinkComponent {
  @Input() LinkData: linkMod = {} as linkMod;
  @Output() DeletedLink = new EventEmitter<linkMod>();
  VisibleSL: string = '';
  constructor(private urlService: URLService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.VisibleSL = 'https://hubby.business/s/' + this.LinkData.shortURL;
  }

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

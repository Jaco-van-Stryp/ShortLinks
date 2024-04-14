import { URLService } from './../_services/url.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { linkMod } from '../_interfaces/linkMod';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generate-url',
  templateUrl: './generate-url.component.html',
  styleUrls: ['./generate-url.component.scss'],
})
export class GenerateURLComponent {
  Url: linkMod = {} as linkMod;
  @Output() linkOut = new EventEmitter<linkMod>();

  constructor(private URLService: URLService, private toastr: ToastrService) {}

  saveURL(link: linkMod) {
    this.URLService.CreateShortURL(link).subscribe({
      next: (res: any) => {
        this.toastr.success('Your URL has been created Successfully.');
        link.interactions = 0;
        this.linkOut.emit(link);
      },
      error: (error: any) => {
        console.log(error);
        this.toastr.error(error.error);
      },
    });
  }
}

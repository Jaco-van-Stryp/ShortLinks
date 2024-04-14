import { URLService } from './../_services/url.service';
import { Component, Output } from '@angular/core';
import { linkMod } from '../_interfaces/linkMod';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generate-url',
  templateUrl: './generate-url.component.html',
  styleUrls: ['./generate-url.component.scss'],
})
export class GenerateURLComponent {
  @Output() Url: linkMod = {} as linkMod;

  constructor(private URLService: URLService, private toastr: ToastrService) {}

  saveURL(link: linkMod) {
    this.URLService.CreateShortURL(link).subscribe({
      next: (res: any) => {
        this.toastr.success('Your URL has been created Successfully.');
      },
      error: (error: any) => {
        console.log(error);
        this.toastr.error(error.error);
      },
    });
  }
}

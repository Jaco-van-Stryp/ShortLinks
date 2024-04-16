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
  @Input() Busy: boolean | undefined;

  @Output() DeletedLink = new EventEmitter<linkMod>();
  VisibleSL: string = '';
  constructor(private urlService: URLService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.VisibleSL =
      'https://shortlinks.hubby.business/s/' + this.LinkData.shortURL;
  }

  DeleteURL() {
    this.DeletedLink.emit(this.LinkData);
  }
}

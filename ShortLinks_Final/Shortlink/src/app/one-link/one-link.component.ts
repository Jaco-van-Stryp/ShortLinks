import { Component, Input } from '@angular/core';
import { URL } from '../_interfaces/url';

@Component({
  selector: 'app-one-link',
  templateUrl: './one-link.component.html',
  styleUrls: ['./one-link.component.scss'],
})
export class OneLinkComponent {
  @Input() LinkData: URL = {} as URL;
}

import { Component, Input } from '@angular/core';
import { linkMod } from '../_interfaces/linkMod';

@Component({
  selector: 'app-one-link',
  templateUrl: './one-link.component.html',
  styleUrls: ['./one-link.component.scss'],
})
export class OneLinkComponent {
  @Input() LinkData: linkMod = {} as linkMod;
}

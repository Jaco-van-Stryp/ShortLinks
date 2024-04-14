import { Component } from '@angular/core';
import { linkMod } from '../_interfaces/linkMod';
import { URLService } from '../_services/url.service';
@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss'],
})
export class LinkPageComponent {
  Links: linkMod[] = [];

  constructor(private URLService: URLService) {}

  ngOnInit(): void {
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
    this.Links.push(newLink);
  }
}

import { Component } from '@angular/core';
import { URL } from '../_interfaces/url';
import { URLService } from '../_services/url.service';
@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss'],
})
export class LinkPageComponent {
  Links: URL[] = [];

  constructor(private URLService: URLService) {}

  ngOnInit(): void {
    this.loadURLS();
  }

  loadURLS() {
    this.URLService.GetLinksForUser().subscribe({
      next: (res: URL[] | any) => {
        this.Links = res;
      },
    });
  }
}

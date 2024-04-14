import { ActivatedRoute, Router } from '@angular/router';
import { URLService } from './../_services/url.service';
import { Component } from '@angular/core';
import { linkMod } from '../_interfaces/linkMod';

@Component({
  selector: 'app-link-router',
  templateUrl: './link-router.component.html',
  styleUrls: ['./link-router.component.scss'],
})
export class LinkRouterComponent {
  constructor(
    private URLService: URLService,
    private router: ActivatedRoute,
    private navigator: Router
  ) {}

  ngOnInit(): void {
    console.log('Redirecting');
    this.RedirectURL();
  }

  RedirectURL() {
    const shortURL = this.router.snapshot.paramMap.get('ShortURL');
    if (!shortURL) return;
    this.URLService.GetLongURL(shortURL).subscribe({
      next: (res: linkMod | any) => {
        console.log(res);
        window.location.href = res.longURL;
      },
      error: (error: any) => {
        this.navigator.navigateByUrl('NotFound');
      },
    });
  }
}

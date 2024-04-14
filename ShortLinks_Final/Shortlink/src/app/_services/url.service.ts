import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { linkMod } from '../_interfaces/linkMod';
@Injectable({
  providedIn: 'root',
})
export class URLService {
  constructor(private HttpClient: HttpClient, private base: BaseService) {}

  CreateShortURL(url: linkMod) {
    return this.HttpClient.post(
      this.base.BaseURL + 'Links/CreateShortURL',
      url
    );
  }

  GetLongURL(shortURL: string) {
    return this.HttpClient.get(
      this.base.BaseURL + 'Links/GetLongURL/' + shortURL
    );
  }

  GetLinksForUser() {
    return this.HttpClient.get(this.base.BaseURL + 'Links/GetLinksForUser');
  }

  DeleteShortURL(shortURL: string) {
    return this.HttpClient.delete(
      this.base.BaseURL + 'Links/DeleteShortURL/' + shortURL
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class URLService {
  constructor(private HttpClient: HttpClient, private base: BaseService) {}

  CreateShortURL(url: URL) {
    this.HttpClient.post(this.base.BaseURL + 'Links/CreateShortURL', url);
  }

  GetLongURL(shortURL: string) {
    this.HttpClient.get(this.base.BaseURL + 'Links/GetLongURL/' + shortURL);
  }

  GetLinksForUser() {
    this.HttpClient.get(this.base.BaseURL + 'Links/GetLinksForUser');
  }

  DeleteShortURL(shortURL: string) {
    this.HttpClient.delete(
      this.base.BaseURL + 'Links/DeleteShortURL/' + shortURL
    );
  }
}

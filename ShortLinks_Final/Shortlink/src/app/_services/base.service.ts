import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor() {}

  BaseURL: string = 'https://shortlinks.hubby.business/api/';
}

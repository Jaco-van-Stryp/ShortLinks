import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor() {}

  BaseURL: string = 'https://localhost:44351/api/';
}

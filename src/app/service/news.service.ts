import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var require: any;

const birthdatDaya = require('../models/birthdays.json');

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'http://newsapi.org/v2/everything';
  constructor(private httpRequest: HttpClient) { }

  getNews = (date) => {
    console.log('birthdatDaya', birthdatDaya);
    return this.httpRequest.get(this.baseUrl + '?q=bitcoin&from=' + date + '&sortBy=publishedAt&apiKey=34ed995ea76440adaba7ee8458e0f6cd');
  }

}

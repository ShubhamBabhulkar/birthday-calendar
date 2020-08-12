import { NewsService } from './../../service/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-dashboar',
  templateUrl: './news-dashboar.component.html',
  styleUrls: ['./news-dashboar.component.scss']
})
export class NewsDashboarComponent implements OnInit {
  currenDate: Date;
  allNews: Object;
  isLoading: boolean;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.currenDate = new Date();
    this.getNews(this.currenDate);
  }

  getNews = (date) => {
    this.isLoading = true;
    this.allNews = [];
    const selecteDate = date.getFullYear() + '-' + (date.getMonth() + 1 ) + '-' + date.getDate();
    this.newsService.getNews(selecteDate).subscribe(data => {
      this.allNews = data['articles'];
      this.isLoading = false;
    }, error => {
    this.isLoading = false;
    });
  }

}

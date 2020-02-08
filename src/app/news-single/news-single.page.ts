import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  art: any;

  constructor(private ns: NewsService) { }

  ngOnInit() {
    this.art = this.ns.currentArticle;
    console.log(this.ns.currentArticle);
  }

}

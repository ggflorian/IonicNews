import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage implements OnInit {

  resData: any;

  constructor(private ns: NewsService, private router: Router) { }

  ngOnInit() {
    this.ns.getData('top-headlines?sources=techcrunch')
      .subscribe( dt => {
        console.log(dt);
        this.resData = dt;
      });
  }

  goToArticle(article) {
    this.ns.currentArticle = article;
    this.router.navigate(['singlenews']);
  }
}

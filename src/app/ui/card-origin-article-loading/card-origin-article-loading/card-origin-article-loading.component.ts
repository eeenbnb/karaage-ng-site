import { Component, OnInit } from '@angular/core';
import { ReactCardOriginArticleLoading  } from '../../_react-items/card-origin-article-loading'


@Component({
  selector: 'card-origin-article-loading',
  templateUrl: './card-origin-article-loading.component.html',
  styleUrls: ['./card-origin-article-loading.component.scss']
})
export class CardOriginArticleLoadingComponent implements OnInit {
  ReactCardOriginArticleLoding = ReactCardOriginArticleLoading;
  constructor() { }

  ngOnInit(): void {
  }

}

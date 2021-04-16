import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'item-article',
  templateUrl: './item-article.component.html',
  styleUrls: ['./item-article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemArticleComponent implements OnInit {
  @Input() markdown:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { KaraageArticle } from 'src/@types/karaage-article';

@Component({
  selector: 'card-origin-artric',
  templateUrl: './card-origin-artric.component.html',
  styleUrls: ['./card-origin-artric.component.scss'],
})
export class CardOriginArtricComponent implements OnInit {
  @Input() article: KaraageArticle = {
    path: '',
    title: '',
    thumbnail: '',
  };

  constructor() {}

  ngOnInit(): void {}
}

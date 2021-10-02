import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-origin-title',
  templateUrl: './card-origin-title.component.html',
  styleUrls: ['./card-origin-title.component.scss'],
})
export class CardOriginTitleComponent implements OnInit {
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}

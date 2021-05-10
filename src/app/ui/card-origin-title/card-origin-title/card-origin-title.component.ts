import { Component, OnInit, Input } from '@angular/core';

import { ReactCardOriginTitle } from '../../_react-items/card-origin-title'

@Component({
  selector: 'card-origin-title',
  templateUrl: './card-origin-title.component.html',
  styleUrls: ['./card-origin-title.component.scss']
})
export class CardOriginTitleComponent implements OnInit {
  @Input() title:string = "";
  reactCardOriginTitle = ReactCardOriginTitle;

  constructor() { }

  ngOnInit(): void {
  }

}

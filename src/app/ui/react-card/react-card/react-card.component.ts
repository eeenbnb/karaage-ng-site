import { Component, OnInit } from '@angular/core';

import { RCComponent } from '../reaat-item/react-card';

@Component({
  selector: 'react-card',
  templateUrl: './react-card.component.html',
  styleUrls: ['./react-card.component.scss']
})
export class ReactCardComponent implements OnInit {
  reactCompoent = RCComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-origin',
  templateUrl: './card-origin.component.html',
  styleUrls: ['./card-origin.component.scss']
})
export class CardOriginComponent implements OnInit {
  @Input() isNoPadding:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'item-pagination',
  templateUrl: './item-pagination.component.html',
  styleUrls: ['./item-pagination.component.scss']
})
export class ItemPaginationComponent implements OnInit {
  @Input() set maxCount(num: number | undefined) {
    if (num) this._maxCount = [...Array(num)].map((_, i) => i + 1);
  }
  @Input() count: number = 1;

  _maxCount: number[] = [];

  constructor() { }

  ngOnInit(): void { }

}

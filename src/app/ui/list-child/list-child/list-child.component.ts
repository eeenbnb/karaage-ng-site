import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'list-child',
  templateUrl: './list-child.component.html',
  styleUrls: ['./list-child.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'list-parent',
  templateUrl: './list-parent.component.html',
  styleUrls: ['./list-parent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

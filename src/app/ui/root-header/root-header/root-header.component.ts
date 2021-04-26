import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'root-header',
  templateUrl: './root-header.component.html',
  styleUrls: ['./root-header.component.scss']
})
export class RootHeaderComponent implements OnInit {
  isViewHumItem:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-origin-artric',
  templateUrl: './card-origin-artric.component.html',
  styleUrls: ['./card-origin-artric.component.scss']
})
export class CardOriginArtricComponent implements OnInit {
  @Input() image:string = "";
  @Input() title:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ReactItemPagination } from '../../_react-items/item-pagination'

@Component({
  selector: 'item-pagination',
  templateUrl: './item-pagination.component.html',
  styleUrls: ['./item-pagination.component.scss']
})
export class ItemPaginationComponent implements OnInit {
  @Input() maxCount:number = 1;
  @Input() count:number = 1;
  @Output() countChange:EventEmitter<number> = new EventEmitter<number>();

  ReactItemPagination = ReactItemPagination;
  item:any = {};

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.item = {
      maxCount: this.maxCount,
      count: this.count,
      onClick: (e:Event,i:number)=>{this.onClick(e,i)}
    }
  }

  onClick(e:Event,i:number){
    if(i == 1){
      this.router.navigate(["/"]);
    }else{
      this.router.navigate(["/page",i]);
    }
    this.countChange.emit(i);
  }

}

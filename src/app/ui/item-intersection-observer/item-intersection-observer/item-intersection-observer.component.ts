import { Component, OnInit, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-intersection-observer',
  templateUrl: './item-intersection-observer.component.html',
  styleUrls: ['./item-intersection-observer.component.scss']
})
export class ItemIntersectionObserverComponent implements OnInit, AfterViewInit {
  @Output() viewEvent:EventEmitter<{}> = new EventEmitter<{}>();

  constructor(
    private elementRef:ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let observer =
      new IntersectionObserver(
        (entries)=>{
          entries.forEach((entry: any) => {
            if(!entry.isIntersecting) return;
            this.viewEvent.emit();
          }
        )
      });
    observer.observe(this.elementRef.nativeElement);
  }
}

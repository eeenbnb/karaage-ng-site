import { Component, OnInit, AfterViewInit, OnDestroy, Input, ElementRef } from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'react-wrapper',
  template: '',
  styles: [
   `
     :host {
       display: inline-block;
     }
   `,
 ],
})
export class ReactWrapperComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() reactCompoent:React.Component<any> | any;
  @Input() prop:any = {};

  constructor(
    private elementRef:ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    ReactDOM.render(
      React.createElement(
        this.reactCompoent,
        this.prop,
      ),
      this.elementRef.nativeElement
    )
  }

  ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(
      this.elementRef.nativeElement
    );
  }

}

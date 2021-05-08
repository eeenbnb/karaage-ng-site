import { Component, OnInit, AfterViewInit, OnDestroy, Input, ElementRef } from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'react-wrapper',
  template: ''
})
export class ReactWrapperComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() reactCompoent:React.Component<any> | any;

  constructor(
    private elementRef:ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    ReactDOM.render(
      React.createElement(this.reactCompoent),
      this.elementRef.nativeElement
    )
  }

  ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(
      this.elementRef.nativeElement
    );
  }

}

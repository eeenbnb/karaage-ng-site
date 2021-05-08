import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestFeildRoutingModule } from './test-feild-routing.module';
import { TestFeildComponent } from './test-feild/test-feild.component';


import { ReactCardModule } from '../../ui/react-card/react-card.module'

@NgModule({
  declarations: [
    TestFeildComponent
  ],
  imports: [
    CommonModule,
    TestFeildRoutingModule,
    ReactCardModule
  ]
})
export class TestFeildModule { }

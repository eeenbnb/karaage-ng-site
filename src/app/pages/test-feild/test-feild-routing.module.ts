import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestFeildComponent } from './test-feild/test-feild.component';

const routes: Routes = [
  {
    path: "",
    component: TestFeildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestFeildRoutingModule { }

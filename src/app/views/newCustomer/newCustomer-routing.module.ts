import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCustomerComponent } from './newCustomer.component';

const routes: Routes = [
  {
    path: '',
    component: NewCustomerComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCustomerRoutingModule {}

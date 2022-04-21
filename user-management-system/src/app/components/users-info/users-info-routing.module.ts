import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersInfoComponent } from './users-info.component';

const routes : Routes = [
  {
    path:'',
    component: UsersInfoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersInfoRoutingModule { }

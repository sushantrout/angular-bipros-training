import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq.component';

const faqRoutes : Routes = [
  {
    path: '',
    component: FaqComponent,
    pathMatch:'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(faqRoutes)
  ],exports : [
    RouterModule
  ]
})
export class FaqRoutingModule { }

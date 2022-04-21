import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq.component';

const routs: Routes = [
  {
    path: '',
    component: FaqComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routs)],
  exports: [RouterModule],
})
export class FaqRoutingModule {}

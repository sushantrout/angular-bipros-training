import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersInfoComponent } from './users-info.component';
import { UsersInfoRoutingModule } from './users-info-routing.module';



@NgModule({
  declarations: [UsersInfoComponent],
  imports: [
    CommonModule,
    UsersInfoRoutingModule
  ]
})
export class UsersInfoModule { }

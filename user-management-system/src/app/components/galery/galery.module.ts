import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryRotingModule } from './galery-roting.module';
import { GaleryComponent } from './galery.component';



@NgModule({
  declarations: [GaleryComponent],
  imports: [
    CommonModule,
    GaleryRotingModule
  ]
})
export class GaleryModule { }

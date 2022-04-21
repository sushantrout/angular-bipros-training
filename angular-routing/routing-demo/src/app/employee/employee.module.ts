import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmployeeComponent, ModifyEmployeeComponent],
  imports: [CommonModule, EmployeeRoutingModule, FormsModule],
  bootstrap: [EmployeeComponent]
})
export class EmployeeModule {
  constructor() {
    console.log('Employee Module');
  }
}

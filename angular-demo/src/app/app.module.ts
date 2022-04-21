import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, EmployeeDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, EmployeeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  employee: Employee;
  employess : Employee [] = [];
  ngOnInit(): void {
    let pData = localStorage.getItem("datas");
    if(pData) {
      this.employess = JSON.parse(pData);
    } else {
      this.employess = [];
    }
    this.resetEmployee();
  }
  addEmployee() {
    this.resetEmployee();
  }
  saveEmployee(){
    this.employess.push(this.employee);
    this.resetEmployee();
  }
  
  resetEmployee() {
    this.employee = new Employee();
    this.employee.dept = 'BIPROS';
  }
  saveParam() {
    localStorage.setItem("datas", JSON.stringify(this.employess));
  }
  selectData(data : Employee){
    this.employee = data;
  }
}

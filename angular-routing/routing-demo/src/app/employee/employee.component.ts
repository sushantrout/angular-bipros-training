import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/emplouee.model';

@Component({
  selector: 'bipros-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[] = [];
  selectEmployee: Employee = new Employee();
  constructor() {
    console.log('EmployeeComponent');
    this.selectEmployee = new Employee();
  }

  ngOnInit(): void {
    for(let i=0; i< 10; i++) {
      let e1 = new Employee();
      e1.id = i+1;
      e1.name = 'BIPROS-'+(i+1);
      e1.age = 20+i
      this.employees.push(e1);
    }
  }

  selectData(ce : Employee){
    this.selectEmployee = JSON.parse(JSON.stringify(ce));
  }

  updateEmployee(event : Employee){
    if(event.id) {
      for(let e of this.employees) {
        if(e.id == event.id) {
          e.name = event.name;
          e.age = event.age;
          break;
        }
      }
    } else {
      this.employees.unshift(event);
    }
  }
}

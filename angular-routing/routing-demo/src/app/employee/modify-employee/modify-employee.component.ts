import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/model/emplouee.model';

@Component({
  selector: 'bipros-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent implements OnInit {

  @Input('inputToModify') inputToModify : Employee = new Employee();

  @Output('updatedEmployeeData') updatedEmployeeData = new EventEmitter<Employee>();
  constructor() {
    console.log('Modify Employee');
   }

  ngOnInit(): void {
  }

  updateEmployee(){
    this.updatedEmployeeData.emit(this.inputToModify);
    this.inputToModify = new Employee();
  }
  sendStatus(){
    return !(this.inputToModify.name && this.inputToModify.age);
  }

  createEmployee(){
    this.updatedEmployeeData.emit(this.inputToModify);
    this.inputToModify = new Employee();
  }
}

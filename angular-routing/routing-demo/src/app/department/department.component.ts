import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bipros-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() {
    console.log('Department');
  }
  ngOnInit(): void {
  }

}

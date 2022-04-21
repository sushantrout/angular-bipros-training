import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('x') test: any;
  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.test.nativeElement.innerHTML);
  }
  ngOnInit(): void {}
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/employee.model';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css'],
})
export class UsersInfoComponent implements OnInit {
  constructor(private userService: UserService,
    private location : Location) {}

  user?: UserModel = new UserModel();
  ngOnInit(): void {
    this.user = this.userService.user;
  }

  back() {
    this.location.back();
  }
}

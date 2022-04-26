import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/employee.model';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService,) { }

  user ?: UserModel = new UserModel();
  ngOnInit(): void {
    this.userService.subject$.subscribe(res => {
      this.user = res;
    });
  }

}

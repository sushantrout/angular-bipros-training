import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/model/employee.model';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : UserModel = new UserModel();
  constructor(private aRouter : ActivatedRoute,
    private router : Router,
    private userService : UserService) { }

  ngOnInit(): void {
    this.reset();
  }
  submit(){
    this.userService.user = this.user;
    this.userService.sendRequest(this.user);
    this.router.navigate(['/user-info']);
    console.log(this.user);

    this.reset();
  }
  reset(){
    this.user = new UserModel();
  }
}

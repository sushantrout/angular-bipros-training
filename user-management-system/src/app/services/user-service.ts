import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { UserModel } from "../model/employee.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user ?: UserModel;
    subject$ = new Subject<UserModel>();

    sendRequest(user : UserModel){
        this.subject$.next(JSON.parse(JSON.stringify(this.user)));
    }
}
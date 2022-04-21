import { Injectable } from "@angular/core";
import { UserModel } from "../model/employee.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user ?: UserModel;
}
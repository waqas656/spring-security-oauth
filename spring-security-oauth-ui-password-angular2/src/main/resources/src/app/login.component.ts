import { Component } from '@angular/core';
import {AuthService} from './auth.service'

@Component({
  selector: 'login-form',
  providers: [AuthService],  
  template: `<h1>Login</h1>
    <div class="alert alert-danger" *ngIf="errorMsg">{{errorMsg}}</div>
    <div class="col-sm-6">
        <div class="col-sm-12 form-group">
             <label>Username</label>
             <input class="form-control" type="text" [(ngModel)]="loginData.username" />
        </div>
        <div class="col-sm-12 form-group">
            <label>Password</label>
            <input class="form-control" type="password"  [(ngModel)]="loginData.password"/>
        </div>
        <div class="col-sm-12">
            <button class="btn btn-primary pull-right" (click)="login()" type="submit">Login</button>
        </div>
    </div>`
})
export class LoginComponent {
    public loginData = {username: "", password: ""};
    public errorMsg = '';

    constructor(private _service:AuthService) {}
 
    login() {
        if(!this._service.obtainAccessToken(this.loginData)){
           this.errorMsg = 'Invalid Username or password';          
        }
    }
}

import {Component} from '@angular/core';
import {AuthService} from './auth.service'
 
@Component({
    selector: 'home-header',
    providers: [AuthService],
  template: `<div class="container" >
    <div class="content">
        <span>Welcome !!</span>
        <a class="btn btn-default pull-right"(click)="logout()" href="#">Logout</a>
    </div>
    <foo-details></foo-details>
</div>`
})
 
export class HomeComponent {
 
    constructor(
        private _service:AuthService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
}
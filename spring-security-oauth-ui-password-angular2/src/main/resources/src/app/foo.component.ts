import { Component } from '@angular/core';
import {AuthService, Foo} from './auth.service'

@Component({
  selector: 'foo-details',
  providers: [AuthService],  
  template: `<div class="container">
    <h1 class="col-sm-12">Foo Details</h1>
    <div class="col-sm-12">
        <label class="col-sm-3">ID</label> <span>{{foo.id}}</span>
    </div>
    <div class="col-sm-12">
        <label class="col-sm-3">Name</label> <span>{{foo.name}}</span>
    </div>
    <div class="col-sm-12">
        <button class="btn btn-primary" (click)="getFoo()" type="submit">New Foo</button>        
    </div>
</div>`
})

export class FooComponent {
    public foo = new Foo(1,'sample foo');
    private foosUrl = 'http://localhost:8082/spring-security-oauth-resource/foos/';  

    constructor(private _service:AuthService) {}

    getFoo(){
        this._service.getResource(this.foosUrl+this.foo.id)
         .subscribe(
                     data => this.foo = data,
                     error =>  this.foo.name = 'Error');
    }
}

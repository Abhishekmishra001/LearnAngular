import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-components',
  imports: [],
  templateUrl: './api-components.html',
  styleUrl: './api-components.css',
})

export class ApiComponents {
  userList :  any [] = []
  constructor(private http : HttpClient){
  }
  getUser (){
    this.http.get<any>("https://jsonplaceholder.typicode.com/users").subscribe((result)=> {
      debugger
   this.userList = result
    })
  }
  
}

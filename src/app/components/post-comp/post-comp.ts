import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-comp',
  imports: [UpperCasePipe,JsonPipe,DatePipe],
  templateUrl: './post-comp.html',
  styleUrl: './post-comp.css',
})
export class PostComp implements OnInit {
  getList : any[] = []
  postList :any[] =[]
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getAllPost()
  }
  getAllPost(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any) =>{
      this.getList = res
    })
  }

    username : string = "abhishek"

    userObj ={
      name:"abhishek",
      lastname:"mishra",
      email:"test@gmail.com"
    }

  updateUserPost(){
    this.http.post("https://jsonplaceholder.typicode.com/posts",null).subscribe((res:any)=>{
      this.postList = res
    })
  }
  
}

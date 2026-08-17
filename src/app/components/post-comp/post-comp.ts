import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-post-comp',
  imports: [],
  templateUrl: './post-comp.html',
  styleUrl: './post-comp.css',
})
export class PostComp {
  getList : any[] = []
  postList :any[] =[]
  http = inject(HttpClient)
  getAllPost(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any) =>{
      this.getList = res
    })
  }

  updateUserPost(){
    this.http.post("https://jsonplaceholder.typicode.com/posts",null).subscribe((res:any)=>{
      this.postList = res
    })
  }
}

import { NgFor, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ProgressBar } from "../progress-bar/progress-bar";

@Component({
  selector: 'app-event-comp',
  imports: [NgFor, FormsModule, ProgressBar],
  templateUrl: './event-comp.html',
  styleUrl: './event-comp.css',
})
export class EventComp {
  color :string[] = ["red","yellow","blue","green","white","black"]
   cityList : string[] = ["Pune","Lucknow","Delhi","Noida","Bng","Hyd"]
   selectedColor:string ="red"
//    colorChange (color:any){
//     this.color = color
// console.log(color);
//    }
}

import { Component, numberAttribute, signal } from '@angular/core';

@Component({
  selector: 'app-signal-comp',
  imports: [],
  templateUrl: './signal-comp.html',
  styleUrl: './signal-comp.css',
})
export class SignalComp {

  firstname = signal ('Abhishek')
  constructor(){
    setTimeout(()=>{
        this.firstname.set('aman')
        debugger
    },4000)
  }
  rollno = signal(0)

  changeValue (){
    this.rollno.update(val => val +1)
  }
}

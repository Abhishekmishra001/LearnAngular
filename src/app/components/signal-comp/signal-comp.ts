import { UpperCasePipe } from '@angular/common';
import { Component, linkedSignal, numberAttribute, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { ProgressBar } from "../progress-bar/progress-bar";

@Component({
  selector: 'app-signal-comp',
  imports: [RouterLink, RouterOutlet, ProgressBar],
  templateUrl: './signal-comp.html',
  styleUrl: './signal-comp.css',
})
export class SignalComp {
  firstname = signal('Abhishek');
  lastName = signal('Mishra');
  constructor() {
    setTimeout(() => {
      this.firstname.set('aman');
    }, 4000);
  }
  rollno = signal(0);

  changeValue() {
    this.rollno.update((val) => val + 1);
  }

  fullName = linkedSignal({
    source: this.firstname,
    computation: (newValue, prev) => {
      const fullName = newValue + '' + this.lastName();
      return fullName;
    },
  });

  changeName() {
    this.firstname.set('Gaurav');
  }
}

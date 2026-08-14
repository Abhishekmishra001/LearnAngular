import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  userDetail:any = {
    firstName:"Abhishek",
    lastName:"Mishra"
  }
}

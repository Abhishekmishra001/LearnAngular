import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  userForm:FormGroup = new FormGroup({
    fName : new FormControl(''),
    lName: new FormControl('')
  })

  onSave(){
    const formValue = this.userForm.value
    console.log(formValue);
    
  }
}

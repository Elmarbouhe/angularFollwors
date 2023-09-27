import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';


@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  submit(form:any) {
    console.log(form);
  }

  form = new FormGroup( {
    email : new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password : new FormControl('',[
      Validators.required,
      Validators.minLength(9)
    ])
  })

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }
}

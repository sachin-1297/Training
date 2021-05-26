import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  types = [{ id: 1, name: 'Text' }, { id: 2, name: 'Date' }];
  isReadonly = true;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.minLength(10)),
    password: new FormControl(''),
    type: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  signup() {
    console.log(this.registerForm.value);
  }

}

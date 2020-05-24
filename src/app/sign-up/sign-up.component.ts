import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor() {}
  model: User = new User();
  onSubmit () {
    console.log(this.model);
  }
  ngOnInit(): void {}
}

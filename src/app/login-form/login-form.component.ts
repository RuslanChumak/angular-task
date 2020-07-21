import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() Login = new EventEmitter<Object>();
    login() {
      this.Login.emit({email: this.email, password: this.password});
    }
  email: String = 'user@mail.ru'
  password: String = 'passwowrd'
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';
  email: String = 'user@mail.ru'
  password: String = 'password'
  logged: Boolean = false


  login(obj){
    if(obj.email === this.email || obj.pass === this.password){
      this.logged = true
      return true
    }
    else return false
  }
}

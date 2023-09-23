import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any;
  password: any;

  constructor(private router: Router){}
  
  login(){
    localStorage.setItem('token', 'abshj32')
    this.router.navigateByUrl("/pokemons")
  }

  goToRegister(){
    this.router.navigate(["/person/create"]);
  }
}

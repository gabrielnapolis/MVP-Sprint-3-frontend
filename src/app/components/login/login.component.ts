import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any;
  senha: any;

  constructor(private router: Router, private personService: PersonService){}


  login(): void{ 
    this.personService.login(this.email, this.senha).subscribe((token)=>{
      localStorage.setItem('token', token)
    })
    //this.router.navigateByUrl("/pokemons")
  }

  goToRegister(){
    this.router.navigate(["/person/create"]);
  }
}

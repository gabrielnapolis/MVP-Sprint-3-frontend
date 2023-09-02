import { Person } from './../person.model';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { PersonService } from "./../person.service";


@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent {

  person: Person = {
    nome: '',
    email: '',
    senha: null,
    idade: null,
  }

  constructor(private personService: PersonService, private router: Router){}

  createPerson(): void {
    this.personService.create(this.person).subscribe(() => {
      this.personService.showMessage("Usuário criado!")
      this.router.navigate(["/person"])
    });
  }

  cancel(): void {
    this.router.navigate(["/person"])
  }
}

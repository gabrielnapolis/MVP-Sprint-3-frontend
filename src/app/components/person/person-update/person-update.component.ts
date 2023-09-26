import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit{
  
  person: Person = {
    nome: '',
    email: '',
    senha: '',
    idade: null,
  }

  constructor (private personService: PersonService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")!;
    this.personService.readById(id).subscribe((person) => {
      this.person = person;
    });
  }

  updatePerson(): void {
    this.personService.update(this.person).subscribe(()=>{
      this.personService.showMessage("Usuário atualizado com sucesso!");
      this.router.navigate(["/"])
    })
  }

  cancel(): void {
    this.router.navigate(["/"])
  }
}

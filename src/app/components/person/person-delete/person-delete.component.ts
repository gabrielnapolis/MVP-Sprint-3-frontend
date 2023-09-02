import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../person.service';
import { Component } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit{

  person!: Person

  constructor (private personService: PersonService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")!;
    this.personService.readById(id).subscribe((person) => {
      this.person = person;
    });
  }

  deletePerson(): void {
    this.personService.delete(this.person).subscribe(() => {
      this.personService.showMessage("Usuário deletado com sucesso!");
      this.router.navigate(["/person"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/person"]);
  }
}

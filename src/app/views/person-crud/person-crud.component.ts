import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-person-crud",
  templateUrl: "./person-crud.component.html",
  styleUrls: ["./person-crud.component.css"],
})
export class PersonCrudComponent {

  constructor(private router: Router) {}
 
  navigateToPersonCreate() {
    this.router.navigate(["/person/create"]);
  }
}

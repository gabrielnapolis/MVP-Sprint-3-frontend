import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";

import { PersonCrudComponent } from "./views/person-crud/person-crud.component";
import { PersonCreateComponent } from "./components/person/person-create/person-create.component";
import { PersonDeleteComponent } from "./components/person/person-delete/person-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "person",
    component: PersonCrudComponent,
  },
  {
    path: "person/create",
    component: PersonCreateComponent,
  },
  {
    path: "person/delete/:id",
    component: PersonDeleteComponent,
  },
  {
    path: "person/update/:id",
    component: PersonUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

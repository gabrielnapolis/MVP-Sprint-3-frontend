import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";

import { PersonCrudComponent } from "./views/person-crud/person-crud.component";
import { PersonCreateComponent } from "./components/person/person-create/person-create.component";
import { PersonDeleteComponent } from "./components/person/person-delete/person-delete.component";
import { PokemonCrudComponent } from './views/pokemon-crud/pokemon-crud.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonUserComponent } from './components/pokemon/pokemon-user/pokemon-user.component';

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
  {
    path: "pokemons",
    component: PokemonCrudComponent
  },
  {
    path: "pokemon-detail",
    component: PokemonDetailComponent
  },
  {
    path: "pokemon-user",
    component: PokemonUserComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  
  constructor(public servicePokemon: PokemonService){ }

  getPaged(){
    this.servicePokemon.getPokemonsPaged();
  }
}

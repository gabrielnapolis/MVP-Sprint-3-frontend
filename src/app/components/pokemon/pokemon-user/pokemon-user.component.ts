import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PokemonDTOService } from '../pokemon-dto.service';
import { PokemonDTO } from '../pokemonDTO.model';

@Component({
  selector: 'app-pokemon-user',
  templateUrl: './pokemon-user.component.html',
  styleUrls: ['./pokemon-user.component.css']
})
export class PokemonUserComponent implements OnInit{

  pokemon: PokemonDTO ={
    code: null,
    fk_pessoa: null
  }

  pokemonCode: any;
  pokemonURL: any;

  constructor(public servicePokemon: PokemonDTOService){}
  
  ngOnInit(): void {
    const id = 1;
    this.servicePokemon.readById("1").subscribe((pokemon)=>{
      this.pokemon = pokemon;
      console.log(this.pokemon)
    })
  }
}

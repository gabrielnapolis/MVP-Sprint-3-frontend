import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../pokemon.model";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"],
})
export class PokemonDetailComponent {
  baseUrl: any;
  pokemon: Pokemon | undefined;
  pokemonId: any;
  pokemonImageUrl: any;
  pokemonType: any;
  reqWeak: any;
  pokemonWeakUrl:any;
  pokemonWeak: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpCliente: HttpClient
  ) {
    this.getPokemon();
  }

  getPokemon() {
    this.baseUrl = `https://pokeapi.co/api/v2/pokemon/${this.data}`;

    this.httpCliente.get<any>(this.baseUrl).subscribe((data) => {
      this.pokemon = data;

      //Armazenar o ID vindo da requisição e passando pela função de formatar o número
      this.pokemonId = this.leadingZero(this.pokemon?.id)

      //Armazenar URL de imagem a partir da requisição
      this.pokemonImageUrl =
        this.pokemon?.sprites.other["official-artwork"].front_default;

      //Armazenar tipo a partir da requisição
      this.pokemonType = this.pokemon?.types;

      //Armazenar URL de tipos para verificar as fraquezas dos pokemons
      this.pokemonWeakUrl = this.pokemon?.types[0].type.url;

      //Método que verifica fraquezas a partir dos tipos
      this.getWeakness(this.pokemonWeakUrl);
    });
  }

  getWeakness(url:string){
    this.httpCliente.get<any>(url).subscribe((data)=>{
      this.reqWeak = data;
      this.pokemonWeak = this.reqWeak.damage_relations.double_damage_from;
      console.log(this.pokemonWeak)
    })
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  }
}

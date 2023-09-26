import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { PokemonDTOService } from "../pokemon-dto.service";
import { PokemonDTO } from "../pokemonDTO.model";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../pokemon.model";
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";
import { MatDialog } from "@angular/material/dialog";
import { PersonService } from "../../person/person.service";

@Component({
  selector: "app-pokemon-user",
  templateUrl: "./pokemon-user.component.html",
  styleUrls: ["./pokemon-user.component.css"],
})
export class PokemonUserComponent implements OnInit {

  pokemons = [];
  pokemonsData: any;
  baseUrl: any;
  pokemonCode: any;
  id: any;

  constructor(
    public servicePokemon: PokemonDTOService, 
    private httpCliente: HttpClient, 
    public dialog: MatDialog,
    public personService: PersonService
    ) {
    this.pokemonsData = [];
  }

  ngOnInit(): void {
    const token = localStorage.getItem('data')

    if(token){
    
    const user = JSON.parse(token)

    this.servicePokemon.readById(user.id).subscribe((data)=>{
      this.pokemons = data.pokemons
      console.log(this.pokemons)
      
      this.pokemons.forEach((pokemon: PokemonDTO) => {
        this.pokemonCode = pokemon.code;
        this.id = pokemon.id
        this.getPokemonById(this.pokemonCode)
      })
    },
    error => {
      this.personService.showMessage("Nenhum pokemon adicionado");
    }
    )
  }
  }

  getPokemonById(id:any){
    this.baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

    this.httpCliente.get<Pokemon>(this.baseUrl).subscribe((data) => {
        this.pokemonsData.push(data)
    })
  }

  catchImage(n: any) {
    const numberFormat = this.leadingZero(n);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberFormat}.png`;
  }


  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  }

  openDialog(pokemonNumber: any) {
    const dialogRef = this.dialog.open(PokemonDetailComponent, {data:pokemonNumber});
  }

  reloadPage(){
    window.location.reload()
  }

  deletePokemon(n: string){
      this.servicePokemon.delete(n).subscribe(()=>{
        console.log(n)
        this.reloadPage();
        this.servicePokemon.showMessage("Pokemon deletado!")
      },
      error =>{
        this.servicePokemon.showMessage(error.error.mesage)
      })
  }
}

import { Component, Input } from "@angular/core";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";
import { PokemonDTO } from "../pokemonDTO.model";
import { PokemonDTOService } from "../pokemon-dto.service";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"],
})
export class PokemonCardComponent {
  pokemonId: any;
  @Input()
  pokemon: any;
  types: any;

  @Input()
  numberUrl: any;

  pokemonDTO: PokemonDTO = {
    code: null,
    fk_pessoa: null
  }
  
  constructor(public dialog: MatDialog, private pokemonService: PokemonDTOService) {}

  catchImage() {
    const numberFormat = this.leadingZero(this.numberUrl);

    this.pokemonId = this.leadingZero(this.numberUrl);

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

  addPokemon(): void{
    this.pokemonDTO.code = this.numberUrl
    this.pokemonDTO.fk_pessoa = 1
    console.log(this.pokemonDTO)

    this.pokemonService.create(this.pokemonDTO).subscribe(() => {
      this.pokemonService.showMessage("Pokemon Adicionado")
    });
  }
}

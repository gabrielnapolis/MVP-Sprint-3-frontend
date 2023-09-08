import { Component, Input } from "@angular/core";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"],
})
export class PokemonCardComponent {
  @Input()
  pokemon: any;
  types: any;

  @Input()
  numberUrl: any;
  constructor(public dialog: MatDialog) {}

  catchImage() {
    const numberFormat = this.leadingZero(this.numberUrl);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberFormat}.png`;
  }


  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  }

  openDialog() {
    const dialogRef = this.dialog.open(PokemonDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

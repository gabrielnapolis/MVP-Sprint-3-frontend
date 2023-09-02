import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input()
  pokemon: any;

  @Input()
  numero: any;

  catchImage(){
    const numberFormat = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberFormat}.png`
  }

  leadingZero(str: string | number, size = 3): string{
    let s = String(str);

    while (s.length < (size || 2)){
      s = '0' + s;
    }

    return s;
  }
}

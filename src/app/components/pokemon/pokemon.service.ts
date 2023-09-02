import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
  pokemons = [];

  constructor(private httpCliente: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const req = await firstValueFrom(this.httpCliente.get<any>(this.baseUrl));

    this.pokemons = req.results;

    console.log(this.pokemons)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  limit: number = 30;
  baseUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}`;
  pokemons = [];

  constructor(private httpCliente: HttpClient) {
    this.getPokemons();
  }

  async getPokemons() {
    const req = await firstValueFrom(this.httpCliente.get<any>(this.baseUrl));
    this.pokemons = req.results;
  }

  getPokemonsPaged(){
    this.limit += 50;
    this.baseUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}`;
    this.getPokemons();
  }

}

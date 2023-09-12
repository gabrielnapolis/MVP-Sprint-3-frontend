import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDTO } from './pokemonDTO.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDTOService {
  baseUrl = "http://127.0.0.1:5000/pokemon";

  constructor(private http: HttpClient) { }
}

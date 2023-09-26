import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDTO } from './pokemonDTO.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PokemonDTOService {
  baseUrl = "http://127.0.0.1:5000/pokemon";
  pokemons = [];


  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["msg-success"],
    });
  }

  create(pokemon: PokemonDTO): Observable<PokemonDTO>{
    return this.http.post<PokemonDTO>(this.baseUrl, pokemon)
  }

  read():Observable<PokemonDTO[]>{
    return this.http.get<PokemonDTO[]>(this.baseUrl)
  }

  delete(id: string): Observable<PokemonDTO> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<PokemonDTO>(url)
  }
  
  readById(id: number): Observable<any>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<any>(url)
  }
}

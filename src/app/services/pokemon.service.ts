import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay, map, shareReplay } from 'rxjs/operators';

import { PokemonInterface } from '../../app/interfaces/pokemon';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API = `${environment.API}pokemons`;

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<PokemonInterface[]>(`${this.API}/`) 
    .pipe(shareReplay(1))
  }

  getPokemonDetail(pokemonId: any) {
    return this.http.get<PokemonInterface>(`${this.API}/${pokemonId}`)
      .pipe(
        // tap(console.log)
      )
  }

}

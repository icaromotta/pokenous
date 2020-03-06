import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';

import { Pokemon } from '../../app/interfaces/pokemon';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API = `${environment.API}pokemons`;

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<Pokemon[]>(`${this.API}/`)
      .pipe(
        delay(1000),
        tap(console.log)
      )
  }

}

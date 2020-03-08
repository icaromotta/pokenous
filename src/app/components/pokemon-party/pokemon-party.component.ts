import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pokemon-party',
  templateUrl: './pokemon-party.component.html',
  styleUrls: ['./pokemon-party.component.scss']
})
export class PokemonPartyComponent implements OnInit {

  private pokemons = []
  private pokemonGo = {}
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.listAll()
      .subscribe((pokemons: any) => {
        this.pokemons = pokemons
       })
  }

  indicatesForBattle(pokemon: any) {
    this.pokemonGo = pokemon
  }
}

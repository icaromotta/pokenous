import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInterface } from '../../interfaces/pokemon'

@Component({
  selector: 'app-pokemon-party',
  templateUrl: './pokemon-party.component.html',
  styleUrls: ['./pokemon-party.component.scss']
})
export class PokemonPartyComponent implements OnInit {

  public pokemons$: Observable<PokemonInterface[]>

  public pokemons = []
  private pokemonGo = {}
  public searchText: string
  public pokemonDetail = {
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: ''
  }
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons$ = this.pokemonService.listAll()
  }

  indicatesForBattle(pokemon: any) {
    this.pokemonGo = pokemon
  }

 loadInfosPokemon(pokemon: any) {
  this.pokemonDetail = pokemon
 }
}

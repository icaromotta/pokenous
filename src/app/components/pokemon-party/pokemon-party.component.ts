import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-party',
  templateUrl: './pokemon-party.component.html',
  styleUrls: ['./pokemon-party.component.scss']
})
export class PokemonPartyComponent implements OnInit {

  private pokemons = []
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.listAll()
      .subscribe((pokemons: any) => {
        this.pokemons = pokemons
       })
  }
}

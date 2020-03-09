import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  private pokemonId: string;
  public pokemon: any = '';

  constructor(private actRoute: ActivatedRoute,
              private pokemonService: PokemonService) {
    this.pokemonId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadPokemonDetail()
  }

  loadPokemonDetail() {
    this.pokemonService.getPokemonDetail(this.actRoute.snapshot.params['id'])
      .subscribe((pokemon) => {
        this.pokemon = pokemon
      })
  }
}

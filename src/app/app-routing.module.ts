import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonPartyComponent } from './components/pokemon-party/pokemon-party.component';

const routes: Routes = [
  { path: '', component: PokemonPartyComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

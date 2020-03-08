import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonPartyComponent } from './components/pokemon-party/pokemon-party.component';
import { FilterPipe } from '../app/pipes/filter.pipe';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { ArenaComponent } from './components/arena/arena.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonPartyComponent,
    FilterPipe,
    PokemonDetailComponent,
    ArenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

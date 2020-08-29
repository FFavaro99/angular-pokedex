import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonComponent } from './pokedex/pokemon/pokemon.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { SelectionComponent } from './selection/selection.component';

import { ApiRequestsService } from './services/api-requests.service';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonComponent,
    DetailsComponent,
    HeaderComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ApiRequestsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

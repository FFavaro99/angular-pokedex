import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private selectedPokemon;
  public subject = new Subject();

  constructor() {
    this.selectedPokemon = {};
  }

  setSelectedPokemon(pokemon: {}){
    this.selectedPokemon = {...pokemon};
    this.subject.next(this.selectedPokemon);
    console.log(this.selectedPokemon);
  }

}

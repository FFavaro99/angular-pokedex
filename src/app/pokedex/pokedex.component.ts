import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../services/api-requests.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public pokedex;

  constructor( private api: ApiRequestsService ) { }

  ngOnInit(): void {
    this.api.getPokedexes().subscribe(
      value => {
        console.log(value);
      }
    )


    this.api.getPokedex(1).subscribe(
      value => {
        this.pokedex = value.map(elem => { return {
          index: elem.entry_number,
          name: elem.pokemon_species.name,
          url: elem.pokemon_species.url
        }});
      }
    )
  }



}

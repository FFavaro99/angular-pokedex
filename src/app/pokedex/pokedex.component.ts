import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../services/api-requests.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public pokedex;
  public displayedPokedex;

  constructor( private api: ApiRequestsService ) {
    this.displayedPokedex = [];
  }

  ngOnInit(): void {

    // this.api.getPokedexes().subscribe(
    //   value => {
    //     console.log(value);
    //   }
    // );


    this.api.getPokedex(1).subscribe(
      value => {
        this.pokedex = value.map(elem => { return {
          index: elem.entry_number,
          name: elem.pokemon_species.name,
          url: elem.pokemon_species.url
        }});
        this.showMore();
      }
    );

  }

  showMore(): void{
    let finalIndex = this.displayedPokedex.length + 20;
    for (let i = this.displayedPokedex.length; i < finalIndex; i++){
      this.displayedPokedex.push(this.pokedex[i]);
    }
  }



}

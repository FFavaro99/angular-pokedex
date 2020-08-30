import { Component, OnInit, Input, OnChanges, AfterContentInit } from '@angular/core';
import { ApiRequestsService } from 'src/app/services/api-requests.service';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  @Input() public name: string;
  @Input() public index: number;
  public imgPath: string;
  private pokemon;

  constructor( private api: ApiRequestsService, private details: DetailsService) {}

  ngOnInit(): void {
    this.api.getPokemon(this.index).subscribe(
      value => {
        this.imgPath = value.url;
        this.pokemon = value;
      }
    );
  }

  displayDetails(){
    this.details.setSelectedPokemon(this.pokemon);
  }


}

import { Component, OnInit, Input, OnChanges, AfterContentInit } from '@angular/core';
import { ApiRequestsService } from 'src/app/services/api-requests.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit, AfterContentInit {

  @Input() public name: string;
  @Input() public index: number;
  public imgPath: string;

  constructor( private api: ApiRequestsService) {}

  ngOnInit(): void {
    this.api.getPokemon(this.index).subscribe(
      value => {
        this.imgPath = value.url;
      }
    );
  }

  ngAfterContentInit():void {

  }

}

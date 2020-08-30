import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  private mainUrl: string;

  constructor(private http: HttpClient ) {
    this.mainUrl = 'https://pokeapi.co/api/v2/';
  }

  //Return an observable containing array of Objecst having the pokedex name and url
  getPokedexes(): Observable<{name: string, url: string}[]> {
    const url = this.mainUrl + 'pokedex';
    return this.http.get(url).pipe(
      map(item => item['results'])
    )
  }

  //Returns an observable containing an array of Objects, each having an entry_number: number, and pokemon_species: {name: string, url: string}
  getPokedex(index: number): Observable<{entry_number: number, pokemon_species: {name: string, url: string}}[]> {
    const url = this.mainUrl + 'pokedex/' + index.toString();
    return this.http.get(url).pipe(
      map(item => item['pokemon_entries'])
    );
  }

  getPokemon(index: number): Observable<any> {
    const url = this.mainUrl + 'pokemon/' + index.toString();
    return this.http.get(url).pipe(
      map(item => {
        return {
          name: item['name'],
          url: item['sprites']['front_default'],
          pic: item['sprites']['other']['official-artwork']['front_default'],
          stats: item['stats'],
          types: item['types']
        }
      })
    )
  }




}

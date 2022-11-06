import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.loadPokemons();
  }

  async loadPokemons() {
    const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();

    this.pokemons = requisicao.results;
  }
}
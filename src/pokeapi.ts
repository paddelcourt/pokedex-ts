import { Cache } from "./pokecache.js";
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  private cache: Cache;

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
  }

  closeCache() {
    this.cache.stopReapLoop();
  }


  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`
    const cached = this.cache.get<ShallowLocations>(url)
      if (cached) {
        return cached
    }
    const response = await fetch(url, {
    method: "GET",
  
});
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    

    const result = await response.json()
    this.cache.add(url, result)
    return result
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const locationURL = `${PokeAPI.baseURL}/location-area/${locationName}`
    const cached = this.cache.get<Location>(locationURL)
      if (cached) {
        return cached
    }
    const response = await fetch(locationURL, {
    method: "GET",
});
    if (!response.ok) {
      console.log(locationURL)
      throw new Error(response.statusText);
    }

  
    const result = await response.json()
    this.cache.add(locationURL, result)
    return result
  }


  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const pokemonURL = `${PokeAPI.baseURL}/pokemon/${pokemonName}`
    const response = await fetch(pokemonURL, {
    method: "GET",
});
    if (!response.ok) {
      console.log(pokemonURL)
      throw new Error(response.statusText);
    }
    const result = await response.json()
    return result
  }
    
  
}

export type ShallowLocations = {
  count: number
  next: string
  previous: string
  results: { name: string; url: string; }[]
 
};

export type Location = {
  id: number
  name: string
  location: []
  names: []
  game_index: number
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    }}[]
  encounter_method_rates: []
};


export type Pokemon = {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: boolean,
  order: number,
  weight: number,
  abilities: [],
  forms: [],
  held_items: [],
  moves: [],
  species: [],
  sprites: [],
  cries: [],
  stats: any[],
  types: any[],
  past_types: [],
  past_abilties: []
}


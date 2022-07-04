import { defineStore } from 'pinia'
import { request } from '../axios'

interface IPokemon {
  id?: number;
  name: string;
  url: string;
  types: any;
  sprites: any;
  image?: string;
  createdAt?: Date | string;
}

interface IState {
  pokemons: IPokemon[];
  search: string;
  pokemon: IPokemon;
}

export const useMainStore = defineStore("main", {
  state: (): IState => ({
    search: '',
    pokemons: [],
    pokemon: {
      name: '',
      url: '',
      types: [],
      sprites: {}
    }
  }),
  actions: {
    async getPokemonList() {
      request.get(`https://pokeapi.co/api/v2/pokemon?limit=[1-151]`).then(({ data }) => {
        this.pokemons = data.results
      })
    },

    async getPokemon(url: string) {
      request.get(url).then(({ data }) => this.pokemon = data)
    },

    myPokemonList() {
      request.get('list').then(({ data }) => {
        this.pokemons = data
        this.pokemons.map(pokemon => {
          pokemon.createdAt = new Date().toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")
        })
      })
    },

    async savePokemon() {
      const types: Array<string> = []
      this.pokemon.types.forEach(({ type }: any) => types.push(type.name))
      let pokemonObj = {
        name: this.pokemon.name,
        image: this.pokemon.sprites.front_shiny,
        types: types
      }

      request.post(this.pokemon.url, pokemonObj)
        .then(({ data }) => {
          alert(`${data}`)
        })
        .catch((e) => new Error(e))
      this.clearPokemon()
    },

    async deletePokemon(id: number) {
      request.delete(`${id}`).then(({ data }) => {
        let index = this.pokemons.findIndex(pokemon => pokemon.id === id)
        this.pokemons.splice(index, 1)
        alert(`${data}`)
      }
      ).catch((e) => new Error(e))
    },

    clearPokemon() {
      Object.keys(this.pokemon).forEach(key => this.pokemon[key] = '')
    }
  }
})
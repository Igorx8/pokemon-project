<template>

  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Pokemon</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pokemon of mainStore.pokemons" :key="pokemon.name">
        <td>{{ pokemon.name.toUpperCase() }} </td>
        <td> <img :src="pokemon.image" /> </td>
        <td> <button class="button is-danger" @click="mainStore.deletePokemon(pokemon.id)"> Excluir </button></td>
      </tr>
      <tr v-if="mainStore.pokemons.length === 0">
        <td colspan="3">Nenhum pokemon cadastrado</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/main';

const mainStore = useMainStore();

mainStore.myPokemonList()
</script>
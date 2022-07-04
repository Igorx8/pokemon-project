<script setup lang="ts">
import InputSearch from '../components/InputSearch.vue'

import { useMainStore } from '../stores/main';
import { computed } from 'vue';

const mainStore = useMainStore();

mainStore.getPokemonList();

const getPokemon = (url: string) => mainStore.getPokemon(url);

const searchResults = computed(() => mainStore.pokemons.filter((pokemon) => pokemon.name.includes(mainStore.search)))
</script>

        
<template>
        <header class="hero-head">
            <div class="is-flex is-justify-content-center">
                <h1 class="is-size-3">Seja bem vindo ao pokemon-app</h1>
            </div>
        </header>
        <div class="container">
            <div class="is-flex">
                <input-search />
            </div>
            <div class="is-flex is-justify-content-center" v-if="mainStore.search && !mainStore.pokemon.name">
                <ul>
                    <li class="list" v-for="pokemon of searchResults" :key="pokemon.url">
                        <button @click="getPokemon(pokemon.url)"> {{ pokemon.name.toUpperCase() }} </button>
                    </li>
                </ul>
            </div>

                <div class="modal " :class="mainStore.pokemon.name ? 'is-active' : ''">
                    <div class="modal-background has-background-primary"></div>
                    <div class="modal-card" style="max-width:300px">
                        <header class="modal-card-head">
                            <p class="modal-card-title">{{ mainStore.pokemon.name.toUpperCase() }}</p>
                            <button class="delete" aria-label="close" @click="mainStore.clearPokemon"></button>
                        </header>
                        <section class="modal-card-body has-background-grey-lighter">
                            <img :src="mainStore.pokemon.sprites.front_shiny">
                            <img style="float:right" :src="mainStore.pokemon.sprites.back_shiny">
                            <h3 class="has-text-black" style="text-align:center">
                                Types
                            </h3>
                            <div class="has-text-black" style="text-align: center" v-for="(type, idx) in mainStore.pokemon.types" :key="idx">
                                <h5>
                                    {{ type.type.name.toUpperCase() }}
                                </h5>
                            </div>
                        </section>

                        <footer class="modal-card-foot">
                            <button class="button is-success" @click="mainStore.savePokemon()">Salvar</button>
                        </footer>
                    </div>
                </div>
            </div>
</template>


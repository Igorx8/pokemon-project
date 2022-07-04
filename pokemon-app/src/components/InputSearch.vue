<template>
    <div class="field">
        <div class="control">
            <input class="input is-focused" type="text" placeholder="Digite para pesquisar" v-model="mainStore.search">
        </div>
        <p class="help">Digite para encontrar seu pokémon</p>
    </div>
</template>

<script setup lang="ts">
    import { useMainStore } from '../stores/main';

    const mainStore = useMainStore();
</script>
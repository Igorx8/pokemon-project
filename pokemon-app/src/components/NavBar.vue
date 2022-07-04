<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://img.icons8.com/dusk/64/000000/pokemon.png" width="40" height="28">
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" :to="{ name: 'home' }">Home</router-link>
        <span class="navbar-item">
          <a class="button is-info is-inverted">
            <router-link :to="{ name: 'lista' }">Lista</router-link>
          </a>
        </span>
      </div>
    </div>
  </nav>
</template>
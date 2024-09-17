<template>
  <div class="cocktail-layout">
    <div class="cocktail-layout__sidebar">
      <header class="cocktail-layout__header">
        <h4>COCKTAIL APP</h4>
      </header>
      <nav class="cocktail-layout__nav">
        <cocktails-menu />
      </nav>
    </div>
    <main class="cocktail-layout__main">
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import CocktailsMenu from './cocktail-menu.vue'
</script>

<style lang="scss" scoped>
.cocktail-layout {
  display: flex;
  background-color: white;

  &__header {
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    color: white;
    background-color: black;
    transform: rotate(-3deg);
  }

  &__sidebar {
    height: 100vh;
    min-width: 250px;
    padding: 40px;
    transform: rotate(1deg);
    background-color: white;
    border-radius: 4px;
    box-shadow: 5px 0 13px 1px rgb(34 60 80 / 7%);
  }

  &__nav {
    margin: 40px 0;
  }

  &__main {
    width: 100%;
    height: 100vh;
  }
}

@media (width <= 928px) {
  .cocktail-layout {
    &__sidebar {
      position: absolute;
      max-width: 100%;
      margin-left: -210px;
      transition: 0.1s ease-in-out;
      z-index: 100;
      border-right: 10px solid black;

      &:hover {
        margin-left: 0;
      }
    }

    &__main {
      margin-left: 40px;
    }
  }
}
</style>

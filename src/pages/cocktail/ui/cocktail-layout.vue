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

  &__header {
    padding: 10px 0;
    background-color: black;
    border-radius: 4px;
    text-align: center;
    color: white;
    transform: rotate(-3deg);
  }

  &__sidebar {
    height: 100vh;
    min-width: 250px;
    padding: 40px;
    transform: rotate(2deg);
  }

  &__nav {
    margin: 40px 0;
  }

  &__main {
    width: 100%;
    height: 100vh;
    padding: 40px;
    background: url('#shared/assets/images/bg.jpg');
  }
}
</style>

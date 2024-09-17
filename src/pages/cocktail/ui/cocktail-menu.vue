<template>
  <ul class="cocktail-menu">
    <li
      v-for="(cocktailCode, i) in cocktailConfig.cocktailCodes"
      :key="i"
      class="cocktail-menu__item"
    >
      <router-link
        active-class="cocktail-menu__link--active"
        class="cocktail-menu__link"
        :to="{ name: 'cocktail', params: { code: cocktailCode } }"
      >
        {{ cocktailConfig.cocktailCodeNames[i] }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { cocktailConfig } from '#entities/cocktail'
</script>

<style lang="scss" scoped>
.cocktail-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  list-style: none;

  &__item {
    width: min-content;
  }

  &__link {
    width: 100%;
    text-decoration: none;

    &--active {
      &::before {
        content: '→';
        margin: 0 4px;
      }

      &::after {
        content: '←';
        margin: 0 4px;
      }
    }
  }
}
</style>

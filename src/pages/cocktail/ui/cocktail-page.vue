<template>
  <div v-if="!loading" class="cocktail-page">
    <div class="cocktail-detail">
      <h3 class="cocktail-detail__name">{{ cocktailDetail?.strDrink }}</h3>
      <div class="cocktail-detail__container">
        <p>{{ cocktailDetail?.strCategory }}</p>
        <p>{{ cocktailDetail?.strAlcoholic }}</p>
        <p>{{ cocktailDetail?.strGlass }}</p>
      </div>
      <div class="cocktail-detail__instruction">
        <p class="cocktail-detail__instruction-label">Instructions:</p>
        <p class="cocktail-detail__instruction-value">
          {{ cocktailDetail?.strInstructions }}
        </p>
      </div>
      <div class="cocktail-detail__ingredients"></div>
    </div>
    <img
      class="cocktail-thumb"
      :src="cocktailDetail?.strDrinkThumb ?? '#'"
      alt="Cocktail Thumb"
      loading="lazy"
    />
  </div>
  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { cocktailConfig, cocktailApi } from '#entities/cocktail'

const route = useRoute()
const loading = ref(false)

const cocktailCode = route.params.code as cocktailConfig.CocktailCode
const cocktailDetail = ref<cocktailConfig.CocktailDetail | null>(null)

onBeforeMount(async () => {
  loading.value = true
  await cocktailApi
    .getCocktailDetail({ cocktailCode })
    .then((response) => {
      cocktailDetail.value = response.data.drinks[0]
    })
    .finally(() => {
      loading.value = false
    })
})
</script>

<style lang="scss" scoped>
.cocktail-page {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 16px;
  padding: 20px 30px;
  font-size: small;
  border-left: 1px solid black;

  .cocktail-detail {
    &__container {
      margin: 20px 0;
    }

    &__instruction {
      &-label {
        font-weight: 500;
      }
    }
  }

  .cocktail-thumb {
    width: 200px;
    height: 200px;
    border-radius: 8px;
  }
}
</style>

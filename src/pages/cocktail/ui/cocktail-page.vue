<template>
  <div v-if="!loading" class="cocktail-page">
    <div class="cocktail-detail">
      <h3 class="cocktail-detail__name">{{ cocktailDetail!.strDrink }}</h3>
      <div class="cocktail-detail__container">
        <p>{{ cocktailDetail!.strCategory }}</p>
        <p>{{ cocktailDetail!.strAlcoholic }}</p>
        <p>{{ cocktailDetail!.strGlass }}</p>
      </div>
      <div class="cocktail-detail__instruction">
        <p class="cocktail-detail__instruction-label">Instructions:</p>
        <p class="cocktail-detail__instruction-value">
          {{ cocktailDetail!.strInstructions }}
        </p>
      </div>
      <div class="cocktail-detail__ingredients">
        <p class="cocktail-detail__ingredients-label">List of ingredients:</p>
        <ul>
          <li
            v-for="(
              [ingredient, measure], i
            ) in cocktailLib.extractIngredientsAndMeasuresFromCocktailDetail(
              cocktailDetail!,
            )"
            :key="i"
          >
            <span>{{ ingredient }}</span>
            <span v-if="measure">{{ ': ' + measure }}</span>
          </li>
        </ul>
      </div>
    </div>
    <img
      class="cocktail-thumb"
      :src="cocktailDetail!.strDrinkThumb ?? '#'"
      alt="Cocktail Thumb"
      loading="lazy"
    />
  </div>
  <div v-else class="loading">Loading...</div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { cocktailConfig, cocktailLib, cocktailApi } from '#entities/cocktail'

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

  .cocktail-detail {
    &__container {
      margin: 20px 0;
    }

    &__instruction {
      margin: 20px 0;

      &-label {
        font-weight: 500;
      }
    }

    &__ingredients {
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

.loading {
  padding: 20px 30px;
}
</style>

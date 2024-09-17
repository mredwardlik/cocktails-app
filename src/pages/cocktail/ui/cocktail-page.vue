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
              [ingredient, measure], index
            ) in cocktailLib.extractIngredientsAndMeasuresFromCocktailDetail(
              cocktailDetail!,
            )"
            :key="index"
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
import { ref, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { cocktailConfig, cocktailLib, cocktailModel } from '#entities/cocktail'

const route = useRoute()
const loading = ref(false)

const cocktailStore = cocktailModel.useCocktailStore()
const cocktailCode = route.params.code as cocktailConfig.CocktailCode
const cocktailDetail = computed(() => {
  if (cocktailCode in cocktailStore.cocktails)
    return cocktailStore.cocktails[cocktailCode]
  return null
})

onBeforeMount(async () => {
  loading.value = true
  await cocktailStore.getCocktailDetail({ cocktailCode }).finally(() => {
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
  padding: 40px 50px;
  font-size: small;
  overflow: auto;

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
    max-width: 300px;
    height: 300px;
    object-fit: contain;
    border-radius: 8px;
  }
}

.loading {
  padding: 20px 30px;
}

@media (width <= 928px) {
  .cocktail-page {
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 25px;

    .cocktail-thumb {
      width: 100%;
      height: auto;
    }
  }
}
</style>

import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as cocktailApi from '../api'
import { cocktailConfig } from '..'

export const useCocktailStore = defineStore('user', () => {
  const cocktails = ref<{
    [K in cocktailConfig.CocktailCode]?: cocktailConfig.CocktailDetail
  }>({})

  async function getCocktailDetail(input: cocktailApi.GetCocktailDetailInput) {
    if (input.cocktailCode in cocktails.value)
      return cocktails.value[input.cocktailCode]
    await cocktailApi.getCocktailDetail(input).then((response) => {
      return (cocktails.value[input.cocktailCode] = response.data.drinks[0])
    })
    return cocktails.value[input.cocktailCode]
  }

  return {
    cocktails,
    getCocktailDetail,
  }
})

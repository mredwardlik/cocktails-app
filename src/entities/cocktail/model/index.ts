import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as cocktailApi from '../api'
import { cocktailConfig } from '..'

export const useCocktailStore = defineStore('user', () => {
  const cocktails: { [K in cocktailConfig.CocktailCode]: string } = ref({})

  async function getCocktailDetail(input: cocktailApi.GetCocktailDetailInput) {
    return await cocktailApi.getCocktailDetail(input)
  }

  return {
    cocktails,
    getCocktailDetail,
  }
})

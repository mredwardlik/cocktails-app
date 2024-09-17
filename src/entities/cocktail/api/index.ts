import { axiosInstance } from '#shared/api'
import * as types from './types'

export function getCocktailDetail(input: types.GetCocktailDetailInput) {
  return axiosInstance.get<types.GetCocktailDetailOutput>(
    `/1/search.php?s=${input.cocktailCode}`,
  )
}

export * from './types'

import * as cocktailConfig from '../config'

export function isValidCocktailCode(code: string) {
  return cocktailConfig.cocktailCodes.includes(
    code as cocktailConfig.CocktailCode,
  )
}

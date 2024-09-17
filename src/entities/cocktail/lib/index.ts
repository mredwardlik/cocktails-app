import isString from 'lodash/isString'
import isEmpty from 'lodash/isEmpty'
import * as cocktailConfig from '../config'

export function isValidCocktailCode(code: string) {
  return cocktailConfig.cocktailCodes.includes(
    code as cocktailConfig.CocktailCode,
  )
}

export function extractIngredientsAndMeasuresFromCocktailDetail(
  cocktailDetail: cocktailConfig.CocktailDetail,
): Array<[string, string | null]> {
  return Object.entries(cocktailDetail)
    .filter(
      ([cocktailDetailKey, cocktailDetailValue]) =>
        cocktailDetailKey.startsWith(cocktailConfig.cocktailIngredientsKey) &&
        isString(cocktailDetailValue) &&
        !isEmpty(cocktailDetailValue),
    )
    .map(([, ingredient], i) => {
      const measureKey =
        `${cocktailConfig.cocktailMeasuresKey}${i + 1}` as keyof cocktailConfig.CocktailMeasures
      const measure = cocktailDetail[measureKey] ?? null
      return [ingredient!, measure]
    })
}

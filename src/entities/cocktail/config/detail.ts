export const cocktailIngredientsKey = 'strIngredient'

export const cocktailMeasuresKey = 'strMeasure'

export type CocktailIngredients = Record<
  `${typeof cocktailIngredientsKey}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`,
  string | null
>

export type CocktailMeasures = Record<
  `${typeof cocktailMeasuresKey}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`,
  string | null
>

export type CocktailDetail = {
  strDrink: string
  strAlcoholic: string
  strCategory: string
  strGlass: string
  strInstructions: string
  strDrinkThumb: string
} & CocktailIngredients &
  CocktailMeasures

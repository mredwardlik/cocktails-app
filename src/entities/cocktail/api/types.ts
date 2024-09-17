import * as cocktailConfig from '../config'

export interface GetCocktailDetailInput {
  cocktailCode: cocktailConfig.CocktailCode
}

export interface GetCocktailDetailOutput {
  drinks: cocktailConfig.CocktailDetail[]
}

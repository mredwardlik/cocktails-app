export enum CocktailCode {
  MARGARITA = 'margarita',
  MOJITO = 'mojito',
  A1 = 'a1',
  KIR = 'kir',
}

export const cocktailCodes = Object.values(CocktailCode)

export const cocktailCodeNames = cocktailCodes.map((cocktailCode) => {
  return cocktailCode.charAt(0).toUpperCase() + cocktailCode.slice(1)
})

export const cocktailCodePrimary = CocktailCode.MARGARITA

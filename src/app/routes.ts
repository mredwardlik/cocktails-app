import { RouteRecordRaw } from 'vue-router'
import { CocktailLayout, CocktailPage } from '#pages/cocktail'
import { cocktailConfig, cocktailLib } from '#entities/cocktail'
import { NotFoundPage } from '#pages/not-found'

export default [
  {
    path: '',
    redirect: {
      name: 'cocktail',
      params: { code: cocktailConfig.cocktailCodePrimary },
    },
  },
  {
    path: '/cocktails',
    component: CocktailLayout,
    redirect: {
      name: 'cocktail',
      params: { code: cocktailConfig.cocktailCodePrimary },
    },
    children: [
      {
        path: ':code',
        name: 'cocktail',
        component: CocktailPage,
        beforeEnter: (to, _, next) => {
          const cocktailCodeParam = to.params.code as string
          if (!cocktailLib.isValidCocktailCode(cocktailCodeParam)) {
            return next({ name: 'not-found' })
          }
          return next()
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'not-found',
    component: NotFoundPage,
  },
] satisfies RouteRecordRaw[]

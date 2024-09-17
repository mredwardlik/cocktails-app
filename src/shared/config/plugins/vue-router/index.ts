import type { App } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import { getEnvVariable } from '#shared/config/env'
import type { VueInitalOptions } from './types'

export function initVueRouter(app: App, options: VueInitalOptions): Router {
  const vueRouter = createRouter({
    history: createWebHistory(getEnvVariable<string>('BASE_URL')),
    routes: options.routes,
  })
  app.use(vueRouter)
  return vueRouter
}

export type * from './types'

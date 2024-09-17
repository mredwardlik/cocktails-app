import { createPinia, Pinia } from 'pinia'
import type { App } from 'vue'

export function initPinia(app: App): Pinia {
  const pinia = createPinia()
  app.use(pinia)
  return pinia
}

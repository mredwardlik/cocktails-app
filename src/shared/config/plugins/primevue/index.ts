import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'

export function initPrimevue(app: App) {
  app.use(PrimeVue)
  app.use(ConfirmationService)
  app.use(DialogService)
  app.use(ToastService)
}

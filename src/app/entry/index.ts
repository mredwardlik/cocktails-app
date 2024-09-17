import { createApp } from 'vue'
import { initPinia, initVueRouter } from '#shared/config/plugins'
import App from '../index.vue'
import routes from '../routes'

import '@fontsource/poppins'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '#shared/assets/styles/index.scss'

const app = createApp(App)

initVueRouter(app, {
  routes,
})
initPinia(app)

app.mount('#app')

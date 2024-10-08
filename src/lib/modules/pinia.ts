import type { App } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

export function install(app: App) {
  app.use(pinia)
}

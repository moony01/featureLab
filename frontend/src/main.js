import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'

import 'quasar/dist/quasar.css' // Import Quasar css

const app = createApp(App)
app.use(Quasar)
app.use(router)
app.mount('#app')

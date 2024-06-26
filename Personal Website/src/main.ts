import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueWindowSizePlugin } from 'vue-window-size/plugin'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.use(router)
app.use(VueWindowSizePlugin)

app.mount('#app')

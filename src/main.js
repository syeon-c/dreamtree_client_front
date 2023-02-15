/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import VueWordCloud from "vuewordcloud";

const app = createApp(App)
app.component(VueWordCloud.name, VueWordCloud)
registerPlugins(app)

app.mount('#app')

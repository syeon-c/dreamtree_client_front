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
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import './index.css'

const app = createApp(App)
  .component(VueWordCloud.name, VueWordCloud)
  .component('font-awesome-icon', FontAwesomeIcon)

registerPlugins(app)

app.mount('#app')

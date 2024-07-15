/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router'

// Composables
import { createApp } from 'vue'
import { i18n } from '@/i18n/index'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
const pinia = createPinia();

const app = createApp(App).use(router).use(i18n).use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);


registerPlugins(app)

app.mount('#app')

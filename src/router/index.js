import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeVue from '@/views/HomeVue.vue'
import DailyMenu from '@/components/DailyMenu.vue';


const routes = [
    { path: '/', name: 'Home', component: HomeVue },
  
    { path: '/DailyMenu', component: DailyMenu }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
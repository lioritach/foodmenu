import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeVue from '@/views/HomeVue.vue'
import DailyMenu from '@/components/DailyMenu.vue';
import MenuDisplay from '@/components/MenuDisplay.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeVue },
    { path: '/MenuDisplay', name: 'MenuDisplay', component: MenuDisplay },
    { path: '/DailyMenu', component: DailyMenu }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
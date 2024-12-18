import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/CategoryPage/:name',
    name: 'CategoryPage',
    component: () => import('@/components/CategoryPage.vue'), // Correct quotes
    props: true
  },
  {
  path: '/ProductPage/:name',
  name: 'productPage',
  component: () => import('@/components/ProductPage.vue'),
  props: true
}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

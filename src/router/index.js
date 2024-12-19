import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: 'page/:pageNumber',
          component:  () => import('../views/page.vue'),
          name: 'page',
          children: [
            {
              path: 'section/:id',
              name: 'section',
              component: () => import('../views/section.vue'),
            }
          ]
        }
      ]
    },
    {
    },
  ],
})

export default router

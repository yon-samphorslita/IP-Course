import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/page/1',
    },
    {
      path: '/page/:pageNumber',
      name: 'page',
      component: () => import('../views/page.vue'),
      children: [
        {
          path: 'section/:id',
          name: 'section',
          component: () => import('../views/section.vue'),
        },
      ],
    },
  ],
});

export default router;

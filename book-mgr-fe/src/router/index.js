import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

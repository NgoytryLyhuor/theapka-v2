import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateLinkView.vue')
  },
  {
    path: '/:guestSlug',
    name: 'guest',
    component: () => import('../views/GuestInvitation.vue')
  },
  {
    path: '/not-found/:guestSlug?',
    name: 'notfound',
    component: () => import('../views/NotFoundView.vue')
  },
  {
    // Catch all 404
    path: '/:pathMatch(.*)*',
    name: 'catchall',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  }
})

export default router

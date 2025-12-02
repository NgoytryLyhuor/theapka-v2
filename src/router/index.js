import { createRouter, createWebHistory } from 'vue-router'
import { guestExists } from '../config/guests'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/:guestSlug',
    name: 'guest',
    component: () => import('../views/GuestInvitation.vue'),
    beforeEnter: (to, from, next) => {
      // Check if guest exists in config
      if (guestExists(to.params.guestSlug)) {
        next()
      } else {
        // Guest not found, go to 404
        next({ name: 'notfound', params: { guestSlug: to.params.guestSlug } })
      }
    }
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

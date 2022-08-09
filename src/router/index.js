import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/auction',
    name: 'Auction',
  
    component: () => import('../views/Auction.vue')
  },
  {
    path: '/products',
    name: 'Products',
  
    component: () => import('../views/Products.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
  
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/login',
    name: 'Login',
  
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
  
    component: () => import('../views/Register.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

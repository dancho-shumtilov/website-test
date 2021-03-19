import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CV from '../views/CV.vue'
import PageNotFound from '../views/PageNotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },  
  {
    path: '/cv',
    name: 'CV',
    component: CV
  },
  { 
    path: "/:catchAll(.*)",
    name: 'bad-not-found',
    component: PageNotFound
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

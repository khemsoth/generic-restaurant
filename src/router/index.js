import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Catering from '../views/Catering.vue'
import Contact from '../views/Contact.vue'
import Events from '../views/Events.vue'
import RedirectButton from '../components/RedirectButton'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Menu.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/catering',
    name: 'Catering',
    component: Catering
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/contact',
    name: 'Contact',
    components: {
      default: Contact,
      sidebar: RedirectButton
    },
    props: {
      default: true,
      sidebar: 'contact'
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

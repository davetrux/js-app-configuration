import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import LinkedPage from '../components/LinkedPage'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/next',
      name: 'LinkedPage',
      component: LinkedPage,
      props: true,
    }]
})

Vue.use(Router)

export default router
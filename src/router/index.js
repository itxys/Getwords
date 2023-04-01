import Vue from 'vue'
import VueRouter from 'vue-router'
import PositivePromptList from '../components/PositivePromptList.vue'
import NegativePromptList from '../components/NegativePromptList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/positive'
  },
  {
    path: '/positive',
    component: PositivePromptList
  },
  {
    path: '/negative',
    component: NegativePromptList
  }
]

const router = new VueRouter({
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import PositivePromptList from '../components/PositivePromptList.vue';
import NegativePromptList from '../components/NegativePromptList.vue';

const routes = [
  {
    path: '/',
    redirect: '/positive',
  },
  {
    path: '/positive',
    component: PositivePromptList,
  },
  {
    path: '/negative',
    component: NegativePromptList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

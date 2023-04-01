import Vue from 'vue';
import VueRouter from 'vue-router';
import Content from '../components/Content.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/category/:id',
    name: 'category',
    component: Content,
    props: (route) => ({ categoryName: route.params.id }),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

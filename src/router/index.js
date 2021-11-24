import { createRouter,createWebHashHistory} from "vue-router";
import main from '@/view/Main.vue'
import storelink from '@/view/distributor/storelink'

const routes = [
    {
      path: '/',
      name: 'main',
      component: main,
    },
    {
      path: '/storelink',
      name: 'storelink',
      component: storelink,
    },
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router

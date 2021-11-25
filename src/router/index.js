import { createRouter,createWebHashHistory} from "vue-router";
import main from '@/view/Main.vue'
import storelink from '@/view/distributor/storelink'
import group from '@/view/group/group'

const routes = [
    {
      path: '/',
      name: 'distributor',
      component: main,
    },
    {
      path: '/storelink',
      name: 'storelink',
      component: storelink,
    },
    {
      path: '/group',
      name: 'group',
      component: group,
    },
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router

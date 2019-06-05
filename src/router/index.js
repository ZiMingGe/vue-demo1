import Vue from 'vue'
import Router from 'vue-router'
import Systemindex from '@/components/pages/Systemindex'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Systemindex', component: Systemindex}
  ]
})

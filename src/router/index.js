import Vue from 'vue'
import Router from 'vue-router'

import Pos from '@/components/pos/pos'
import Shop from '@/components/shop/shop'
import Commodity from '@/components/commodity/commodity'
import Vip from '@/components/vip/vip'
import All from '@/components/all/all'
import Settings from '@/components/settings/settings'

Vue.use(Router)

export default new Router({
  routes: [
  	{path:'/',redirect:'/pos'},
  	{path:'/pos',component:Pos},
    {path:'/shop',component:Shop},
    {path:'/commodity',component:Commodity},
    {path:'/vip',component:Vip},
    {path:'/all',component:All},
    {path:'/settings',component:Settings}
  ]
})

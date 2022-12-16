import Vue from 'vue'
import Router from 'vue-router'

import Mainpage from "../pages/Mainpage";
import AppList from "../pages/AppList";
import Search from "../pages/Search.vue";
import Old from "../pages/Old.vue";

Vue.use(Router)

export default new Router({
  //base:'',
  //mode:'history',
  routes: [
    {
      path: '/flamescion',
      name: 'MainPage',
      component: Mainpage
    },
    {
      path: '/flamescion/applist',
      name: 'AppList',
      component: AppList
    },
    {
      path: '/flamescion/search',
      name: 'Search',
      component :Search
    },

    //以下是为了兼容旧版客户端所写的兼容层
    {
      path: '/',
      name: 'OldMainPage',
      component: Mainpage
    },
    {
      path: '/:name',
      name: 'Old',
      component: Old
    }
  ]
})

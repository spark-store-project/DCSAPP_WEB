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
      path: '/new',
      name: 'MainPage',
      component: Mainpage
    },
    {
      path: '/new/applist',
      name: 'AppList',
      component: AppList
    },
    {
      path: '/new/search',
      name: 'Search',
      component :Search
    },
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

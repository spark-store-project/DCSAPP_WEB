import Vue from 'vue'
import Router from 'vue-router'

import Mainpage from "../pages/Mainpage";
import AppList from "../pages/AppList";
import Search from "../pages/Search.vue";

Vue.use(Router)

export default new Router({
  //base:'',
  //mode:'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: Mainpage
    },
    {
      path: '/applist',
      name: 'AppList',
      component: AppList
    },
    {
      path: '/search',
      name: 'Search',
      component :Search
    }
  ]
})

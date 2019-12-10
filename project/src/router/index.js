import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import moveie from "../pages/moveie"
import cinema from "../pages/cinema"
import myinfo from "../pages/myinfo"
import showing from "../components/showing"
import comming from "../components/comming"

const router = new Router({
  routes: [{
      path: '/moveie',
      component: moveie,
      children: [{
        path: "showing",
        component: showing,
      }, {
        path: "comming",
        component: comming,
      }]
    }, {
      path: '/cinema',
      component: cinema,
    },
    {
      path: '/myinfo',
      component: myinfo,
    }
  ]
})





export default router
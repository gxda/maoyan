import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import moveie from "../pages/moveie"
import cinema from "../pages/cinema"
import myinfo from "../pages/myinfo"
import detail from "../pages/detail"
import showing from "../components/showing"
import comming from "../components/comming"
import search from "../components/search"
import introduce from "../pages/introduce"




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
        }, {
          path: "search",
          component: search
        },
        {
          path: "introduce",
          component: introduce,
        }


      ]
    }, {
      path: '/cinema',
      component: cinema,
      children: [{
        path: "detail",
        component: detail,
      }]

    },
    {
      path: '/myinfo',
      component: myinfo,
    }, {
      path: "/",
      redirect: "/moveie/showing"
    }
  ]
})





export default router
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const moveie = () => {
  return import("../pages/moveie")
}
const cinema = () => {
  return import("../pages/cinema")
}
const myinfo = () => {
  return import("../pages/myinfo")
}
const detail = () => {
  return import("../pages/detail")
}
const showing = () => {
  return import("../components/showing")
}
const comming = () => {
  return import("../components/comming")
}
const search = () => {
  return import("../components/search")
}
const introduce = () => {
  return import("../pages/introduce")
}
const city = () => {
  return import("../components/city")
}





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
        },
        {
          path: "city",
          component: city,
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
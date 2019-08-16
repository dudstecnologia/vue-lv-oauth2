// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = process.env.SERVER
// console.log(process.env.SERVER)

Vue.config.productionTip = false

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ3Y2FjOTVhZGNjZWRkYjRmNzIyNDMzYWE5YzkyOWZjNjlmN2UwNWE1NGQ2NGYyY2MwMmE0ODk4MTI5ZDQxOTczNTY5MGJhZjhlYjFjYjk4In0.eyJhdWQiOiIyIiwianRpIjoiNDdjYWM5NWFkY2NlZGRiNGY3MjI0MzNhYTljOTI5ZmM2OWY3ZTA1YTU0ZDY0ZjJjYzAyYTQ4OTgxMjlkNDE5NzM1NjkwYmFmOGViMWNiOTgiLCJpYXQiOjE1NjU5Njg1MzgsIm5iZiI6MTU2NTk2ODUzOCwiZXhwIjoxNTk3NTkwOTM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ZicbcMkQBVdo5Uv6pwBm5m_3R6jgMeIecncSvR7fTsAYqp_N3-yBED51YnmAXQuJt992S6NV89fuJ2qLdTrJX14XMIvmTbx24i0TnS6PmUJE84co-9ne2n1A90InetcnwtniVPZ0ImtPI5bY8c2xwkui_CjOHlyYY3gt4OaaooSAxxWMPfnl8tjbw74GabGzIoHXqdUK8cBl0xF7qa95aOz5QsQVHuQ_shg_BxrhYK8NBO44mkf_xAkaR1o3sUuWonj_1whqeJlz26xoWvRe8OLTRtGDnIgxQCN4W0ThqM4zrdp8ltmajrkbcPQ1syVaPJIn_UHERbi0Kaj84LGTzZTchy4NlHxtd24tAA3t6vT1HTfLOAZ-K4agNLWXkStOa1arbEOK-D2B3V3JpNsFHwfrxSB1vtYztatIp9kpR3XTueDkLB8nMLyjDy78Fof0uxeemX5eIl9dgCosTXOKWpgfJ3wNMombiinyCs1FTchtp5KQ7R7hC6iQssQm8y01T7-FYW1DQqaJFuXSCWcxoyOZoynFv53Y4xe5ggwODv_o75Eim8gI0mzEwmFqb6rOawEIQj6e2nHpvXmUjNgelvggC61hOt6OcOVKlyi77FgeR40NkuVnGViIy3bsB4P9MeScG4ZJE0O_oRBseHbQkXnD0YNQUXNg2R9LSfhjxpU')
  next()
})

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

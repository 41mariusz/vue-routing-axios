import Vue from 'vue'
import routes from './routes'
import axios from 'axios'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})

const base = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
})

Vue.prototype.$http = base

new Vue({
  el: '#app',
  render: h => h(App)
})

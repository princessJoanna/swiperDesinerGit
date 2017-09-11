// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueVideoPlayer from 'vue-video-player'
// mount with global
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false
import $ from 'jquery'
/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

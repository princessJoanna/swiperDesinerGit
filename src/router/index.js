import Vue from 'vue'
import Router from 'vue-router'


import Zoom from '@/views/zoom-video'
import Self from '@/views/self-video'
import caseSwiper from '@/views/case-swiper'
import details from '@/views/details'
import test from '@/views/test'


Vue.use(Router)

export default new Router(
{
mode:'history',
  routes: [
    {
      path: '/',
      name: 'Zoom',
      component: Zoom
    },
    {
      path: '/Zoom/desiner/:desiner_id',
      name: 'Zoom',
      component: Zoom
    },
    {
      path: '/Self/desiner/:desiner_id',
      name: 'Self',
      component: Self
    },
    {
      path: '/caseSwiper/desiner/:desiner_id',
      name: 'caseSwiper',
      component: caseSwiper
    },
    {
      path: '/details/desiner/:desiner_id',
      name: 'details',
      component: details
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

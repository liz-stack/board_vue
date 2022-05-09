import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Boards from '../views/Boards.vue'

//Vue와 VueRouter 연결
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/boards',
    name: 'Boards',
    component: Boards,
    children: [

      {
        path: "",
        component: () =>
          import('@/components/boards/List')
      },

      {
        path: '/view',
        name: 'Detail',
        component: () =>
          import('@/components/boards/Detail')
      }

    ]

  },




]

const router = new VueRouter({
  mode: 'history', //기본적으로 추가되는 #을 없애줌
  base: process.env.BASE_URL,
  routes //배열을 값으로 가지며 배열 경로에 따른 컴포넌트 추가
})

//설정한 VueRouter를 내보낸다.
export default router

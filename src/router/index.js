import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/boards/List'

//components 

//Vue와 VueRouter 연결
Vue.use(VueRouter)

const routes = [

  /* {
    path: '/boards',
    //name: 'Boards', 디폴트 자식 라우터가 있다면 부모라우터는 네임X , 쓰고싶다면 :to="{name: ~} 형식
    component: Boards,
  }, */
  {
    path: "/",
    name: 'List',
    component: List,

  },

  {
    path: '/boards/:id',
    name: 'Detail',
    component: () =>
      import('@/views/boards/Detail')
    //TODO: 220510 댓글, 파일첨부 넣을 곳(children)
  },

  //TODO: 글수정

  //TODO: 글삭제
]

const router = new VueRouter({
  mode: 'history', //기본적으로 추가되는 #을 없애줌
  base: process.env.BASE_URL,
  routes //배열을 값으로 가지며 배열 경로에 따른 컴포넌트 추가
})

//설정한 VueRouter를 내보낸다.
export default router

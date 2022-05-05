import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 호출
import List from "../components/board/List"
//import Write from "../components/board/Write.vue"

//Vue와 VueRouter 연결
Vue.use(VueRouter)

//우리가 사용할 route 생성 및 설정
/* Home : 사이트를 최초 방문할 때 모든 컴포넌트를 가지고 오게 하는 방식
  About : 사이트를 최초 방문과 상관없이 사이트 해당 경로에 접근했을 때 해당 컴포넌트를 가지고 오는 방식
  */
const routes = [
  {
    path: '/'
    , name: HelloWorld
    , component: HelloWorld
  },
  {
    path: "/board/list", // 페이지의 url 이름
    name: "list",
    component: List,     // 해당 url에서 표시될 컴포넌트
  },

]

//VueRouter에 route를 등록하고 설정한다.
const router = new VueRouter({
  mode: 'history', //기본적으로 추가되는 #을 없애줌
  base: process.env.BASE_URL,
  routes //배열을 값으로 가지며 배열 경로에 따른 컴포넌트 추가
})

//설정한 VueRouter를 내보낸다.
export default router

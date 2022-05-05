<template>
  <div id="app">
    <router-view />
    <!--페이지 url이 변경또는 이동되었을때 url에 따라 뿌려지는 영역을 정의할 수 있는 router태그로
        Vue Instance에 router를 연결했을 경우에만 사용가능. -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

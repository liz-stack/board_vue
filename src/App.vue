<template>
  <div id="app">
    <List />
    <!-- 현재 라우터가 제공하는 컴포넌트가 렌더링 됨 -->
  </div>
</template>
<script>
import List from "@/components/board/List.vue";

//대부분은 import AppHeader from '@/components/.. 형식으로 불러오기만 하는 듯
export default {
  name: "App",
  components: {
    List,
  },
};
</script>
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

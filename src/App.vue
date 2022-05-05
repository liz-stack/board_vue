<template>
  <div id="app">sdfsd</div>
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      messsage: axios
        .get("http://localhost:8000/api/board")
        .then(function (messsage) {
          console.log(messsage);
          console.log(messsage.data);
        }),
    };
  },
};
//대부분은 import AppHeader from '@/components/.. 형식으로 불러오기만 하는 듯
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

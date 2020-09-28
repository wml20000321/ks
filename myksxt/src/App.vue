<template>
  <div id="app">
    <!-- 页眉部分，导航栏 -->
    <header>
      <Nav />
    </header>
    <!-- 容器，主体部分 -->
    <main>
      <div class="container-fluid">
        <router-view />
      </div>
    </main>
    <!-- 页尾部分 -->
    <footer>

    </footer>
  </div>
</template>


<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

// 页眉，导航栏
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <!-- 响应式时的按钮 -->
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item" v-for="(v, k) in titles" :key="k">
          <a class="nav-link" @click="zhuan(v.val)">{{ v.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      titles: [
        { name: "首页", val: "/" },
        { name: "我要考试", val: "/ks" },
        { name: "我的成绩", val: "/cj" },
        { name: "考题归纳", val: "/tm" },
        { name: "错题总结", val: "/ct" },
      ],
      paths:'/',
    };
  },
  methods: {
    zhuan(val) {
      console.log(val);
      if(val!=this.paths){
        this.paths=val;
        this.$router.push(this.paths);
      }
    },
  },
};
</script>

<style lang="css">
</style>
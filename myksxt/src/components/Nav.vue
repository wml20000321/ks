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
        <li class="nav-item active">
          <a class="nav-link" href="/">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ks">我要考试</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/cj">我的成绩</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/tm">考题归纳</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ct">错题总结</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="css">
</style>
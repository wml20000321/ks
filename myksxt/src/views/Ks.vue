// 我要考试
<template>
  <div>
    <!-- 展板 -->
    <div class="jumbotron">
      <h1 class="display-3">我要考试</h1>
    </div>
    <!-- 选项 -->
    <div class="row">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title"></h4>
            <a class="btn btn-primary" href="" role="button"></a>
          </div>
        </div>
      </div>
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      class:['','']
    }
  },
  methods: {
    //
  },
};
</script>

<style>

</style>
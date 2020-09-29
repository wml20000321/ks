// 我要考试
<template>
  <div>
    <!-- 展板 -->
    <div class="jumbotron">
      <h1 class="display-3">我要考试</h1>
    </div>
    <!-- 选项 -->
    <div class="row">
      <div class="col-4" v-for="(v, k) in cls" :key="k">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{ v }}</h4>
            <a class="btn btn-primary" @click="confirm(v)" role="button"
              >确认考试</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      cls: ["Java", "JavaScript", "Vue"],
    };
  },
  methods: {
    //确认考试方法
    confirm(v) {
      if (confirm("确认考试吗？")) {
        this.$router.push(`/ks_${v}`);
        this.sum++;
      }
    },
  },
  computed: mapState(["sum"]),
};
</script>

<style>
</style>
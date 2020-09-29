<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">{{ cj.title }}</h1>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">考题编号</th>
          <th scope="col">考试题目</th>
          <th scope="col">作答</th>
          <th scope="col">正确答案</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cj.daan" :key="index">
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ tmlist[item.ind].title }}</td>
          <td>{{ item.da }}</td>
          <td>{{ tmlist[item.ind].right }}</td>
        </tr>
      </tbody>
    </table>

      <hr class="my-5" />

    <div class="mt-5">
      <table class="table">
        <thead>
          <tr>
            <th>总题数</th>
            <th>答对题数</th>
            <th>答错题数</th>
            <th>分数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ cj.daan.length }}</td>
            <td>{{ dadui }}</td>
            <td>{{ cj.daan.length - dadui }}</td>
            <td>{{ dadui * 10 }}</td>
          </tr>
        </tbody>
      </table>
    
      <div class="row">
        <div class="col-lg-6">
          <h4 class="card-title">总分</h4>
        </div>
        <div class="col-lg-6">
          <h4 class="card-title">{{ dadui * 10 }}</h4>
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
      tclist: [],
    };
  },

  computed: {
    ...mapState({
      tmlist: "tmlist",
      jslist: "jslist",
      javalist: "javalist",
      vuelist: "vuelist",
      cj: "cj",
    }),
    dadui: function () {
      let dui = 0;
      for (let i = 0; i < this.cj.daan.length; i++) {
        if (this.cj.daan[i].flag) {
          dui++;
        }
      }
      return dui;
    },
  },
};
</script>
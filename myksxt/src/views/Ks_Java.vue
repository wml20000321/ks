<template>
  <div>
    <div class="jumbotron">
      <table class="table">
        <tbody>
          <tr>
            <td class="td" v-for="(v, k) in list" :key="k">
              <button @click="find(k)">{{ k + 1 }}</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="container">
        <!-- 标题 -->
        <div class="row" style="position: relative">
          <h4>
            <span class="badge badge-light" style="width: 30px">{{
              num + 1
            }}</span>
            <span style="position: absolute; top: 3px">{{
              list[num].title
            }}</span>
          </h4>
        </div>
        <hr />
        <!-- 单选 -->
        <div class="row" v-for="(v, k) in list[num].options" :key="k">
          <div class="form-check">
            <label class="form-check-label">
              <input
                ref="chek"
                type="radio"
                class="form-check-input"
                name="java"
                @click="confirm(num, k)"
              />
              <span class="badge badge-pill badge-danger">{{ xuan[k] }}</span>
              {{ v }}
            </label>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="row my-3">
          <div class="col-6 pl-0">
            <button
              type="button"
              class="btn btn-danger btn-lg btn-block"
              @click="last()"
            >
              上一题
            </button>
          </div>
          <div class="col-6 pr-0">
            <button
              @click="tijiao()"
              v-if="num == list.length - 1"
              type="button"
              class="btn btn-success btn-lg btn-block"
            >
              确认提交
            </button>
            <button
              v-else
              type="button"
              class="btn btn-success btn-lg btn-block"
              @click="next()"
            >
              下一题
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      xuan: ["A", "B", "C", "D"],
      num: 0,
      daan: [],
    };
  },
  computed: mapState({ list: "javalist", list2: "kslist" }),
  methods: {
    ...mapActions({ save: "save" }),
    last() {
      if (this.num > 0) {
        this.num--;
      }
    },
    next() {
      if (this.num < this.list.length - 1) {
        this.num++;
        this.$refs.chek.forEach((v) => {
          v.checked = "";
        });
      }
    },
    find(k) {
      this.num = k;
    },
    confirm(num, k) {
      let bool = this.list[num].right == this.xuan[k];
      let tm = { index: num, bool: bool };

      if (this.daan[num]) {
        this.daan[num].bool = tm.bool;
      } else {
        this.daan[num] = tm;
      }
      console.log(this.daan);
    },
    tijiao() {
      let daans = { title: "Java", daan: this.daan };
      this.save(daans);
      console.log(this.list2);
    },
  },
};
</script>

<style>
.td {
}
.table {
  width: 50%;
  margin: auto;
  margin-bottom: 30px;
}
</style>

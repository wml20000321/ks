import Vue from 'vue'
import Vuex from 'vuex'
// 导入状态，变化，和方法
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
//启用状态管理
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
})

import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)
const state = {
    json: [],
};

const mutations = {
  setJson(state, db){
    state.json = db;
  }
}

const actions = {
  // 调用端getJson接口
  getJson(context){
    axios.get('http://127.0.0.1:3000/getJson', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function (res) {
        if(res.status === 200){
            return res.data
          }
    }).then(function (json) {
        context.commit('setJson', Array.from(json))
    })
  }
};

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
})
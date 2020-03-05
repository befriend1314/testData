import Vue from 'vue'
import Vuex from 'vuex';

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
  getJson(context){
    // 调用我们的后端getJson接口
    fetch('http://127.0.0.1:3000/getJson', {
      method: 'GET',
      mode:'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function (res) {
      if(res.status === 200){
        return res.json()
      }
    }).then(function (json) {

      //console.log(typeof Array.from(json), Array.from(json));
      context.commit('setJson', Array.from(json));
    })
  }
};

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
})
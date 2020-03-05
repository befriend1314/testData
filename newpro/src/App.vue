<template>
  <div id="app">
    <div class="test">
        <button type="button" @click="getJson">从后端取json</button>
        <div class="showJson">{{json}}</div>
    </div>
  </div>
</template>

<script>
import {store} from './store'
export default {
  name: 'App',
  computed: {
    json() {
      return store.state.json
    }
  },
  methods: {
    getJson() {
      store.dispatch("getJson")
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.showJson{
    width:500px;
    margin:10px auto;
    min-height:500px;
    background-color: palegreen;
  }
</style>

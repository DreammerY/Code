<template>
  <div id="app">
    <HelloWorldVue></HelloWorldVue>
  </div>
</template>
<script>
import HelloWorldVue from './components/HelloWorld.vue'
export default {
  name: 'App',
  components:{
    HelloWorldVue
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

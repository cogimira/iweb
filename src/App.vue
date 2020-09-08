<template>
  <div id="app">
    <Test></Test>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.js';
export default {
  name: 'App',
  components: {
    Test
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
</style>

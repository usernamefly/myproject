<template>
    <yg-home></yg-home>
</template>

<script>
import home from './views/home'

export default {
  name: 'app',
  components: {
    "yg-home":home,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

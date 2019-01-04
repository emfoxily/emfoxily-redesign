<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './main/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
  body {
    /* background-image: url('./assets/dark_stripes.png'); */
    background-color: #111;
  }
</style>

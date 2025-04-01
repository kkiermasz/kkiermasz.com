<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

body {
  font-family: monospace;
  background-color: #656560;
  color: #ffffff;
}

#app {
  min-height: 100%;
  width: 100%;
}
</style>

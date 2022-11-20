<template>
  <Header></Header>
  <div class="flex items-start justify-around bg-red-50">
    <img src="./assets/SupreyoPicture.jpg" class="rounded-full shadow-2xl"/>
    <Intro></Intro>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Intro from './components/Intro.vue'

export default {
  name: 'App',
  components: {
    Header,
    Intro
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

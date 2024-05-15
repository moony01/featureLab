<template>
  <q-layout view="hHh lpR fFf">
    <Header />
    <Contents />
    <Footer />
  </q-layout>
</template>

<script>
import Header from './layout/Header.vue'
import Contents from './layout/Contents.vue'
import Footer from './layout/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Contents,
    Footer,
  },
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

<template>
  <div>
    <Header />
    <Input />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from './todo/Header.vue'
import Input from './todo/Input.vue'
import List from './todo/List.vue'
import Footer from './todo/Footer.vue'
export default {
  name: 'moony',
  components: {
    Header,
    Input,
    List,
    Footer
  }
};
</script>

<style lang="scss">
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
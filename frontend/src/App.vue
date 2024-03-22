<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <HanMoonHee msg="hello hanmoonhee"/> -->
  <div
    v-show="this.$store.state.layout === 'default'"
    class="landing-bg bg-primary position-fixed w-100"
  >ㅎㅇ</div>
  <button v-on:click="changeLayoutToLanding">TEST</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HanMoonHee from './components/hanmoonhee/HanMoonHee.vue'
import { mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HanMoonHee
  },
  methods: {
    ...mapMutations([
      'setLayout' // 'setLayout' 뮤테이션을 메소드로 매핑
    ]),
    changeLayoutToLanding() {
      this.setLayout('landing'); // 'setLayout' 뮤테이션 호출, 'landing'을 인자로 전달
    }
  }
}
</script>



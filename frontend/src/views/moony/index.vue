<template>
  <div>
    <Header />
    <!-- <Input v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명" /> -->
    <Input v-on:addTodoItem="addOneItem" />
    <!-- <List v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성" /> -->
    <List v-bind:propsdata="todoItems" />
    <Footer />
  </div>
</template>

<script>
import Header from "./todo/Header.vue";
import Input from "./todo/Input.vue";
import List from "./todo/List.vue";
import Footer from "./todo/Footer.vue";
export default {
  name: "moony",
  data: function() {  
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem) {
      // 저장하는 로직
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    }
  },
  // 생성되는 시점에 실행되는 라이프 사이클 훅
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
          // console.log(localStorage.getItem(localStorage.key(i)));
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  components: {
    Header,
    Input,
    List,
    Footer,
  },
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
<template>
    <div>
      <!-- 
        input에 입력된 텍스트 값을 동적으로 뷰 인스턴스에 매핑
       -->
      <input type="text" v-model="newTodoItem">
      <button v-on:click="addTodo">add</button>
    </div>
  </template>
  
  <script>
  export default {
    data: function() {
      return {
        newTodoItem: ""
      }
    },
    methods: {
      addTodo: function() {
        console.log(this.newTodoItem);
        // 저장하는 로직
        localStorage.setItem(this.newTodoItem, this.newTodoItem);
        this.newTodoItem = '';
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
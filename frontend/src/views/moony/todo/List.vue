<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check"
           v-on:click="toggleComplete">
        </i>
        {{ todoItem.item }}
        <!-- v-for의 todoItem과 index를 아래 removeTodo함수의 파라미터로 넘길 수 있음 -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  data: function () {
    return {
      todoItems: [],
    }
  },
  methods: {
    removeTodo: function (todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function() {
      
    }
  },
  // 생성되는 시점에 실행되는 라이프 사이클 훅
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // console.log(localStorage.getItem(localStorage.key(i)));
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
};
</script>
  
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition css */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
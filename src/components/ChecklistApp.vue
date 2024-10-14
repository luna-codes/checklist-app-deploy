<template>
  <div class="container">
    <h1 class="my-4">Lista de Tarefas</h1>
    <input 
      v-model="newTodo" 
      class="form-control mb-3" 
      placeholder="Adicionar nova tarefa" 
      @keyup.enter="addTodo" 
    />
    <button class="btn btn-primary mb-3" @click="addTodo">Adicionar Tarefa</button>
    <ul class="list-group">
      <ChecklistItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @remove="removeTodo(index)"
        @update:completed="updateTodoStatus(index, $event)"
      />
    </ul>
  </div>
</template>

<script>
import ChecklistItem from './ChecklistItem.vue';

export default {
  components: {
    ChecklistItem
  },
  data() {
    return {
      newTodo: '',
      todos: []
    };
  },
  created() {
    this.loadTodos();
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = '';
        this.saveTodos();
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodos();
    },
    updateTodoStatus(index, completed) {
      this.todos[index].completed = completed;
      this.saveTodos();
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    loadTodos() {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos);
      }
    }
  }
};
</script>

<template>
  <li :class="{ 'list-group-item': true, completed: todo.completed }">
    <input type="checkbox" :checked="todo.completed" @change="toggleComplete" />
    {{ todo.text }}
    <button class="btn btn-danger btn-sm float-end" @click="$emit('remove')">Remover</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  methods: {
    toggleComplete() {
      this.$emit('update:completed', !this.todo.completed);
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>

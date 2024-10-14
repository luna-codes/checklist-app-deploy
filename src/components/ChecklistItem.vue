<template>
  <li>
    <input type="checkbox" v-model="item.completed" />
    <span :class="{ completed: item.completed }">{{ item.text }}</span>
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>

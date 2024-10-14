<template>
  <div>
    <h1>Checklist</h1>
    <input v-model="newItem" @keyup.enter="addItem" placeholder="Add a new item" />
    <ul>
      <ChecklistItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        @remove="removeItem(index)"
      />
    </ul>
  </div>
</template>

<script>
import ChecklistItem from './ChecklistItem.vue';

export default {
  components: {
    ChecklistItem,
  },
  data() {
    return {
      newItem: '',
      items: [],
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push({ text: this.newItem, completed: false });
        this.newItem = '';
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>

<template>
  <div id="app">
    <ChecklistApp />
  </div>
</template>

<script>
import ChecklistApp from './components/ChecklistApp.vue'; // Ensure correct import

export default {
  name: 'App',
  components: {
    ChecklistApp, // Use the correct name here
  },
};
</script>

<style>
/* Add your styles here */
</style>

<style scoped>
.app {
  color: blue;
}
</style>

<template>
<div class="app">
  <span>Main App</span>
  <eager></eager>
  <br>
  <dropdown></dropdown>
</div>
</template>

<script>
import Dropdown from './Dropdown.vue';
import Eager from '/client/Eager.vue';

export default {
  components: {
    Dropdown,
    Eager,
  },
}
</script>
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
  <progress-bar></progress-bar>
</div>
</template>

<script>
import Dropdown from './Dropdown.vue';
import Eager from '/client/Eager.vue';
import ProgressBar from './ProgressBar.vue';

export default {
  components: {
    Dropdown,
    Eager,
    ProgressBar,
  },
}
</script>
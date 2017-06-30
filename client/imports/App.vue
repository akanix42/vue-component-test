<style scoped>
.app {
  color: blue;
}
</style>

<template>
<div class="app">
  <span>Main App</span>
  <eager></eager>
</div>
</template>

<script>
import Eager from '/client/Eager.vue';

export default {
  components: {
    Eager,
  },
}
</script>
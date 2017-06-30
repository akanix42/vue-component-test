<style scoped>
.app {
  color: blue;
}
</style>

<template>
<div class="app">
  <span>Main App</span>
  <eager></eager>
  <dynamic></dynamic>
</div>
</template>

<script>
import Eager from '/client/Eager.vue';

export default {
  components: {
    Eager,
    Dynamic: async () => (await import('./Dynamic.vue')).default,
  },
}
</script>
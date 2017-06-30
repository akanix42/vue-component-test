<style scoped>
.dropdown {
  color: purple;
}
</style>

<template>
<div class="dropdown">
  Dropdown from npm package vue-my-dropdown:
  <Dropdown :visible="visible"
            :animation="animation"
            :position="['right', 'bottom', 'right', 'top']">
    <span @click='visible = !visible'>Click Me</span>
    <div slot="dropdown">
     Dropdown Content
    </div>
  </Dropdown>
</div>
</template>

<script>
import Dropdown from 'vue-my-dropdown';

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      visible: false,
    };
  },
}
</script>
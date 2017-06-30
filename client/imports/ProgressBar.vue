<template>
  <vue-progress-bar></vue-progress-bar>
</template>

<script>
import VueProgressBar from 'vue-progressbar';
import Vue from 'vue';

const options = {
  color: 'red',
  failedColor: '#874b4b',
  thickness: '50px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)
export default {
  created () {
    this.$Progress.start();
    setTimeout(() => {this.$Progress.finish();}, 10000);
  },
}
</script>
<template>
  <div>
    <div class="carousel-wrapper">
      hello hello
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      axiosToken: undefined as any,
    }
  },
  fetch() {
    this.axiosToken = this.$axios.CancelToken.source();

    console.log(this.axiosToken)
  }
})
</script>

<style>
.sample {
  width: 100px;
  height: 100px;
  margin-left: 15px;
}
</style>

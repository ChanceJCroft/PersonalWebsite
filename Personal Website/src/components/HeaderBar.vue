<script setup lang="ts">
import HeaderTitle from './HeaderTitle.vue'
</script>

<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-md-3"><img src="../assets/images/orc.jpg" class="img" /></div>
      <div class="col-md-3"><HeaderTitle /></div>
    </div>
  </div>
</template>

<style scoped>
.img {
  max-width: 25vh;
  max-height: 40vh;
}
</style>

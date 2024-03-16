<script setup lang="ts">
import HeaderTitle from './HeaderTitle.vue'
import ContactInfo from './ContactInfo.vue'
</script>

<template>
  <div class="container">
    <div class="row align-items-start text-center">
      <div class="col img-div"><img src="../assets/images/orc.jpg" class="img" /></div>
      <div class="col"><HeaderTitle /></div>
      <div class="col"><ContactInfo /></div>
    </div>
  </div>
</template>

<style scoped>
.img-div {
  max-width: 25vh;
  max-height: 40vh;
}

.img {
  height: 100%;
  width: 100%;
}
</style>

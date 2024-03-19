<script setup lang="ts">
import HeaderTitle from './HeaderTitle.vue'
import ContactInfo from './ContactInfo.vue'
</script>

<template>
  <div class="container px-4 bg-info">
    <div class="row justify-content-evenly">
      <div class="col img-div p-4"><img src="../assets/images/orc.jpg" class="img" /></div>
      <div class="col p-4"><HeaderTitle /></div>
      <div class="col p-4 contact-info"><ContactInfo /></div>
    </div>
  </div>
</template>

<style scoped>
.img-div {
  max-width: 25vh;
  max-height: 35vh;
}

.img {
  height: 100%;
  width: 100%;
}

.test {
  color: red;
}

.container {
  max-width: 100%;
  margin: auto;
}

.contact-info {
  max-width: 50vh;
}
</style>

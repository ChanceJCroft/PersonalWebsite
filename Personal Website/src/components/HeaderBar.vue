<script setup lang="ts">
import HeaderTitle from './HeaderTitle.vue'
import ContactInfo from './ContactInfo.vue'
</script>

<template>
  <div class="container px-4">
    <div class="row">
      <div class="col img-div p-4 text-center">
        <img src="../assets/images/chance.jpg" class="img" />
      </div>
      <div class="col p-4"><HeaderTitle /></div>
      <div class="col p-4 contact-info"><ContactInfo /></div>
    </div>
  </div>
</template>

<style scoped>
.img-div {
  max-width: 25vh;
  max-height: 40vh;
}

.img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 100%;
}

.container {
  max-width: 100%;
  max-height: 50vh;
  margin: auto;
  border-bottom: 1px solid black;
  background-image: url('../assets/images/circuit-board.jpg');
  color: white;
}

.contact-info {
  max-width: 33vh;
  margin-top: 3vh;
}

.col {
  min-width: 25%;
}
</style>

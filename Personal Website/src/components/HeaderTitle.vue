<script lang="ts" setup>
import HeaderTitleDescription from './HeaderTitleDescription.vue'
</script>

<template>
  <div>
    <h1 class="text-center fira-sans-semibold-italic">Chance Croft</h1>
    <br />
    <h4 class="text-center fira-sans-semibold-italic">Software Developer</h4>
    <HeaderTitleDescription />
  </div>
</template>

<style scoped>
.fira-sans-semibold-italic {
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
  font-style: italic;
}

.center-text {
  display: flex;
}

div {
  height: 100% !important;
}

.test {
  display: flex;
  align-items: center;
}
</style>

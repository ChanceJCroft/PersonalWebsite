<template>
  <div>
    <h1 class="text-center fira-sans-semibold-italic">{{ name }}</h1>
    <br />
    <h4 class="text-center fira-sans-semibold-italic">{{ title }}</h4>
    <HeaderTitleDescription />
  </div>
</template>

<script lang="ts" setup>
import HeaderTitleDescription from './HeaderTitleDescription.vue'

const name: string = 'Chance Croft'
const title: string = 'Software Developer'
</script>

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

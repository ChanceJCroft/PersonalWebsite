<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <header>
    <HeaderBar></HeaderBar>
  </header>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped>
#app {
  width: 100vh;
  height: 100vh;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 1s,
    transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue'

//Send an alert that this is version 1.0 with mobile formatting TODO
const versionOneAlert: string =
  'Hello, and welcome to my website! Please note that this is an early build, and so the mobile formatting likely will not work as expected. Besides that, feel free to poke around with how everything is currently setup and reach out with any questions.'

function load() {
  var isFired = localStorage.getItem('checkFired')

  if (isFired != '1') {
    alert(versionOneAlert)
    localStorage.setItem('checkFired', '1')
  }
}

load()
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
  <footer class="footer">
    <p class="mt-3">© 2024 Chance Croft</p>
  </footer>
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

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-image: url('./assets/images/circuit-board.jpg');
  color: white;
  text-align: center;
  border-top: 1px solid black;
}
</style>

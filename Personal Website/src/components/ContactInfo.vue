<template>
  <div
    class="m-3"
    :class="$windowWidth > screenWidthOptions.small ? 'contact-info-main' : 'contact-info-mobile'"
  >
    <address>
      <strong>{{ contactInfoTitle }}</strong
      ><br />
      <a href="mailto:chance.croft2@gmail.com" class="email">{{ email }}</a
      ><br />
      {{ city }}<br />
      {{ phoneNumber }}
    </address>

    <address>
      <strong>{{ linksTitle }}</strong
      ><br />
      <a href="https://www.linkedin.com/in/chance-croft/">{{ linkedInTitle }}</a
      ><br />
      <a href="https://github.com/ChanceJCroft">{{ gitHubTitle }}</a>
    </address>
  </div>
</template>

<script setup lang="ts">
import { screenWidthOptions } from './objects/const'
const contactInfoTitle: string = 'Contact Info'
const email: string = 'chance.croft2@gmail.com'
const city: string = 'Oklahoma City, OK 73120'
const phoneNumber: string = '(559) 231-4140'
const linksTitle: string = 'Links'
const linkedInTitle: string = 'LinkedIn'
const gitHubTitle: string = 'GitHub'
</script>

<style scoped>
.contact-info-main {
  min-width: 100%;
  border: 1px solid white;
  padding: 2vh;
  border-radius: 25px;
  background-color: #cc7e81;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.contact-info-mobile {
  min-width: 80vw;
  border: 1px solid white;
  padding: 2vh;
  border-radius: 25px;
  background-color: #cc7e81;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  font-style: normal;
}

a {
  color: #110e73;
}

.email {
  padding-right: 10px !important;
  word-break: break-all;
}

.test {
  background-color: red;
  color: red;
}

.two-test {
  background-color: green;
  color: green;
}
</style>

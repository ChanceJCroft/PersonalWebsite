<template>
  <div class="m-3" :class="$windowWidth > 600 ? 'contact-info-main' : 'contact-info-mobile'">
    <address>
      <strong>Contact Info</strong><br />
      <a href="mailto:chance.croft2@gmail.com" class="email">chance.croft2@gmail.com</a><br />
      Oklahoma City, OK 73120<br />
      (559) 231-4140
    </address>

    <address>
      <strong>Links</strong><br />
      <a href="https://www.linkedin.com/in/chance-croft/">LinkedIn</a><br />
      <a href="https://github.com/ChanceJCroft">GitHub</a>
    </address>
  </div>
</template>

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

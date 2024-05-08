<template>
  <div class="mt-4" v-if="$windowWidth > 600">
    Hello! My name is Chance, and I'm a Software Developer with multiple years of both Frontend and
    Backend Web Development. I have extensive experience working on enterprise level applications
    using the technologies and tools you see listed below. Feel free to click on any of the icons to
    get more information about my experience in that category.
  </div>
  <br />
  <div v-show="$windowWidth > 1000">
    Outside of the listed experience I'm currently studying Node.js and the OpenAI API. I have a
    strong desire to expose myself to technologies outside of web development.
  </div>
</template>

<style scoped>
div {
  font-family: 'Tauri', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>

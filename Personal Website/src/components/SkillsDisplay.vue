<!-- eslint-disable vue/valid-v-on -->
<script lang="ts" setup>
import IndividualSkillSummary from './IndividualSkillSummary.vue'
import { skills, softSkills } from './objects/skills'
</script>

<template>
  <div class="main mt-4">
    <h1 class="d-flex justify-content-center title">Skills</h1>
    <div class="container">
      <div class="row mt-5">
        <div v-for="skill in skills" :key="skill.title" class="col">
          <IndividualSkillSummary :skill="skill" />
        </div>
      </div>
      <div class="w-100"></div>
      <div class="row mt-5">
        <div v-for="skill in softSkills" :key="skill.title" class="col">
          <IndividualSkillSummary :skill="skill" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  padding: auto;
  height: 100%;
}

.title {
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
}

.main {
  height: 100%;
}
</style>

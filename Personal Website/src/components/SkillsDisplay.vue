<!-- eslint-disable vue/valid-v-on -->
<script lang="ts" setup>
import IndividualSkillSummary from './IndividualSkillSummary.vue'
import { skills } from './objects/skills'
</script>

<template>
  <div>
    <h1 class="d-flex justify-content-center mt-5">Skills</h1>
    <div class="container">
      <div class="row">
        <div v-for="skill in skills" :key="skill.title" class="col">
          <IndividualSkillSummary :skill="skill" />
        </div>
      </div>
    </div>
  </div>
</template>

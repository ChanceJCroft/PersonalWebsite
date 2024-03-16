<script lang="ts" setup>
import IndividualSkillDisplay from './IndividualSkillDisplay.vue'
import { skills } from './objects/skills'
</script>

<template>
  <div>
    <h1 class="d-flex justify-content-center mt-5">Skills go here</h1>
    <!-- Here we will do a foreach loop and create a IndividualSkill component for each skill which will be a hard coded object -->
    <!-- Add props to the IndividualSkill component, and pass them in during the foreach loop -->
    <div v-for="skill in skills" :key="skill.title">
      <IndividualSkillDisplay :skill="skill" />
    </div>
  </div>
</template>

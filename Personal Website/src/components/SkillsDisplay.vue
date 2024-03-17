<!-- eslint-disable vue/valid-v-on -->
<script lang="ts" setup>
import IndividualSkillSummary from './IndividualSkillSummary.vue'
import type { IndividualSkill } from './types/types'
import { skills } from './objects/skills'

let currentlySelectedSkill: IndividualSkill | null = null

function individualSkillSelected(skill: IndividualSkill | null) {
  currentlySelectedSkill = skill
  console.log(currentlySelectedSkill)
}
</script>

<template>
  <div>
    <h1 class="d-flex justify-content-center mt-5">Skills</h1>
    <div class="container">
      <div class="row">
        <div v-for="skill in skills" :key="skill.title" class="col">
          <IndividualSkillSummary :skill="skill" @selected="individualSkillSelected" />
        </div>
      </div>
    </div>
  </div>
</template>

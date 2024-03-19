<template>
  <div>
    <img :src="skill.icon" alt="icon" class="img" />
    <h1>{{ skill.title }}</h1>
    <h4>{{ skill.description }}</h4>
    <h4>{{ skill.experience }}</h4>
    <RouterLink to="/">Back to skills</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import type { IndividualSkill } from './types/types'

defineProps<{
  skill: IndividualSkill
}>()
</script>

<style scoped>
.img {
  max-width: 25vh;
  max-height: 25vh;
}
</style>

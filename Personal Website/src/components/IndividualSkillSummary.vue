<template>
  <div class="text-center main">
    <div>
      <RouterLink :to="skill.path" class="skill-container">
        <img :src="skill.icon" class="img" alt="" />
      </RouterLink>
      <h3 class="pt-2">{{ skill.title }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IndividualSkill } from './types/types'

defineProps<{
  skill: IndividualSkill
}>()
</script>

<style scoped>
.main {
  overflow: auto;
}

.img {
  max-width: 10vh;
  max-height: 10vh;
  padding: 1vh;
}

.skill-container {
  border: 1px solid transparent;
  transition: 0.2s;
}
/* TODO: Lookup best practices for hover feedback */
.skill-container :hover {
  opacity: 50%;
  border: 1px solid blue;
  box-sizing: border-box;
}
</style>

<template>
  <div class="text-center main">
    <div>
      <RouterLink :to="skill.path" class="skill-container">
        <img :src="skill.icon" class="img" alt="" />
      </RouterLink>
      <h3 class="pt-2 skill-title">{{ skill.title }}</h3>
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
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
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
  border: 1px solid #110e73;
  box-sizing: border-box;
}

.skill-title {
  padding-bottom: 30px;
}
</style>

<template>
  <div class="skill-container text-center">
    <div>
      <v-if skill.icon>
        <RouterLink :to="skill.title">
          <img :src="skill.icon" class="img" alt="" />
        </RouterLink>
      </v-if>
      <h3>{{ skill.title }}</h3>
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
.img {
  max-width: 50px;
  max-height: 50px;
}

/* TODO: Lookup best practices for hover feedback */
.skill-container :hover {
  border: 5px solid blue;
}
</style>

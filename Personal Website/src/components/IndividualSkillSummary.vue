<template>
  <div>
    <v-if skill.icon>
      <RouterLink :to="skill.title" class="skill">
        <img :src="skill.icon" class="img" alt="" />
      </RouterLink>
    </v-if>
    <h3>{{ skill.title }}</h3>
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
.skill :hover {
  border: 5px solid blue;
}
</style>

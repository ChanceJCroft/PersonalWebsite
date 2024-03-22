<template>
  <div class="d-flex justify-content-center mt-2">
    <div class="text-center">
      <img :src="skill.icon" alt="icon" class="img" />
      <h1>{{ skill.title }}</h1>
      <p>
        <strong
          ><i>{{ skill.description }}</i>
        </strong>
      </p>
      <br />
      <p>{{ skill.experience }}</p>
      <RouterLink to="/"
        ><button type="button" class="btn btn-outline-info">Back to skills</button></RouterLink
      >
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
  max-width: 25vh;
  max-height: 25vh;
}
</style>

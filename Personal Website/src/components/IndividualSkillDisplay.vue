<template>
  <div class="d-flex justify-content-center mt-2">
    <div class="text-center container">
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
        ><button type="button" class="btn btn-primary">Back to skills</button></RouterLink
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
  max-width: 20vh;
  max-height: 20vh;
  padding-top: 3vh;
}

.btn-primary {
  background-color: #cc7e81;
  border-color: #cc7e81;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:disabled,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background-color: #a36567 !important;
  border-color: #a36567 !important;
}
</style>

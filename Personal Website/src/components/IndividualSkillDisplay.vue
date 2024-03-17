<template>
  <div>
    <h1>{{ skill.title }}</h1>
    <h4>{{ skill.description }}</h4>
    <h4>{{ skill.experience }}</h4>
  </div>
</template>

<script lang="ts" setup>
import type { IndividualSkill } from './types/types'

defineProps<{
  skill: IndividualSkill
}>()
</script>

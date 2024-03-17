<template>
  <div>
    <v-if skill.icon>
      <img :src="skill.icon" class="img" alt="" v-on:click="$emit('selected', skill)" />
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
</style>

import IndividualSkillDisplay from '@/components/IndividualSkillDisplay.vue'
import SkillsDisplay from '@/components/SkillsDisplay.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { skills, softSkills } from '@/components/objects/skills'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SkillsDisplay
    }
  ]
})

for (const skill of skills) {
  const newRoute = {
    path: '/' + skill.path,
    name: skill.title,
    component: IndividualSkillDisplay,
    props: { skill: skill }
  }

  router.addRoute(newRoute)
}

//TODO: Experiment with visually displaying soft skills differently than skills
for (const softSkill of softSkills) {
  const newRoute = {
    path: '/' + softSkill.path,
    name: softSkill.title,
    component: IndividualSkillDisplay,
    props: { skill: softSkill }
  }

  router.addRoute(newRoute)
}

export default router

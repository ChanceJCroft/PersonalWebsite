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

//Conditionally add new routes based on what skills are in the skills object
for (let i = 0; i < skills.length; i++) {
  const newRoute = {
    path: '/' + skills[i].path,
    name: skills[i].title,
    component: IndividualSkillDisplay,
    props: { skill: skills[i] }
  }

  router.addRoute(newRoute)
}

//Conditionally add soft skills, to be combined with skills in future refactoring
for (let i = 0; i < softSkills.length; i++) {
  const newRoute = {
    path: '/' + softSkills[i].path,
    name: softSkills[i].title,
    component: IndividualSkillDisplay,
    props: { skill: softSkills[i] }
  }

  router.addRoute(newRoute)
}

export default router

import IndividualSkillDisplay from '@/components/IndividualSkillDisplay.vue'
import SkillsDisplay from '@/components/SkillsDisplay.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { skills } from '@/components/objects/skills'

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
    path: '/' + skills[i].title,
    name: skills[i].title,
    component: IndividualSkillDisplay,
    props: { skill: skills[i] }
  }

  router.addRoute(newRoute)
}

export default router

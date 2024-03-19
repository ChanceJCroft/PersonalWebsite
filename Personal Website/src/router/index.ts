import IndividualSkillDisplay from '@/components/IndividualSkillDisplay.vue'
import SkillsDisplay from '@/components/SkillsDisplay.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { skills } from '@/components/objects/skills'
import type { IndividualSkill } from '@/components/types/types'

/* const newRoutes = skills.forEach((skill: IndividualSkill) => {
  return {
    path: '/' + skill.title,
    name: skill.title,
    component: IndividualSkillDisplay,
    props: //Conditionally add props 
  }
}); */
//TODO -- Refactor this to conditionally display the skills based on skill data
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SkillsDisplay
    },
    {
      path: '/typescript',
      name: 'typescript',
      component: IndividualSkillDisplay,
      props: { skill: skills[0] }
    },
    {
      path: '/php',
      name: 'php',
      component: IndividualSkillDisplay,
      props: { skill: skills[1] }
    },
    {
      path: '/vue',
      name: 'vue',
      component: IndividualSkillDisplay,
      props: { skill: skills[2] }
    },
    {
      path: '/jest',
      name: 'jest',
      component: IndividualSkillDisplay,
      props: { skill: skills[3] }
    },
    {
      path: '/html',
      name: 'html',
      component: IndividualSkillDisplay,
      props: { skill: skills[4] }
    },
    {
      path: '/aws',
      name: 'aws',
      component: IndividualSkillDisplay,
      props: { skill: skills[5] }
    },
    {
      path: '/figma',
      name: 'figma',
      component: IndividualSkillDisplay,
      props: { skill: skills[6] }
    }
  ]
})
export default router

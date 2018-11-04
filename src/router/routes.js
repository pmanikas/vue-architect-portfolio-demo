import HomePage from '@views/HomePage.vue'
import SkillsPage from '@views/SkillsPage.vue'
import ProjectPage from '@views/ProjectPage.vue'
import ContactPage from '@views/ContactPage.vue'
import NotFound from '@views/404.vue'

export default [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsPage
  },
  {
    path: '/project/:projectId',
    name: 'project',
    component: ProjectPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '404',
  },
]
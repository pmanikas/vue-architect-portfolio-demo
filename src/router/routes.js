import HomePage from '@views/HomePage.vue'
import SkillsPage from '@views/SkillsPage.vue'
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
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '404',
  },
]
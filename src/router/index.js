import { createRouter, createWebHistory } from 'vue-router'
import AffecterLesDelais from '../views/AffecterLesDelais.vue'

const routes = [
  {
    path: '/',
    name: 'AffecterLesDelais',
    component: AffecterLesDelais
  },
  {
    path: '/GestionUtilisateur',
    name: 'GestionUtilisateur',
    component: () => import( '../views/gestion_utilisateur/GestionUtilisateur.vue')
  },
  {
    path: '/ConsulterProjetDPGR',
    name: 'ConsulterProjetDPGR',
    component: () => import( '../views/ConsulterProjet/ConsulterProjetDPGR.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

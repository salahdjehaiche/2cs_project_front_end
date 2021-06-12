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
    path: '/consulterprojet',
    name: 'ConsulterProjetDPGR',
    component: () => import( '../views/ConsulterProjet/ConsulterProjetDPGR.vue')
  },
  {
    path: '/consulterprojet/:id',
    name: 'ProjetDetail',
    component: () => import( '../views/ConsulterProjet/ProjetDetail.vue'),
    props:true

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

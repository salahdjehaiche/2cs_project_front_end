import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'AffecterLesDelais',
    component: () => import( '../views/dpgr/AffecterLesDelais.vue')
    },
  {
    path: '/GestionUtilisateur',
    name: 'GestionUtilisateur',
    component: () => import( '../views/dpgr/gestion_utilisateur/GestionUtilisateur.vue')
  },
  {
    path: '/consulterprojet/dpgr',
    name: 'ConsulterProjetDPGR',
    component: () => import( '../views/ConsulterProjet/ConsulterProjetDPGR.vue')
  },
  {
    path: '/consulterprojet/cl',
    name: 'ConsulterProjetCL',
    component: () => import( '../views/ConsulterProjet/ConsulterProjetCL.vue')
  },
  {
    path: '/consulterprojet/cs',
    name: 'ConsulterProjetCS',
    component: () => import( '../views/ConsulterProjet/ConsulterProjetCS.vue')
  },
  {
    path: '/consulterprojet/:user/:id',
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

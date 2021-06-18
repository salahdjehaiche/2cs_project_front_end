import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  //
  {
    path: '/',
    redirect: { name:'GestionUtilisateur'}    
  },
//----------------profile-----------
{
  path: '/modifeirpofile',
  name: 'Modifierprofile',
  component: () => import( '../views/profile/ModifierProfile.vue')
},
{
  path: '/consulterpofile',
  name: 'Consulterprofile',
  component: () => import( '../views/profile/ConsulterProfile.vue')
},

//---------------------dpgr-----------------
  {
    path: '/affecterlesdelais',
    name: 'AffecterLesDelais',
    component: () => import( '../views/dpgr/AffecterLesDelais.vue')
    },
  {
    path: '/GestionUtilisateur',
    name: 'GestionUtilisateur',
    component: () => import( '../views/dpgr/gestion_utilisateur/GestionUtilisateur.vue')
  },
  //-----------------------------consultation projet -----------------
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
  //----------------------- consulter publication --------------
  {
    path: '/consulterpublication',
    name: 'Consulterpublication',
    component: () => import( '../views/Publication/ConsulterPublication.vue')
  },
  //-----------------------------membres -------------------
    {
    path: '/creation_equipe',
    name: 'CreationEquipe',
    component: () => import( '../views/Membres/CreationEquipe.vue')
  },
  {
    path: '/consulter_equipe',
    name: 'ConsulterEquipe',
    component: () => import( '../views/Membres/ConsulterEquipe.vue')
  },
  {
    path: '/projetrecherche',
    name: 'ProjetRecherche',
    component: () => import( '../views/Membres/ProjetRecherche.vue')
  },
  {
    path: '/actuel',
    name: 'Actuel',
    component: () => import( '../views/Membres/projetactual/Actuel.vue')
  },
  {
    path: '/actuel/bilan',
    name: 'Bilan',
    component: () => import( '../views/Membres/projetactual/Bilan.vue')
  },
  {
    path: '/actuel/soumission',
    name: 'SoumettreProjet',
    component: () => import( '../views/Membres/projetactual/SoumettreProjet.vue')
  },
  {
    path: '/actuel/modifier',
    name: 'ModifierProjet',
    component: () => import( '../views/Membres/projetactual/ModifierProjet.vue')
  },
  {
    path: '/actuel/ficheprojet',
    name: 'FicheProjet',
    component: () => import( '../views/Membres/projetactual/FicheProjet.vue')
  },  
  {
    path: '/actuel/consulter',
    name: 'Consulter',
    component: () => import( '../views/Membres/projetactual/Consulter.vue')
  },
  {
    path: '/actuel/contrat',
    name: 'Contrat',
    component: () => import( '../views/Membres/contrat/Contrat.vue')
  },
  {
    path: '/actuel/contrat/creer',
    name: 'CreationContrat',
    component: () => import( '../views/Membres/contrat/CreationContrat.vue')
  },
  {
    path: '/actuel/contrat/detail/:id',
    name: 'DetailContrat',
    component: () => import( '../views/Membres/contrat/DetailContrat.vue')
  },
  {
    path: '/actuel/contrat/renouvler',
    name: 'RenouvlerContrat',
    component: () => import( '../views/Membres/contrat/RenouvlerContrat.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/authentification/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

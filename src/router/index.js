import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/index";

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
  component: () => import( '../views/profile/ModifierProfile.vue'),
    meta:{requiresAuth: true}
  },
{
  path: '/consulterpofile',
  name: 'Consulterprofile',
    component: () => import( '../views/profile/ConsulterProfile.vue'),
      meta:{requiresAuth: true}
  },

//---------------------dpgr-----------------
  {
    path: '/affecterlesdelais',
    name: 'AffecterLesDelais',
    component: () => import( '../views/dpgr/AffecterLesDelais.vue'),
    meta:{requiresAuth: true},
    beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="dpgr"){
        next({name:'Login'})
      }else{
        next()
      }
    }
    },
  {
    path: '/GestionUtilisateur',
    name: 'GestionUtilisateur',
    component: () => import( '../views/dpgr/gestion_utilisateur/GestionUtilisateur.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="dpgr"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  //-----------------------------consultation projet -----------------
  {
    path: '/consulterprojet/dpgr',
    name: 'ConsulterProjetDPGR',
    component: () => import( '../views/ConsulterProjet/ConsulterProjetDPGR.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="dpgr"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/consulterprojet/cl',
    name: 'ConsulterProjetCL',
    component: () => import( '../views/ConsulterProjet/ConsulterProjetCL.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/consulterprojet/cs',
    name: 'ConsulterProjetCS',
    component: () => import( '../views/ConsulterProjet/ConsulterProjetCS.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/consulterprojet/:user/:id',
    name: 'ProjetDetail',
    component: () => import( '../views/ConsulterProjet/ProjetDetail.vue'),
    props:true,
    meta:{requiresAuth: true}
  },
  //----------------------- consulter publication --------------
  {
    path: '/consulterpublication',
    name: 'Consulterpublication',
    component: () => import( '../views/Publication/ConsulterPublication.vue'),
      meta:{requiresAuth: true}
  },
  //-----------------------------membres -------------------
    {
    path: '/creation_equipe',
    name: 'CreationEquipe',
    component: () => import( '../views/Membres/CreationEquipe.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
        let user =store.state.login.user
        if (!user){
          next({name:'Login'})
        }else if(user.result.role!="membre"){
          next({name:'Login'})
        }else{
          next()
        }
      }
  },
  {
    path: '/consulter_equipe',
    name: 'ConsulterEquipe',
    component: () => import( '../views/Membres/ConsulterEquipe.vue'),
      meta:{requiresAuth: true}
  },
  {
    path: '/projetrecherche',
    name: 'ProjetRecherche',
    component: () => import( '../views/Membres/ProjetRecherche.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
        let user =store.state.login.user
        if (!user){
          next({name:'Login'})
        }else if(user.result.role!="membre"){
          next({name:'Login'})
        }else{
          next()
        }
      }
  },
  {
    path: '/actuel',
    name: 'Actuel',
    component: () => import( '../views/Membres/projetactual/Actuel.vue'),
    meta:{requiresAuth: true},
    beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/bilan',
    name: 'Bilan',
    component: () => import( '../views/Membres/projetactual/Bilan.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/soumission',
    name: 'SoumettreProjet',
    component: () => import( '../views/Membres/projetactual/SoumettreProjet.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/modifier',
    name: 'ModifierProjet',
    component: () => import( '../views/Membres/projetactual/ModifierProjet.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/ficheprojet',
    name: 'FicheProjet',
    component: () => import( '../views/Membres/projetactual/FicheProjet.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },  
  {
    path: '/actuel/consulter',
    name: 'Consulter',
    component: () => import( '../views/Membres/projetactual/Consulter.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/contrat',
    name: 'Contrat',
    component: () => import( '../views/Membres/contrat/Contrat.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/contrat/creer',
    name: 'CreationContrat',
    component: () => import( '../views/Membres/contrat/CreationContrat.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/contrat/detail/:id',
    name: 'DetailContrat',
    component: () => import( '../views/Membres/contrat/DetailContrat.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/contrat/renouvler',
    name: 'RenouvlerContrat',
    component: () => import( '../views/Membres/contrat/RenouvlerContrat.vue'),
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.result.role!="membre"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/authentification/Login.vue'),
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{ 
  if (to.matched.some(record => record.meta.requiresAuth)){
    let user =store.state.login.user
    if (!user){
      next({name:'Login'})
    }else{
      next()
    }
  }else{
    next()
  }
})
export default router

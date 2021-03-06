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
    path: '/consulterpofile/:user',
    name: 'Consulterprofile',
    component: () => import( '../views/profile/ConsulterProfile.vue'),
    props:true,
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
      }else if(user.user_type!="MEMBRE_DPGR"){
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
      }else if(user.user_type!="MEMBRE_DPGR"){
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
      }else if(user.user_type!="MEMBRE_DPGR"){
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
      }else if(user.user_type!="MEMBRE_LMCS" ||user.user_type!="MEMBRE_MCSI" ){
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
      }else if(user.user_type!="MEMBRE_CS"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/consulterprojet/:user/:id/:id_team',
    name: 'ProjetDetail',
    component: () => import( '../views/ConsulterProjet/ProjetDetail.vue'),
    props:true,
    meta:{requiresAuth: true}
  },
  //----------------------- consulter publication --------------
  {
    path: '/ajouterpublication',
    name: 'ajouterpublication',
    component: () => import( '../views/Publication/AddPublication.vue'),
      meta:{requiresAuth: true}
  },
  {
    path: '/visionerpublication/:intitule/:type/:date/:detail/:collabs/:extcollab',
    name: 'Visionerpublication',
    component: () => import( '../views/Publication/VisionnerPublication'),
    props:true,
      meta:{requiresAuth: true}
  },
  {
    path: '/consulterpublications',
    name: 'Consulterpublications',
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
        }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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
        }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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
    props:true,
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/contrat/detail/:title/:date_sign/:date_ren/:detail',
    name: 'DetailContrat',
    component: () => import( '../views/Membres/contrat/DetailContrat.vue'),
    props:true,
      meta:{requiresAuth: true},
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
        next({name:'Login'})
      }else{
        next()
      }
    }
  },
  {
    path: '/actuel/contrat/renouvler/:id',
    name: 'RenouvlerContrat',
    component: () => import( '../views/Membres/contrat/RenouvlerContrat.vue'),
      meta:{requiresAuth: true},
      props:true,
      beforeEnter: (to, from, next) => {
      let user =store.state.login.user
      if (!user){
        next({name:'Login'})
      }else if(user.user_type!="CHERCHEUR" && user.user_type!="DOCTORANT"){
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

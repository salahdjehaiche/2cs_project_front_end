<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">
            <welcome-sidebar :sideBar="sideBar"/>
            <div
                class="w-full bg-white   lg:ml-72 lg:mr-1 min-h-screen"
                :class="sideBarOpen ? 'overlay' : ''"
                id="main-content"
            >
                <welcome-header class="md:sticky md:top-0 md:z-50" />

                <div class="m-3 bg-white mb-6">
                    <slot ></slot>                    
                </div>

               
            </div>
            
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import WelcomeHeader from "../components/WelcomeHeader.vue";
import WelcomeSidebar from "../components/WelcomeSidebar.vue";
import store from "../store/index";
export default {
    name: "Intranet-2a",
    computed: {
        ...mapState(["sideBarOpen"])
    },
    data(){
        return{
            sideBar : []
        }
    },
    mounted(){
      let user =store.state.login.user.result
      let sideBarDPGR=[
                {name :'GestionUtilisateur' , label: 'Gestion Utilisateur',herite:false},  
                {name :'ConsulterProjetDPGR' , label: 'Projets Soumis',herite:false},                
                {name :'AffecterLesDelais' , label: 'Affecter Les Delais',herite:false},    
      ]
      let sideBarCS=[
                {name :'ConsulterProjetCS' , label: 'Projets de recherche soumis',herite:false},               
      ]
      let sideBarCL=[
                {name :'ConsulterProjetCL' , label: 'Projets de recherche soumis',herite:false},
      ]
      let sideBarMembre=[
                {name :'ProjetRecherche' , label: 'Projets de Recherche',herite:false},                
                {name :'CreationEquipe' , label: 'Créer Equipe',herite:false},
                {name :'ConsulterEquipe' , label: 'Equipe de Projet',herite:false},
                {name :'SoumettreProjet' , label: 'Soumission De Projet',herite:false},                
                {name :'Actuel' , label: 'Projet Actual',herite:false},
                {name :'Consulter' , label: 'Consulter Les Decisions',herite:true},                
                {name :'Contrat' , label: 'Contrats',herite:true},
                {name :'FicheProjet' , label: 'Fiches De Projet',herite:true},
                {name :'Bilan' , label: 'Bilans De Projet',herite:true},                  
      ]
      if (user.role==="dpgr") {
            sideBarDPGR.forEach(element => {
             this.sideBar.push(element) 
            });
      } else if (user.role==="CS") {
            sideBarCS.forEach(element => {
              this.sideBar.push(element) 
            });
        }else if (user.role==="CL") {
            sideBarCL.forEach(element => {
              this.sideBar.push(element) 
            });
        }else if (user.role==="membre") {
            sideBarMembre.forEach(element => {
              this.sideBar.push(element) 
            });        
        }
        this.sideBar.push({name :'Consulterpublications'  , label: 'Publications',herite:false})
    }      
    
    ,
    components: {
        WelcomeHeader,
        WelcomeSidebar,
    }
};
</script>

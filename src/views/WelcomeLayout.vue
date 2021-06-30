<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">
            <welcome-sidebar :sideBar="sideBar"/>
            <div
                class="w-full bg-white   lg:ml-72 lg:mr-1 min-h-screen"
                :class="sideBarOpen ? 'overlay' : ''"
                id="main-content"
            >
                <welcome-header class="sticky top-0 z-50" />

                <div class=" bg-white mb-6">
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
            sideBar : [
                {name :'Consulterpublications'  , label: 'Consulter Publication',herite:false},
            ]
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
                {name :'ConsulterProjetCS' , label: 'Consulter ProjetsCS',herite:false},               
      ]
      let sideBarCL=[
                {name :'ConsulterProjetCL' , label: 'Consulter ProjetsCL',herite:false},
      ]
      let sideBarMembre=[
                {name :'CreationEquipe' , label: 'Creer Equipe',herite:false},
                {name :'ConsulterEquipe' , label: 'Consulter Equipe',herite:false},
                {name :'ProjetRecherche' , label: 'Projet Recherche',herite:false},
                {name :'Actuel' , label: 'Projet Actual',herite:false},
                {name :'Bilan' , label: 'Bilans De Projet',herite:true},
                {name :'Contrat' , label: 'Contrat',herite:true},
                {name :'SoumettreProjet' , label: 'Soumission De Projet',herite:true},
                {name :'FicheProjet' , label: 'Fiche De Projet',herite:true},
                {name :'Consulter' , label: 'Consulter Les Decisions',herite:true},
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
    }      
    
    ,
    components: {
        WelcomeHeader,
        WelcomeSidebar,
    }
};
</script>

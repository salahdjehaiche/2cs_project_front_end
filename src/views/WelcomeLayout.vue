<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">
            <welcome-sidebar :sideBar="sideBar"/>
            <div
                class="w-full bg-white pl-0 lg:pl-64 min-h-screen"
                :class="sideBarOpen ? 'overlay' : ''"
                id="main-content"
            >
                <welcome-header />

                <div class="p-3 bg-white mb-6">
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
export default {
    name: "Intranet-2a",
    computed: {
        ...mapState(["sideBarOpen"])
    },
    data(){
        return{
            sideBar : [
                //from data base 
                {name :'GestionUtilisateur' , label: 'Gestion Utilisateur',herite:false},
                {name :'ConsulterProjetDPGR' , label: 'Consulter Projet',herite:false},
                {name :'ConsulterProjetCS' , label: 'Consulter ProjetCS',herite:false},
                {name :'ConsulterProjetCL' , label: 'Consulter ProjetCL',herite:false},
                {name :'AffecterLesDelais' , label: 'Affecter Les Delais',herite:false},
                {name :'Consulterpublication' , label: 'Consulter Publication',herite:false},
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
        }
    }
    ,
    components: {
        WelcomeHeader,
        WelcomeSidebar,
    }
};
</script>

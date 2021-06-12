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
                {name :'GestionUtilisateur' , label: 'Gestion Utilisateur'},
                {name :'ConsulterProjetDPGR' , label: 'Consulter Projet'},
                {name :'AffecterLesDelais' , label: 'Affecter Les Delais'},
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

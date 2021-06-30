<template>
  <WelcomeLayout>
    <MainHeader :titre="'Créer Contrat'" >

          <router-link :to="{path : '/actuel'}" class="text-blue-500   hover:text-blue-800 hover:font-bold">Projet Actuel</router-link> 
          <span class="text-grey-dark text-center font-bold"> > </span>
          <router-link :to="{path : '/actuel/contrat'}" class="text-blue-500   hover:text-blue-800 hover:font-bold">Contrat</router-link>
           <span class="text-grey-dark text-center font-bold"> > </span>
    </MainHeader>
    <main class="bg-white">
       <FormulaireContrat :button="'Valider'" />
    </main>
  </WelcomeLayout>
</template>
<script>
import MainHeader from '../../../components/mainHeader.vue';
import WelcomeLayout from '../../WelcomeLayout.vue';
import FormulaireContrat from './FormulaireContrat.vue';
export default {
  components: {
    WelcomeLayout,
    MainHeader,
    FormulaireContrat,
  },
  data(){
    return {
      titre:'',
      date:'',
      detail:'',
      file:null
    }
  },
  methods:{
    saveContrat(){
      console.log(this.titre,this.date,this.detail)
    },
  }
};
</script>

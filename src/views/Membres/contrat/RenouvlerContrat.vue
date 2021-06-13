<template>
  <welcome-layout>
    <MainHeader :titre="'Renouvler Contrat'" >
          <router-link :to="{path : '/actuel'}" class="text-blue-800   hover:text-blue-500 hover:font-bold">Projet Actuel</router-link> 
          <span class="text-grey-dark text-center font-bold"> > </span>
          <router-link :to="{path : '/actuel/contrat'}" class="text-blue-800   hover:text-blue-500 hover:font-bold">Contrat</router-link>
           <span class="text-grey-dark text-center font-bold"> > </span>
    </MainHeader>
    <main class="bg-white">
       <FormulaireContrat :button="'Renouvler'" />
    </main>
  </welcome-layout>
</template>
<script>
import FormulaireContrat from './FormulaireContrat.vue';
import WelcomeLayout from "./../../WelcomeLayout";
import MainHeader from '../../../components/mainHeader.vue';
export default {
  components: {
    WelcomeLayout,
    FormulaireContrat,
    MainHeader,
  },
};
</script>

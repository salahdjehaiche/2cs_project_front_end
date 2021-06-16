<template>
  <welcome-layout>
       <MainHeader :titre="'Détail Contrat'" >

          <router-link :to="{path : '/actuel'}" class="text-blue-500   hover:text-blue-800 hover:font-bold">Projet Actuel</router-link> 
          <span class="text-grey-dark text-center font-bold"> > </span>
          <router-link :to="{path : '/actuel/contrat'}" class="text-blue-500   hover:text-blue-800 hover:font-bold">Contrat</router-link>
           <span class="text-grey-dark text-center font-bold"> > </span>
    </MainHeader>
    
    <main class="bg-white">
       <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
         
      </div>
    </main>
  </welcome-layout>
</template>
<script>
import MainHeader from '../../../components/mainHeader.vue'
import WelcomeLayout from "./../../WelcomeLayout";
export default {
  components: {
    WelcomeLayout,
    MainHeader
  },
};
</script>

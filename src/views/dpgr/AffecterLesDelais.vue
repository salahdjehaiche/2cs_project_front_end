<template>
    <WelcomeLayout >     
      <MainHeader :titre="'C\'est la page d\'affectation des delais '" />    
      <main class="bg-white my-9 h-screen">
        <div class=" m-3 px-6 pb-2 justify-between bg-white w-full shadow-xl sm:rounded-lg">
          <p class="text-grey-800 sm:text-left text-lg text-center  font-bold mr-3 block">Soummission</p>
          <div class="px-2 py-4 text-md md:flex md:items-start block">
            <div class="mr-3 mt-4 md:mt-auto">
              <p class="text-grey-800 font-bold mr-3 text-left block">Date Debut</p>
            </div>
            <div class="w-full text-sm mx-4 md:text-left md:w-1/5 block">
              <datepicker v-model="date_debut" 
              class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <div class="mr-3 mt-4 md:mt-auto">
              <p class="text-grey-800 font-bold mr-3 text-left block">Date Fin</p>
            </div>
            <div class="w-full text-sm mx-4 md:text-left md:w-1/5 block">
              <datepicker v-model="date_fin"  
              class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <div class="ml-20 ">
              <button @click="saveDates"
                class="ml-3 px-3 sm:text-sm border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600  hover:bg-blue-700 hover:text-white
                     focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-none focus:ring-opacity-50 " >
                Affecter Dates
              </button>
            </div>
          </div>      
        </div>
      </main>
    </WelcomeLayout>
</template>

<script>

import WelcomeLayout from '../WelcomeLayout.vue'
import MainHeader from '../../components/mainHeader.vue'
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
const picked = ref(new Date())

export default {
  name: 'AffecterLesDelais ',
  components: {
    WelcomeLayout,
    Datepicker,
    MainHeader
  },
  data(){
    return{
      date_debut : new Date(),
      date_fin : new Date(),
    }
  },
  methods:{
    saveDates(){
      console.log(this.date_debut)
    },
    endDate(){
      console.log(this.date_fin)
    },
  },
  watch: { date_debut : (value) => console.log(value), },
  watch: { date_fin   : (value) => console.log(value), },
  }


</script>
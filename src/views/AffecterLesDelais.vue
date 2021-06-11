<template>
    <WelcomeLayout >
      <header class="bg-gray-100 shadow rounded-full"> 
        <div class="max-w-7xl bg-blue-200 mx-auto py-4 px-4 sm:px-6 lg:px-8 rounded-full">
          <h1 class="text-2xl font-bold leading-tight text-gray-900">
              C'est la page d'affectation des delais 
          </h1>
        </div>
      </header>
      <main class="bg-white my-9 h-screen">
        <div class=" m-3 px-6 pb-2 justify-between bg-white w-full shadow-xl sm:rounded-lg">
          <p class="text-grey-800 text-left text-lg  font-bold mr-3 block">Soumettre</p>
          <div class="text-left px-2 py-4 text-md flex items-start">
            <div class="mr-3">
              <p class="text-grey-800 font-bold mr-3 block">Date Debut</p>
            </div>
            <div class="w-1/5 text-sm mr-20">
              <datepicker v-model="data_debut" v-on:selected="startDate" 
              class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <div class="mr-3">
              <p class="text-grey-800 font-bold mr-3 block">Date Fin</p>
            </div>
            <div class="w-1/5 text-sm">
              <datepicker v-model="data_fin" v-on:selected="endDate" 
              class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <div class="ml-20 text-left">
              <button @click="filterUsers"
                class="ml-3 px-3  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600  hover:bg-blue-700 hover:text-white
                     focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-none focus:ring-opacity-50 " >
                Affecter
              </button>
            </div>
          </div>      
        </div>
      </main>
    </WelcomeLayout>
</template>

<script>

import WelcomeLayout from './WelcomeLayout.vue'
// @ is an alias to /src
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
const picked = ref(new Date())

export default {
  name: 'AffecterLesDelais ',
  components: {
    WelcomeLayout,
Datepicker
  },
  data(){
    return{
      data_debut : new Date(),
      data_fin : new Date(),
    }
  },
  methods:{
    startDate(){
      console.log(this.data_debut)
    },
    endDate(){
      console.log(this.data_fin)
    },
  },
  updated(){
          console.log(this.data_debut)

  }

}

</script>

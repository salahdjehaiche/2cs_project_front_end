<template>
    <p class="text-grey-800 sm:text-left text-lg text-center  font-bold mr-3 block">{{type}}</p>
    <div class="px-2 py-4 text-md md:flex md:items-start block">
        <div class="mr-3 mt-4 md:my-auto md:w-1/5">
            <p class="text-grey-800 font-bold mr-3  md:text-right block">Date Debut</p>
        </div>
        <div class="w-full text-sm mr-4 md:text-left md:my-auto md:w-1/5 block ">
             <input type="date" required v-model="date_debut" 
                class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" />
        </div>
        <div class="mr-3 mt-4 md:my-auto md:w-1/5 md:text-right">
            <p class="text-grey-800 font-bold mr-3   block">Date Fin</p>
        </div>
        <div class="w-full text-sm mr-4 md:text-left md:my-auto md:w-1/5 block">
             <input type="date" required v-model="date_fin"  
                class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" />
        </div>
        <div class="ml-20 md:w-1/5 ">
            <button @click="saveDates"
                class="ml-3 px-3 sm:text-sm border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600  hover:bg-blue-700 hover:text-white
                    focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-none focus:ring-opacity-50 " >
            Affecter Dates
            </button>
        </div>
    </div>      
</template>

<script>

export default {

props : ['type'],
data(){
    return{      
      date_debut : '',
      date_fin : '',
    }
  },
  methods:{
    saveDates(){
      if (this.date_debut==='' || this.date_fin===''){
        console.log('remplir les dates')
      }else if(this.date_fin <= this.date_debut){
        console.log(' erruer :la date debut >= date_fin')
      }else {
        console.log('affecter la date')
        this.date_debut=''
        this.date_fin=''
      }
    },
  },

}
</script>

<style>

</style>
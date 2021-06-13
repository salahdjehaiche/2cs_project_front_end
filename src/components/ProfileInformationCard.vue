<template>
   <div
        class="md:col-span-3 md:border-r border-gray-300 px-3 sm:px-2"
        >
        <div class="px-4 sm:px-0">
            <div class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
            <div
                class="w-full h-10 px-6 pb-1 flex items-center justify-between"
            >
                <div
                class="text-left px-2 py-1 text-xl flex items-center"
                >
                <p class="text-grey-800 font-bold">
                    Information sur le profile
                </p>
                </div>
            </div>
            <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6" v-for="information in profileInformations" :key="information">
                <div class="col-span-6 sm:col-span-6">
                    <label
                    for="nom"
                    class="block text-sm font-medium text-black text-left text-md mb-3"
                    >{{information.label}} :</label
                    >
                </div>

                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['id_equipe'],
  data(){
      return{ 
 
     profileInformations:[
          {label:'Nom',information:''},
          {label:'Prénom',information:''},
          {label:'Filière',information:''},
          {label:'Spécialité',information:''},
          {label:'équipe',information:''},
    
    
        ],
      }
  }
}
</script>

<style>

</style>
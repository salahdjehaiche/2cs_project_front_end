<template>
<WelcomeLayout>
    <MainHeader :titre="'Publication'" >
        <router-link :to="{path : '/Consulterpublications'}"
        class="text-blue-500 hover:text-blue-800 hover:font-bold"
        >  Consulter Publication  {{id}}
        </router-link>
        <span class="text-grey-dark text-center font-bold">> </span>
    </MainHeader>
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div
              class="md:grid md:grid-cols-4 md:gap-6 py-2 sm:px-3 lg:px-4 bg-white rounded-md"
            >
              <div class="md:col-span-3 md:border-r border-gray-300 px-3 sm:px-2">
                   
                <div class="px-4 sm:px-0">
                  <div class="px-2 py-2 sm:px-0">
                  <div class="border border-grey-light  lg:border lg:border-grey-light  bg-white  rounded  lg:rounded  p-2  flex flex-col  justify-between  leading-normal">
                    <div  class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                      <div  class=" w-full h-8 px-1 pb-1  items-center justify-between  ">
                        <div  class="text-center px-2 py-1 text-md  items-center">
                          <p class="text-grey-800 font-bold">Information de Publication</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-6 sm:col-span-6 flex items-center justify-start">
                        <div class=" text-left block text-sm font-bold text-black flex items-center m-3  ">
                            <label for="nom" class="block text-lg  text-black text-left mb-3">
                               Intitulé de Publication: 
                            </label>
                        </div>
                        <div class=" text-left px-1 block break-all text-sm font-medium text-black flex items-center  ">
                            <label  for="nom" class="block text-lg font-medium text-black text-left  mb-3">
                                {{intitule}}
                            </label>                         
                        </div>
                    </div>
                     <div class="col-span-6 sm:col-span-6 flex items-center justify-start">
                        <div class=" text-left block text-sm font-bold text-black flex items-center m-3  ">
                            <label for="nom" class="block text-lg  text-black text-left mb-3">
                               Type de Publication: 
                            </label>
                        </div>
                        <div class=" text-left px-1 block break-all text-sm font-medium text-black flex items-center  ">
                            <label  for="nom" class="block text-lg font-medium text-black text-left  mb-3">
                                {{type}}
                            </label>                         
                        </div>
                    </div>
                    <div class=" items-center">
                        <div class=" text-left block text-sm font-bold text-black flex items-center m-3  ">
                            <label for="nom" class="block text-lg  text-black text-left mb-3">
                                Collaborateurs: 
                            </label>
                        </div>
                        <div v-for="collab in collaborateurs" :key="collab"
                        class="ml-6 text-left px-1 block break-all text-sm font-medium text-black flex items-center  ">
                            <router-link :to="{name : 'Consulterprofile' ,params: {user:collab.nom +' '+ collab.prenom}}"  class="text-grey-dark text-center">
                                <label  for="nom" class="  block text-lg font-medium text-black text-left  mb-3">
                                    - {{collab.nom}} 
                                </label>                         
                            </router-link>
                        </div>
                    </div>

                     <div class=" items-center">
                        <div class=" text-left block text-sm font-bold text-black flex items-center m-3  ">
                            <label for="nom" class="block text-lg  text-black text-left mb-3">
                               Autre Collaborateurs: 
                            </label>
                        </div>
                        <div v-for="collab in Autrecollaborateurs" :key="collab"
                        class="ml-6 text-left px-1 block break-all text-sm font-medium text-black flex items-center  ">
                                <label  for="nom" class=" block text-lg font-medium text-black text-left  mb-3">
                                    - {{collab.nom}}
                                </label>                         
                        </div>
                    </div>
                    <div class=" items-center">
                        <div class=" text-left block text-sm font-bold text-black flex items-center m-3  ">
                            <label for="nom" class="block text-lg  text-black text-left mb-3">
                               Details: 
                            </label>
                        </div>
                        <div 
                        class="ml-6 text-left px-1 block break-all text-sm font-medium text-black flex items-center  ">
                                <label  for="nom" class=" block text-lg font-medium text-black text-left  mb-3">
                                  {{detail}} 
                                </label>                         
                        </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div class="md:col-span-1 md:border-r border-gray-300 px-2 sm:px-1" >
                <!-----Delais de soumission---->
                <div class="px-2 py-2 sm:px-0">
                  <div class="border border-grey-light  lg:border lg:border-grey-light  bg-white  rounded  lg:rounded  p-2  flex flex-col  justify-between  leading-normal">
                    <div  class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                      <div  class=" w-full h-8 px-1 pb-1  items-center justify-between  ">
                        <div  class="text-center px-2 py-1 text-md  items-center">
                          <p class="text-grey-800 font-bold">Date de Publication</p>
                        </div>
                      </div>
                    </div>
                    <div class=" items-center">
                      <div class="py-2  items-center">
                         <label for="nom" class="block text-sm italic text-black text-center ">
                                {{dates }}
                          </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
</WelcomeLayout>
<!--

   <div class="backdrop  " @click.self="closemodal" > 
     
        <div class="w-2/2  p-4  md:w-2/4 card" v-if="supprimer">
                <div class="w-full mx-auto px-auto sm:px-6 lg:px-8 lg:py-8 bg-white rounded-lg ">
                <label class="mx-auto px-3 py-4 text-lg  block">
                    <span class="text-grey-800  mr-3 ">Are you sure you want to download this publication ?</span>
                 </label>
                <button @click="confirmer"
                        class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  my-2 bg-green-500 hover:bg-red-600 
                        focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none focus:ring-opacity-50" >
                        <div class="flex items-center">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            <h3>download</h3>
                        </div>
                </button>
                <button @click="closemodal"
                        class="py-2 ml-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  my-2 bg-gray-500 hover:bg-gray-600 
                        focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-opacity-50" >
                        <div class="flex items-center">
                            <svg  class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3> Annuler</h3>
                        </div>
                </button>
            </div>
            
        </div>
           <div class="w-2/4 mx-60" v-if="see">
                
            
        </div>
    </div>-->
</template>

<script>
import MainHeader from '../../components/mainHeader.vue'
import WelcomeLayout from "../WelcomeLayout.vue";
export default {
  components: {
    WelcomeLayout,
    MainHeader
  },
    props: ['intitule','type','date','detail','collabs','extcollab'], 
    data(){
        return{ 
            collaborateurs:[],
            Autrecollaborateurs:[],
            dates: ''
        }
    },
    methods:{
        
    },
    mounted(){
      const coll = this.collabs.split (',')
      const othercollab= this.extcollab.split(',')
      for (const col in coll){
        if (coll[col] != '')
          {this.collaborateurs.push( {nom : coll[col]})}
      }
       for (const col in othercollab){
        if (othercollab[col] != '')
          {this.Autrecollaborateurs.push( {nom : othercollab[col]})}
      }
      this.dates= this.date.substring(0,10)
    }
}
</script>

<style>
.backdrop{
    top: 0;
    position: fixed;
    background: rgb(0, 0, 0,0.5);
    width: 100%;
    height: 100%;
}
</style>
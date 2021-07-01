<template>
<WelcomeLayout>
   <MainHeader :titre="'Projet de recherche d\'Equipe '+id" >
          <router-link :to="{path : '/consulterprojet/'+user}"
            class="text-blue-500 hover:text-blue-800 hover:font-bold"
            >Consulter Projet
            </router-link>
            <span class="text-grey-dark text-center font-bold">> </span>
   </MainHeader>            
        
    <main class="bg-white">

      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full max-w-7xl mx-auto py-2 sm:px-6 lg:px-2">
            <div
              class="md:grid md:grid-cols-4 md:gap-6 py-2 sm:px-3 lg:px-4 bg-white rounded-md"
            >
              <ProjetInformationCard :id_equipe="id" />   
             <div class="md:col-span-1 md:border-r border-gray-300 px-2 sm:px-1" >              
                 <!-----Delais de soumission---->
                <div class="px-2 py-2 sm:px-0">
                  <div class="border border-grey-light  lg:border lg:border-grey-light  bg-white  rounded  lg:rounded  p-2  flex flex-col  justify-between  leading-normal">
                    <div  class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                      <div  class=" w-full h-8 px-1 pb-1  items-center justify-between  ">
                        <div  class="text-center px-2 py-1 text-md  items-center">
                          <p class="text-grey-800 font-bold">Delais de validation</p>
                        </div>
                      </div>
                    </div>
                    <div class=" items-center">
                      <div class="py-2  items-center">
                         <label for="nom" class="block text-sm italic text-black text-center ">
                                {{dateFinvalidation}}
                          </label>
                      </div>
                    </div>
                  </div>
                </div>         
                <MembresEquipeCard   :id_equipe="id"/>
                <div class="px-2 py-2 sm:px-0" v-if="user=='dpgr'">
                  <div class="border border-grey-light  lg:border lg:border-grey-light  bg-white  rounded  lg:rounded  p-2  flex flex-col  justify-between  leading-normal">
                    <div  class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                      <div  class=" w-full h-8 px-1 pb-1  items-center justify-between  ">
                        <div  class="text-center px-2 py-1 text-md  items-center">
                          <p class="text-grey-800 font-bold">Bilans du projet</p>
                        </div>
                      </div>
                    </div>
                    <div class=" items-center">
                      <div class="py-2  items-center ">
                        
                          <button type="button"
                            class="  py-1  px-2  border border-transparent  shadow-sm  text-sm  font-medium  rounded-md  text-white  bg-blue-400  hover:bg-blue-500"
                          >
                            Consulter 
                          </button>                        
                      </div>
                    </div>
                  </div>
                </div>
             </div>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" v-if="user === 'dpgr'">
           <div class="w-full h-15 px-6 pb-2 flex items-center justify-start">
              <div class="w-1/6 text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 font-bold">Décision CS :</p>
              </div>
              <div class="w-5/6 text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 ">{{decisionsCS}}</p>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" v-if="user=== 'cs' || user==='dpgr'">
            <div class="w-full h-15 px-6 pb-2 flex items-center justify-start">
              <div class="w-1/6 text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 font-bold">Décision CL :</p>
              </div>
              <div class="w-5/6 text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 ">{{decisionsCL}}</p>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" >
            <div class="w-full h-15 px-6 pb-2 flex items-center justify-start">
              <div class=" w-1/5 text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 font-bold"  v-if="user != 'dpgr'">Votre décision:</p>
                <p class="text-grey-800 font-bold"  v-if="user === 'dpgr'" >Décision Expert:</p>                
              </div>
              <div class=" w-4/5 text-left px-2 py-4 text-md break-all flex items-center">
                <p class="text-grey-800 ">  {{votreDecision}}</p>
              </div>
            </div>
            <div
              class="w-full h-15  flex items-center justify-between"
            >
           
              <div
                class="text-left px-2 py-4 text-xl flex items-center justify-between"
              >
                <div class="px-4 pb-2 flex items-center">
                   <button @click="showmodalAcc"
                    class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    <div class="flex items-center">
                      <h3 v-if="user != 'dpgr'">Accepter</h3>
                      <h3 v-if="user === 'dpgr'">Avis favorable</h3>
                    </div>
                  </button>                 
                </div>
                <div class="px-4 pb-2 flex items-center">
                   <button @click="showmodalRef"
                    class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    <div class="flex items-center">
                      <h3 v-if="user != 'dpgr'">Refuser</h3>
                      <h3 v-if="user === 'dpgr'">Avis défavorable</h3>
                    </div>
                  </button>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>          



</WelcomeLayout>   
<div v-if="modal1">
  <CommenterProjet  @close="showmodal" :text="action"/>
</div> 
</template>

<script>
import MembresEquipeCard from '../../components/MembresEquipeCard.vue'
import CommenterProjet from '../../components/CommenterProjet.vue'
import ProjetInformationCard from '../../components/ProjetInformationCard.vue'
import WelcomeLayout from '../WelcomeLayout.vue'
import MainHeader from '../../components/mainHeader.vue'
export default {
  props :['id','user'],
  components: { WelcomeLayout,MembresEquipeCard, ProjetInformationCard,CommenterProjet, MainHeader  },
  data(){
      return{ 
        modal1:false,
        action:'',
        dateFinvalidation:'31/12/2021',       
        decisionsCL:'--' ,
        decisionsCS:'--' ,            
        votreDecision:'--',
      }
  }
  ,
methods:{

    back(){
      this.$router.go(-1)
    },
    showmodal(){
      this.modal1=!this.modal1
    },
     showmodalRef(){
      this.action='Refuser le Projet'
      this.modal1=!this.modal1
    },
     showmodalAcc(){
       this.action='Accepter le Projet'
      this.modal1=!this.modal1
    }
  }
}
</script>

<style>

</style>
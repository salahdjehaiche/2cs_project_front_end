<template>
<WelcomeLayout>
   <header class="bg-blue-100 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-left">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
          <router-link :to="{path : '/consulterprojet/'+user}"
            class="text-blue-800 hover:text-blue-500 hover:font-bold"
            >Consulter Projet
            </router-link>
            <span class="text-grey-dark text-center font-bold">> </span>
            Projet de recherche d'Equipe {{id}}
        </h1>
      </div>
    </header>
    <main class="bg-white">

      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full max-w-7xl mx-auto py-2 sm:px-6 lg:px-2">
            <div
              class="md:grid md:grid-cols-4 md:gap-6 py-2 sm:px-3 lg:px-4 bg-white rounded-md"
            >
              <ProjetInformationCard :id_equipe="id" />
              <MembresEquipeCard   :id_equipe="id"/>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" v-if="user === 'dpgr'">
            <div>
                <div v-for="decision in decisions" :key="decision"
                    class="w-full h-15 px-6 pb-2 flex items-center justify-start">
                    <div class="text-left px-2 py-4 text-xl flex items-center">
                        <p class="text-grey-800 font-bold">Décision {{decision.conseil}} :</p>
                    </div>
                    <div class="text-left px-2 py-4 text-xl flex items-center">
                        <p class="text-grey-800 font-bold">{{decision.pointVue}}</p>
                    </div>
                </div>
            </div>    
              <div 
                class="px-2 py-4 text-xl text-right justify-between"
              >
                <div class="px-6 pb-2 ">
                  <div class="telecherger">
                    <button @click="showmodal"
                      id="btn"
                      class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600
                      hover:bg-blue-600"
                    >
                      <div class="flex items-center">
                        <h3>Telecherger</h3>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
          </div>

          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" v-if="user=== 'cs'">
            <div class="w-full h-15 px-6 pb-2 flex items-center justify-start">
              <div class="text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 font-bold">Décision CL :</p>
              </div>
              <div class="text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 font-bold">--</p>
              </div>
            </div>
            <div
              class="w-full h-15 px-6 pb-2 flex items-center justify-between"
            >
              <div class="text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 font-bold">Votre décision :</p>
              </div>
              <div
                class="text-left px-2 py-4 text-xl flex items-center justify-between"
              >
                <div class="px-6 pb-2 flex items-center">
                   <button @click="showmodalAcc"
                    class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    <div class="flex items-center">
                      <h3>Accepter</h3>
                    </div>
                  </button>                 
                </div>
                <div class="px-6 pb-2 flex items-center">
                   <button @click="showmodalRef"
                    class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    <div class="flex items-center">
                      <h3>Refuser</h3>
                    </div>
                  </button>                  
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" v-if="user=== 'cl'">
            <div
              class="w-full h-15 px-6 pb-2 flex items-center justify-between"
            >
              <div class="text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 font-bold">Votre décision :</p>
              </div>
              <div
                class="text-left px-2 py-4 text-xl flex items-center justify-between"
              >
                <div class="px-6 pb-2 flex items-center">
                   <button @click="showmodalAcc"
                    class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    <div class="flex items-center">
                      <h3>Accepter</h3>
                    </div>
                  </button>                 
                </div>
                <div class="px-6 pb-2 flex items-center">
                   <button @click="showmodalRef"
                    class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    <div class="flex items-center">
                      <h3>Refuser</h3>
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
export default {
  props :['id','user'],
  components: { WelcomeLayout,MembresEquipeCard, ProjetInformationCard,CommenterProjet  },
  data(){
      return{ 
        modal1:false,
        action:'',
        decisions:[
            {conseil:'CL ',pointVue:'--' },
            {conseil:'CS ',pointVue:'--' },
        ],
      }
  },
  mounted(){
      console.log(this.id)
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
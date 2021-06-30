<template>
<WelcomeLayout>
   <MainHeader :titre="'Consuler profile de '+user" >
            <span class="text-grey-dark text-center font-bold">  
               <a class="text-blue-500 hover:text-blue-800 hover:font-bold flex " @click="$router.go(-1)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
              </a>         
            </span>
        
   </MainHeader>

    <main class="bg-white">

      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full max-w-7xl mx-auto py-2 sm:px-6 lg:px-2">
            <div
              class="md:grid md:grid-cols-4 md:gap-6 py-2 sm:px-3 lg:px-4 bg-white rounded-md"
            >
              <ProfileInformationCard :id_equipe="id" />
              <MembresEquipeCard   :id_equipe="id"/>
            </div>
          </div>    
        </div>
      </div>
    </main>



</WelcomeLayout>

</template>

<script>
import MembresEquipeCard from '../../components/MembresEquipeCard.vue'
import ProfileInformationCard from '../../components/ProfileInformationCard.vue'
import WelcomeLayout from '../WelcomeLayout.vue'
import MainHeader from '../../components/mainHeader.vue'
export default {
  props :['user'],
  components: { WelcomeLayout,MembresEquipeCard,ProfileInformationCard, MainHeader  },
  data(){
      return{
       id:'1'
      }
  },
  mounted(){
      console.log(this.user)
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

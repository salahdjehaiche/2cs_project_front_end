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
           <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full max-w-7xl mx-auto py-2 sm:px-6 lg:px-2">
            <div
              class="md:grid md:grid-cols-4 md:gap-6 py-2 sm:px-3 lg:px-4 bg-white rounded-md"
            >
              <div
                class="md:col-span-4  px-3 sm:px-2"
              >
                <div class="px-4 sm:px-0">
                  <div class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                    <div class="   w-full   h-10   px-3   pb-1   flex   items-center   justify-between ">
                      <div class="text-left px-2 py-1 text-xl flex items-center">
                        <p class="text-grey-800 font-bold">
                          Information sur le contrat
                        </p>
                      </div>
                    </div>
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div  class=" col-span-6 sm:col-span-6 flex items-center justify-start  ">
                          <div
                            class=" text-left block text-sm font-bold text-black flex items-center  ">
                            Titre de contrat :
                          </div>
                          <div  class=" text-left px-1 block text-sm font-medium text-black flex items-center  ">
                           {{title}}
                          </div>
                        </div>
                        <div
                          class="
                            col-span-6
                            sm:col-span-6
                            flex
                            items-center
                            justify-start
                          "
                        >
                          <div
                            class="
                              text-left
                              block
                              text-sm
                              font-bold
                              text-black
                              flex
                              items-center
                            "
                          >
                            Date de signature :
                          </div>
                          <div
                            class="
                              text-left
                              px-1
                              block
                              text-sm
                              font-medium
                              text-black
                              flex
                              items-center
                            "
                          >
                          {{date_sign}}
                          </div>
                        </div>
                        <div
                          class="
                            col-span-6
                            sm:col-span-6
                            flex
                            items-center
                            justify-start
                          "
                        >
                          <div
                            class="
                              text-left
                              block
                              text-sm
                              font-bold
                              text-black
                              flex
                              items-center
                            "
                          >
                            Date de renouvelement :
                          </div>
                          <div
                            class="
                              text-left
                              px-1
                              block
                              text-sm
                              font-medium
                              text-black
                              flex
                              items-center
                            "
                          >
                          {{date_ren}}
                          </div>
                        </div>
                        <div
                          class="
                            col-span-6
                            sm:col-span-6
                            flex
                            items-center
                            justify-start
                          "
                        >
                          <div
                            class="
                              text-left
                              block
                              text-sm
                              font-bold
                              text-black
                              flex
                              items-center
                            "
                          >
                            Détail:
                          </div>
                          
                        </div>
                        <div
                          class="
                            col-span-6
                            sm:col-span-6
                            flex
                            items-center
                            justify-start
                          "
                        >
                          <div
                            class="
                              text-left
                              block
                              text-sm
                              font-medium
                              text-black
                              flex
                              items-center
                            "
                          >
                            {{detail}}
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  </welcome-layout>
</template>
<script>
import MainHeader from '../../../components/mainHeader.vue'
import WelcomeLayout from "./../../WelcomeLayout";
export default {
  props :['title','date_sign','date_ren','detail'],
  components: {
    WelcomeLayout,
    MainHeader
  },
   data() {
    return {
      Contrat:{ 
        title:this.title,
        date_sign:this.date_sign,
        date_ren:this.date_ren,
        detail: this.detail
         }
    };
  },
  mounted(){
    console.log(this.title)
  }
};
</script>

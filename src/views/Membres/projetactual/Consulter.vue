<template>
  <WelcomeLayout>
    <MainHeader :titre="'Décision des conseillers et experts'" >
            <router-link :to="{path : '/actuel'}"
            class="text-blue-500 hover:text-blue-800 hover:font-bold"
            >  Projet Actuel
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
              <div
                class="md:col-span-4  px-3 sm:px-2"
              >
                <div class="px-4 sm:px-0">
                  <div class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                    <div
                      class="
                        w-full
                        h-10
                        px-3
                        pb-1
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div
                        class="text-left px-2 py-1 text-xl flex items-center"
                      >
                        <p class="text-grey-800 font-bold">
                          Information sur les décisions concernant le projet
                        </p>
                      </div>
                    </div>
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div
                          class="
                            col-span-1
                            sm:col-span-1
                            flex
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
                              
                            "
                          >
                            Décision CL:
                          </div>
                          
                        </div>
                        <div
                          class="
                            col-span-5
                            sm:col-span-5
                            flex
                            items-center
                            justify-start
                          "
                        >
                        <div class="grid grid-cols-6 gap-6">
                            <div
                            class="
                            col-span-6
                            sm:col-span-6
                              text-left
                              px-1
                              block
                              text-sm
                              font-bold
                              text-black
                              flex
                              items-center
                            "
                          >
                            <span v-if="Decision.CL.Avis==true" class="px-2 inline-flex  leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Avis favorable
                            </span>
                            <span v-else class="px-2 inline-flex  leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Avis défavorable
                            </span>
                          </div>
                             <div
                            class="
                            col-span-6
                            sm:col-span-6
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
                           {{Decision.CL.comment}}
                          </div>
                        </div>    
                         
                          
                        </div>
                        <div
                          class="
                            col-span-1
                            sm:col-span-1
                            flex
                            
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
                             
                            "
                          >
                            Décision CS:
                          </div>
                          
                        </div>
                        <div
                          class="
                            col-span-5
                            sm:col-span-5
                            flex
                            items-center
                            justify-start
                          "
                        >
                        <div class="grid grid-cols-6 gap-6">
                            <div
                            class="
                            col-span-6
                            sm:col-span-6
                              text-left
                              px-1
                              block
                              text-sm
                              font-bold
                              text-black
                              flex
                              items-center
                            "
                          >
                          <span v-if="Decision.CS.Avis==true" class="px-2 inline-flex  leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Avis favorable
                            </span>
                            <span v-else class="px-2 inline-flex  leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Avis défavorable
                            </span>
                          </div>
                             <div
                            class="
                            col-span-6
                            sm:col-span-6
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
                           {{Decision.CS.comment}}
                          </div>
                        </div>    
                         
                          
                        </div>
                        <div
                          class="
                            col-span-1
                            sm:col-span-1
                            flex
                           
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
                           
                            "
                          >
                            Décision Experts:
                          </div>
                          
                        </div>
                        <div
                          class="
                            col-span-5
                            sm:col-span-5
                            flex
                            items-center
                            justify-start
                          "
                        >
                        <div class="grid grid-cols-6 gap-6">
                            <div
                            class="
                            col-span-6
                            sm:col-span-6
                              text-left
                              px-1
                              block
                              text-sm
                              font-bold
                              text-black
                              flex
                              items-center
                            "
                          >
                          <span v-if="Decision.EX.Avis==true" class="px-2 inline-flex  leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Avis favorable
                            </span>
                            <span v-else class="px-2 inline-flex  leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Avis défavorable
                            </span>
                          </div>
                             <div
                            class="
                            col-span-6
                            sm:col-span-6
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
                          {{Decision.EX.comment}}
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
      </div>
    </main>
  </WelcomeLayout>
</template>
<script>
import MainHeader from '../../../components/mainHeader.vue'
import WelcomeLayout from "../../WelcomeLayout.vue";
import axios from 'axios'

export default {
  props: ['id'],
  components: {
    WelcomeLayout,
    MainHeader
  },
  data() {
    return {
      Decision: {
        CL: {
            Avis:false,
            comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        CS: {
            Avis:false,
            comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        EX: {
            Avis:false,
            comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
      },
    }
  },
  mounted(){
            let token =localStorage.getItem('token') 
            const id_projet= localStorage.getItem('id_projet')
            axios.get('http://192.168.43.213:8000/v1/api/decisions/',{params : {id:id_projet},
            headers:{
                "Content-Type":"application/json", 
                'Authorization': 'Bearer '+token
                },
            }).then(response => {
            if (response.status==200){
              const commentCL=response.data.d_cl
              const commentCS=response.data.d_cs
              const commentexpert=response.data.d_expert
              const avis=response.data.avis
              this.Decision.CL.Avis= avis
              this.Decision.CL.comment= commentCL
              this.Decision.CS.Avis= avis
              this.Decision.CS.comment= commentCS
              this.Decision.EX.Avis= avis
              this.Decision.EX.comment= commentexpert

               console.log(response.data)
            }
            }).catch(err => console.log(err.message))
  }
}
</script>

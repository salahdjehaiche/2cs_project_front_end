<template>
  <WelcomeLayout>
    
    <MainHeader :titre="'Contrat'" >
            <router-link :to="{path : '/actuel'}"
            class="text-blue-500 hover:text-blue-800 hover:font-bold"
            >  Projet Actuel
            </router-link>
            <span class="text-grey-dark text-center font-bold">> </span>
      </MainHeader>
      <main class="bg-white">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div class="w-full h-15 px-6 pb-2 flex items-center justify-between">
              <div class="text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800 font-bold">Liste des Contrats</p>
              </div>
              <div
                          class="text-left px-2 py-1 text-xl flex items-center"
                        >
                          <div class="px-2 py-2 flex items-center">
                            <router-link :to="{name : 'CreationContrat'}">
                            <button class=" py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 "
                            >
                            <div class="flex items-center">                              
                              <svg  class="h-6 w-6 fill-current mr-2"  viewBox="0 0 20 20">
                                <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4 v4H9v-4H5V9h4V5h2v4h4V11z" />
                              </svg>
                              <h3>Ajouter</h3>
                            </div>
                            </button>
                            </router-link>                            
                          </div>
                        </div>
            </div>
          </div>
          <div class="flex flex-col py-4">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
              >
                <div
                  class="shadow overflow-hidden border-b border-blue-200 sm:rounded-lg"
                >
                  <table class="min-w-full divide-y divide-blue-200">
                    <thead>
                      <tr>
                        <th
                          class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Titre
                        </th>

                        <th
                          class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date signature
                        </th>

                        <th
                          class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date renouvelement
                        </th>
                        <th
                          class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                        >
                        Detail
                        </th>
                        <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                        >

                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
    
                      <tr v-for="tab in tableau" :key="tab">
                        <td class="px-6 py-2 whitespace-no-wrap">
                          <div class="text-sm font-bold leading-5  text-blue-600">
                            {{tab.titre}}
                          </div>
                        </td>
                        <td class="px-6 py-2 whitespace-no-wrap">
                          <div class="text-xs leading-5 text-gray-900 text-left"> {{tab.date_signature}} </div>
                        </td>
                        <td class="px-6 py-2 whitespace-no-wrap">
                          <div class="text-xs leading-5 text-gray-900 text-left">{{tab.date_renouvelement}}</div>
                        </td> 
                        <td class="px-6 py-2 whitespace-normal">
                        <div class="text-xs leading-5 text-gray-900">
                          <div class="px-2 py-2 flex items-center">
                          <router-link  :to="{name : 'RenouvlerContrat'}"
                              class="text-blue-800 hover:text-blue-500 hover:font-bold"
                            >
                          <button
                            class="
                              py-1
                              px-2
                              border border-transparent
                              shadow-sm
                              text-sm
                              font-medium
                              rounded-md
                              text-white
                              bg-orange-400
                              hover:bg-orange-500
                            "
                          >
                          <div class="flex items-center">
                            <h3>Renouveler</h3>
                          </div>
                          </button>
                          </router-link>

                        </div>
                        </div>
                      </td>                                 
                        <td class="px-6 py-4 whitespace-no-wrap">
                          <div class="text-xs leading-5 text-gray-900 text-left">
                            <router-link  :to="{name : 'DetailContrat' ,params:{id:1}}"
                              class="text-blue-500 hover:text-blue-800 hover:font-bold"
                            >
                              <svg
                                class="h-6 w-6 fill-current mr-2 text-green-700 cursor-pointer"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"
                                ></path>
                              </svg>
                            </router-link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
import WelcomeLayout from '../../WelcomeLayout.vue'
export default {
  components: {
    WelcomeLayout,
    MainHeader
  },
  data(){
    return{
      tableau:[
        {
          titre:'--',
          date_signature:'--',
          date_renouvelement:'--',
        }
      ]
    }
  }
};
</script>

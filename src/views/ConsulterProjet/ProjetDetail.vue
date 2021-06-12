<template>
<WelcomeLayout>
   <header class="bg-blue-100 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-left">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
          <router-link :to="{name : 'ConsulterProjetDPGR'}"
            class="text-blue-800 hover:text-blue-500 hover:font-bold"
            >Projet de recherche d'Equipe {{id}}
            </router-link>
            <span class="text-grey-dark text-center font-bold">> </span>
            Consulter Projet
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
                          Information sur le projet
                        </p>
                      </div>
                    </div>
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6" v-for="information in projectInformations" :key="information">
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
              <div class="md:col-span-1 px-3 sm:px-2">
                <div class="px-4 sm:px-0">
                  <div
                    class="border border-grey-light lg:border lg:border-grey-light bg-white rounded lg:rounded p-2 flex flex-col justify-between leading-normal"
                  >
                    <div class="mb-2">
                      <div class="text-black font-bold text-xl">Membres</div>
                    </div>
                    <div class="flex items-center">
                      <div class="text-sm">
                        <ul v-for="membre in membres" :key="membre">
                          <li class="flex items-center text-black py-2">
                            <svg
                              class="h-6 w-6 fill-current mr-2 text-blue-800"
                              viewBox="0 0 20 20"
                            >
                              <path fill="none" d="M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625"></path>
                            </svg>
                            <span class="text-grey-dark text-center"
                              >{{membre.nom}} {{membre.prenom}}</span
                            >
                          </li>                        
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
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
                  <button
                    onclick="document.getElementById('myModalAdd1').showModal()"
                    id="btn"
                    class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600
                     hover:bg-blue-600"
                  >
                    <div class="flex items-center">
                      <h3>Telecherger</h3>
                    </div>
                  </button>
                  <dialog
                    id="myModalAdd1"
                    class="h-auto w-11/12 md:w-1/2 p-5 bg-white rounded-md"
                  >
                    <div class="flex flex-col w-full h-auto">
                      <!-- Header -->
                      <div
                        class="flex w-full h-auto justify-between items-center"
                      >
                        <div
                          class="flex w-10/12 h-auto py-3 px-6 justify-start items-center text-2xl font-bold"
                        >
                          Accepter le Projet
                        </div>
                        <div
                          onclick="document.getElementById('myModalAdd1').close();"
                          class="flex w-1/12 h-auto justify-center cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-x"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                        <!--Header End-->
                      </div>
                      <!-- Modal Content-->
                      <div
                        class="flex w-full h-auto justify-center items-center rounded text-center text-gray-500"
                      >
                        <form>
                          <div class="overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-6">
                                  <label
                                    for="prenom"
                                    class="block text-sm font-medium text-black"
                                    >Commentaire</label
                                  >
                                  <textarea
                                    maxlength="300"
                                    name="feedback"
                                    id="feedback"
                                    rows="4"
                                    cols="80"
                                    class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                                    placeholder="Commentaire"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div
                              class="px-4 py-3 bg-gray-50 text-right sm:px-6"
                            >
                              <button
                                type="reset"
                                onclick="document.getElementById('myModalAdd1').close();"
                                class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500"
                              >
                                Annuler
                              </button>
                              <button
                                type="submit"
                                class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
                              >
                               Sauvegarder
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <!-- End of Modal Content-->
                    </div>
                  </dialog>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
</WelcomeLayout>    
</template>

<script>
import WelcomeLayout from '../WelcomeLayout.vue'
export default {
  props :['id'],
  components: { WelcomeLayout },
  data(){
      return{ 
        projectInformations:[
          {label:'Intitulé de projet',information:''},
          {label:'Domaine de recherche',information:''},
          {label:'Filière',information:''},
          {label:'Spécialité',information:''},
          {label:'Intitulé de la formation doctorale',information:''},
          {label:'Problématique',information:''},
          {label:'Mot clés',information:''},
          {label:'Objectifs',information:''},
          {label:'Méthodologie',information:''},
        ],
        membres:[
            {nom:'Djehaiche',prenom:'Salah'},
            {nom:'Debabza',prenom:'Idriss'},
            {nom:'Telli',prenom:'Mohamed Khoja'},
            {nom:'Haddad',prenom:'Zineddine'},
            {nom:'Kherroubi',prenom:'Oussama'},
        ],
        decisions:[
            {conseil:'CL ',pointVue:'--' },
            {conseil:'CS ',pointVue:'--' },
        ]
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
}
}
</script>

<style>

</style>
<template>
  <welcome-layout>
    <header class="bg-blue-100 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
         
          <span class="text-grey-dark text-center font-bold"></span>
          Modifier Profile
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
                class="md:col-span-4 md:border-r border-gray-300 px-3 sm:px-2"
              >
                <div class="px-4 sm:px-0">
                  <form>
                    <div class="overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Nom</label
                            >
                            <input
                              type="text"
                              name="nom"
                              id="nom"
                              placeholder="Nom"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="prenom"
                              class="block text-sm font-medium text-black"
                              >Prénoom</label
                            >
                            <input
                              type="text"
                              name="prenom"
                              id="prenom"
                              placeholder="prenom"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="email"
                              class="block text-sm font-medium text-black"
                              >Email</label
                            >
                            <input
                              type="text"
                              name="email"
                              id="email"
                              placeholder="email"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Spécialité</label
                            >
                            <input
                              type="text"
                              name="specialite"
                              id="specialite"
                              placeholder="Spécialité"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="niveau"
                              class="block text-sm font-medium text-black"
                              >Intitulé de la formation doctorale</label
                            >
                            <input
                              type="text"
                              name="niveauu"
                              id="niveau"
                              placeholder="Intitulé de la formation doctorale"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="file"
                              class="block text-sm font-medium text-black"
                              >Photo</label
                            >
                            <input
                              type="file"
                              name="file"
                              id="file"
                              placeholder="Selectionner"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                        </div>
                      </div>
                   
                      <!--colaborations-->
                      <div v-if="selectColab" id="colabs">
                          <div
                        class="bg-blue-50 overflow-hidden shadow sm:rounded-lg"
                      >
                        <div
                          class="w-full h-10 px-4 pb-1 flex items-center justify-between"
                        >
                          <div
                            class="text-left px-2 py-1 text-xl flex items-center"
                          >
                            <p class="text-grey-800 font-bold">
                              Collaborations
                            </p>
                          </div>
                        </div>
                      </div>
                      <div  v-for="(collaboration, index) in this.form.collaborations" v-bind:key="index" class="px-2 py-2 bg-white sm:p-6 border-b">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-6">
                            <label
                              class="block text-sm font-bold text-black"
                              >Collaborateur n° {{ index + 1 }}</label
                            >
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              :for="'etablissement-' + index"
                              class="block text-sm font-medium text-black"
                              >Etablissement </label
                            >
                            <input
                              type="text"
                              name="first_name"
                              id="nom"
                              placeholder="Etablissement"
                              autocomplete="given-name"
                              v-model="form.collaborations[index].etab"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Nom</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              id="nom"
                              placeholder="Nom"
                              autocomplete="given-name"
                              v-model="form.collaborations[index].nom"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Prénom</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              id="nom"
                              placeholder="Prénom"
                              v-model="form.collaborations[index].prenom"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Fonction</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              id="nom"
                              placeholder="Fonction"
                              v-model="form.collaborations[index].fonction"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-2">
                            <label
                              class="block text-sm font-medium text-black"
                              >Type de Collaboration</label
                            >
                            <select v-model="SelectPays"
                        @change="selectType" class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md " required="required" >
                              <option value="1">National</option>
                              <option value="2">International</option>
                            </select>
                          </div>
                          <div v-if="international" class="col-span-6 sm:col-span-2">
                            <label
                              class="block text-sm font-medium text-black"
                              >Pays</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              id="nom"
                              placeholder="Pays"
                              v-model="Alg"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-end">
                        <div
                            class="text-left px-2 py-1 text-xl flex items-center"
                          >
                          <button class="bg-green-500 hover:bg-green-700 text-white font-bold my-4 py-2 px-4 rounded" v-if="form.collaborations.length < 15" @click.prevent="add">
                        +
                       </button>
                        </div>
                         <div
                            class="text-left px-2 py-1 text-xl flex items-center"
                          >
                          <button class="bg-red-500 hover:bg-red-700 text-white font-bold my-3 py-2 px-4 rounded" v-if="form.collaborations.length > 1" @click.prevent="remove">
                        -
                    </button>
                        </div>   
                    
                      </div>
                      
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
                        <button
                          type="submit"
                          class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-blue-700"
                        >
                          <div class="flex items-center">
                            <svg
                              class="h-6 w-6 fill-current mr-2"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4
	v4H9v-4H5V9h4V5h2v4h4V11z"
                              />
                            </svg>
                            <h3>Valider les modifications</h3>
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
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
import WelcomeLayout from '../WelcomeLayout.vue'
export default {
  components: {
    WelcomeLayout,
  },
  data() {
            return {
                form: {
                    title: null,
                    description: null,
                    collaborations: [
                       // {etab: null, nom: null, prenom: null,fonction:null}
                    ]
                },
                SelectOption: "non",
                SelectPays: "1",
                selectColab:false,
                international:false,
            }
        },
        methods: {
            add() {
                this.form.collaborations.push({etab: null, nom: null, prenom: null,fonction:null,pays:"algérie"});
            },
            remove() {
                this.form.collaborations.pop();
            },
            selectAction(){
        if(this.SelectOption=="oui"){
           this.selectColab=true
        }else{
          this.selectColab=false
        }
    },
    selectType(){
        if(this.SelectPays=="2"){
           this.international=true
        }else{
          this.international=false
        }
    },
            
        }
};
</script>

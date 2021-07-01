<template>
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
                  <form @submit.prevent="sendProjet">
                    <div class="overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-left font-bold text-sm font-medium text-black"
                              >Intitulé de projet</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              v-model="projetInformation.title"
                              id="nom"                              
                              placeholder="Intitulé de projet"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Domaine de recherche</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              id="nom"
                              v-model="projetInformation.research_area"
                              placeholder="Domaine de recherche"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Filière</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              v-model="projetInformation.field"                              
                              id="nom"
                              placeholder="Filière"
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
                              name="first_name"
                              v-model="projetInformation.speciality"
                              id="nom"
                              placeholder="Spécialité"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Intitulé de la formation doctorale</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              id="nom"
                              v-model="projetInformation.title_doctrant_formation"
                              placeholder="Intitulé de la formation doctorale"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                        </div>
                      </div>
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
                              Information sur projet
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Problématique</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              id="nom"
                              v-model="projetInformation.problematic"                              
                              placeholder="Problématique"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Mot clés</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              v-model="projetInformation.keyword"
                              id="nom"
                              placeholder="Mot clés"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-6">
                            <label
                              for="prenom"
                              class="block text-sm font-medium text-black"
                              >Objectifs</label
                            >
                            <textarea
                              maxlength="300"
                              name="feedback"
                              v-model="projetInformation.objective"
                              id="feedback"
                              rows="4"
                              cols="80"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              placeholder="Objectifs"
                              required
                            ></textarea>
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Méthodologie</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              v-model="projetInformation.methodology"
                              id="nom"
                              placeholder="Spécialité"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>

                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="file"
                               class="block text-sm font-bold text-black"
                              >Planning de travail</label>
                          </div>
                          <div class="col-span-6 sm:col-span-4 ml-4">
                            <label
                              for="plan"
                              class="block text-sm font-bold text-black"
                              >1ere Année</label>
                            <input
                              type="text"
                              name="plan"
                              id="Plan"
                              v-model="projetInformation.planning_work.year1"                              
                              placeholder="Planning 1ère Année"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                           </div>
                          <div class="col-span-6 sm:col-span-4 ml-4">
                            <label
                              for="file"
                              class="block text-sm font-bold text-black"
                              >2eme Année</label
                            >
                            <input
                              type="text"
                              name="plan"
                              v-model="projetInformation.planning_work.year2"
                              id="Plan"
                              placeholder="Planning 2ème Année"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />

                          </div>
                          <div class="col-span-6 sm:col-span-4 ml-4">
                            <label
                              for="file"
                              class="block text-sm font-bold text-black"
                              >3eme Année</label
                            >
                            <input
                              type="text"
                              name="plan"
                              id="Plan"
                              v-model="projetInformation.planning_work.year3"
                              placeholder="Planning 3ème Année"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />

                          </div>
                          <div class="col-span-6 sm:col-span-4 ml-4">
                            <label
                              for="file"
                              class="block text-sm font-bold text-black"
                              >4eme Année</label
                            >
                            <input
                              type="text"
                              name="plan"
                              id="Plan"
                              v-model="projetInformation.planning_work.year4"
                              placeholder="Planning 4ème Année"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />

                          </div>
                          <div class="col-span-6 sm:col-span-6">
                            <label
                              for="prenom"
                              class="block text-sm font-medium text-black"
                              >Resultats Attendus</label
                            >
                            <textarea
                              maxlength="300"
                              name="feedback"
                              id="feedback"
                              rows="4"
                              v-model="projetInformation.planning_work.wanted_result"
                              cols="80"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              placeholder="Resultats Attendus"
                              required
                            ></textarea>
                          </div>




                          <div class="col-span-6 sm:col-span-4">
                            <label
                              class="block text-sm font-medium text-black"
                              >En colaboration</label
                            >
                            <select v-model="SelectOption"
                        @change="selectAction" class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md " required="required" >
                              <option value="oui">OUI</option>
                              <option value="non">Non</option>
                            </select>
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
                              v-model="collaboration.establishment"
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
                              v-model="collaboration.last_name"
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
                              v-model="collaboration.first_name"
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
                              v-model="collaboration.function"
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
                            <select v-model="collaboration.CollaborationType"
                        @change="selectType(collaboration)" class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md " required="required" >
                              <option value="NA">National</option>
                              <option value="INA">International</option>
                            </select>
                          </div>
                          <div v-if="collaboration.international" class="col-span-6 sm:col-span-2">
                            <label
                              class="block text-sm font-medium text-black"
                              >Pays</label
                            >
                            <input
                              type="text"
                              name="first_name"
                              id="nom"
                              placeholder="Pays"
                              v-model="collaboration.country"
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

                      <div class="bg-blue-50 overflow-hidden shadow sm:rounded-lg">
                        <div class="w-full h-10 px-4 pb-1 flex items-center justify-between">
                          <div class="text-left px-2 py-1 text-xl flex items-center" >
                            <p class="text-grey-800 font-bold">
                              Fichier saisi sur la plateforme de le ministère
                            </p>
                          </div>
                        </div>
                      </div>      
                      
                          <div class="col-span-6 sm:col-span-3">
                          <br>
                            <input
                              type="file"
                              name="file"
                              id="file"
                              @change="previewFiles"
                              placeholder="Selectionner"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                <br>
                <br>
                      <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
                        <button
                          type="submit"
                          class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-blue-700"
                        >
                          <div class="flex items-center">
                            <svg class="h-6 w-6 fill-current mr-2"  viewBox="0 0 20 20">
                              <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4 v4H9v-4H5V9h4V5h2v4h4V11z"/>
                            </svg>
                            <h3>Soumettre</h3>
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="md:col-span-1 md:border-r border-gray-300 px-2 sm:px-1" >
                <MembresEquipeCard :id_equipe="id" />
                <!-----Delais de soumission---->
                <div class="px-2 py-2 sm:px-0">
                  <div class="border border-grey-light  lg:border lg:border-grey-light  bg-white  rounded  lg:rounded  p-2  flex flex-col  justify-between  leading-normal">
                    <div  class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                      <div  class=" w-full h-8 px-1 pb-1  items-center justify-between  ">
                        <div  class="text-center px-2 py-1 text-md  items-center">
                          <p class="text-grey-800 font-bold">Delais de Soumission</p>
                        </div>
                      </div>
                    </div>
                    <div class=" items-center">
                      <div class="py-2  items-center">
                         <label for="nom" class="block text-sm italic text-black text-center ">
                                {{dateFinSoummission}}
                          </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import MembresEquipeCard from "../../../components/MembresEquipeCard.vue"
import axios from 'axios'

export default {
  props:['type'],
  components: { MembresEquipeCard },
data() {
            return {
                dateFinSoummission:"12/12/2021",
              file:null,
                projetInformation:{
                  title:'projet1',
                  research_area:'type1',                  
                  field:'type1',
                  speciality:'type1',
                  title_doctrant_formation:'type1',
                  problematic:'type1',
                  objective:'type1',
                  keyword:'type1',
                  methodology:'type1',
                  planning_work:{
                    "année_1":'type1',
                    "année_2":'type1',
                    "année_3":'type1',
                    "année_4":'type1',
                    "resultat_attendu":'type1'
                  },
                  Collaborations: []
                },
                form: {
                    title: null,
                    description: null,
                    collaborations: [
                        {
                          establishment: 'type1', 
                          first_name: 'type1', 
                          last_name: 'type1',
                          function:'type1',
                          CollaborationType:'NA',
                          country :'type1',
                          international:false,
                        }
                    ]
                },
                SelectOption: "non",
                SelectPays: "NA",
                selectColab:false,
                international:false,
                country:'Algeria'
            }
        },
        methods: {
            previewFiles(event) {
                this.file=event.target.files[0] 
                console.log(this.file)            
            },
            add() {
                this.form.collaborations.push( {
                          establishment: '', 
                          first_name: '', 
                          last_name: '',
                          function:'',
                          CollaborationType:'NA',
                          country :'',
                        });
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
            selectType(collaboration){
                if(collaboration.CollaborationType=="INA"){
                  collaboration.international=true
                }else{              
                  collaboration.international=false
                }
            },
            sendProjet(){       
              
               this.form.collaborations.forEach((collaboration)=>{
                 if (collaboration.CollaborationType==='NA'){
                  collaboration.country='Algerie'                
                }                
               })
               this.projetInformation.Collaborations=this.form.collaborations 
               this.postProjet()
            },

            postProjet(){
              let projet = new FormData
              //projet.append('file', this.file)
           //   projet.append('projetInformation', this.projetInformation )
              projet.append('title','projet1')
              projet.append('research_area','type1')
              projet.append('field','type1')
              projet.append('speciality','type1')
              projet.append('title_doctrant_formation','type1')
              projet.append('problematic','type1')
              projet.append('objective','type1')
              projet.append('keyword','type1')
              projet.append('methodology','type1')
            /*  projet.append('planning_work',{
                                              year1:'type1',
                                              year2:'type1',
                                              year3:'type1',
                                              year4:'type1',
                                              wanted_result:'type1'
                                            })*/
              let token =localStorage.getItem('token')
              axios.post(`http://192.168.43.213:8000/v1/api/projects/`, projet,                      
                {
                  headers:{
                    'Authorization' : `bearer ${token}`,
                    'Content-Type': `multipart/form-data`, 
              },    
              }).then((res) => {console.log(res)})
              .catch((error) => {console.log(error)})              
            }
        },
       
};
</script>

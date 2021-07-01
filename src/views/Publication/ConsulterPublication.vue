<template>
  

 <WelcomeLayout >

    <MainHeader :titre="' Consultation de publications'" /> 
     <main class="bg-white">
     <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
         <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full  px-6 pb-2 md:flex md:items-center justify-between">
           
            <div class="text-left px-2 py-4 text-xl md:w-1/3 ">
              <p class="text-grey-800 font-bold mr-3 block">Rechercher</p>
              <input type="search"  v-model="rechercher"
                class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md">
            </div>
            <div class="text-left px-2 py-4 text-xl  md:w-1/3   ">
              <p class="text-grey-800 font-bold mr-3">Filter Date</p>
              <div class="md:flex md:items-center">
                <button @click="filterpublication" type="button"
                class="ml-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-500  hover:bg-gray-500 hover:text-white
                     focus:border-gray-200 focus:ring-2 focus:ring-gray-200 focus:outline-none focus:ring-opacity-50 " >
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </button>
                <div class="w-full text-sm mr-4 md:text-left md:my-auto  block">
                  <input type="date" required v-model="dateCreation"  
                    class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" />
                </div>
              </div>
            </div>
            <div class="text-left px-2 py-4 text-xl  md:w-1/3 md:text-right">
                <router-link :to="{name: 'ajouterpublication'} ">
                    <button v-if="user.user_type=='CHERCHEUR'|| user.user_type=='DOCTORANT'"
                      class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 
                        focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-opacity-50" >
                        <div class="flex items-center">
                            <svg  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            <h3> Ajouter Publication</h3>
                        </div>
                    </button>
                </router-link>
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
                        Equipe
                      </th>

                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Intitulé de publication
                      </th>

                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date de création
                      </th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      > Visionner
                      </th>                   
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200" v-for="publication in rechercherpublication" :key="publication">
                    <tr>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-sm font-bold leading-5 text-left text-blue-600">
                          {{publication.teamid}}
                        </div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900 text-left">
                          {{publication.name}}
                        </div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900 text-left">
                          {{publication.created_at.substring(0,10)}} 
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900 text-left">
                        <router-link :to="{name: 'Visionerpublication',
                        params:{intitule:publication.name ,type:publication.type ,date : publication.created_at,detail:publication.details ,collabs:publication.collaborateur ,extcollab:publication.other_collaborateur}}">
                          <button                             
                              class="text-blue-500 hover:text-blue-800 hover:font-bold"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
          
                          </button>
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
import WelcomeLayout from '../WelcomeLayout.vue'
import ajouterPublication  from './VisionnerPublication.vue'
import MainHeader from '../../components/mainHeader.vue'
import store from "../../store/index";
import axios from 'axios'

export default {
  components: {
    ajouterPublication,
    WelcomeLayout,
    MainHeader
  },
    data(){
        return{
          user:'',
            supprimer:false,
            collaborateurSelection:'',
            publications:[ ],           
            publicationFiltre: this.publication,
            filterDate:false,
            rechercher:'',
            dateCreation:'',
            pub:[],
        }
    },
    methods:{       
        filterpublication(){
         this.filterDate =true
         this.rechercherpublication
        },
        async getpublicationInfo() {
         let token =localStorage.getItem('token')
         this.pub = await axios({
            method: 'get',
            url: 'https://django-app-dpgr.herokuapp.com/v1/api/publications/',
            headers:{
                "Content-Type":"application/json", 
                'Authorization': 'Bearer '+token
                },
            })
            this.publications=this.pub.data
        }        
    },
     mounted(){
      this.user =store.state.login.user
      this.getpublicationInfo()               
    },    
    computed:{
     rechercherpublication()  
      {
         
        if(this.rechercher !=''){
          console.log(this.rechercher)
          this.publicationFiltre = this.publications.filter((publication) =>{           
              const search=this.rechercher.toLowerCase()
              const intitule = publication.name.toLowerCase()
              const id =publication.id.toString()
              return  (intitule.includes(search)|| id.includes(search))              
          })  
        }else{
             this.publicationFiltre=this.publications
        }
        if(this.filterDate){
           if(thisuser_typeSelection !=' '){
            this.publicationFiltre = this.publicationFiltre.filter((publication) =>{
                return publication.date_creation ===this.dateCreation
            })  
          }else{
             this.publicationFiltre=this.publications
             this.filterDate=false
          }
        }        
       return this.publicationFiltre
      }
    },        
}

</script>

<style>
.center{
    margin: 10px auto;
}
</style>
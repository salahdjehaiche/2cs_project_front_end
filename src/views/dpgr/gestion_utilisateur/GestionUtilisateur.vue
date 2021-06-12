<template>
  

 <WelcomeLayout >
   
    <MainHeader :titre="' C\'est la page de Gestion Utilisateur'" />    
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
         <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full  px-6 pb-2 md:flex md:items-center justify-between">
            <div class="text-left px-2 py-4 text-xl md:w-1/3 ">
              <p class="text-grey-800 font-bold mr-3 block">Rechercher</p>
              <input type="text"  v-model="rechercher"
                class="block w-full px-3 py-1  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
            </div>
            <div class="text-left px-2 py-4 text-xl  md:w-1/3   ">
              <p class="text-grey-800 font-bold mr-3">Filter Role</p>
              <div class="md:flex md:items-center">
                <button @click="filterUsers"
                class="ml-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-500  hover:bg-gray-500 hover:text-white
                     focus:border-gray-200 focus:ring-2 focus:ring-gray-200 focus:outline-none focus:ring-opacity-50 " >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                </button>
                <select name="role" id="role"  v-model="roleSelection"
                class="lock w-full pl-3 pr-10  transition duration-90 ease-in-out border rounded shadow-sm 
                focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 
                disabled:opacity-50 disabled:cursor-not-allowed" >
                    <option value=" "> </option>
                    <option value="admin">admin</option>
                    <option value="membreCS">membre de CS</option>
                    <option value="membreCL1">membre de CL1</option>
                    <option value="membreCL2">membre de CL2</option>
                    <option value="chercheur">Chercheur</option>
                    <option value="doctorant">Doctorant</option>
                </select>   
              </div>           
            </div>
            <div class="text-left px-2 py-4 text-xl  md:w-1/3 md:text-right">
                <button @click="openForm" 
                    class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 
                     focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-opacity-50" >
                    <div class="flex items-center">
                        <svg  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <h3> Ajouter Utilisateur</h3>
                    </div>
                </button>
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
                        id
                      </th>

                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nom
                      </th>

                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Prénom
                      </th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Mail
                      </th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200" v-for="user in rechercherUsers" :key="user">
                    <tr>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-sm font-bold leading-5 text-left text-blue-600">
                          {{user.id}}
                        </div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900 text-left">{{user.nom}}</div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900 text-left">{{user.prenom}}</div>
                      </td>
                      <td class="px-6 py-2 whitespace-normal">
                        <div class="text-xs leading-5 text-gray-900 text-left">{{user.email}}</div>
                      </td>
                      <td class="px-6 py-2 whitespace-normal">
                        <div class="text-xs leading-5 text-gray-900 text-left">{{user.role}}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900 text-left">
                         <button
                            @click="supprimerUser"
                            class="text-blue-800 hover:text-blue-500 hover:font-bold"
                          >
                            <svg  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="Red">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
                            </svg>
                          </button>
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
      <div v-if="ajouter_utilisateur ">
        <AjouterUtilisateur  @close="openForm" :ajouter="ajouter_utilisateur" />
     </div>
     <div v-else-if="supprimer">
        <AjouterUtilisateur  @close="supprimerUser" :supprimer="supprimer"/>
     </div>
    </main>
  
 </WelcomeLayout>
</template>

<script>
import WelcomeLayout from '../../WelcomeLayout.vue'
import MainHeader from '../../../components/mainHeader.vue'
import AjouterUtilisateur  from './AjouterUtilisateur.vue'
export default {
  components: {
    AjouterUtilisateur,
    WelcomeLayout,
    MainHeader
  },
    data(){
        return{
            supprimer:false,
            roleSelection:'',
            ajouter_utilisateur:false,
            users:[
                {
                  id:1,
                  nom:'Djehaiche',
                  prenom:'Salah',
                  email:'hs_djehaiche@esi.dz',
                  role:'admin',
                },
                {
                  id:2,
                  nom:'zatout',
                  prenom:'Baderdinne',
                  email:'hs_zatout@esi.dz',
                  role:'membreCS',
                }
            ],
            usersFiltre: this.users,
            filterSelection:false,
            rechercher:''
        }
    },
    methods:{
        openForm(){
           this.ajouter_utilisateur =!this.ajouter_utilisateur
        },
        supprimerUser(){
          this.supprimer= !this.supprimer
        },
        filterUsers(){
         this.filterSelection =true
         this.rechercherUsers
        }        
    },
 
     mounted(){
      this.usersFiltre=this.users
    },
    updated(){
      if(!this.ajouter_utilisateur && !this.supprimer) {
        console.log("get users from  database")
        }
    },
    computed:{
     rechercherUsers()  
      {
        if(this.rechercher !=''){
          this.usersFiltre = this.users.filter((user) =>{
              const search=this.rechercher.toLowerCase()
              const nom = user.nom.toLowerCase()
              const prenom =user.prenom.toLowerCase()
              const email = user.email.toLowerCase()
              return  (nom.includes(search)|| prenom.includes(search) ||email.includes(search))              
          })  
        }else{
             this.usersFiltre=this.users
        }
        if(this.filterSelection){
           if(this.roleSelection !=' '){
            this.usersFiltre = this.usersFiltre.filter((user) =>{
                return user.role ===this.roleSelection
            })  
          }else{
             this.usersFiltre=this.users
             this.filterSelection=false
          }
        }


        
        return this.usersFiltre
      }
    },  
    
    
}
</script>

<style>
.center{
    margin: 10px auto;
}
</style>
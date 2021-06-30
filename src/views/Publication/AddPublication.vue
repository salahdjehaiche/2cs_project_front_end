<template>
  <WelcomeLayout>
      <MainHeader :titre="'Ajouter publication'" >
            <router-link :to="{path : '/Consulterpublications'}"
            class="text-blue-500 hover:text-blue-800 hover:font-bold"
            >  Consulter Publication
            </router-link>
            <span class="text-grey-dark text-center font-bold">> </span>
      </MainHeader>
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-2/2 bg-white p-4  md:w-full card"  >
            <form @submit.prevent="submit"  >     

                <div class="text-left px-2 py-4 text-lg md:flex md:items-center">
                
                    <span class="text-grey-800  mr-3 md:w-1/4 ">Intitulé de publication</span>
                
                    <input type="text" required v-model="intitule" 
                        class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" placeholder="Nom">
                </div>
                
                
                <div class="text-left px-2 py-4 text-lg md:flex md:items-center">
                    
                    <span class="text-grey-800  mr-3 md:w-1/4 ">Date</span>
                    
                    <input type="date" required v-model="date_creation" 
                        class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" placeholder="Date">
                
                </div>
                
                 <div class="text-left px-2 py-4 text-lg md:flex md:items-center">
                    <p class="text-grey-800  mr-3 md:w-1/4">Type</p>
                    
                    <select name="role" id="role" required  v-model="type" 
                    class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" >                     
                    
                        <option value="MEMBRE_DPGR">Communication national</option>
                        <option value="MEMBRE_CS">Communication international</option>
                        <option value="MEMBRE_LMCS">Publication international</option>
                    
                    </select>
                    
                </div>   

                <div class="text-left px-2 py-4 text-lg md:flex md:items-center">
                    <p class="text-grey-800  mr-3 md:w-1/4">Collaborateurs</p>
                    
                    <select name="role" id="role" required  v-model="collaborateur" 
                    class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" >                     
                    
                        <option v-for="chercheur in chercheurs" v-bind:key="chercheur">{{chercheur.nom}}</option>
                    
                    </select>
                    
                    <button @click="ajoutercollaborateur" type="button" 
                            class="p-1 rounded-md text-white m-2 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-700  " >                        
                            <svg class="h-6 w-6 fill-current " viewBox="0 0 20 20">
                                <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4 v4H9v-4H5V9h4V5h2v4h4V11z"/>
                            </svg>                                                            
                    </button>
                    
                </div>                
                <div  v-for="collab in listCollaborateurs " :key="collab"
                    class="inline-block text-left">
                    
                    <span @click="removecollabe(collab)"                
                     class="text-grey-800 border rounded bg-gray-200 mr-3 hover:bg-gray-400   px-2 py-1">
                     
                        {{collab}}
                    
                     </span>
                </div>


                <div class="text-left px-2 py-4 text-lg md:flex md:items-center">
                    <p class="text-grey-800  mr-3 md:w-1/4">Autre collaborateurs</p>

                    <input type="text" required v-model="externeCollaborateur" 
                        class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" placeholder="Autre collaborateurs">          
                    
                    <button @click="ajouterExternCollaborateur" type="button"
                            class="p-1 rounded text-white  m-2 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-700  " >                        
                    
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                                <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4 v4H9v-4H5V9h4V5h2v4h4V11z"/>
                            </svg>                                                                         
                    
                    </button>
                </div>
                <div  v-for="collab in listexterneCollaborateurs " :key="collab"
                class="inline-block text-left">
                    
                    <span @click="removeExterneCollabe(collab)"
                     class="text-grey-800 border rounded bg-gray-200 mr-3 hover:bg-gray-400   px-2 py-1">
                    
                        {{collab}}
                    
                     </span>
                </div>
<div class="text-left px-2 py-4 text-lg md:flex md:items-center">
    <p class="text-grey-800  mr-3 md:w-1/4">Détails</p>    
</div>
<div class="text-left px-2 py-4 text-lg md:flex md:items-center">
<textarea v-model="detail" maxlength="300" name="detail" id="detail" rows="10" cols="80" class="mt-1 w-3/4 px-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" placeholder="Détail" required></textarea>
</div>
                <div class="text-center px-2 py-4 text-lg text-center">
                    <button 
                            class="focus:outline-none focus:bg-blue-700 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  my-2 bg-blue-500 hover:bg-blue-600 
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50" >
                    
                            <div class="flex items-center">
                    
                                <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                                    <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4 v4H9v-4H5V9h4V5h2v4h4V11z"/>
                                </svg>
                    
                                <h3> Ajouter publication</h3>
                    
                            </div>
                    </button>
                </div>
            </form>
       </div>
        </div>
      </div>
    </main>
  </WelcomeLayout>
</template>
<script>
import MainHeader from '../../components/mainHeader.vue'
import WelcomeLayout from "../WelcomeLayout.vue";
import store from "../../store/index";
export default {    
  components: {
    WelcomeLayout,
    MainHeader
  },
    data(){
        return{
            intitule:'',
            type:'',
            user:'',
            detail:'',
            date_creation:'',
            collaborateur:'',
            listCollaborateurs:[],
            listexterneCollaborateurs:[],
            externeCollaborateur:'',
            chercheurs:[
                {nom:"oussama"},
                {nom:"salah"},
                {nom:"rafik"},
                {nom:"zinou"},
                {nom:"Ahmed"},
            ],
        }
    },
    methods:{
        ajoutercollaborateur(){
            if(this.collaborateur!=''&& !this.listCollaborateurs.includes(this.collaborateur))
                this.listCollaborateurs.push(this.collaborateur)            
        },
        removecollabe(collab){
            this.listCollaborateurs.pop(collab)
        },
        ajouterExternCollaborateur(){
            if(this.externeCollaborateur!=''&& !this.listexterneCollaborateurs.includes(this.externeCollaborateur))
                this.listexterneCollaborateurs.push(this.externeCollaborateur) 
        },
        removeExterneCollabe(collab){
            this.listexterneCollaborateurs.pop(collab)
        },
    },
    mounted(){
      this.user =store.state.login.user
      console.log(store.state.login.user.result)
    }
};
</script>

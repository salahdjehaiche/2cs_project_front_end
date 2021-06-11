<template>
   <div class="backdrop py-36" @click.self="closemodal" > 
       <form @submit.prevent="submit"  class="w-2/4 mx-auto" v-if="ajouter">
            <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 bg-white rounded-lg ">
                <label class="text-left px-2 py-4 text-lg flex items-center">
                    <span class="text-grey-800  mr-3 ">Nom</span>
                    <input type="text" required v-model="nom"
                        class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm 
                        focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Nom">
                </label>
                <label class="text-left px-2 py-4 text-lg flex items-center">
                    <span class="text-grey-800  mr-3 ">Prenom</span>
                    <input type="text" required v-model="prenom"
                        class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm 
                        focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Prenom">
                </label>
                <label class="text-left px-2 py-4 text-lg flex items-center">
                    <span class="text-grey-800  mr-3 ">Mail</span>
                    <input type="email" required v-model="email"
                        class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm 
                        focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="mail@esi.dz">
                </label>
                 <div class="flex ">
                    <label class="flex items-center">
                        <span class="text-red-800  mr-3 " v-if="emailErreur">{{emailErreur}}</span>
                    </label>
                </div>
            
                <div class="text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800  mr-3">Role</p>
                <select name="role" id="role"  v-model="role"
                class="lock w-full pl-3 pr-10  transition duration-90 ease-in-out border rounded shadow-sm 
                focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 
                disabled:opacity-50 disabled:cursor-not-allowed" >
                    <option value="administrateur">admin</option>
                    <option value="membreCS">membre de CS</option>
                    <option value="membreCL">membre de CL1</option>
                    <option value="membreCL">membre de CL2</option>
                    <option value="chercheur">Chercheur</option>
                    <option value="doctorant">Doctorant</option>
                </select>
                </div>

               
                <button 
                        class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  my-2 bg-blue-500 hover:bg-blue-600 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50" >
                        <div class="flex items-center">
                            <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                                <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4 v4H9v-4H5V9h4V5h2v4h4V11z"/>
                            </svg>
                            <h3> Ajouter Utilisateur</h3>
                        </div>
                </button>
            </div>
       </form>
        <div class="w-2/4 mx-auto" v-if="supprimer">
                <div class="w-full mx-auto px-auto sm:px-6 lg:px-8 lg:py-8 bg-white rounded-lg ">
                <label class="mx-auto px-3 py-4 text-lg  block">
                    <span class="text-grey-800  mr-3 ">Are you sure you want to delete this user ??</span>
                 </label>
                <button @click="confirmer"
                        class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  my-2 bg-red-500 hover:bg-red-600 
                        focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none focus:ring-opacity-50" >
                        <div class="flex items-center">
                                  <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="white">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <h3>Confirmer</h3>
                        </div>
                </button>
                <button @click="closemodal"
                        class="py-2 ml-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  my-2 bg-gray-500 hover:bg-gray-600 
                        focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-opacity-50" >
                        <div class="flex items-center">
                            <svg  class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3> Annuler</h3>
                        </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['ajouter','supprimer'], 
    data(){
        return{
            nom:'',
            prenom:'',
            email:'',
            role:'',
            emailErreur:''
        }
    },
    methods:{
        closemodal(){
            this.$emit('close')
        },
        confirmer(){
            console.log("supprimer")
            this.closemodal()
        },
        submit(){
            if(!this.email.includes("@esi.dz")){
                this.emailErreur= "email must contain @esi.dz"
            }else this.emailErreur=''
            console.log(this.nom)
            this.closemodal()
        },
    },
}
</script>

<style>
.backdrop{
    top: 0;
    position: fixed;
    background: rgb(0, 0, 0,0.5);
    width: 100%;
    height: 100%;
}
</style>
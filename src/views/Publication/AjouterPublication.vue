<template>
   <div class="backdrop py-36 " @click.self="closemodal" > 
       <form @submit.prevent="submit"  class="w-2/4 mx-60 " v-if="ajouter">
            <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 bg-white rounded-lg ">
                <label class="text-left px-2 py-4 text-lg flex items-center">
                    <span class="text-grey-800  mr-3 ">Nom</span>
                    <input type="text" required v-model="nom"
                        class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm 
                        focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Nom">
                </label>
                <label class="text-left px-2 py-4 text-lg flex items-center">
                    <span class="text-grey-800  mr-3 ">Date</span>
                    <input type="date" required v-model="date_creation"
                        class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm 
                        focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Date">
                </label>
             <div class="text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800  mr-3">Collaborateurs</p>
                <select name="role" id="role" required  v-model="role"
                class="lock w-full pl-3 pr-10  transition duration-90 ease-in-out border rounded shadow-sm 
                focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 
                disabled:opacity-50 disabled:cursor-not-allowed" >
                    <option value="1">saleh</option>
                    <option value="2">idriss</option>
                    <option value="3">rafik</option>
                    <option value="4">Zinnedine</option>
                    <option value="6">oussame</option>
                    <option value="7">user3</option>
                </select>
                </div>
            
                <div class="text-left px-2 py-4 text-xl flex items-center">
                <p class="text-grey-800  mr-3">Autre collaborateurs</p>
                <select name="role" id="role"  v-model="role"
                class="lock w-full pl-3 pr-10  transition duration-90 ease-in-out border rounded shadow-sm 
                focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 
                disabled:opacity-50 disabled:cursor-not-allowed" >
                    <option value="1">saleh</option>
                    <option value="2">idriss</option>
                    <option value="3">rafik</option>
                    <option value="4">Zinnedine</option>
                    <option value="6">oussame</option>
                    <option value="7">user3</option>
                </select>
                </div>

               
                <button 
                        class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  my-2 bg-blue-500 hover:bg-blue-600 
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
        <div class="w-2/4 mx-60" v-if="supprimer">
                <div class="w-full mx-auto px-auto sm:px-6 lg:px-8 lg:py-8 bg-white rounded-lg ">
                <label class="mx-auto px-3 py-4 text-lg  block">
                    <span class="text-grey-800  mr-3 ">Are you sure you want to download this publication ?</span>
                 </label>
                <button @click="confirmer"
                        class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  my-2 bg-green-500 hover:bg-red-600 
                        focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none focus:ring-opacity-50" >
                        <div class="flex items-center">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
                            <h3>download</h3>
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
           <div class="w-2/4 mx-60" v-if="see">
                
            
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
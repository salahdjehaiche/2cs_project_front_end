<template>
   <div class="backdrop  " @click.self="closemodal" > 
       <div class="w-2/2  p-4  md:w-2/4 card"   v-if="ajouter" >
             <div class="flex justify-between items-center"
                >
                <div
                    class="flex w-10/12 h-auto py-3 px-6 justify-start items-center text-2xl font-bold"
                >
                    Ajouter Utilisateur
                </div>
                <div
                    @click="closemodal"
                    class="flex w-1/12 h-auto justify-center cursor-pointer"
                >
                    <svg
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
            <form @submit.prevent="submit" >
                    <div class="text-left px-2 py-4 text-lg md:flex md:items-center">
                        <span class="text-grey-800  mr-3 md:w-1/3 ">Nom</span>
                        <input type="text" required v-model="nom"
                            class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" placeholder="Nom">
                    </div>
                    <div class="text-left px-2 py-4 text-lg md:flex md:items-center">
                        <span class="text-grey-800  mr-3 md:w-1/3 ">Prenom</span>
                        <input type="text" required v-model="prenom"
                            class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" placeholder="Prenom">
                    </div>
                    <div class="text-left px-2 py-4 text-lg md:flex md:items-center">
                        <span class="text-grey-800  mr-3 md:w-1/3 ">Mail</span>
                        <input type="email" required v-model="email"
                            class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" placeholder="mail@esi.dz">
                    </div>
                    <div class="flex text-left">
                        <label class="flex text-left">
                            <span class="text-red-800  mr-3  " v-if="emailErreur">{{emailErreur}}</span>
                        </label>
                    </div>
                
                    <div class="text-left px-2 py-4 text-lg md:flex md:items-center">
                        <p class="text-grey-800  mr-3 md:w-1/3">Role</p>
                        <select name="role" id="role"  v-model="role"
                        class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" >
                            <option value="administrateur">admin</option>
                            <option value="membreCS">membre de CS</option>
                            <option value="membreCL">membre de CL1</option>
                            <option value="membreCL">membre de CL2</option>
                            <option value="chercheur">Chercheur</option>
                            <option value="doctorant">Doctorant</option>
                        </select>
                    </div>

                    <div class="text-center px-2 py-4 text-lg text-center">
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
       </div>
        <div class="w-2/2  p-4  md:w-2/4 card" v-if="supprimer">
                <div class="w-full mx-auto px-auto sm:px-6 lg:px-8 lg:py-8 bg-white rounded-lg ">
                <label class="mx-auto px-3 py-4 text-lg  block">
                    <span class="text-grey-800  mr-3  ">Are you sure you want to delete this user ??</span>
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
            }else 
            {
                this.emailErreur=''
                console.log(this.nom)
                this.closemodal()
            }
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
.card{    
    background-color: white;
    border-radius: 0.375rem;
}
.backdrop .card{
    margin: 5% 10%;
}
</style>
<template>
    <div class="backdrop h-screen w-screen" @click.self="closemodal">
        <div 
            class="  card md:w-1/2 " 
            >
            <div class="w-full px-4 sm:px-6 lg:px-8 lg:py-8 bg-white rounded-lg" >
                <!-- Header -->
                <div
                class="flex  justify-between items-center"
                >
                <div
                    class="flex w-10/12 h-auto py-3 px-6 justify-start items-center text-2xl font-bold"
                >
                    {{text}}
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
                <!-- Modal Content-->
                <div
                class="flex w-full h-auto justify-center items-center rounded text-center text-gray-500"
                >
                <form  @submit.prevent="submit">
                    <div class="overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-6">
                            <label
                            for="prenom"
                            class="block text-sm font-medium text-black"
                            >Commentaire</label
                            >
                            <textarea v-model="commentaire"
                            maxlength="300"
                            name="feedback"
                            id="feedback"
                            rows="4"
                            cols="80"
                            class="mt-1 border text-black border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                            placeholder="Commentaire"
                            required
                            ></textarea>
                            <label class="text-red-500" v-if="commentaireError"> {{commentaireError}}</label><br>
                            <label class="text-red-500" v-if="commentaireError"> {{characterLeft}}</label>
                        </div>
                        </div>
                    </div>
                    <div
                        class="px-4 py-3 bg-gray-50 text-right sm:px-6"
                    >
                        <button
                        type="reset"
                        @click="closemodal"
                        class="py-2 px-4 mr-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500"
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
        </div>
    </div>
</template>

<script>
export default {
props:['text'],
data(){
    return{
        commentaire :'',
        commentaireError:'',
        characterLeft:''
    }
},
methods:{
    closemodal(){
        this.$emit('close')
    },
    submit(){
        if(this.commentaire.length >=50 )
       {
            //----submit response -----------------//
            this.closemodal()
       }else {
           this.commentaireError ="le commentaire doit contenir au moins 50 caractères"
       }
    },
},
updated(){
    
    if (this.commentaire.length<50)
    {
        this.commentaireError = "le commentaire doit contenir au moins 50 caractères "
        this.characterLeft=" il reste " +(50 - this.commentaire.length )+" caractères"
    }else {this.commentaireError =''}
}
}
</script>

<style>
.backdrop{
    top: 0;
    padding: auto 2px;
    position: fixed;
    background: rgb(0, 0, 0,0.5);
    width: 100%;
    height: 100%;
}
.card{
    width:50%;
    background-color: white;
    border-radius: 0.375rem;
}
.backdrop .card{
    margin: 10% auto;
}
</style>
<template>
   <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class=" md:grid md:grid-cols-4 md:gap-6 py-2 sm:px-3 lg:px-4 bg-white rounded-md  ">
            <div class="md:col-span-4 px-3 sm:px-2">
              <div class="px-4 sm:px-0">
                <div class="bg-orange-50 overflow-hidden shadow sm:rounded-lg">
                <div  class=" w-full h-10 px-4 pb-1 flex items-center justify-between  ">
                  <div class="text-left px-2 py-4 text-xl flex items-center">
                    <p class="text-grey-800 font-bold">
                      Remplir les informations du contrat
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-4 sm:px-0">
                  <form @submit.prevent="saveContrat">
                    <div class="overflow-hidden sm:rounded-md">
                      <!--contrat infos-->
                      <div   class="px-2 py-2 bg-white sm:p-6 border-b">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-4" v-if="$route.name==='CreationContrat'">
                            <label
                              for="title"
                              class="block text-sm font-medium text-left text-black"
                              >Titre du contrat</label
                            >
                          <div class="w-1/3">
                            <input
                            v-model="title"
                              type="text"
                              name="title"
                              id="title"
                              placeholder="Titre"
                              autocomplete="given-name"
                              class="mt-1 px-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          </div>
                          <div class="col-span-6 sm:col-span-4  ">
                            <label
                              for="nom" v-if="$route.name==='CreationContrat'"
                              class="block text-sm font-medium text-left text-black">
                              Date de signature
                              </label>
                              <label v-if="$route.name==='RenouvlerContrat'"
                              for="nom"
                              class="block text-sm font-medium text-left text-black">
                              Date de renouvlement
                              </label>
                            <div class="w-1/3">
                              <input
                              v-model="date_sign"
                                type="date"
                                name="date_sign"
                                id="date_sign"
                                placeholder="Date de signature"
                                autocomplete="given-name"
                                class="block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" 
                                required
                              />
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-6" v-if="$route.name==='CreationContrat'">
                            <label
                              for="prenom"
                              class="block text-sm font-medium text-left text-black"
                              >Détail</label
                            >
                            <textarea
                            v-model="detail"
                              maxlength="300"
                              name="detail"
                              id="detail"
                              rows="10"
                              cols="80"
                              class="mt-1 px-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              placeholder="Détail"
                              required
                            ></textarea>
                          </div>
                          <div class="col-span-6 sm:col-span-3" v-if="$route.name==='CreationContrat'">
                            <label  for="file"  class="block text-sm text-left font-medium text-black"  >
                              Fichier
                            </label>
                            <input  type="file"  name="file"  id="file"  placeholder="Selectionner"  class="mt-1 border  border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"  required/>
                          </div>
                        </div>
                      </div>    
                      <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
                        <button
                          type="submit"
                          class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                        >
                          <div class="flex items-center">
                            <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                              <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4 v4H9v-4H5V9h4V5h2v4h4V11z"/>
                            </svg>
                            <h3>{{button}}</h3>
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
</template>

<script>
import axios from 'axios'
export default {
    props:['button','id'],
 data(){
    return {
      title:'',
      date_sign:'',
      detail:'',
      file:null
    }
  },
  methods:{
    saveContrat(){
      if (this.button!='Renouvler') 
      {
          this.postContrat()
      }
      else{
        this.updateContrat()
      }
    },
      postContrat(){                          
        let token =localStorage.getItem('token')      
        const data= {title:this.title ,date_sign: this.date_sign , detail :this.detail }      
        console.log(data)
        axios({
            method: 'post',
            url: 'https://django-app-dpgr.herokuapp.com/v1/api/contrats/',
            headers:{
                "Content-Type":"application/json", 
                'Authorization': 'Bearer '+token
                },
            data: data
            }).then(response => {       
              if(response.status ==200 ){
                alert("le contrat  est ajouté avec succées ")
                this.$router.push({path : '/actuel/contrat'})
              }
              })
            .catch(error => (console.log(error)));            
      },
      updateContrat(){      
            let token =localStorage.getItem('token')         
            const data={id:this.id , date_ren:this.date_sign} 
            axios.put('https://django-app-dpgr.herokuapp.com/v1/api/contrats/',data,{
            headers:{
                "Content-Type":"application/json", 
                'Authorization': 'Bearer '+token
                },          
            }).then(response => { 
                if(response.status ==200 ){
                  alert("le contrat  est renouvlé avec succées ")
                  this.$router.push({path : '/actuel/contrat'})
                }
              })
            .catch(error => (console.log(error)));
      }
  },
  mounted(){
    console.log(this.id)
  }
}
</script>

<style>

</style>
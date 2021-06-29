<template>
  <WelcomeLayout>

    <MainHeader :titre="'Créer une équipe'" />
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div
            class="
              md:grid md:grid-cols-4
              md:gap-6
              py-2
              sm:px-3
              lg:px-4
              bg-white
              rounded-md
            "
          >
            <div class="md:col-span-4 px-3 sm:px-2">
              <div class="px-4 sm:px-0">
                <div class="bg-orange-50 overflow-hidden shadow sm:rounded-lg">
                <div
                  class="
                    w-full
                    h-10
                    px-4
                    pb-1
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div class="text-left px-2 py-4 text-xl flex items-center">
                    <p class="text-grey-800 font-bold">
                      Remplir la liste des membres
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-4 sm:px-0">
                  <form>
                    <div class="overflow-hidden sm:rounded-md">
                      <!--colaborations-->
                      <div  v-for="(membre, index) in this.form.membres" v-bind:key="index" class="px-2 py-2 bg-white sm:p-6 border-b">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              :for="'membre-' + index"
                              class="block text-sm font-medium text-black"
                              >Membre n° {{ index + 2 }} </label
                            >
                             <select v-model="SelectMembre"
                            @change="selected"
                             class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md " required="required" >
                              <option v-for="(chercheur, index) in chercheurs" v-bind:key="index" :value="index">{{chercheur.nom}}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-end">
                        <div
                            class="text-left px-2 py-1 text-xl flex items-center"
                          >
                          <button class="bg-green-500 hover:bg-green-700 text-white font-bold my-4 py-2 px-4 rounded" v-if="form.membres.length < 5" @click.prevent="add">
                        +
                       </button>
                        </div>
                         <div
                            class="text-left px-2 py-1 text-xl flex items-center"
                          >
                          <button class="bg-red-500 hover:bg-red-700 text-white font-bold my-3 py-2 px-4 rounded" v-if="form.membres.length > 3" @click.prevent="remove">
                        -
                    </button>
                        </div>   
                    
                      </div>
                      
                      
                      <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
                        <button
                          type="submit"
                          class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
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
                            <h3>Valider</h3>
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
  </WelcomeLayout>
</template>
<script>
import MainHeader from '../../components/mainHeader.vue'
import WelcomeLayout from "../WelcomeLayout";
export default {
  components: {
    WelcomeLayout,
    MainHeader
  },
  data() {
            return {
                form: {
                    membres: [
                       {nom:null},
                       {nom:null},
                       {nom:null},
                    ]
                },
                chercheurs:[
                    {nom:"oussama"},
                       {nom:"salah"},
                       {nom:"rafik"},
                       {nom:"zinou"},
                       {nom:"Ahmed"},
              ],
              selectMembre:null,
            }
        },
        methods: {
            add() {
                this.form.membres.push({nom:null});
            },
            remove() {
                this.form.membres.pop();
            },
              selected(){
 
    },
    },
};
</script>

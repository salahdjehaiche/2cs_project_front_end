<template>
   <div
        class="md:col-span-3 md:border-r border-gray-300 px-3 sm:px-2"
        >
        <div class="px-4 sm:px-0">
            <div class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
            <div
                class="w-full h-10 px-6 pb-1 flex items-center justify-between"
            >
                <div class=" w-full h-10 px-3 pb-1 flex items-center justify-between "> 
                    <div
                        class="text-left px-2 py-1 text-xl flex items-center"
                      >
                        <p class="text-grey-800 font-bold">
                          Information sur le projet
                        </p>
                      </div>
                      <div
                        class="text-left px-2 py-1 text-xl flex items-center"
                      >
                        <div class="px-2 py-2 flex items-center" v-if="modifier">
                          <router-link :to="{name: 'ModifierProjet'} ">
                          <button  type="submit"  class="    py-1    px-2    border border-transparent    shadow-sm    text-sm    font-medium    rounded-md    text-white    bg-green-400    hover:bg-green-500  ">
                            Modifier
                          </button>
                          </router-link>
                        </div>
                      </div>
                </div>
            </div>
            <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6" v-for="information in projectInformations" :key="information">
                    <div class="col-span-6 sm:col-span-6 flex items-center justify-start">
                        <div class=" text-left block text-sm font-bold text-black flex items-center  ">
                            <label for="nom" class="block text-sm  text-black text-left text-md mb-3">
                                {{information.label}}: 
                            </label>
                        </div>
                        <div class=" text-left px-1 block break-all text-sm font-medium text-black flex items-center  ">
                            <label v-if="information.label!='Fichier'" for="nom" class="block text-sm font-medium text-black text-left text-md mb-3">
                                {{ information.information }}
                            </label>
                            <div v-if="information.label==='Fichier'" class="block text-sm font-medium text-black text-left text-md mb-3 text-blue-500">
                                <a :href="information.url" v-text="information.nom" @click.prevent="downloadItem(information)" />                    
                            </div>
                          </div>
                    </div>  
                </div>           
                <TableColaboration :tableau="tablecolaboration" />                

            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import TableColaboration from './TableColaboration.vue'
export default {
    props:['id_equipe','modifier'],
    components:{
        TableColaboration
    },
    
  data(){
      return{ 
        item:{url:'#',nom:'Fichier'},
        projectInformations:[
          {label:'Intitulé de projet',information:'information'},
          {label:'Domaine de recherche',information:'information'},
          {label:'Filière',information:'information'},
          {label:'Spécialité',information:'information'},
          {label:'Intitulé de la formation doctorale',information:'information'},
          {label:'Problématique',information:'information'},
          {label:'Mot clés',information:'information'},
          {label:'Objectifs',information:'informationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformation'},
          {label:'Méthodologie',information:'information'},
          {label:'Fichier',nom:'nom fichier',url:'#'},
        ],
        tablecolaboration:[
            {
                etablissement:'--',
                nom:'--',
                prenom:'--',
                fonction:'--',
                pays:'--'
            },
             {
                etablissement:'--',
                nom:'--',
                prenom:'--',
                fonction:'--',
                pays:'--'
            }
        ]
        
      }
  },
  methods: {
  downloadItem ({ url, nom }) {
    axios.get(url, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = nom
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(console.error)
  }
}
}
</script>

<style>

</style>
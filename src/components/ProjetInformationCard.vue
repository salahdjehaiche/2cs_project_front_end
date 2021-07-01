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
                            Modifier / Améliorer
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
                            <label v-if="information.label!='plan de travail'" for="nom" class="block text-sm font-medium text-black text-left text-md mb-3">
                                {{ information.information }}
                            </label>
                            <div v-if="information.label==='plan de travail'" class="block text-sm font-medium text-black text-left text-md mb-3">
                              <label v-for="(cs,pt) in information.information" :key="pt" for="nom" class="block text-sm font-medium text-black text-left text-md mb-3">
                                {{ pt }}  :  {{cs}}
                              </label>                   
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
        projectInformations:[],
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
  },
  },
  mounted(){         
    console.log('------'+this.id_equipe)
          let token =localStorage.getItem('token') 
          var data          
          axios.get('https://django-app-dpgr.herokuapp.com/v1/api/projects/',{params : {id:this.id_equipe},
            headers:{
                "Content-Type":"application/json", 
                'Authorization': 'Bearer '+token
                },
            }).then(response => {
            if (response.status==200){
                data= response.data 
                localStorage.setItem('id_projet', data.id) 
                console.log(data.id)
                const plandetravail =JSON.parse(data.palnning_work)
               // var plandetravail= data.palnning_work.replace('{','').replace('}','').split(',').
                this.projectInformations =[
                        {label:'Intitulé de projet',information:data.title},
                        {label:'Domaine de recherche',information:data.research_area},
                        {label:'Filière',information:  data.field},
                        {label:'Spécialité',information:data.specialty},
                        {label:'Intitulé de la formation doctorale',information:data.title_doctorant_formation},
                        {label:'Problématique',information:data.problematic},
                        {label:'Mot clés',information:data.keyword},
                        {label:'Objectifs',information:data.objective},
                        {label:'Méthodologie',information:data.methodology},
                        {label:'plan de travail',information: plandetravail}
                      ]

                                                     
              }
            }).catch(err => console.log(err.message)) 
    },
}
</script>

<style>

</style>
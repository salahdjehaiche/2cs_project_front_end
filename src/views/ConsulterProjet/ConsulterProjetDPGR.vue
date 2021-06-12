<template>
  <WelcomeLayout >
    <header class="bg-blue-100 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-left">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
          Projet de recherche des laboratoires
        </h1>
      </div>
    </header>
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4" v-for="laboTab in laboTabs" :key="laboTab">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full h-15 px-6 pb-2 flex items-center justify-between">
            <div class="text-left px-2 py-4 text-xl flex items-center">
              <p class="text-grey-800 font-bold">Laboratoire {{laboTab.name}} + CS</p>
            </div>
          </div>
        </div>
        <TableauConsulterProjet :tableau="laboTab.table" :linkName="linkName" />        
      </div>
    </main>
  </WelcomeLayout>
</template>

<script>
import TableauConsulterProjet from '../../components/TableauConsulterProjet.vue'
import WelcomeLayout from '../WelcomeLayout.vue'


// @ is an alias to /src

export default {
  name: 'ConsulterProjet',
  components: {
    WelcomeLayout,
    TableauConsulterProjet
  },
  data(){
    return{
    linkName:{name : 'ProjetDetail' },
     
      laboTabs:[
        {
          name : 'MCSI',
          table:[
            {
                id_équipe:1,
                chef_equipe:'--',
                intutilé:'--',
                décision:'--',
            },
            {
                id_équipe:2,
                chef_equipe:'--',
                intutilé:'--',
                décision:'--',
            }
          ]
        },
        {
          name:'LCMS',
          table:[        
            {
                id_équipe:3,
                chef_equipe:'--',
                intutilé:'--',
                décision:'--',
            },
            {
                id_équipe:4,
                chef_equipe:'--',
                intutilé:'--',
                décision:'--',
            }
          ]
        }
        ]
    }
  }
}
</script>

<style>

</style>
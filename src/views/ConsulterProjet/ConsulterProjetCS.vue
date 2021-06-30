<template>
  <WelcomeLayout >
    <MainHeader :titre="'Projet de recherche des laboratoires'" />
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4" v-for="laboTab in laboTabs" :key="laboTab">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full h-15 px-6 pb-2 flex items-center justify-between">
            <div class="text-left px-2 py-4 text-xl flex items-center">
              <p class="text-grey-800 font-bold">Laboratoire {{laboTab.name}} </p>
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
import MainHeader from '../../components/mainHeader.vue'
import WelcomeLayout from '../WelcomeLayout.vue'


export default {
 name: 'ConsulterProjetCS',
  components: {
    WelcomeLayout,
    TableauConsulterProjet,
    MainHeader
  },
  data(){
    return{
    linkName:{name : 'ProjetDetail' ,user:'cs'},
     
      laboTabs:[
        {
          name : 'LCSI',
          table:[
            {
                id_équipe:1,
                chef_equipe:'--',
                intutilé:'--',
                date:'--',
                etat:'--'
            },
            {
                id_équipe:2,
                chef_equipe:'--',
                intutilé:'--',
                date:'--',
                etat:'--'
            }
          ]
        },
        {
          name:'LMCS',
          table:[        
            {
                id_équipe:3,
                chef_equipe:'--',
                intutilé:'--',
                date:'--',
                etat:'--'
            },
            {
                id_équipe:4,
                chef_equipe:'--',
                intutilé:'--',
                date:'--',
                etat:'--'
            }
          ]
        }
        ]
    }
  }
};
</script>

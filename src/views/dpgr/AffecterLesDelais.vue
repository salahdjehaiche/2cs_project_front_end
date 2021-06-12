<template>
    <WelcomeLayout >     
      <MainHeader :titre="'C\'est la page d\'affectation des delais '" />    
      <main class="bg-white my-9 ">
        <div v-for="type in types" :key="type"
            class=" m-3 px-6 pb-2 justify-between bg-white w-full shadow-xl sm:rounded-lg">
          <AffectDate :type="type"/>
        </div>
      </main>
    </WelcomeLayout>
</template>

<script>

import WelcomeLayout from '../WelcomeLayout.vue'
import MainHeader from '../../components/mainHeader.vue'
import AffectDate from '../../components/AffectDate.vue'

export default {
  name: 'AffecterLesDelais ',
  components: {
    WelcomeLayout,
    AffectDate,
    MainHeader,
  },
  data(){
    return{
      types:['Soummission','Validation'],

    }
  },
  }


</script>
<template>
  <WelcomeLayout>
      <MainHeader :titre="'Bilan'" >
            <router-link :to="{path : '/actuel'}"
            class="text-blue-800 hover:text-blue-500 hover:font-bold"
            >  Projet Actuel
            </router-link>
            <span class="text-grey-dark text-center font-bold">> </span>
      </MainHeader>
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        </div>
      </div>
    </main>
  </WelcomeLayout>
</template>
<script>
import MainHeader from '../../components/mainHeader.vue'
import WelcomeLayout from '../WelcomeLayout.vue'
export default {
  components: {
    WelcomeLayout,
    MainHeader
  },
};
</script>

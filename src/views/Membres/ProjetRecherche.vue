<template>
  <WelcomeLayout>

     <MainHeader :titre="'Projet de Recherche'" />
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
import WelcomeLayout from "../WelcomeLayout";
export default {
  components: {
    WelcomeLayout,
    MainHeader
  },
};
</script>

<template>
  <WelcomeLayout>
    <MainHeader :titre="'Projet Actuel'" />
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full max-w-7xl mx-auto py-2 sm:px-6 lg:px-2">
            <div
              class="
                md:grid md:grid-cols-4
                md:gap-6
                py-2
                sm:px-2
                lg:px-3
                bg-white
                rounded-md
              "
            >
            
              <div
                class="md:col-span-1 md:border-r border-gray-300 px-2 sm:px-1"
              >
                <MembresEquipeCard :id_equipe="id" />
                 <div class="px-2 py-2 sm:px-0">
                  <div
                    class="
                      border border-grey-light
                      lg:border lg:border-grey-light
                      bg-white
                      rounded
                      lg:rounded
                      p-2
                      flex flex-col
                      justify-between
                      leading-normal
                    "
                  >
                    <div
                      class="bg-green-50 overflow-hidden shadow sm:rounded-lg"
                    >
                      <div
                        class="
                          w-full
                          h-8
                          px-1
                          pb-1
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <div
                          class="text-left px-2 py-1 text-xl flex items-center"
                        >
                          <p class="text-grey-800 font-bold">Décisions</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="px-2 py-2 flex items-center">
                        <router-link :to="{name: 'Consulter'} ">
                          <button
                            type="submit"
                            class="
                              py-1
                              px-2
                              border border-transparent
                              shadow-sm
                              text-sm
                              font-medium
                              rounded-md
                              text-white
                              bg-blue-400
                              hover:bg-blue-500
                            "
                          >
                            Consulter
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProjetInformationCard :id_equipe="1" :modifier="true" />  
            </div>
          </div>
        </div>
      </div>
    </main>
  </WelcomeLayout>
</template>
<script>
import MainHeader from '../../../components/mainHeader.vue'
import WelcomeLayout from "../../WelcomeLayout.vue";
import ProjetInformationCard from '../../../components/ProjetInformationCard.vue'
import MembresEquipeCard from '../../../components/MembresEquipeCard.vue';

export default {
  components: {
    MainHeader,
    WelcomeLayout,
    ProjetInformationCard,
    MembresEquipeCard,
  },
};
</script>

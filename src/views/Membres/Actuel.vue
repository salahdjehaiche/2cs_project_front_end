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
                        <a :href="'/actuel/consulter'">
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:col-span-3">
                <div class="px-2 sm:px-0">
                  <div class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                    <div
                      class="
                        w-full
                        h-10
                        px-3
                        pb-1
                        flex
                        items-center
                        justify-between
                      "
                    >
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
                        <div class="px-2 py-2 flex items-center">
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
                              bg-green-400
                              hover:bg-green-500
                            "
                          >
                            Modifier
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="nom"
                            class="block text-sm font-medium text-black"
                            >Intitulé de projet</label
                          >
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="nom"
                            class="block text-sm font-medium text-black"
                            >Domaine de recherche</label
                          >
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="prenom"
                            class="block text-sm font-medium text-black"
                            >Filière</label
                          >
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="nom"
                            class="block text-sm font-medium text-black"
                            >Spécialité</label
                          >
                        </div>

                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="file"
                            class="block text-sm font-medium text-black"
                            >Intitulé de la formation doctorale</label
                          >
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="file"
                            class="block text-sm font-medium text-black"
                            >Problématique</label
                          >
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="file"
                            class="block text-sm font-medium text-black"
                            >Mot clés</label
                          >
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="file"
                            class="block text-sm font-medium text-black"
                            >Objectifs</label
                          >
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="file"
                            class="block text-sm font-medium text-black"
                            >Méthodologie</label
                          >
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                          <div
                            class="
                              w-full
                              h-10
                              px-2
                              flex
                              items-center
                              justify-between
                            "
                          >
                            <div
                              class="
                                text-left
                                px-1
                                py-1
                                text-xl
                                flex
                                items-center
                              "
                            >
                              <p class="text-grey-800 font-bold">
                                Collaborations
                              </p>
                            </div>
                          </div>
                          <div class="flex flex-col py-4">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div
                class="shadow overflow-hidden border-b border-blue-200 sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-blue-200">
                  <thead>
                    <tr>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Etablissement
                      </th>

                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nom
                      </th>

                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Prénom
                      </th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Fonction
                      </th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Pays
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-sm font-bold leading-5 text-blue-600">
                          --
                        </div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900">--</div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900">--</div>
                      </td>
                      <td class="px-6 py-2 whitespace-normal">
                        <div class="text-xs leading-5 text-gray-900">--</div>
                      </td>
                      <td class="px-6 py-2 whitespace-normal">
                        <div class="text-xs leading-5 text-gray-900">--</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
import WelcomeLayout from "../WelcomeLayout.vue";
import MainHeader from '../../components/mainHeader.vue'
import MembresEquipeCard from '../../components/MembresEquipeCard.vue';

export default {
  components: {
    MainHeader,
    WelcomeLayout,
    MembresEquipeCard,
  },
};
</script>

<template>
  <welcome-layout>
    <header class="bg-blue-100 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
          <a :href="'/actuel'" class="text-blue-800   hover:text-blue-500 hover:font-bold">Projet Actuel</a> <span class="text-grey-dark text-center font-bold">></span>
          <a :href="'/contrat'" class="text-blue-800   hover:text-blue-500 hover:font-bold">Contrat</a> <span class="text-grey-dark text-center font-bold">></span>Créer Contrat
        </h1>
      </div>
    </header>
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
                      Remplir les informations du contrat
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-4 sm:px-0">
                  <form>
                    <div class="overflow-hidden sm:rounded-md">
                      <!--contrat infos-->
                      <div   class="px-2 py-2 bg-white sm:p-6 border-b">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-4">
                            <label
                              for="title"
                              class="block text-sm font-medium text-black"
                              >Titre du contrat</label
                            >
                            <input
                              type="text"
                              name="title"
                              id="title"
                              placeholder="Titre"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="nom"
                              class="block text-sm font-medium text-black"
                              >Date de signature</label
                            >
                            <input
                              type="date"
                              name="date_sign"
                              id="date_sign"
                              placeholder="Date de signature"
                              autocomplete="given-name"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-6">
                            <label
                              for="prenom"
                              class="block text-sm font-medium text-black"
                              >Détail</label
                            >
                            <textarea
                              maxlength="300"
                              name="detail"
                              id="detail"
                              rows="10"
                              cols="80"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              placeholder="Détail"
                              required
                            ></textarea>
                          </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label
                              for="file"
                              class="block text-sm font-medium text-black"
                              >Fichier</label
                            >
                            <input
                              type="file"
                              name="file"
                              id="file"
                              placeholder="Selectionner"
                              class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                              required
                            />
                          </div>
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
  </welcome-layout>
</template>
<script>
import WelcomeLayout from "./../../WelcomeLayout";
export default {
  components: {
    WelcomeLayout,
  },
};
</script>

<template>
  <welcome-layout>
    <header class="bg-blue-100 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
          Nouvelle invitation pour rejoindre une équipe
        </h1>
      </div>
    </header>
    <main class="bg-white">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full max-w-7xl mx-auto py-2 sm:px-3 lg:px-1">
            <div
              class="md:grid md:grid-cols-4 md:gap-6 py-2 sm:px-3 lg:px-2 bg-white rounded-md"
            >
              <div
                class="md:col-span-4  px-2 sm:px-1"
              >
                <div class="px-2 sm:px-0">
                  <div class=" overflow-hidden  sm:rounded-lg">
                    <div
                      class="
                        w-full
                        h-10
                        px-1
                        pb-1
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div
                        class="text-left px-2 py-1 text-lg flex items-center"
                      >
                        <p class="text-grey-800 font-normal">
                          Vous avez reçu une invitation pour rejoindre une équipe de la part de: 
                          <span class="text-blue-800 text-center font-sm ml-2">
                              <a href="#" class="underline">{{Invitation.Source}}</a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div
              class="w-full h-15 px-6 pb-2 flex items-center justify-between"
            >
              <div class="text-left px-2 py-4 text-xl flex items-center">
              </div>
              <div
                class="text-left px-2 py-4 text-xl flex items-center justify-between"
              >
                <div class="px-6 pb-2 flex items-center">
                  <button
                    
                    id="btn"
                    class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    <div class="flex items-center">
                      <h3>Accepter</h3>
                    </div>
                  </button>
                </div>
                <div class="px-6 pb-2 flex items-center">
                  <button
                    
                    id="btn"
                    class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    <div class="flex items-center">
                      <h3>Refuser</h3>
                    </div>
                  </button>
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
  data() {
    return {
      Invitation: {
        Id: 1,
        Source: "Oussama kherroubi"
      },
    };
  },
};
</script>

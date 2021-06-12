<template>
  <welcome-layout>
    <header class="bg-blue-100 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
          Publications
        </h1>
      </div>
    </header>
    <main class="">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full h-15 px-6 py-3 pb-2 flex items-center justify-between">
            <div class="text-left px-2 py-4 text-xl flex items-center"></div>
            <div class="flex relative text-xl">
              <div class="px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
                  class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500"
                >
                  <div class="flex items-center">
                    <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                      <path
                        d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4
	v4H9v-4H5V9h4V5h2v4h4V11z"
                      />
                    </svg>
                    <h3>Ajouter Publication</h3>
                  </div>
                </button>
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

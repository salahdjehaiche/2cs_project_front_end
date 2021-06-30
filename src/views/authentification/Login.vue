<template>
    <div  id="login" class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        class="flex flex-col overflow-hidden  bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          class="p-2 py-6  bg-blue-200 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center "
        >
          <div class="w-3/4 flex px-4 items-center ml-2 ">
            <img src="../../assets/ProjetRechercheBlanc2.png"  alt="2a logo">
          </div>
          <div class="py-4 text-xl font-bold tracking-wider text-center">
            Projet de recherche
            <p class="py-2 m-6 text-sm text-justify font-normal  text-gray-900 md:mt-0">
            Un système qui va permeetre à la DPGR de suiver les différents projets de recherches et aux partie concernées d'éxecuter ces opérations
          </p>
          </div>
          
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-center text-gray-700">Connexion</h3>
          <form  @submit.prevent="doLogin" class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="username" class="text-sm font-semibold text-left text-gray-500">Nom Utilisateur</label>
              <input
                type="username"
                id="username"
                v-model="username"
                autofocus
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-500">Mot de passe</label>                
              </div>
              <input
                type="password"
                id="password"
                v-model="password"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-400 rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
    import {  mapActions } from 'vuex'
    export default {
        name: 'Login',
        data: () => ({
            username: "",
            password: "",
        }),
        methods: {
            ...mapActions('login', {
                login: 'login'
            }),
                reset() {
                this.$refs.form.reset();
            },
            doLogin() {
                const { username, password } = this;
                if(this.username != "" && this.password != "") {
                    this.login({ username, password });
                }else{
                    alert('Please fill the text!');
                }
            }
        },
    }
</script>
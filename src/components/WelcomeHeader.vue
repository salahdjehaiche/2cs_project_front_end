<template>
   
    <!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-white border-b-2 h-15">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
       <div class="flex">
                <!-- mobile hamburger -->
                <div class="inline-block lg:hidden  items-center mr-4">
                    <button
                        class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
                        @click="toggleSidebar()"
                    >
                        <svg
                            class="h-5 w-5"
                            v-bind:style="{ fill: 'black' }"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path
                                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button class="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="fill-current mr-3 hover:text-blue-500">
          <path d="M0 0h24v24H0z" fill="none"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
          
        </button>

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button @click="dropDownOpen = !dropDownOpen"
            type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>
        
          <div  :class="dropDownOpen ? '' : 'hidden'"
           class="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <router-link  :to="{name : 'Consulterprofile',params: {user:user ,id :id_équipe}}">
                <div class="flex items-center space-x-3 text-gray-700 p-2 rounded-md block px-2 py-2 text-sm text-gray-700 hover:bg-gray-200">
                    <span class="text-gray-600">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span>Mon profile</span>
                </div>
            </router-link>
            <router-link  :to="{name : 'Modifierprofile'}  ">
                <div class="flex items-center space-x-3 text-gray-700 p-2 rounded-md block px-2 py-2 text-sm text-gray-700 hover:bg-gray-200">
                    <span class="text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span>Changer Profile</span>
                  </div>
            </router-link >
            <router-link  to="/login" @click="doLogout" >
            <div class="flex items-center space-x-3 text-gray-700 p-2 rounded-md block px-2 py-2 text-sm text-gray-700 hover:bg-gray-200">
                    <span class="text-gray-600">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </span>
                    <span>Déconnecter</span>
            </div>  
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
    </div>
  </div>
</nav>
</template>



<script>
import { mapActions, mapState } from "vuex";

export default {
    name: "Navbar",
      
    computed: {
        ...mapState(["sideBarOpen"]),      
    },
    data() {
        return {
            dropDownOpen: false,
            user:{nom:"djehaiche"}
        };
    },
    methods: {
        toggleSidebar() {
            this.$store.dispatch("toggleSidebar");
        },
        ...mapActions('login', {
                logout: 'logout'
            }),
                reset() {
                this.$refs.form.reset();
            },
            doLogout() {
                this.logout();
            }
    }
};

</script>



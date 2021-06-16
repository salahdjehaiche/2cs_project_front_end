<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div @click.self="toggleSidebar()"    class="md:rotate overflow-y-auto bg-gray-800 w-full md:w-1/2 bg-opacity-75 
    md:opacity-100   lg:w-72 fixed  md:top-15 lg:top-0 top-0 md:left-0 h-screen lg:block md:bg-white border-r-2  z-30" 
     :class="sideBarOpen ? '' : 'hidden'" id="main-nav">
      <div class="bg-white w-3/4 sm:w-1/2 md:w-full opacity-100 z-10">
          <div class="w-full   flex px-4 items-center mb-8 ">
            <img src="../assets/ProjetRechercheBlanc2.png" alt="2a logo">
          </div>
          <div class="mb-4 px-4 text-black-800" id="nav" v-for="link in  sideBar" :key="link" >
              <router-link  :to="{name : link.name}  ">
              <div class="w-full flex items-center  h-10 pl-4 transition-colors duration-150 hover:text-black  hover:bg-blue-200 hover:text-gray-600 rounded-lg cursor-pointer">

                  <svg  v-if="!link.herite" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current mr-1 text-blue-700 " viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                  </svg>
                  <div class="ml-4" v-else>
                    <svg  class="h-6 w-6 fill-current mr-1 text-blue-700" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  <p>{{link.label}} </p>
              </div>
            </router-link> 

          </div>

      </div>      
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props:['sideBar'],
    name: 'Sidebar',
    components:{
        
    },
    computed: {
        ...mapState(['sideBarOpen'])
    },
    methods:{
           toggleSidebar() {
            this.$store.dispatch("toggleSidebar");
        }
    }
}
</script>
<style >

.rotate {
   direction: rtl;
  overflow-y: scroll;
  }
.rotate div{
  direction: ltr;
}
</style>
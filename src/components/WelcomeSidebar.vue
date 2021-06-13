<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div class="overflow-y-auto w-1/2 md:w-1/3 lg:w-64 fixed   md:top-0 md:left-0 h-screen lg:block bg-white border-r-2  z-30" :class="sideBarOpen ? '' : 'hidden'" id="main-nav">

          <div class="w-full   flex px-4 items-center mb-8 ">
            <img src="../assets/logo.png" alt="2a logo">
          </div>
          <div class="mb-4 px-4 " v-for="link in  sideBar" :key="link" >
              <router-link :to="{name : link.name} ">
              <div class="w-full flex items-center text-blue-800 h-10 pl-4  hover:bg-blue-200  rounded-lg cursor-pointer">
                  <svg v-if="!link.herite" class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                      <path d="M18.672,11H17v6c0,0.445-0.194,1-1,1h-4v-6H8v6H4c-0.806,0-1-0.555-1-1v-6H1.328c-0.598,0-0.47-0.324-0.06-0.748L9.292,2.22 C9.487,2.018,9.743,1.918,10,1.908c0.257,0.01,0.513,0.109,0.708,0.312l8.023,8.031C19.142,10.676,19.27,11,18.672,11z"/>
                  </svg>
                  <div class="ml-4" v-else>
                    <svg  class="h-6 w-6 fill-current mr-1" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  {{link.label}}
              </div>
            </router-link> 

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
    }
}
</script>

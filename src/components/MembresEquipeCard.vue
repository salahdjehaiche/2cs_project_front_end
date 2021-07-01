<template>
    <div class="md:col-span-1  px-2 sm:px-1">
        <div class="px-2 sm:px-0">
            <div
                class="  border border-grey-light  lg:border lg:border-grey-light  bg-white  rounded  lg:rounded  p-2  flex flex-col  justify-between  leading-normal">
            
                <div class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                    <div
                        class="  w-full  h-8  px-1  pb-1  flex  items-center  justify-between"  >
                        <div
                        class="text-left px-2 py-1 text-xl flex items-center"
                        >
                        <p class="text-grey-800 font-bold">Membres</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="text-sm">
                        <ul v-for="membre in membres" :key="membre">
                            <li class="flex items-center text-black py-2 hover:text-blue-500" @click="openProfile">
                                <svg
                                class="h-4 w-4 fill-current mr-2 bi text-gray-600"
                                viewBox="0 0 16 16"
                                >
                                <circle cx="8" cy="8" r="8"/>
                                </svg>
                                <router-link :to="{name : 'Consulterprofile' ,params: {user:membre.pk}}"  class="text-grey-dark text-center">
                                     {{membre.last_name}} {{membre.first_name}} 
                                </router-link >
                            </li>                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['id_equipe'],
data(){
    return{
        membres:[
            {last_name:'Djehaiche',first_name:'Salah'},
            {last_name:'Debabza',first_name:'Idriss'},
            {last_name:'Telli',first_name:'Mohamed Khouja'},
            {last_name:'Haddad',first_name:'Zineddine'},
            {last_name:'Kherroubi',first_name:'Oussama'},
        ],
    }
},
mounted(){         
          let token =localStorage.getItem('token')
          const  headers={
            'Authorization' : `Bearer ${token}`,
          }
        fetch('https://django-app-dpgr.herokuapp.com/v1/api/teams/',{headers})
            .then(res=> res.json())
            .then(data => {
              console.log(data)
              this.membres = data           
            })
            .catch(err => console.log(err.message))         
    },
}
</script>

<style>

</style>
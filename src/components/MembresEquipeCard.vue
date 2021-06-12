<template>
    <div class="md:col-span-1 px-3 sm:px-2">
        <div class="px-4 sm:px-0">
            <div
                class="border border-grey-light lg:border lg:border-grey-light bg-white rounded lg:rounded p-2 flex flex-col justify-between leading-normal"
            >
                <div class="mb-2">
                <div class="text-black font-bold text-xl">Membres</div>
                </div>
                <div class="flex items-center">
                <div class="text-sm">
                    <ul v-for="membre in membres" :key="membre">
                    <li class="flex items-center text-black py-2 hover:text-blue-500" @click="openProfile">
                       <svg
                              class="h-6 w-6 fill-current mr-2"
                              viewBox="0 0 20 20"
                            >
                              <path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
                            </svg>
                        <span class="text-grey-dark text-center"
                        >{{membre.nom}} {{membre.prenom}}</span
                        >
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
            {nom:'Djehaiche',prenom:'Salah'},
            {nom:'Debabza',prenom:'Idriss'},
            {nom:'Telli',prenom:'Mohamed Khoja'},
            {nom:'Haddad',prenom:'Zineddine'},
            {nom:'Kherroubi',prenom:'Oussama'},
        ],
    }
},
methods:{
    openProfile(){
        console.log("--------profile--------")
    }
}
}
</script>

<style>

</style>
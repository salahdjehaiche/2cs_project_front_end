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
                    <li class="flex items-center text-black py-2">
                        <svg
                        class="h-6 w-6 fill-current mr-2 text-blue-800"
                        viewBox="0 0 20 20"
                        >
                        <path fill="none" d="M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625"></path>
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
}
}
</script>

<style>

</style>
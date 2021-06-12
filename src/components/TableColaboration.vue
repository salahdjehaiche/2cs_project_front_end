<template>                       
    <div class="col-span-6 sm:col-span-6">
        <div class="  w-full  h-10  px-2  flex  items-center  justify-between">
            <div
            class=" text-left px-1 py-1 text-xl flex items-center  ">
                <p class="text-grey-800 font-bold">
                    Collaborations
                </p>
            </div>
        </div>
        <div class="flex flex-col py-4">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-blue-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-blue-200">
                        <thead>
                            <tr>
                            <th
                                class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Etablissement
                            </th>

                            <th
                                class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Nom
                            </th>

                            <th
                                class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Prénom
                            </th>
                            <th
                                class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Fonction
                            </th>
                            <th
                                class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Pays
                            </th>
                            
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="tab in tableau" :key="tab">
                                <td class="px-6 py-2 whitespace-no-wrap">
                                    <div class="text-sm font-bold leading-5 text-blue-600">
                                    {{tab.etablissement}}
                                    </div>
                                </td>
                                <td class="px-6 py-2 whitespace-no-wrap">
                                    <div class="text-xs leading-5 text-gray-900">{{tab.nom}}</div>
                                </td>
                                <td class="px-6 py-2 whitespace-no-wrap">
                                    <div class="text-xs leading-5 text-gray-900">{{tab.prenom}}</div>
                                </td>
                                <td class="px-6 py-2 whitespace-normal">
                                    <div class="text-xs leading-5 text-gray-900">{{tab.fonction}}</div>
                                </td>
                                <td class="px-6 py-2 whitespace-normal">
                                    <div class="text-xs leading-5 text-gray-900">{{tab.pays}}</div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>               
</template>
<script>

export default {
     props:['tableau'],
  components: {
    
  },
};
</script>

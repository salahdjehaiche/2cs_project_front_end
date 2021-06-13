<template>
    <div class="flex flex-col py-4">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div
                class="shadow overflow-hidden border-b border-blue-200 sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-blue-200">
                  <thead>
                    <tr>
                      <th
                        class="px-6 py-3 bg-blue-50  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        id_équipe
                      </th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Chef Equipe
                      </th>

                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        intutilé
                      </th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>                      
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Etat
                      </th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                      <th
                        class="px-6 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="tab in tableau" :key="tab">
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-sm font-bold leading-5  text-blue-600">
                          {{tab.id_équipe}}
                        </div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900 text-left"> {{tab.chef_equipe}} </div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900 text-left">{{tab.intutilé}}</div>
                      </td>
                      <td class="px-6 py-2 whitespace-normal">
                        <div class="text-xs leading-5 text-gray-900 text-left">{{tab.date}}</div>
                      </td>
                      <td class="px-6 py-2 whitespace-normal">
                        <div class="text-xs leading-5 text-gray-900 text-left">{{tab.etat}}</div>
                      </td>
                      <td class="px-6 py-2 whitespace-normal">
                        <div class="text-xs leading-5 text-gray-900">
                          <div class="text-xs leading-5 text-gray-900">
                          <router-link  :to="{name:linkName.name ,params: {user:linkName.user ,id :tab.id_équipe}}"
                            class="text-blue-800 hover:text-blue-500 hover:font-bold"
                          >
                            <svg
                              class="h-6 w-6 fill-current mr-2 text-red-700 cursor-pointer"
                              viewBox="0 0 20 20"
                            >
                              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                              <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
                            </svg>
                          </router-link>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-xs leading-5 text-gray-900 text-left">
                          <router-link  :to="{name:linkName.name ,params: {user:linkName.user ,id :tab.id_équipe}}"
                            class="text-blue-800 hover:text-blue-500 hover:font-bold"
                          >
                            <svg
                              class="h-6 w-6 fill-current mr-2 text-green-700 cursor-pointer"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"
                              ></path>
                            </svg>
                          </router-link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    props:['tableau','linkName'],
    mounted(){
        console.log(this.linkName)
    }
}
</script>

<style>

</style>
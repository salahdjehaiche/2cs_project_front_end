<template>
  <WelcomeLayout>
    <MainHeader :titre="'Projet Actuel'" />
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full max-w-7xl mx-auto py-2 sm:px-6 lg:px-2">
            <div class="md:grid md:grid-cols-4  md:gap-6  py-2  sm:px-2  lg:px-3  bg-white  rounded-md">
            
              <div class="md:col-span-1 md:border-r border-gray-300 px-2 sm:px-1" >
                <MembresEquipeCard :id_equipe="id" />
                 <div class="px-2 py-2 sm:px-0">
                  <div class="border border-grey-light  lg:border lg:border-grey-light  bg-white  rounded  lg:rounded  p-2  flex flex-col  justify-between  leading-normal">
                    <div  class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                      <div  class=" w-full h-8 px-1 pb-1  items-center justify-between  ">
                        <div  class="text-center px-2 py-1 text-md  items-center">
                          <p class="text-grey-800 font-bold">Décisions</p>
                        </div>
                      </div>
                    </div>
                    <div class=" items-center">
                      <div class="py-2  items-center ">
                        <router-link :to="{name: 'Consulter',params :{id:id_projet}} ">
                          <button type="submit"
                            class="  py-1  px-2  border border-transparent  shadow-sm  text-sm  font-medium  rounded-md  text-white  bg-blue-400  hover:bg-blue-500"
                          >
                            Consulter
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <!-----Delais de soumission---->
                <div class="px-2 py-2 sm:px-0">
                  <div class="border border-grey-light  lg:border lg:border-grey-light  bg-white  rounded  lg:rounded  p-2  flex flex-col  justify-between  leading-normal">
                    <div  class="bg-green-50 overflow-hidden shadow sm:rounded-lg">
                      <div  class=" w-full h-8 px-1 pb-1  items-center justify-between  ">
                        <div  class="text-center px-2 py-1 text-md  items-center">
                          <p class="text-grey-800 font-bold">Delais de Soumission</p>
                        </div>
                      </div>
                    </div>
                    <div class=" items-center">
                      <div class="py-2  items-center">
                         <label for="nom" class="block text-sm italic text-black text-center ">
                                {{dateFinSoummission}}
                          </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProjetInformationCard :id_equipe="1" :modifier="true" />  
            </div>
          </div>
        </div>
      </div>
    </main>
  </WelcomeLayout>
</template>
<script>
import MainHeader from '../../../components/mainHeader.vue'
import WelcomeLayout from "../../WelcomeLayout.vue";
import ProjetInformationCard from '../../../components/ProjetInformationCard.vue'
import MembresEquipeCard from '../../../components/MembresEquipeCard.vue';
import axios from 'axios'
export default {
  components: {
    MainHeader,
    WelcomeLayout,
    ProjetInformationCard,
    MembresEquipeCard,
  },
  data(){
    return{
      dateFinSoummission:"12/12/2021",
      id_projet:'',
    }
  },
  mounted(){
      let token =localStorage.getItem('token')               
        axios.get('http://192.168.43.213:8000/v1/api/configs/',{params : {type:'SM'},
            headers:{
                "Content-Type":"application/json", 
                'Authorization': 'Bearer '+token
                },
            }).then(response => {
            if (response.status==200){
                this.dateFinSoummission=response.data[0].to_date
              }
            })
            .catch(error => (console.log(error)));

    //------------------------------------------------------------------------

  }
};
</script>

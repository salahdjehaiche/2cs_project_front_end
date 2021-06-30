<template>
  <WelcomeLayout>  
    <MainHeader :titre="' Soumettre un projet'" />         
    <main class="bg-white">
     <FormulaireProjet :type="'creer'"/>
    </main>
  </WelcomeLayout>
</template>
<script>
import MainHeader from '../../../components/mainHeader.vue'
import WelcomeLayout from "../../WelcomeLayout.vue";
import FormulaireProjet from './FormulaireProjet.vue';
export default {
  components: {
    WelcomeLayout,
    MainHeader,
    FormulaireProjet
  },
  data() {
            return {
                form: {
                    title: null,
                    description: null,
                    collaborations: [
                       // {etab: null, nom: null, prenom: null,fonction:null}
                    ]
                },
                SelectOption: "non",
                SelectPays: "1",
                selectColab:false,
                international:false,
            }
        },
        methods: {
            add() {
                this.form.collaborations.push({etab: null, nom: null, prenom: null,fonction:null,pays:"algérie"});
            },
            remove() {
                this.form.collaborations.pop();
            },
            selectAction(){
        if(this.SelectOption=="oui"){
           this.selectColab=true
        }else{
          this.selectColab=false
        }
    },
    selectType(){
        if(this.SelectPays=="2"){
           this.international=true
        }else{
          this.international=false
        }
    },
            
        }
};
</script>

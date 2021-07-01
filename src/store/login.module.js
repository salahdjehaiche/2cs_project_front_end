import { loginService } from '../services/login.service';
import  router  from '../router/index.js';
import axios from 'axios'

const state = {
    isLogin: false,
    token:null,
    user:null,
};
const actions = {
    async login({commit}, { username, password }) {
        commit('loginRequest', { username });
    
        let result = await loginService.login(username, password);
        console.log(result)
        if(result){        
                   
            let response = await axios({
                method: 'get',
                url: 'http://192.168.43.213:8000/v1/api/users/auth-user',
                headers:{
                    "Content-Type":"application/json",
                    'Authorization': 'Bearer '+result 
                    },
                }); 
                localStorage.setItem('token', result)
             
                if (response.status==200){                                      
                    let user_type = response.data.user_type;
                    commit('loginSuccess',response.data);
                    if (response.data.team_id!=null)
                    {localStorage.setItem('id_equipe',response.data.team_id)}
                     if (user_type=="MEMBRE_DPGR"){
                        router.push({name : 'GestionUtilisateur'});
                     }else if (user_type=="MEMBRE_CS"){
                         router.push({name : 'ConsulterProjetCS'});
                     }else if (user_type=="MEMBRE_LMCS" || user_type=="MEMBRE_MCSI" ){
                         router.push({name : 'ConsulterProjetCL'});
                     }else {
                         router.push({name : 'Actuel'});
                        }
                                                         
                }else{
                    commit('loginFailure');
                }           
        }
    },
    logout({commit}) {
        commit('resetState');
        router.push('/login');
    },
    clearState ({ commit }) {
        commit('resetState');
    },
};
const mutations = {
    resetState (state) {
        state.isLogin=false;
        state.token=null;
        state.user=null;        
    },
    loginRequest(state, user) {
        state.isLogin=true;
        state.token=null;
        state.user=user;
    },
    loginSuccess(state,data) {
        state.isLogin=true;
        state.token=null;
        state.user=data;        
    }, 
    loginFailure(state) {
        state.isLogin=false;        
    },
};
export const login = {
    namespaced: true,
    state,
    actions,
    mutations
};
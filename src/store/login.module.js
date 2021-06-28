import { loginService } from '../services/login.service';
import  router  from '../router/index.js';
const state = {
    isLogin: false,
    token:null,
    user:null,
};
const actions = {
    login({commit}, { email, password }) {
        commit('loginRequest', { email });
    
        let result = loginService.login(email, password);
        if(result){
            commit('loginSuccess',{result});
            if (result.role=="dpgr")
            {
                router.push('/');
            }else{
                router.push({name : 'Actuel'});
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
    loginSuccess(state,user) {
        state.isLogin=true;
        state.token=null;
        state.user=user;        
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
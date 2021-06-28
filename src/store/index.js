import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
//general
import { login } from './login.module';


export default createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    modules: {
        login
    },
    state: {
        sideBarOpen: false
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },
    mutations: {
        toggleSidebar (state) {
            state.sideBarOpen = !state.sideBarOpen
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        }
    },
})

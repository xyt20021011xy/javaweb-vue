// 用于创建 store 实例
import { createStore } from 'vuex'


// 创建一个新的 store 实例
const store = createStore({

    state:{
        token:'',
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = null;
        },
    },
    actions: {
        saveToken({ commit }, token) {
            commit('setToken', token);
        },
        removeToken({ commit }) {
            commit('clearToken');
        },
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        isAuthenticated(state) {
            return state.token !== null;
        },
    },
})
export default store


import vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

vue.use(Vuex)


export default new Vuex.Store({
    state: {
        result: {}
    },
    actions: {
        updateResult({ commit }, b) {
            commit('UPDATE', b)
        }
    },
    mutations:{
        UPDATE(state, a) {
            localStorage.clear();
            state.result = a
        }
    },
    plugins: [persistedState()]
})
export default {
    namespaced: true,
    state: {
        countriesList: []
    },
    getters: {
        getCountries(state) {
            return state.countriesList
        }
    },
    mutations: {
        setCountries(state, payload) {
            state.countriesList = payload
        }
    },
    actions: {
        setCountries({ commit }, payload) {
            commit('setCountries', payload)
        }
    }
}
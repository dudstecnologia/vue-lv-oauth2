import Vue from 'vue'

export default {
  state: {
    accountList: []
  },
  mutations: { // São responsáveis por modificar os states
    updateAccountsList (state, data) {
      state.accountList = data
    }
  },
  actions: { // Especificos para chamar fora do vuex
    getAccounts (context) {
      Vue.http.get('api/accounts').then(response => {
        context.commit('updateAccountsList', response.data.data)
      }).catch(resp => {
        console.log(resp)
      })
    }
  }
}

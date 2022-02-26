// import Vue from 'vue'
// import Vuex from 'vuex'
// import {Auth, API, graphOperation } from 'aws-amplify'
// import {} from '@/graphql/mutations'
// import {} from '@/graphql/queries'

// Vue.use(Vuex)

export const state = () => ({
  user: '',
  authenticated: false,
})

export const mutations = {
  updateUser(state, value) {
    state.user = value
  },
}

export const actions = {
  amplifySignIn_WithCredentials({ commit }, payload) {
    console.log(payload)
    commit('updateUser', payload)
    // console.log(username)
    // console.log(password)
  },
}

export const getters = {
  isLoggedIn(state, getters) {
    return false
  },
}

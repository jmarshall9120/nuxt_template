// import Vue from 'vue'
// import Vuex from 'vuex'
// import {Auth, API, graphOperation } from 'aws-amplify'
// import {} from '@/graphql/mutations'
// import {} from '@/graphql/queries'

// Vue.use(Vuex)

export const state = () => ({
  user: '',
})

export const mutations = () => ({
  updateUser(state, value) {
    state.user = value
  },
})

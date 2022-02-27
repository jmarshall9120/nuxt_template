// import {Auth, API, graphOperation } from 'aws-amplify'
// import {} from '@/graphql/mutations'
// import {} from '@/graphql/queries'

export const state = () => ({
  email: '',
  username: '',
  scopes: [],
  jwt: {},
  expiration: null,
})

export const mutations = {
  updateUser(state, user) {
    state.email = user.attributes.email
    state.username = user.username
    state.scopes = user.signInUserSession.accessToken.payload['cognito:groups']
  },
}

export const actions = {
  // Remove this when going to amplify
  amplifyFetchUser(context, payload) {
    const user = {
      username: 'utUsername',
      attributes: {
        email: 'utEmail@something.com',
      },
      signInUserSession: {
        accessToken: {
          payload: {
            'cognito:groups': ['admin', 'inside'],
          },
        },
      },
    }
    context.commit(user)
  },
  amplifySignIn_WithCredentials(context, payload) {
    console.log(payload)
    console.log('This is working')
    context.commit('updateUser', payload)
  },

  // After Amplify Initialized
  // /////////////////////////////////////////////////////////

  // // Fetch user after Authenticating
  // amplifyFetchUser: async (context, payload) => {
  //   try {
  //     cognitoUserObj = await Auth.currentAuthenticatedUser()
  //     return cognitoUserObj
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },

  // // Authenticate With Office 365
  // amplifySignIn_With365: async (context, payload) => {
  //   await Auth.federatedSignIn(payload)
  // },

  // // Authenticate with Credentials
  // amplifySignIn_WithCredentials: async (context, payload) => {
  //   console.log(payload)
  //   context.commit('authResolved', false)
  //   try {
  //     const cognitoUserObj = await Auth.signIn(...payload)
  //     context.commit('user', [cognitoUserObj, ''])
  //   } catch (error) {
  //     context.commit('user', [null, error])
  //   } finally {
  //     context.commit('authResolved', true)
  //   }
  // },

  // // Sign out
  // amplifySignOut: async (context) => {
  //   context.commit('authResolved', false)
  //   await Auth.signOut()
  //   console.log('signOut processed')
  //   context.dispatch('authenticate')
  // },
  // ////////////////////////////////////////////
}

export const getters = {
  isAuthenticated(state, getters) {
    return state.username
  },
  getUserGroups: (state) => {
    if (state.authorized) {
      return (
        state.user.signInUserSession.accessToken.payload['cognito:groups'] ?? []
      )
    }
    throw new Error('no authorized user')
  },
  getUserEmail: (state) => {
    return state.user.attributes.email
  },
  getUserName: (state) => {
    return state.user.username
  },
  getUser: (state) => {
    return state.user
  },
}

// // import { LocalScheme } from '~auth/runtime'

// export default class AmplifyManualScheme {
//   // login - MUST be implimented.
//   login({ data }) {
//     console.log(`login called: ` + data)
//     console.log(data.username)
//     console.log(data.password)
//     data.forEach((_) => {
//       console.log(_)
//     })
//     return { response: 'this is a response' }
//   }

//   // logout - MUST be implimented
//   logout(endpoint) {
//     console.log(`logout called: ` + endpoint)
//   }

//   // Override 'fetchUser' method of 'local' scheme
//   // Can be disabled by setting 'endpoints.user = false'
//   fetchUser(endpoint) {
//     console.log(`fetch user called: ` + endpoint)
//     // if (!this.check().valid) {
//     //   return
//     // }
//   }
// }

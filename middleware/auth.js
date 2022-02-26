// export default function ({ store, redirect }) {
//   if (process.client && !store.user) {
//     return redirect('/login')
//   }
// }

// export default function ({ store, redirect }) {
//   if (process.client && !store.getters['isLoggedIn']) return redirect('/login')
// }

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}

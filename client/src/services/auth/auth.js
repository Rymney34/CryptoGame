export const authProvider = () => {
  let isAuthenticated = false
  let username = null
  const signin = (username, callback) => {
      isAuthenticated = true
    username = username
    callback()
    }
  const signout = ()=> {
    isAuthenticated = false
    username = ""
  }

  return {isAuthenticated, username, signin, signout}
}
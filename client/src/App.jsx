import { useState, createContext } from "react"
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  createBrowserRouter
} from "react-router-dom"

import Root from "./pages/Root"

import { authProvider } from "./services/auth/auth"
import FormAuthOrLogin from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import { Container } from "@mui/material"

function App() {

  return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        height: '100vh',
        width: '100vw',
        bgcolor: 'background.default'
      }}>
      <AuthProvider>

          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" element={<FormAuthOrLogin />} />
            <Route path="/registration" element={<RegistrationPage/>} />
          </Routes>

      </AuthProvider>
    </Container>
  )
}
let AuthContext = createContext(null)

function AuthProvider({ children }) {
  let [user, setUser] = useState(null)

  let signin = (newUser, callback) => {
    return authProvider.signin(newUser, () => {
      setUser(newUser)
      callback()
    });
  };

  let signout = (callback) => {
    return authProvider.signout(() => {
      setUser(null)
    })
  }

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default App

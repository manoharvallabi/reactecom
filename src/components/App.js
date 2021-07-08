import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './Signup.js'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import PasswordReset from './PasswordReset'
import UpdateProfile from './UpdateProfile'
function App() {

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/" exact component={Dashboard}/>
              <Route path ="/signup" component={Signup} />
              <Route path ="/signin" component={Login} />
              <Route path ="/reset-password" component={PasswordReset} />
              <PrivateRoute path ="/update-profile" component={UpdateProfile} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;

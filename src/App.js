import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AuthContext from './store/auth-context';


function App() {

  const authCtx=useContext(AuthContext)
  console.log(authCtx.isLoggedIn)
  return (
    
    <Layout>
      <Switch>
        <Route path='/' exact>
         <HomePage></HomePage>
        </Route>
     <Route path='/auth'>
     {authCtx.isLoggedIn && <Redirect to='/home'></Redirect>}
        {!authCtx.isLoggedIn && <AuthPage></AuthPage>}
          
        </Route>

      <Route path='/profile'>
      {authCtx.isLoggedIn && <ProfilePage></ProfilePage>}
        {!authCtx.isLoggedIn && <Redirect to='/'></Redirect>}
        </Route>
        
        <Route path='/home'>
        {authCtx.isLoggedIn && <HomePage></HomePage>}
        {!authCtx.isLoggedIn && <Redirect to='/'></Redirect>}
        </Route>

        <Route path='*'>
          <Redirect  to='/'> </Redirect>
        </Route>
      </Switch>
    </Layout>
    
  );
}

export default App;

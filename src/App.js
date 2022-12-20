import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthProvider from './store/AuthProvider';

function App() {
  return (
    <AuthProvider>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AuthPage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
        <Route path='/home'>
        <HomePage></HomePage>
        </Route>
      </Switch>
    </Layout>
    </AuthProvider>
  );
}

export default App;

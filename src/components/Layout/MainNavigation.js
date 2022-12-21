import { useContext } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  const history=useHistory()

  const authCtx= useContext(AuthContext)
  const isLoggedIn=authCtx.isLoggedIn



  return (
    <header className={classes.header}>
      <Link to={isLoggedIn ? '/home':'/'}>
        <div className={classes.logo}>User Authentication Project</div>
      </Link>
      <nav>
        <ul>

          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLoggedIn && <li><Link to='/home'>Home</Link></li>}
          {isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          
          {isLoggedIn && <li>
            <button onClick={()=>{
              localStorage.removeItem('token')
              authCtx.logoutHandle()
              history.replace('/auth')
              }}>Logout</button>
          </li>}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

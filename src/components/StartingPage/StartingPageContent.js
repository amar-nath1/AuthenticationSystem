import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './StartingPageContent.module.css';



const StartingPageContent = () => {

 const authCtx=useContext(AuthContext)
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <p>Signed in as -<strong> {authCtx.email}</strong></p>
    </section>
  );
};

export default StartingPageContent;

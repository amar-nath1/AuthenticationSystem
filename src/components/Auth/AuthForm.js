import { useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading]=useState(false)

  const emailInputRef=useRef()
  const passwordInputRef=useRef()

  

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault()

    const emailInput=emailInputRef.current.value
  const passwordInput=passwordInputRef.current.value
  setIsLoading(true)

    if (isLogin)
    {

    }
    else{

      fetch( 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6gV-iYK4EULw5NTMHdnxDwyiMp9MDncI',
        {method:'POST',
      body:JSON.stringify({

        email:emailInput,
        password:passwordInput,
        returnSecureToken:true
      }),

      headers:{
        'Content-Type':'application/json'
      }
    
    }).then((res)=>{
      setIsLoading(false)
      if (res.ok){
        console.log('user registered successfully.')
      }
      else{
        return res.json().then((data)=>{
          let errorMsg='Authentication Failed'
          if (data && data.error && data.error.message){
            errorMsg=data.error.message
          }
          alert(errorMsg)
          
        })
      }
      })
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <Spinner animation='border' variant='light'/>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
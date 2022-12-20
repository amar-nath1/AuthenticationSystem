import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  const newPasswordInputRef=useRef()

  const authCtx=useContext(AuthContext)

  const changePasswordClickHandler=(event)=>{
    event.preventDefault()

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD6gV-iYK4EULw5NTMHdnxDwyiMp9MDncI',
    {

      method:'POST',
      body:JSON.stringify({

        idToken:authCtx.token,
        password:newPasswordInputRef.current.value,
        returnSecureToken:true
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      if(res.ok){
        console.log('password changed successfully')
      }
    })
  }

  return (
    <form onSubmit={changePasswordClickHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;

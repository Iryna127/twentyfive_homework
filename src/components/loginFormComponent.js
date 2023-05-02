
import { useContext } from 'react';
import { AuthContext } from '../providers/authProvider';
const LoginForm = () => {
    const authCtx = useContext(AuthContext);
   const doLogin = (event) => {    
     event.preventDefault();
     authCtx.doLogin(event.target[0].value);
   };
   const doLogout = (event) => {
  /*   event.preventDefault();
    authCtx.doLogout(event.target[0].value); */
  }
   return (
     <>
       <form onSubmit={doLogin} onClick= {doLogout}>
         <input type="text" placeholder="user name"></input>
         <button type="submit">Login</button>
       
       </form>

     </>
   );
 };
export default LoginForm;

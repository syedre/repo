import React from 'react';
import Ccar from './head';

class Login extends React.Component {
  
    render() {
    return ( 
    <div >
        <div>
            <Ccar/>
        </div>
    <div className="ui grid" >
         <div class="five wide column" style={{marginLeft:'400px',marginTop:'50px'}}> 
         <div style={{marginBottom:'20px',marginLeft:'150px'}}>
            <h3>Login</h3>
            </div>
       <form class="ui form">
         <div class="field">
            <label>User-ID/Email</label>
            <input type="text" name="user-id" placeholder="user-ID/Email"/>
        </div>
        <div class="field">
            <label>Password</label>
            <input type="text" name="password" placeholder="password"/>
        </div>
        <button class="ui primary button" type="submit">Login</button>
        </form>
        </div>
    </div>
    </div>
    )
  }
}
export default Login;


import React from 'react';
import Home from './homePage';
import Login from './Login';
import Compare from './compare';
import { Router ,Route} from 'react-router';
import Insurance from './insurance';
import {browserHistory} from 'react-router';
 


class Main extends React.Component {
  
    render() {
    return ( 
    <div >
        <Router history={browserHistory}> 
            
            <Route path ="/"  exact component={Home}/>
            <Route path ="/login" component={Login}/>
            <Route path ="/Compare" component={Compare}/>
            <Route path ="/insurance" component={Insurance}/>
            

               
                
         </Router>
       
    </div>
    )
  }
}
export default Main;


import React from 'react';
import Ccar from './head';
import UserList from './compo/manufacturer';

class Compare extends React.Component {
  
    render() {
    return ( 
    <div >
        <Ccar/> 
        <div className="ui grid" >
            <div class="four wide column" style={{marginLeft:'100px',marginTop:'50px'}}>

             <UserList/>

            </div>

            <div class="four wide column"  style={{marginLeft:'10px',marginTop:'50px'}}>

            <UserList/>

            </div>

       </div>
        <button 
        class="ui primary button" 
        type="submit"
        style={{marginLeft:'300px',marginTop:'20px'}}>
        Compare</button>
       
       
    </div>
    )
  }
}
export default Compare;


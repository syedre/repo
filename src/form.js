import React from 'react';
import './index.css';
import  useResources from './api';
import {browserHistory} from 'react-router';





const Appp =() => {
  const users = useResources();
  
  const onLogin=()=>{
    browserHistory.push("/login");
  }



return( 
    <div class="ui grid" style = {{ maxHeight:'50px',marginLeft:'60px',marginTop:'30px'}}  >
    <div class="left floated five wide column">
    <div className="ui container">
    <form class="ui form">
    <div >
      <h3> My Requirement</h3>
      <div class="inline field">
         <label>Mybudget</label>
        <input 
        type="text" 
        placeholder="Enter Budget"
        style={{marginLeft:'44px'}}
        />
      </div>
      <div class="inline field">
      <label>Riding Mostly in </label>
      <select class="ui dropdown" style={{marginLeft:'10px'}}>
        <option value="">City</option>
        <option value="1">Highway</option>
        <option value="0">Offroad</option>
      </select>
      </div>
      <div class="inline field">
        <label> Type of Fuel</label>
      <select class="ui dropdown" style={{marginLeft:'33px'}}>
        <option value="">Diesel</option>
        <option value="1">Petrol</option>
        <option value="0">Electric</option>
      </select>
      </div>
      <h4>
        Important For Me
      </h4>
      <div style = {{ marginLeft :'120px'}}>  
      <div class="ui checkbox">
        <input type="checkbox" name="example"/>
        <label>Mileage</label>
      </div>
      <br></br>
      <div class="ui checkbox">
        <input type="checkbox" name="example"/>
        <label>Safety</label>
      </div>
      <br></br>
      <div class="ui checkbox">
        <input type="checkbox" name="example"/>
        <label>Performance</label>
      </div>
      <br></br>
      <div class="ui checkbox">
        <input type="checkbox" name="example"/>
        <label>Looks</label>
      </div>
      </div>
     <br></br>
     <br></br>
     <div class="inline field">
      <label>Has this feature</label>
      <input 
      style ={{ marginLeft:'15px'}}
      type="text" 
      placeholder="search"/>
    </div>
      <br></br>
      <button class="ui teal button" style ={{ marginLeft:'50px'}}>Go</button>
     </div> 
    </form>
    </div>
    </div>
    <div class="rigt floated ten wide column">
    <div className="ui container" >

       <div class ="inline field">
        <label style = {{ fontStyle:'bold'}}> Hello Guest</label>
        <buttonGroup style={{ marginLeft:'10px'}}>
          
            <button class ="ui black basic button"
            onClick={onLogin}>
              login
            </button>
          
        <button class="ui black basic button">Register</button>
        </buttonGroup>
      </div>

      <div class="ui banner test ad" data-text="Banner"></div>

      
      <div class="inline field" style={{maxWidth:'700px'}}>
        <div >
        <label> Show Cars From</label>
      <select class="ui dropdown" style={{marginLeft:'33px'}}>
           {users.map(user =>(
                <option key ={user.manufacturer} value = {user.manufacturer}>
                 {user.manufacturer}
                 </option>
            
            ))}
      </select>
       

      <label> Sort by</label>
      <select class="ui dropdown" style={{marginLeft:'33px'}}>
        <option value="">Price</option>
        <option value="1">Capacity</option>
        <option value="0">Mileage</option>
      </select>
      </div>
      
      </div>
      


    </div>
    </div>
    </div>
       
      );


}
export default Appp;
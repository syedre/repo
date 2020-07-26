import React from 'react';
import Ccar from './head';

class Recomender extends React.Component {
  
    render() {
    return ( 
    <div >
         
        <Ccar/>
        <div class="ui center aligned container" style={{marginTop:'10px'}}>
            <h3> Select your preferences and price for recommendation :</h3>
            
             <select class="ui dropdown">
                <option value="">City </option>
                <option value="1">Highway</option>
                <option value="0">Off Road</option>
             </select>

             
             <div class="ui input focus" style={{marginLeft:'10px'}}>
                <input type="text" placeholder="Search..."/>
            </div> 
             

            <select class="ui dropdown" style={{marginLeft:'10px'}}>
                <option value="">--choose distance--</option>
                <option value="1">less than 10000 km</option>
                <option value="0">greater than 10000 km</option>
             </select>

             <button class="ui red basic button" style={{marginLeft:'10px'}}>Go</button>


        </div>

        <div>
            

        <div style = {{ marginLeft :'120px'}}>  
        <h4>View By</h4>
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
        <label>Comfort</label>
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

        </div>
       
    </div>
    )
  }
}
export default Recomender ;

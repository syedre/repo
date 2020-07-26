import React from 'react';
import logo from './newownacar.jpeg';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {browserHistory} from 'react-router';


class Ccar extends React.Component {

  onCompare(){
    browserHistory.push("/Compare");
  }

  onHome(){
    browserHistory.push("/");
  }
  
  onInsurance(){
    browserHistory.push("/insurance")
  }
  
    
  render() {
    return ( 
    <div>
      <div class="ui medium image" style={{maxWidth:'200px',marginTop:'5px',marginLeft:'200px'}}>
          <img class="ui mini left floated" 
          src={logo}>
          
          </img>
      </div>


      <div class="ui buttons" style ={{marginLeft:'50px'}}>
        <button class="ui teal button">UsedCars</button>
        <button class="ui teal button">Motor Cycles</button>
        <button class="ui teal button">Car Parking</button>
        <button class="ui teal button">About Us</button>
        <button class="ui teal button">Contact Us</button>
      </div>
 
      
        <div style={{marginLeft:'200px',marginTop:'10px',fontVariant:'red'}}>
           <h4>Your New Car Buying Assistant</h4>
        </div>


      <div style ={{marginLeft:'200px' ,marginTop:'20px',maxWidth:'1500px'}}>
        <ButtonGroup size = "large" aria-label="outlined primary button group">
          <Button 
            variant="outlined" onClick={this.onHome} >Home
          </Button>
          <Button 
            variant="outlined" color="primary">Show Cars
          
          </Button>
          <Button 
            variant="outlined" onClick={this.onCompare}>Compare
          </Button>

          <Button 
            variant="outlined" color="primary" >Favourites
          </Button>
          <Button 
            variant="outlined" >Offers
          </Button>
          <Button 
            variant="outlined" color="primary">Finance
          </Button>
          <Button 
            variant="outlined" onClick={this.onInsurance} >Insurance
          </Button>
          

       </ButtonGroup>
      </div>
      

    </div>
    );
  }
}
export default Ccar;


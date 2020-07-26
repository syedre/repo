import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Car extends React.Component {
  state = {
    person:[]
  }
  
  componentDidMount(){
    axios.get( 
      'http://142.93.212.248:8080/newcar/emilist/')
      .then(res => {
          console.log(res.data.variant_data[0].variant_name);
          this.setState({ person: res.data.variant_data[0] });

      
    });
  }
  render() {
    return ( 
    <div>
       <h1>ownacar.in</h1>
       <ul>

      <li>{this.state.person.manufacturer_code}</li>
      <li>{this.state.person.variant_name}</li>
      <li>{this.state.person.variant_code}</li>
      <li>{this.state.person.model_name}</li>
      <li>{this.state.person.model_code}</li>

       </ul>  
    <div >
      <Button 
      variant="outlined" color="primary">Home
      </Button>
      <Button 
      variant="outlined" color="primary">Show Cars
      </Button>
      <Button 
      variant="outlined" color="primary">Compare
      </Button>
      <Button 
      variant="outlined" color="primary">Favourites
      </Button>
      <Button 
      variant="outlined" color="primary">Offers
      </Button>
      <Button 
      variant="outlined" color="primary">Finance
      </Button>
      <Button 
      variant="outlined" color="primary">Insurance
      </Button>
    </div>
    
    
    </div>
    );
  }
}
export default Car;


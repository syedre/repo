import React from 'react';
import Ccar from './head';
import UserList from './compo/manufacturer'

class Insurance extends React.Component {
  
    render() {
    return ( 
    <div class ="ui form">
      <div>
        <Ccar/>
        </div>
        <div class="ui grid" style = {{ maxHeight:'50px',marginLeft:'150px',marginTop:'30px'}}  >
          <div class="left floated five wide column">
                  <h2>Insurance Details</h2>
                  <div class="inline fields">
                    <div class="eight wide field">
                      <label>Name</label>
                      <input type="text" placeholder="First Name"/>
                   </div>
                  </div>

                  <UserList/>

          </div>
         
          <div class ="right floated five wide column" style={{marginRight:'300px',marginTop:'40px'}}>
              <div class="inline field">
                <label>Contact Number</label>
                <input type="text" />
              </div>

              <div class="inline field">
                <label>Email</label>
                <input type="text"  style={{marginLeft:'70px'}}/>
              </div>

              <div class="inline field">
                <label>Select Board</label>
                <select style={{marginLeft:'30px'}}>
                  <option>White Board</option>
                  <option>Yellow Board</option>
                  </select>
              </div>

              <div class="inline field">
                <label>Pincode</label>
                <input type="text"style={{marginLeft:'55px'}} />
              </div>



          </div>
          

        </div>
        <div style ={{marginTop:'350px',marginLeft:'450px'}}>
        <button class="ui secondary basic button">
          Submit Details
        </button>
        </div>

       
       
    </div>
    )
  }
}
export default Insurance;


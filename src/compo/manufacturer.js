import React, {useState} from 'react';
import useResources from '../compo/manufacturerapi';
import ModelList from '../compo/model';


const UserList = () => {
    // here you are calling useResources() funtion from manufacturerapi.js file  which return array of manu_code and manufacturer 
    const users = useResources();   // storing that array in variable users            
    const [resou,setResource] = useState('null');

    return(
        <div>
            <h4> Manufacturer Name</h4>
        <select class="ui dropdown" onChange = {(event)=>setResource(event.target.value)} >  {/* after selecting particular manufacturer ,value changes to manu_code and value get sets to manu_code  */} 
                    <option value="">select manufacturer</option>
            {users.map(user =>(
                <option key ={user.manufacturer_code} value = {user.manufacturer_code}>
                    {user.manufacturer}
                 </option>
            
            ))}
        </select>
        
        <ModelList resou={resou}/>   {/* on selecting manufacturer ,setResource changes resou value from null to manu-code and that manu_code value is passed in resou variable.  */}
       
       
        
        
        </div>
    );
};
export default UserList;
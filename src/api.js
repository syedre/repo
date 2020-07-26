import {useEffect,useState} from 'react';
import axios from 'axios';

const useResources = (resource) =>{

    const [resources,setResources] = useState([]);

     useEffect(
         () => {
             (async resource => {
               const response = await axios.get(`http://142.93.212.248:8080/newcar/list/manufacturers`);
               
               setResources (response.data.manu_lst);
             })(resource);
    },
      [resource]
     );
     return resources;
};
export default useResources ;
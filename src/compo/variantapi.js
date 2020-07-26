import {useEffect,useState} from 'react';
import axios from 'axios';

const  VariantApi = (vars) =>{

    const [resour,setResour] = useState([]);

     useEffect(
         () => {
             (async vars => {
               const response = await axios.get(`http://142.93.212.248:8080/newcar/variant/list/${vars}`);
               
               setResour(response.data.model_variant_list);
             })(vars);
    },
      [vars]
     );
     return resour;
};
export default VariantApi ;
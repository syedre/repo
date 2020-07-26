import {useEffect,useState} from 'react';
import axios from 'axios';

const ModelApi = (resou) =>{

    const [resour,setResour] = useState([]);

     useEffect(
         () => {
             (async resou => {
               const response = await axios.get(`http://142.93.212.248:8080/newcar/model/list/${resou}`);
               
               setResour(response.data.model_data);
             })(resou);
    },
      [resou]
     );
     return resour;
};
export default ModelApi ;
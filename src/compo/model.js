import React,{useState} from 'react';
import ModelApi from '../compo/modelapi';
import VariantList from '../compo/variant';

const ModelList = ({resou}) => {
    const models = ModelApi(resou);
    const [abc,setResource] = useState('null');

    

    return(
        <div>
            <h4> Model Name</h4>
        <select class="ui dropdown" onChange = {(event)=>setResource(event.target.value) }>
            <option value="">select model</option>
            {models.map(model=>(
                <option key ={model.model_code} value = {model.model_code}>
                    {model.model_name}
                 </option>
            
            ))}
        </select>
       <VariantList vars={abc}/>
        
    
        </div>
    );
};
export default ModelList;
import React,{useState} from 'react';
import VariantApi from '../compo/variantapi';

const VariantList = ({vars}) => {
    const variants = VariantApi(vars);
       

    return(
        <div>
            <h4>Variant Name</h4>
        <select class="ui dropdown"  >
        <option value="">select variant</option>
            {variants.map(mode=>(
                <option key ={mode.model_code} value = {mode.model_code}>
                    {mode.variant_name}
                 </option>
            
            ))}
        </select>
    
        </div>
    );
};
export default VariantList;
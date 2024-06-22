import {useState,useEffect} from 'react';

const EffectComponent01 =(props) =>{
    const [num,setNum] =useState(0)
    const  incrementNum = ()=>setNum(num+1);
    return(
        <div>
            <h3>{props.name}-{num}</h3>
            <button onClick={incrementNum}>클릭</button>
        </div>
    );
}

export default EffectComponent01; 
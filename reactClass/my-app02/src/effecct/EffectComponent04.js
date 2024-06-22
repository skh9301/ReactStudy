import {useState,useEffect} from 'react'



function EffectComponent04(props){
    const [num,setNum] = useState(0);
    const incrementNum = () => setNum(num+1);
    const [name,setName] = useState(props.name);
    const updateName=()=>setName(name+num);

    useEffect(()=>{
        console.log("화면이 랜더링됨",name);
    },[name,])

    return (
        <div className="area">
            <h3>{name}-{num}</h3>
            <button onClick={incrementNum}>클릭~</button>
            <button onClick={updateName}>업데이트클릭~</button>
        </div>
    )
}

export default EffectComponent04;
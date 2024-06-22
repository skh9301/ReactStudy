import {useState,useEffect} from 'react'



function EffectComponent02(props){
    const [num,setNum] = useState(0);
    const incrementNum = () => setNum(num+1);

    useEffect(()=>{
        console.log("화면이 랜더링됨")
    })

    return (
        <div className="area">
            <h3>{props.name}-{num}</h3>
            <button onClick={incrementNum}>클릭~</button>
        </div>
    )
}

export default EffectComponent02;
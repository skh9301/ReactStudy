
import './App.css';
import Effect02 from './effect/EffectComponent02'

function App() {
  const nums=[1,4,6,8,9];
  const result=[];

  const useFor= ()=>{
    for(let i=0;i<nums.length;i++){
      result.push(num[i]*2);
    }
    console.log(result)
  }
  const useMap = () =>{
    const items= nums.map((value,index,array)=>{
      return value *2
    });
    console.log(items);
  }
  useFor();
  useMap();
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

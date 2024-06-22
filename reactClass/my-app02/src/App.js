import './App.css';
import Member from './map/MapComponent02'

function App() {
  const members = [
    {id: "hong", name:"홍길동",age:30},
    {id: "ohho", name:"어머나",age:32},
    {id:"leen", name:"꺽정이",age:26}
  ];
  
  return (
    <div className="App">
      {/*map () 함수에서 직접 출력*/}
      <ul>
        {
        members.map((member,index)=> <li key={member.id}>{member.id}-{member.name}-{member.age}</li>)
      }
      </ul>
      {/*map() 합수에서 컴포넌트를 사용*/}
      <ul>
        {
          members.map((member,index)=><Member key={member.id} {...member}/>)
        }
      </ul>
    </div>
  );
}
export default App;
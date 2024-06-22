
import './App.css';
import Member from './map/MapComponent01'

function App() {
  const members = [
    { id: 'hong',name:"홍길동",age:30},
    {id:'siri',name:'시리',age:12},
    {id:'with',name:'형철',age:26}
  ]
  

  return (
    <div className="App">
      <ul>
      {
        members.map((member,index)=>
          (<li key={member.id}>{member.id}-{member.name}({member.age})</li> ))
      }
      </ul>
      <ul>
        {
          members.map((member,index)=><Member key={member.id}{...member}/>)
        }
      </ul>
    </div>
  );
}

export default App;

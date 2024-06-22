import './App.css';
import Member from './map/MapComponent01.js'

function App() {
  const members = [ "홍길동", "임꺽정", "어머나" ];
  const mList = members.map((name, index) => (<Member key = {name} name = {name} />));
  return (
    <div className="App">
      {mList}
    </div>
  );
}
export default App;
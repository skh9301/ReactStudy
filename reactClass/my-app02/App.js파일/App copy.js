
import './App.css';
import {WelcomeClass, WelcomeFunction} from "./components/welcome.js"


function App() {
  return (
    <div className="App">
      <WelcomeClass name="react class"/>
      <WelcomeFunction name="React Function"/>
      
    </div>
  );
}

export default App;

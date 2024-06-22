
import './App.css';
import {useState,useEffect} from 'react'
import BoardListPage from './pages/BoardListPage'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
 
  

  return (
    <div className="container">
      <Header/>
      <BoardListPage/>
      <Footer/>
    </div>
  );
}

export default App;

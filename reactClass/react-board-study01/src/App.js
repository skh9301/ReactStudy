import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import BoardListPage from './pages/BoardListPage';
import BoardDetailPage from './pages/BoardDetailPage';
import BoardWriteFormPage from './pages/BoardWriteFormPage';
import BoardUpdateFromPage from './pages/BoardUpdateFormPage';
import NotFoundPage from './pages/NotFoundPage';
import TestForm01 from './formTest/TestForm01';

function App() {

  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<BoardListPage/>}/>
          <Route path="/boardList" element={ <BoardListPage /> } />
          <Route path="/boardDetail" element={ <BoardDetailPage /> } />
          <Route path="/boardWrite" element={ <BoardWriteFormPage /> } />
          <Route path="/boardUpdate" element={ <BoardUpdateFromPage /> } />
          <Route path="/testForm" element={ <TestForm01 /> } />
          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

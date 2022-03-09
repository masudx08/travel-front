import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Result from './components/Result/Result';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function MainApp(){
  return (
    <div>
      <Header />
      <Filter />
      <Result />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainApp />}></Route> 
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

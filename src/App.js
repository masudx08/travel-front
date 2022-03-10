import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { fetchDeparture } from './utils/apiCall';

export const MyContext = React.createContext();


function App() {
  // Filter State
  const [price, setPrice] = useState(2000)
  const [night, setNight] = useState(14)
  const [category, setCategory] = useState('domestic')
  const [selectedLocation, setSelectedLocation] = useState('Sydney, Australia')
  const [isChecked, setIsChecked] = useState(false)
  const availableLocation = ['Sydney, Australia', 'Dhaka, Bangladesh', 'Mumbai, India', 'Kabul, Afganisthan', 'London, England']
  const [departures, setDepartures] = useState([])

  // Other state
  const defaultValue = {
    price, setPrice,
    night, setNight,
    category, setCategory,
    selectedLocation, setSelectedLocation,
    isChecked, setIsChecked,
    availableLocation,
    departures
  }

  useEffect(()=>{
    fetchDeparture().then(res=>setDepartures(res))
    
  },[])

  return (
    <MyContext.Provider value={defaultValue}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route> 
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;

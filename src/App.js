import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { fetchDeparture, fetchCities } from './utils/apiCall';

export const MyContext = React.createContext();


function App() {
  // Filter State
  const [price, setPrice] = useState(5000)
  const [night, setNight] = useState(14)
  const [category, setCategory] = useState('domestic')
  const [selectedCity, setSelectedCity] = useState('Sydney')
  const [selectedCountry, setSelectedCountry] = useState('Australia')
  const [selectedPage, setSelectedPage] = useState(1)
  const [isChecked, setIsChecked] = useState(false)
  const availableLocation = ['Sydney, Australia', 'Dhaka, Bangladesh', 'Mumbai, India', 'Kabul, Afganisthan', 'London, England']

  // Collected data from backend
  const [departures, setDepartures] = useState([])
  const [cities, setCities] = useState([])
  // const [flights, setFlights] = useState([])
  const [hotels, setHotels] = useState([])

  const defaultValue = {
    price, setPrice,
    night, setNight,
    category, setCategory,
    selectedCity, setSelectedCity,
    selectedCountry, setSelectedCountry,
    selectedPage, setSelectedPage,
    isChecked, setIsChecked,
    availableLocation,
    departures,
    cities,
    // flights,
    hotels
  }

  useEffect(()=>{
    fetchDeparture().then(res=>setDepartures(res))
    fetchCities().then(res=>setCities(res))
    // fetchFlights().then(res=>setFlights(res))
    // fetchHotels().then(res=>setHotels(res))
    
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

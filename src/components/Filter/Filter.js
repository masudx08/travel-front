import React, {useEffect, useState, useContext} from 'react'
import './filter.css'
import {Row, Col, Dropdown} from 'react-bootstrap'
import { MyContext } from '../../App'
export default function Filter() {
  
  const {price, setPrice, night, setNight, category, setCategory,selectedCountry, setSelectedCountry, selectedCity, setSelectedCity, isChecked, setIsChecked, availableLocation, departures} = useContext(MyContext)

  function sliderHandler(e){
    if(e.target.name === 'price'){
      setPrice(e.target.value)
    }else if(e.target.name === 'night'){
      setNight(e.target.value)
    }
  }

  function handleBtn(e){
    const btnContainer = document.getElementById('btnContainer')
    let active= btnContainer.getElementsByClassName('activated')
    const clsNm = active[0].className.replace(' activated', '')
    active[0].className = clsNm
    e.target.className += ' activated'
    setCategory(e.target.name)
  }

  useEffect(()=>{
    const mycheckbox = document.getElementById('checkbox')
    mycheckbox.checked = isChecked
  },[isChecked])

  function locationHandler(city, country){
    setSelectedCity(city)
    setSelectedCountry(country)
    setIsChecked(false)
  }


  return (
    <Row className='filterContainer'>
      <Col xs={10} md={9}>
        <div className='txt'>
          I am based in {' '}
          <span className='highlight underline'>
            <input id='checkbox' type='checkbox'></input>
            <div className='selectedLocation' onClick={()=>setIsChecked(c=>!c)}> {selectedCity}, {selectedCountry}</div>
            <div className='items'>
              <div>
               {
                //  departures.filter(item=>`${item.cityName}, ${item.countryName}` !== selectedCity)
                 departures
                 .map((item, i)=>{
                   return(
                     <div key={i} className='item' onClick={()=>locationHandler(item.cityName, item.countryName)}>{item.cityName}, {item.countryName}</div>
                   )
                 })
               }
              </div>
            </div>
          </span> <br />
          and I want to see travel options for:
        </div>
        <div id='btnContainer'>
          <button className='mybtn activated' name='domestic' onClick={e=>handleBtn(e)}>Domestic</button>
          <button className='mybtn' name='international' onClick={e=>handleBtn(e)}>International</button>
          <button className='mybtn' name='either' onClick={e=>handleBtn(e)}>Either is fine</button>
        </div>
        <Row className='d-flex justify-content-around'>
          <Col xs={12} md={6}>
            <div className='sliderSection'>
              <p className='slider-title'>Price</p >
              <div className='slider-slide'>
                <input name='price' value={price} className='slider' min={2000} max={5000}  type="range"  onChange={e=>sliderHandler(e)} />
                <div className='sliderTitleContainer'>
                  <p>$2000</p>
                  <p>$5000+</p>
                </div>
              </div>
            </div>
            
          </Col>
          <Col xs={12} md={6} >
            <div className='sliderSection slider-night' >
              <div className='slider-slide'>
                <input name='night' value={night} className='slider' min={1} max={14}  type="range"  onChange={e=>sliderHandler(e)} />
                <div className='sliderTitleContainer'>
                  <p>1 night</p>
                  <p>14 nights</p>
                </div>
              </div>
              <p className='slider-title'>Night</p >
            </div>
            
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './result.css'
import BeachImg from '../../images/beach.jpg'
import { Accordion, Col, Container, Pagination, Row } from 'react-bootstrap'
import { FaPlaneDeparture } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import { MyContext } from '../../App'
import Collapser from '../custom/Collapser'
export default function Result() {
  const { cities, flights, night, selectedCity, price, category, selectedCountry, selectedPage, setSelectedPage } = useContext(MyContext)

  return (
    <Container className='resultContainer'>
      <Row className='resultTextContainer'>
        <Col xs={10} >
          <b >There are {cities.length} different destinations. You can travel for your budget, based on average prices</b>
        </Col>
      </Row>

      <div>
        {
          cities.filter((item, index)=>{
            return index < selectedPage * 5 && index >= (selectedPage - 1)*5 
          })
          .map((item, index, arr) => {

            if((item.flightCost[selectedCity] || 1000) + (item.hotelCost * night) < price && category=='domestic' ? item.country == selectedCountry : category=='international' ? item.country != selectedCountry : category == 'either' && true){
              
               
              return (

                <Row key={index} className='locationResult' >
                  <Col xs={10} lg={4} className='imagePart'>
                    <img src={item.img} alt="" />
                  </Col>
                  <Col xs={10} lg={8} >
                    <Collapser
                      introduction={item.introduction}
                      flightLink={item.flightLink}
                      hotelLink={item.hotelLink}
                      packageLink={item.packageLink}
                    >
                      <div>
                        <h1 className='location'>
                          <span className='locationA'>{item.cityName}, </span>
                          <span className='locationB'>{item.country}</span>
                        </h1>
                      </div>
                      <div className='contentPart'>
                        <div className='content-min'>
                          <div>
                            <FaPlaneDeparture className='icon' />
                          </div>
                          <div>
                            <h2>{item.flightCost[selectedCity] || 1000} </h2>
                            <p>Return</p>
                          </div>
                        </div>
                        <div className='hidden'>
                          <h2>+</h2>
                        </div>
                        <div className='content-min'>
                          <div>
                            <FaBuilding className='icon' />
                          </div>
                          <div>
                            <h2>${item.hotelCost * night}</h2>
                            <p>{night}n x ${item.hotelCost}</p>
                          </div>
                        </div>
                        <div className='hidden'>
                          <h2>=</h2>
                        </div>
                        <div className='highlight total'>
                          <h2>{(item.flightCost[selectedCity] || 1000) + (item.hotelCost * night)}</h2>
                          <p>Total Price</p>
                        </div>
                      </div>
  
                    </Collapser>
                  </Col>
                </Row>
  
  
              )
            }
            
          })
        }
        <div id='pagination' className='d-flex justify-content-center'>
          <Pagination>
            <Pagination.Prev />
            {/* <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item >{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item> */}
            {
              cities.filter((item, index)=>{
                return index % 5 == 0
              })
              .map((item, index)=>{
                return (
                  <Pagination.Item active={selectedPage == index+1} onClick={()=>setSelectedPage(index+1)}>{index+1}</Pagination.Item>
                )
              })
            }
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
    </Container>
  )
}

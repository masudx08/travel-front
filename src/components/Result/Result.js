import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import './result.css'
import BeachImg from '../../images/beach.jpg'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import {FaPlaneDeparture} from 'react-icons/fa'
import {FaBuilding} from 'react-icons/fa'
import { MyContext } from '../../App'
export default function Result() {
  const { cities, flights, night} = useContext(MyContext)
  


  return (
    <Container className='resultContainer'>
     <Row className='resultTextContainer'>
      <Col xs={10} >
        <b >There are 29 different destinations in 12 countries you can travel for your budget, based on average prices</b>
      </Col>
     </Row>
     <div>
      {
        cities.map((item, index)=>{
          return (
            <Row key={index} className='locationResult' >
            <Col xs={10} md={4} className='imagePart'>
              <img src={item.img} alt="" />
            </Col>
            <Col xs={10} md={8} >
              <div>
                <h1 className='location'>
                <span className='locationA'>{item.cityName}, </span> 
                <span className='locationB'>{item.country}</span>
                </h1>
              </div>
              <div className='contentPart'>
                <div className='content-min'>
                  <div>
                    <FaPlaneDeparture className='icon'/>
                  </div>
                  <div>
                    <h2>flightCost</h2>
                    <p>Return</p>
                  </div>
                </div>
                <div className='hidden'>
                  <h2>+</h2>
                </div>
                <div className='content-min'>
                  <div>
                    <FaBuilding className='icon'/>
                  </div>
                 <div>
                    <h2>${item.hotelPrice * night}</h2>
                    <p>{night}n x ${item.hotelPrice}</p>
                 </div>
                </div>
                <div className='hidden'>
                  <h2>=</h2>
                </div>
                <div className='highlight total'>
                  <h2>$2000</h2>
                  <p>Total Price</p>
                </div>
              </div>
            </Col>
          </Row>
          )
        })
      }
      <div id='pagination' className='d-flex justify-content-center'>
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item >{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Next />
      </Pagination>
      </div>
     </div>
    </Container>
  )
}

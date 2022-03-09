import React from 'react'
import {useNavigate} from 'react-router-dom'
import './result.css'
import BeachImg from '../../images/beach.jpg'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import {FaPlaneDeparture} from 'react-icons/fa'
import {FaBuilding} from 'react-icons/fa'
export default function Result() {
  const navigate = useNavigate()
  const results = [
    {
      id:1,
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      id:2,
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      id:3,
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      id:4,
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      id:5,
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      id:6,
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
  ]
  function handleLocationDetails(id){
    navigate('/location'+id)
  }
  return (
    <Container className='resultContainer'>
     <Row className='resultTextContainer'>
      <Col xs={10} >
        <b >There are 29 different destinations in 12 countries you can travel for your budget, based on average prices</b>
      </Col>
     </Row>
     <div>
      {
        results.map((item, index)=>{
          return (
            <Row key={index} className='locationResult' onClick={()=>handleLocationDetails(item.id)}>
            <Col xs={10} md={4} className='imagePart'>
              <img src={item.img} alt="" />
            </Col>
            <Col xs={10} md={8} >
              <div>
                <h1 className='location'>
                <span className='locationA'>{item.locationA}, </span> 
                <span className='locationB'>{item.locationB}</span>
                </h1>
              </div>
              <div className='contentPart'>
                <div className='content-min'>
                  <div>
                    <FaPlaneDeparture className='icon'/>
                  </div>
                  <div>
                    <h2>${item.flyCost}</h2>
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
                    <h2>${item.roomCost}</h2>
                    <p>{item.roomSpec}</p>
                 </div>
                </div>
                <div className='hidden'>
                  <h2>=</h2>
                </div>
                <div className='highlight total'>
                  <h2>${item.flyCost + item.roomCost}</h2>
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

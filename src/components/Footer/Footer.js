import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer() {
  return (
    <div className='footerContainer'>
      <Container>
        <div className='contactText'>
          <h3>Contact Form</h3>
        </div>
        <div className="myform">
          <Row>
            <Col>
              <input type="text" placeholder='Name' />
            </Col>
            <Col>
              <input type="text" placeholder='Email Address' />
            </Col>
          </Row>
          <Row>
            <Col>
              <input type="text" placeholder='Subject' />
            </Col>
          </Row>
          <Row>
            <Col>
              <textarea className='message' type="text" placeholder='Message' />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

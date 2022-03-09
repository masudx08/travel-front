import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer() {
  return (
    <div className='footerContainer'>
      <Container>
        <Row>
          <Col>
            <div>
              <Link to='/about'>About Us</Link> <p className='d-inline'>|</p>
              <Link to='/how-it-work'>How it works </Link> <p className='d-inline'>|</p>
              <Link to='/contact'>Contact Us</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

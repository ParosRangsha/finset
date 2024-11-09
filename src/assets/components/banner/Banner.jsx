import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './banner.css'
import bannerimg from '../../../assets/bannerimg.png'

function Banner() {
  return (
    <div className='banner'>
        <Container>
            <Row>
                <Col lg={6}>
                    <h2>Building stellar websites for early startups</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="buttons">
                        <a href="#" id='viewourwork'>View our work</a>
                        <a href="#" id='viewpricing'>View Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </Col>
                <Col lg={6}>
                    <img src={bannerimg} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './work.css'
import numOne from '../../../assets/numOne.png'
import numTwo from '../../../assets/numTwo.png'
import numThree from '../../../assets/numThree.png'
import numFour from '../../../assets/numFour.png'

function Work() {
  return (
    <div className='work'>
        <Container>
            <Row>
                <Col lg={5}>
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></a>
                </Col>
                <Col lg={7} className='workRight'>
                  <Col lg={6} className='item'>
                    <img src={numOne} alt="one" />
                    <h3>Strategy</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </Col>
                  <Col lg={6} className='item'>
                    <img src={numTwo} alt="two" />
                    <h3>Wireframing</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </Col>
                  <Col lg={6} className='item'>
                    <img src={numThree} alt="three" />
                    <h3>Design</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </Col>
                  <Col lg={6} className='item'>
                    <img src={numFour} alt="four" />
                    <h3>Development</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </Col>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Work
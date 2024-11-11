import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './work.css'
import numOne from '../../../assets/numOne.png'
import numTwo from '../../../assets/numTwo.png'
import numThree from '../../../assets/numThree.png'
import numFour from '../../../assets/numFour.png'
import Workreuseable from '../reuseable/Workreuseable'

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
                  <Workreuseable img={numOne} title="Strategy" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                  <Workreuseable img={numTwo} title="Wireframing" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                  <Workreuseable img={numThree} title="Design" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                  <Workreuseable img={numFour} title="Development" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Work
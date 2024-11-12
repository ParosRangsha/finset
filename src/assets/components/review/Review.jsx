import React from 'react'
import './review.css'
import { Col, Container, Row } from 'react-bootstrap'
import profilepic from '../../../assets/profile.png'
import Profilereuseable from '../reuseable/Profilereuseable'

function Review() {
  return (
    <div className='review'>
        <Container>
            <Row>
                <Col lg={4}>
                    <h3>What our clients say about us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </Col>
                <Col lg={8}>
                    <h4>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
                    <Profilereuseable img={profilepic} title="Jenny Wilson" designation=" Vice President"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Review
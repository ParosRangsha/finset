import React from 'react'
import './question.css'
import { Col, Container, Row } from 'react-bootstrap'
import Quesreuseable from '../reuseable/Quesreuseable'
function Question() {
  return (
    <div className='question'>
        <Container>
            <Row>
                <Col lg={4}>
                    <h3>Frequently asked questions</h3>
                    <a href="#">Contact us for more info</a>
                </Col>
                <Col lg={8}>
                    <Quesreuseable num="01" heading="How much time does it take?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <Quesreuseable num="02" heading="What is your class naming convention?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <Quesreuseable num="03" heading="How do you communicate?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <Quesreuseable num="04" heading="I have a bigger project. Can you handle it?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <Quesreuseable num="05" heading="What is your class naming convention?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}


export default Question
import React from 'react'
import './quiry.css'
import { Col, Container, Row } from 'react-bootstrap'
import quirythumb from '../../../assets/writing.png'

function Quiry() {
  return (
    <div className='quiry'>
        <Container>
            <Row>
                <Col lg={6} className='quirythumb'>
                    <div className="txt">
                        <h2>Building stellar websites for early startups</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>
                <Col lg={6} className='forom'>
                    <h3>Send inquiry</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <input type="text" placeholder='Your Name' />
                    <input type="mail" placeholder='Email' />
                    <input type="text" placeholder='Paste your Figma design URL' />
                    <a href="#">Send an Inquiry</a>
                    <p className='text-center'>Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Quiry
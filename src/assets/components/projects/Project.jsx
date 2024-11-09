import React from 'react'
import './project.css'
import { Col, Container, Row } from 'react-bootstrap'
import projectCard from '../../../assets/projectCard.png'
import projectCardTwo from '../../../assets/projectCardTwo.png'
import projectCardThree from '../../../assets/projectCardThree.png'

function Project() {
  return (
    <div className='project'>
        <Container>
            <div className='projectHeading'>
                <h2>View our projects</h2>
                <a href="#">View More <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className='projectCard'>
                <Row>
                    <Col lg={8} className='myCard'>
                        <img src={projectCard} alt="card" />
                        <div className='overflowTxt'>
                            <h4>Workhub office Webflow Webflow Design</h4>
                            <a href="#">View Project <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </Col>
                    <Col lg={4} className='rightPart'>
                        <div className='myCardTwo'>
                            <img src={projectCardTwo} alt="card" />
                            <div className='overflowTxtTwo'>
                                <h4>Unisaas Website Design</h4>
                                <a href="#">View portfolio <i class="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className='myCardThree'>
                            <img src={projectCardThree} alt="card" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Project
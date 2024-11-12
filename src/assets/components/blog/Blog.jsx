import React from 'react'
import './blog.css'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../../assets/businessman.png'
import img2 from '../../../assets/lady.png'
import img3 from '../../../assets/monitor.png'
import Blogreuseable from '../reuseable/Blogreuseable'

function Blog() {
  return (
    <div className='blog'>
        <Container>
            <h2>Our Blog</h2>
            <Row>
            <Blogreuseable img={img1} date="19 Jan 2022" subhead="How one Webflow user grew his single person consultancy from $0-100K in 14 months" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
            <Blogreuseable img={img2} date="19 Jan 2022" subhead="How one Webflow user grew his single person consultancy from $0-100K in 14 months" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
            <Blogreuseable img={img3} date="19 Jan 2022" subhead="How one Webflow user grew his single person consultancy from $0-100K in 14 months" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
            </Row>
        </Container>
    </div>
  )
}

export default Blog
import React from 'react'
import { Col } from 'react-bootstrap'

function Workreuseable({img, title, paragraph}) {
  return (
    <Col lg={6} className='item'>
        <img src={img}/>
        <h3>{title}</h3>
        <p>{paragraph}</p>
    </Col>
  )
}

export default Workreuseable
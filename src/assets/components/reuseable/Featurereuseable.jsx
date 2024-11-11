import React from 'react'
import { Col } from 'react-bootstrap'

function Featurereuseable({img, title, paragraph}) {
  return (
    <Col lg={4} className='item'>
      <img src={img} />
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </Col>
  )
}

export default Featurereuseable
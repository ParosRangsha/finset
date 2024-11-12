import React from 'react'
import { Col } from 'react-bootstrap'
function Blogreuseable({img, date, subhead, para}) {
  return (
    <Col lg={4}>
        <img src={img} alt="img" />
        <p>{date}</p>
        <h5>{subhead}</h5>
        <p>{para}</p>
        <a href="#">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
    </Col>
  )
}

export default Blogreuseable
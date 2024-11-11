import React from 'react'
import './feature.css'
import { Col, Container } from 'react-bootstrap'
import Featurereuseable from '../reuseable/Featurereuseable'
import iman from '../../../assets/iconman.png'
import icheck from '../../../assets/iconcheck.png'
import ipen from '../../../assets/iconpen.png'
import isupport from '../../../assets/iconsupport.png'
import idelivery from '../../../assets/icondelivery.png'
import iapproach from '../../../assets/iconapproach.png'
function Feature() {
  return (
    <div className='feature'>
        <Container>
            <p className='text-center'>Features</p>
            <Col lg={{span:6, offset:3}}>
                <h2>Design that solves problems, one product at a time</h2>
            </Col>
            <Col className='items'>
                <Featurereuseable img={iman} title="Uses Client First" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <Featurereuseable img={icheck} title="Uses Client First" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <Featurereuseable img={ipen} title="Uses Client First" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <Featurereuseable img={isupport} title="Uses Client First" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <Featurereuseable img={idelivery} title="Uses Client First" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <Featurereuseable img={iapproach} title="Uses Client First" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            </Col>
        </Container>
    </div>
  )
}

export default Feature
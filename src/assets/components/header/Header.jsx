import React from 'react'
import { Container} from 'react-bootstrap'
import logo from '../../../assets/logo.png'
import './header.css'
import './responsive.css'

function Header() {
  return (
    <header>
        <Container>
            <main>
                <a href="#"><img src={logo} alt="" /></a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <a href="#" id='btnContact'>Contact us</a>
            </main>
        </Container>
    </header>
  )
}

export default Header
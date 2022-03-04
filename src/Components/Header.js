import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Link from './Link'
// import logo from 'download.png';

export default function Header() {
  return (
    <>
        <Navbar bg="secondary" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="image/cse.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    <b>
                        Creative Software Engineer
                    </b>
                </Navbar.Brand>              
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link name='Dashboard' linkTo="#home"></Link>
                        <Link name='Produk' linkTo="#projek"></Link>
                        <Link name='Tentang Kami' linkTo="#about"></Link>
                        <Link name='Kontak' linkTo="#kontak"></Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="outline-dark">Hubungi Kami Disini!</Button>
            </Container>
        </Navbar>
    </>    
  )
}

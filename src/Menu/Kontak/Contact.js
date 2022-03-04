import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from '../About/Cards'
import Cart from './Cards'

export default function Contact() {
  return (
    <>
    <div className="Kontak" id='kontak'>
    <Container>
      <h1 className='mt-5 mb-5'>Kontak</h1>
      <Row>
      <Col sm={4}>
      <Cart Text='Creative Software Engineer | CV. Maleo Mitra Tekno | Jl. Maleo Nomor 13 , Palu-Sulawesi Tengah' Img='image/cse.png'/>
      </Col>
      <Col sm={4}>
      <Card Header='Marketing' Text='082248038346 (Wa/Telp)' />
      </Col>
      <Col sm={4}>
      <Card Header='Hubungi Kami!' Text='Agrh@untad.ac.id' />
      </Col>
      </Row>
      <hr />
    </Container>
    </div>
    </>
  )
}

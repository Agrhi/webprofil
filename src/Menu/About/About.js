import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from './Cards'

export default function About() {
  return (
    <>
    <div className="Tentang Kami" id='about'>
      <Container>
        <h1 className='mt-5 mb-5'>Tentang Kami</h1>
        <Row>
        <Col sm={6}>
        <Card Header='Visi' Text='Menjadi perusahaan yang Kompeten, Profesional, Berkualitas dan Terpercaya dalam pengembangan teknologi informasi dibidang perangkat lunak (softwere)' />
        </Col>
        <Col sm={6}>
        <Card Header='Motto' Text='“IT make it easy" merupakan potret penyedian jasa solusi atas kebutuhan mitra kami dalam pengembangan paket Information Technology.' />
        </Col>
        </Row>
        <hr />
      </Container>
    </div>
    </>
  )
}

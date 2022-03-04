import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Gambar from './Gambar';
import Ket from './Ket';

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col sm={5}>
          <Gambar />
        </Col>
        <Col sm={7}>
          <Ket />
        </Col>
      </Row>
      {/* <Visi /> */}
      <hr />
    </Container>
  )
}

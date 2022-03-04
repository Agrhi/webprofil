import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Cart from './Cards'

export default function Projeck() {
  return (
    <>
    <Container>
    <div className="Produk" id='projek'>
      <Card>
        <Card.Header as="h1">Produk</Card.Header>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col sm={4}>
                <Cart Title='Web Profil' Text='Website yang dibuat untuk menampilkan profil sebuah perusahaan agar pembaca dapat mengenal perusahaan tersebut lebih dalam serta memperkenalkan produk dan layanan yang ditawarkan' Img='image/webprofile.svg' />
              </Col>
              <Col sm={4}>
                <Cart Title='Aplikasi Inventory' Text='Sebuah software yang dirancang khusus untuk mengelola dan mengawasi segala hal mulai dari pembelian barang supplier, stock opname, hingga pembuatan laporan inventory yang otomatis dan akurat.' Img='image/inventory.svg' />
              </Col>
              <Col sm={4}>
                <Cart Title='Aplikasi Accounting' Text='Program aplikasi yang secara khusus dirancang untuk mengelola pencatatan transaksi usaha. Program ini memang digunakan oleh para akuntan perusahaan sehingga data-data seputar transaksi bisa lebih mudah dikelola.' Img='image/accounting.svg' />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Cart Title='Aplikasi Absensi' Text='Platform yang bisa digunakan oleh HR untuk memantau kehadiran karyawan atau pegawai. Umumnya terintegrasi dengan sistem cuti dan payroll perusahaan sehingga memudahkan operasional HR yang sebelumnya bersifat manual. Aplikasi absensi online dapat berbasis web dan mobile.' Img='image/absen.svg' />
              </Col>
              <Col sm={4}>
                <Cart Title='Aplikasi POS' Text='POS atau Point of Sales adalah suatu sistem yang digunakan dalam kebutuhan berbagai macam usaha bisnis ritel untuk dapat mempermudah proses transaksi jual beli secara cepat, aman, dan sistematis. POS juga termasuk versi modern dari mesin kasir konvensional yang masih sering digunakan pada beberapa toko atau usaha.' Img='image/pos.svg' />
              </Col>
            </Row>          
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
      
    {/* <div className="Produk" id='projek'>
            <h1 className='mt-5 mb-5'>Produk</h1>
            <Card Title='Web Profil' Text='Website yang dibuat untuk menampilkan profil sebuah perusahaan agar pembaca dapat mengenal perusahaan tersebut lebih dalam serta memperkenalkan produk dan layanan yang ditawarkan' Img='image/webprofile.svg' />
        <hr />
    </div> */}
    </Container>
    </>
  )
}

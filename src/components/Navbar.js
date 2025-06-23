// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import weddingData from '../data/weddingData'; // Untuk mengambil nama pasangan

function AppNavbar() {
  const { couple } = weddingData;

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-primary fs-4">
          {couple.nicknames}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#story">Kisah Kami</Nav.Link>
            <Nav.Link href="#events">Acara</Nav.Link>
            <Nav.Link href="#gallery">Galeri</Nav.Link>
            <Nav.Link href="#gift">Hadiah</Nav.Link>
            {/* <Nav.Link href="#protocol">Protokol</Nav.Link> */} {/* Aktifkan jika ada */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
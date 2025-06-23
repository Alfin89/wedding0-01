// src/sections/HeroSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import weddingData from '../data/weddingData';
import '../styles/HeroSection.css'; // Styling khusus HeroSection

function HeroSection() {
  const { couple, dates } = weddingData;

  return (
    <section id="home"
      className="hero-section text-white d-flex align-items-center justify-content-center text-center"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/${couple.photoUrl})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <p className="lead animate__animated animate__fadeInDown mb-1">
              The Wedding Of
            </p>
            <h1 className="display-3 fw-bold animate__animated animate__fadeInDown">
              {couple.bride} & {couple.groom}
            </h1>
            <p className="lead mt-3 mb-4 animate__animated animate__fadeInUp">
              Mengundang Anda untuk menjadi bagian dari kisah cinta kami pada
              <br />
              <span className="fw-bold">{dates.resepsi}</span>
            </p>
            <Button
              variant="light"
              size="lg"
              href="#events"
              className="mt-3 animate__animated animate__zoomIn rounded-pill px-4 py-2"
            >
              Lihat Detail Acara
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
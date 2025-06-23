// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import weddingData from '../data/weddingData'; // Untuk mengambil nama pasangan

function Footer() {
  const { couple } = weddingData;

  return (
    <footer className="bg-light text-center py-4 mt-5">
      <Container>
        <p className="mb-0 text-muted">
          &copy; {new Date().getFullYear()} Undangan {couple.bride} & {couple.groom}.
          <br/>
          Dibuat dengan ❤️
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
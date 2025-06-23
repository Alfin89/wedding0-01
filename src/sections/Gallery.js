// src/sections/Gallery.js
import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import weddingData from '../data/weddingData';
import '../styles/Gallery.css'; // Styling khusus galeri

function Gallery() {
  const { galleryImages } = weddingData;
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleShow = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section id="gallery" className="py-5 py-80 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Galeri Momen</h2>
        <Row className="g-3 justify-content-center">
          {galleryImages.map((image, index) => (
            <Col xs={6} md={4} lg={3} key={index}>
              <Image
                src={`${process.env.PUBLIC_URL}/${image}`}
                alt={`Wedding Moment ${index + 1}`}
                fluid
                rounded
                className="gallery-thumbnail shadow-sm cursor-pointer"
                onClick={() => handleShow(image)}
              />
            </Col>
          ))}
        </Row>

        {/* Modal untuk tampilan gambar lebih besar */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Momen Indah</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Image src={`${process.env.PUBLIC_URL}/${currentImage}`} fluid />
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default Gallery;
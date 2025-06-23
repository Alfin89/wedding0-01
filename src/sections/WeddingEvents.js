// src/sections/WeddingEvents.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'; // Ikon dari react-icons
import weddingData from '../data/weddingData';

function WeddingEvents() {
  const { events } = weddingData;

  return (
    <section id="events" className="py-5 py-80">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Detail Acara</h2>
        <Row className="justify-content-center g-4">
          {events.map((event, index) => (
            <Col md={6} key={index}>
              <Card className="shadow border-0 h-100 rounded-3">
                <Card.Body className="p-4 p-md-5">
                  <h3 className="card-title text-center text-primary mb-4 fw-bold">{event.type}</h3>
                  <div className="d-flex align-items-start mb-3">
                    <FaCalendarAlt className="me-3 fs-4 text-secondary flex-shrink-0" />
                    <div>
                      <p className="card-text mb-0 fw-bold">Tanggal:</p>
                      <p className="card-text text-muted">{event.date}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <FaClock className="me-3 fs-4 text-secondary flex-shrink-0" />
                    <div>
                      <p className="card-text mb-0 fw-bold">Waktu:</p>
                      <p className="card-text text-muted">{event.time}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <FaMapMarkerAlt className="me-3 fs-4 text-secondary flex-shrink-0" />
                    <div>
                      <p className="card-text mb-0 fw-bold">Lokasi:</p>
                      <p className="card-text mb-0">{event.location}</p>
                      <p className="card-text text-muted">{event.address}</p>
                    </div>
                  </div>
                  <div className="text-center mt-auto">
                    <a href={event.googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-pill px-4">
                      Lihat di Google Maps
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WeddingEvents;
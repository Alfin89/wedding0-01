// src/sections/OurStory.js
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import weddingData from '../data/weddingData';
import '../styles/OurStory.css'; // Jika ada styling khusus

function OurStory() {
  const { ourStory } = weddingData;

  return (
    <section id="story" className="py-5 py-80 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Kisah Kami</h2>
        <Row className="justify-content-center">
          <Col lg={10}>
            {ourStory.map((story, index) => (
              <Row key={index} className={`mb-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                  <Image
                    src={`${process.env.PUBLIC_URL}/${story.imageUrl}`}
                    alt={story.title}
                    fluid
                    rounded
                    className="shadow story-image"
                  />
                </Col>
                <Col md={6} className="d-flex align-items-center mt-4 mt-md-0">
                  <Card className="border-0 shadow-lg p-4 w-100">
                    <Card.Body>
                      <h4 className="text-primary mb-2">{story.year}</h4>
                      <h3 className="card-title fw-bold">{story.title}</h3>
                      <p className="card-text text-muted">{story.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurStory;
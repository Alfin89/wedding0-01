// src/sections/GiftInfo.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeart, FaPiggyBank, FaMobileAlt } from 'react-icons/fa'; // Ikon
import weddingData from '../data/weddingData';

function GiftInfo() {
  const { giftInfo } = weddingData;

  return (
    <section id="gift" className="py-5 py-80">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Kado & Doa Restu</h2>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <p className="lead mb-4 text-muted">{giftInfo.message}</p>
          </Col>
        </Row>
        <Row className="justify-content-center g-4 mt-4">
          {giftInfo.bankDetails.map((bank, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="shadow border-0 h-100 rounded-3 text-center p-3">
                <Card.Body>
                  <FaPiggyBank className="fs-1 text-primary mb-3" />
                  <h4 className="fw-bold">{bank.bankName}</h4>
                  <p className="mb-1">A.N: <span className="fw-bold">{bank.accountName}</span></p>
                  <p className="mb-0">No. Rek: <span className="fw-bold">{bank.accountNumber}</span></p>
                  <button
                    className="btn btn-outline-primary btn-sm mt-3"
                    onClick={() => navigator.clipboard.writeText(bank.accountNumber)}
                  >
                    Salin Nomor
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {giftInfo.digitalPayments && giftInfo.digitalPayments.length > 0 && (
            <Col xs={12}>
              <p className="text-center mt-5 mb-3 lead text-muted">{giftInfo.altGiftMessage}</p>
              <Row className="justify-content-center g-4">
                {giftInfo.digitalPayments.map((dp, index) => (
                  <Col md={6} lg={4} key={index}>
                    <Card className="shadow border-0 h-100 rounded-3 text-center p-3">
                      <Card.Body>
                        <FaMobileAlt className="fs-1 text-primary mb-3" />
                        <h4 className="fw-bold">{dp.name}</h4>
                        <p className="mb-0">No. HP: <span className="fw-bold">{dp.number}</span></p>
                        {giftInfo.linkDigital && dp.name === "Dana" && ( // Contoh link hanya untuk Dana
                          <a href={giftInfo.linkDigital} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm mt-3">
                            Bayar Via QRIS
                          </a>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default GiftInfo;
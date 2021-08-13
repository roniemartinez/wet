import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Popup = () => {
  return (
    <Container style={{ width: "400px" }}>
      <Row className="px-1 py-1">
        <Col>
          <h2 className="text-center">wet</h2>
          <h6 className="text-center">Web Extension Template</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Popup;

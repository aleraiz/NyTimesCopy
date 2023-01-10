import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideStories from "./SideStories/SideStories";
import TopStories from "./TopStories/TopStories";

const Main = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <TopStories />
        </Col>
        <Col md={4}>
          <SideStories />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

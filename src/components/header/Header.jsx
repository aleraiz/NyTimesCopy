import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  const numberDay = date.getDay();
  const weekday = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ),
    dayOfWeek = weekday[numberDay];
  const months = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ),
    curMonth = months[date.getMonth()];
  return (
    <Container className="border-secondary border-bottom mb-2">
      <Row className="d-flex justify-content-between align-items-center">
        <Col>
          <span className="">
            {dayOfWeek}, {curMonth} {date.getDate()}, {year}
          </span>
        </Col>
        <Col md={6}>
          <h1 className="text-center">The New York Times</h1>
        </Col>
        <Col className="d-flex justify-content-end">Clima</Col>
      </Row>
    </Container>
  );
};

export default Header;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = ({ category, setCategory }) => {
  const NavbarOptions = [
    "World",
    "US",
    "Politics",
    "Nyregion",
    "Business",
    "Opinion",
    "Technology",
    "Science",
    "Health",
    "Sports",
  ];
  return (
    <Container className="square border-dark border-bottom ">
      <Row className="d-flex">
        <Col md={1}>
          <Link to={`/news`} className="text-decoration-none text-dark">
            All News
          </Link>
        </Col>
        <Col>
          <ul className="list-unstyled d-flex justify-content-around m-0">
            {NavbarOptions.map((el, index) => {
              return (
                <li className="fs-6" key={index}>
                  <Link
                    className="text-decoration-none text-dark"
                    onClick={() => {
                      setCategory(el);
                    }}
                    to={`/news/${el}`}
                  >
                    {el}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;

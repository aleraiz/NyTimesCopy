import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
const apiKey = "3gwrNHYpbzAIzR14IsXRXzUEau9ceEfI";

const PopularNews = () => {
  const [popularBy, setPopularBy] = useState("viewed");
  const [period, setPeriod] = useState("30");

  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.nytimes.com/svc/mostpopular/v2/${popularBy}/${period}.json?api-key=${apiKey}`,
      });
      console.log(response.data.results);
      setFilteredNews(response.data.results);
    };
    getNews();
  }, [popularBy, period]);

  return (
    <Container>
      <Row className="d-flex justify-content-end">
        <div className="w-25">
          <Form.Group className="mb-3">
            <Form.Label>Most popular by</Form.Label>
            <Form.Select
              as="select"
              value={popularBy}
              onChange={(e) => {
                console.log("e.target.value", e.target.value);
                setPopularBy(e.target.value);
              }}
            >
              <option value="viewed">Viewed</option>
              <option value="shared">Shared</option>
              <option value="emailed">Emailed</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="w-25">
          <Form.Group className="mb-3">
            <Form.Label>Period</Form.Label>
            <Form.Select
              as="select"
              value={period}
              onChange={(e) => {
                console.log("e.target.value", e.target.value);
                setPeriod(e.target.value);
              }}
            >
              <option value={30}>30</option>
              <option value={7}>7</option>
              <option value={1}>1</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Row>
      <Row className="d-flex justify-content-around">
        {filteredNews?.map((newInfo, index) => {
          return (
            <Card key={index} className="my-3 p-0" style={{ width: "24rem" }}>
              {newInfo.media[0]?.["media-metadata"]?.[2].url !== null ? (
                <Card.Img
                  variant="top"
                  src={newInfo.media[0]?.["media-metadata"]?.[2].url}
                  alt={index}
                />
              ) : (
                <p>No hay imagen</p>
              )}
              <Card.Body>
                <Card.Title>{newInfo.title}</Card.Title>
                <Card.Text>{newInfo.abstract}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <Card.Footer className="d-flex flex-column">
                <small className="text-muted">{newInfo.byline}</small>
                <small className="text-muted">{newInfo.published_date}</small>
              </Card.Footer>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default PopularNews;

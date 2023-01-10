import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
const apiKey = "3gwrNHYpbzAIzR14IsXRXzUEau9ceEfI";

const Category = ({ category, setCategory }) => {
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`,
      });
      setCategoryNews(response.data.results);
    };
    getNews();
  }, [category]);

  return (
    <Container>
      <Row className="d-flex justify-content-around">
        {categoryNews?.map((newInfo, index) => {
          return (
            <Card key={index} className="my-3 p-0" style={{ width: "24rem" }}>
              {newInfo.multimedia !== null ? (
                <Card.Img
                  variant="top"
                  src={newInfo.multimedia[1].url || "./default.jpg"}
                  alt={index}
                />
              ) : (
                <p>No hay imagen</p>
              )}
              <Card.Body>
                <Card.Title>{newInfo.title}</Card.Title>
                <Card.Text>{newInfo.abstract}</Card.Text>
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

export default Category;

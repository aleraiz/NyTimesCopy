import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
const apiKey = "3gwrNHYpbzAIzR14IsXRXzUEau9ceEfI";

const TopStories = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`,
      });
      setNews(response.data.results.slice(0, 7));
    };
    getNews();
  }, []);

  return (
    <>
      {news?.map((newInfo, index) => {
        return (
          <Row
            key={index}
            className="d-flex square border-dark border-bottom mt-2"
          >
            <Col>
              <h5>{newInfo.title}</h5>
              <p>{newInfo.abstract}</p>
            </Col>
            <Col>
              {newInfo.multimedia !== null ? (
                <Image
                  src={newInfo.multimedia[1].url}
                  fluid
                  alt={index}
                  className="mb-2"
                />
              ) : (
                <p>No hay imagen</p>
              )}
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default TopStories;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Figure, Row } from "react-bootstrap";
const apiKey = "3gwrNHYpbzAIzR14IsXRXzUEau9ceEfI";

const SideStories = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`,
      });
      //   console.log(response.data.results);
      setNews(response.data.results);
    };
    getNews();
  }, []);

  return (
    <Row className="d-flex justify-content-around mt-2">
      {news?.map((newInfo, index) => {
        return (
          <Figure className="col-5 me-1" key={index}>
            <Figure.Image
              alt={index}
              fluid
              src={
                newInfo.media[0]?.["media-metadata"]?.[1].url || "/logo192.png"
              }
            />
            <Figure.Caption>{newInfo.title}</Figure.Caption>
          </Figure>
        );
      })}
    </Row>
  );
};

export default SideStories;

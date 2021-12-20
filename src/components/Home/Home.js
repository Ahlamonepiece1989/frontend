import React, { useState, useEffect } from "react";
import Product from "./product.js";

import { Row, Col } from "react-bootstrap";

import axios from "axios";

const baseURL = "http://localhost:5000";

export default function Home() {
  const [post, setPost] = useState([]);

  const [searchInput,setsearchInput] = useState("");

  const [filteredResults,setilteredResults] = useState([]);

  //for get method
  useEffect(() => {
    axios.get(`${baseURL}/products`).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);

  return (
    <>
      <div style={{ display: "block", padding: 30 }}>
        <Row>
          {searchInput.length > 1
            ? filteredResults.map((productItem) => {
                return (
                  <Col md={3}>
                    <div className="product">
                      <Product
                        title={productItem.title}
                        price={productItem.price}
                        img={productItem.imgLink}
                      />
                    </div>
                  </Col>
                );
              })
            : post.map((productItem) => {
                return (
                  <Col md={3}>
                    <div className="product">
                      <Product
                        title={productItem.title}
                        price={productItem.price}
                        img={productItem.imgLink}
                      />
                    </div>
                  </Col>
                );
              })}
        </Row>
      </div>
    </>
  );
}
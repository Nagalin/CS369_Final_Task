import React, { useEffect } from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import useFetch from '../../hooks/useFetch'
import {useLocation} from 'react-router-dom'

const ProductDetails = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [data] = useFetch(`/product/${id}`)

  useEffect(() => {
    console.log(data)
  })

  

  return (
    <Container className="d-flex h-100 justify-content-center align-items-center mt-4">
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>Description:</b> Lorem ipsum dolor sit amet consectetur
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Size: </b> 10 x 15 x 30
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Material: </b>vibranium
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetails;

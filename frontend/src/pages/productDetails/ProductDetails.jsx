import React from "react"
import { Container, Card, ListGroup, Alert } from "react-bootstrap"
import useFetch from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"

const ProductDetails = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get("id")
  const [data, error] = useFetch(`/product/${id}`)

  return (
    <Container className="d-flex h-100 justify-content-center align-items-center mt-4">
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Card style={{ width: "50%" }}>
          <Card.Header>{data.name}</Card.Header>

          <div className="d-flex justify-content-center">
            <Card.Img
              style={{
                width: "70%",
                height: "auto",
                objectFit: "cover",
                margin: "20px",
              }}
              src={`${import.meta.env.VITE_TARGET_URL}/${data.pictureName}`}
            />
          </div>

          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Description:</b> {data.detail}
              </ListGroup.Item>

              <ListGroup.Item>
                <b>Size: </b> {data.width} {data.unit}. x {data.length}{" "}
                {data.unit}. x {data.height} {data.unit}.
              </ListGroup.Item>

              <ListGroup.Item>
                <b>Material: </b> {data.material}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </Container>
  )
}

export default ProductDetails

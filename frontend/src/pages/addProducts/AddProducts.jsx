import React from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
const AddProducts = () => {
  return (
      <div>
        <center>
          <h2 className='mt-5'>Add your Product</h2>
          <p>Please insert your Product infomations below</p>
        </center>
        <Row className='mt-5'>
          <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className=" mb-3"
          >
            <Form.Control
              type="text"
              placeholder="name"
            />
          </FloatingLabel>
          </Col>
          <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="price (THB)"
            className=" mb-3"
          >
            <Form.Control
              type="text"
              placeholder="price"
            />
          </FloatingLabel>
          </Col>
          <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Materials"
            className=" mb-3"
          >
            <Form.Control
              type="text"
              placeholder="materials"
            />
          </FloatingLabel>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Length"
              className="mb-3"
            >
              <Form.Control type="text" placeholder=""/>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Width"
              className="mb-3"
            >
              <Form.Control type="text" placeholder=""/>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Height"
              className="mb-3"
            >
              <Form.Control type="text" placeholder=""/>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Unit (e.g. mm. cm. in.)"
              className="mb-3"
            >
              <Form.Control type="text" placeholder=""/>
            </FloatingLabel>
          </Col>
        </Row>
            {" "}
            <Form.Label>Product Details</Form.Label>
        <Form.Control className="mb-3" as="textarea" rows={3} />
        
        <Form.Control style={{ width: "80%", height: "80%",fontSize:"140%",margin: 'auto'}} 
        className="mt-3 d-flex  justify-content-center align-items-center w-50" type="file" 
        placeholder=""/>

            {" "}
            <Button
              className="mt-3 d-flex  justify-content-center align-items-center"
              type="summit"
              style={{ width: "80%", height: "80%",fontSize:"140%",margin: 'auto'}}
              variant="primary"
            >
              Add My Product
            </Button>
      </div>
  )
}

export default AddProducts

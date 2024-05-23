import React from 'react'
import useAddProduct from './useAddProduct';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
const errorStyle = {
  width: '325px',
  marginTop: '10px',
}
const AddProducts = () => {
  
  const { name, price, detail, material, width, height, length, unit, err,
    handleFileChange,handleAddProduct  } 
  = useAddProduct();
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
              ref={name}
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
              type="number"
              placeholder="price"
              ref={price}
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
              ref={material}
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
              <Form.Control type="number" placeholder="" ref={length}/>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Width"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="" ref={width}/>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Height"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="" ref={height}/>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Unit (e.g. mm. cm. in.)"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="" ref={unit}/>
            </FloatingLabel>
          </Col>
        </Row>
            {" "}
            <Form.Label>Product Details</Form.Label>
        <Form.Control className="mb-3" as="textarea" rows={3} ref={detail} />
        
        <Form.Control style={{ width: "80%", height: "80%",fontSize:"140%",margin: 'auto'}} 
        className="mt-3 d-flex  justify-content-center align-items-center w-50" type="file" 
        placeholder="" onChange={handleFileChange} />
        { err && 
                <div className="position-absolute start-50 translate-middle-x text-center alert alert-danger"
                style={errorStyle}>
                    {err}
                </div>
                }
            {" "}
            <Button
              className="mt-3 d-flex  justify-content-center align-items-center"
              type="submit"
              style={{ width: "80%", height: "80%",fontSize:"140%",margin: 'auto'}}
              variant="primary"
              onClick={handleAddProduct}
            >
              Add My Product
            </Button>
      </div>
  )
}
export default AddProducts
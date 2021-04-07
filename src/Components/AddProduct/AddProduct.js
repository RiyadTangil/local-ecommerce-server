import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);

  const onSubmit = data => {
    const eventData = {
      name: data.name,
      Price: Number(data.price),
      weight: Number(data.weight),
      imageURL: imageURL
    };
    console.log({ eventData });
    const url = `http://localhost:5000/addProduct`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };




  const handleImageUpload = event => {
    console.log("event", event.target.files[0])
    const imageData = new FormData();

    imageData.set('key', '8ece3963cdc5195811f654de65d90034');
    imageData.append('image', event.target.files[0]);
    //axios copied code form git hub search results of google
    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
        console.log("response link", response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }






  return (
    <div style={{ padding: "10px", margin: "20px" }}>

      {/* 
      <form onSubmit={handleSubmit(onSubmit)}>

        <input name="name" defaultValue="New exciting Event" ref={register} />
        <br />
        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
        <br />
        <input type="submit" />
      </form> */}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="product name " ref={register} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="number" name="weight" ref={register} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price" defaultValue="New exciting Event" ref={register} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form>
              <Form.Group>
                <Form.File onChange={handleImageUpload} id="exampleFormControlFile1" label="Example file input" />
              </Form.Group>
            </Form>
          </Form.Group>
        </Form.Row>


        <Form.Row style={{ justifyContent: "flex-end" }}>
          <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default AddProduct;


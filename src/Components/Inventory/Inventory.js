import React, { useState } from 'react';
import { Button, Col, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';

const Inventory = ({ product, orders }) => {

    // const[reload,setreload]= useState([])
    const { register, handleSubmit, watch, errors } = useForm();


    const [show, setShow] = useState(false)
    const [productKey, setProductKey] = useState([])

    const handleDelete = (event, id) => {

        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
                }
            })

    }

    const handleUpdate = (id) => {
        setProductKey(id);
        setShow(true)
    }


    const onSubmit = data => {
        const eventData = {
            id: productKey,
            price: Number(data.price),
            quantity: Number(data.weight),

        };
        // const product = { id, price, quantity };


        fetch(`http://localhost:5000/update/${productKey}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                    console.log({ result });

                }
            })
        setShow(false)
    }




    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td style={{ width: "100px" }}>{product.name}</td>
                        <td style={{ width: "100px" }}>{product.weight}</td>
                        <td id="price" style={{ width: "100px" }}>{product.Price}</td>
                        <td style={{ width: "100px" }}><span onClick={() => handleUpdate(product._id)}  ><FontAwesomeIcon icon={faEdit} /> </span>
                            <span onClick={(e) => handleDelete(e, product._id)} > <FontAwesomeIcon icon={faTrash} /></span></td>


                    </tr>
                </tbody>
            </Table>
            {
                show &&
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Product quantity</Form.Label>
                            <Form.Control type="number" name="weight" placeholder="product quantity" ref={register} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" ref={register} />
                        </Form.Group>
                    </Form.Row>


                    <Form.Row style={{ justifyContent: "flex-end" }}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Row>
                </Form>
            }



        </div>
    );
};

export default Inventory;
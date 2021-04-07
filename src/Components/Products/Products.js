import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { OrderContext } from '../../App';

const Products = ({ product }) => {
    const [orderedProduct, setOrderedProduct] = useContext(OrderContext);

    const handleOrder = (product) => {
        const toBeAddedKey = product._id;
        const sameProduct = orderedProduct.find(pd => pd._id === toBeAddedKey);
        let count = 1;
        let neworderedProduct;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = orderedProduct.filter(pd => pd._id !== toBeAddedKey);
            neworderedProduct = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            neworderedProduct = [...orderedProduct, product];
        }
        setOrderedProduct(neworderedProduct);

    }


    return (

        <Col >
            <Card  style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={product.imageURL} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>

                </Card.Body>

                <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3> $ {product.Price}</h3>
                    <Link to="/chackout">  <Button onClick={() => handleOrder(product)} variant="outline-primary">Buy now</Button>{' '}</Link>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Products;
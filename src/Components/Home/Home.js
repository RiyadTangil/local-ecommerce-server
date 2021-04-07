import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form, FormControl, Navbar, Row, Spinner } from 'react-bootstrap';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                const orderableProduct = data.filter(product => product.imageURL !== undefined);
                console.log("order abe product", orderableProduct);
                setProducts(orderableProduct)
            })
    }, [])


    return (
        <div> {
            products.length === 0 ?
             <div style={{justifyContent:"center",display: "flex",marginTop:"200px"}}>
                    <Spinner animation="border" variant="success" />
             </div>
                : <div><Navbar style={{ justifyContent: "center" }} bg="light" variant="dark">

                    <Form inline >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 d-flex justify-content-center" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                    <Row lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            products.map(pd => <Products product={pd}></Products>)
                        }
                    </Row></div>
        }

        </div>
    );
};

export default Home;
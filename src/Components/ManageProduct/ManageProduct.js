
import React, { useEffect, useState } from 'react';
import { Col, Nav, Tab, Row, Table, Spinner } from 'react-bootstrap';
import AddProduct from '../AddProduct/AddProduct';
import Inventory from '../Inventory/Inventory';
import OrderList from '../OrderList/OrderList';


const ManageProduct = () => {

    const [inventoy, setInventory] = useState([])
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://gentle-tor-61540.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                const inventoy = data.filter(pd => pd.imageURL !== undefined)
                const orders = data.filter(pd => pd.imageURL === undefined)
              
                setInventory(inventoy);
                setOrders(orders)
            })
    }, [])






    return (
        <div>{
            inventoy.length === 0 ?
                <div style={{ justifyContent: "center", display: "flex", marginTop: "200px" }}>
                    <Spinner animation="border" variant="success" />
                </div>
                :
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">inventory</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Add product</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">orded product</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div>
                                        <Table striped bordered hover>

                                            <tbody>
                                                <tr className="bg-info text-light">
                                                    <td style={{ width: "100px", }}>Descrption</td>
                                                    <td style={{ width: "100px", }}>Weight</td>
                                                    <td style={{ width: "100px", }}>Price</td>
                                                    <td style={{ width: "100px", }}>Action</td>

                                                </tr>
                                            </tbody>
                                        </Table>

                                        {
                                            inventoy.map(pd => <Inventory product={pd}></Inventory>)
                                        }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <AddProduct></AddProduct>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div>
                                        <Table striped bordered hover>

                                            <tbody>
                                                <tr className="bg-info text-light">
                                                    <td style={{ width: "100px" }}>Eamil</td>
                                                    <td style={{ width: "100px" }}>name</td>
                                                    <td style={{ width: "100px" }}>Toal</td>
                                                    <td style={{ width: "100px" }}>Order time</td>
                                               

                                                </tr>
                                            </tbody>
                                        </Table>

                                        {
                                            orders.map(pd => <OrderList  orders={pd}></OrderList>)
                                        }
                                    </div>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

        }

        </div>
    );
};

export default ManageProduct;
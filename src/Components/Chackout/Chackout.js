import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { OrderContext, UserContext } from '../../App';
import OrderReview from '../OrderReview/OrderReview';

const Chackout = () => {
    const [loggedInUser, seLoggedInUser] = useContext(UserContext)
    const [orderedProduct, setOrderedProduct] = useContext(OrderContext);



    
    const total = orderedProduct.reduce((total, pd) => total + pd.Price, 0)
    const handleChackout = () => {
        const orderDetails = { ...loggedInUser, ...orderedProduct, total: total, orderTime: new Date() }
        fetch("http://localhost:5000/addOrder", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setOrderedProduct([])
                    alert("your order placed successfully")
                }
            })
    }
    return (
        <div className="container mt-5 p-3 shadow">
            <Table striped bordered hover>

                <tbody>
                    <tr className="bg-dark text-light">
                        <td style={{ width: "100px", }}>Descrption</td>
                        <td style={{ width: "100px", }}>Quantity</td>
                        <td style={{ width: "100px", }}>Price</td>

                    </tr>
                </tbody>
            </Table>
            {
                orderedProduct.map(pd => <OrderReview product={pd}></OrderReview>)
            }
            <tr style={{ justifyContent: "space-around", display: "flex" }}>
                <td style={{ width: "100px", fontweight: "bolder" }}>Total</td>
                <td style={{ width: "100px", fontweight: "bolder" }}>${total}</td>


            </tr>
            <tr style={{ justifyContent: "flex-end", display: "flex", marginRight: "20px" }}>
                <Button onClick={handleChackout} variant="success">Chackout</Button>{' '}
            </tr>
        </div>
    );
};

export default Chackout;
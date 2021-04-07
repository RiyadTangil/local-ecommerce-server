import React from 'react';
import { Table } from 'react-bootstrap';

const OrderReview = ({ product}) => {
    return (
        <div>
        <Table striped bordered hover>
               
                <tbody>
                    <tr>
                        <td style={{width:"100px"}}>{product.name}</td>
                        <td style={{width:"100px"}}>{product.quantity}</td>
                        <td style={{width:"100px"}}>{product.Price}</td>
                    
                    </tr>


                </tbody>
            </Table>
        </div>
    );
};

export default OrderReview;
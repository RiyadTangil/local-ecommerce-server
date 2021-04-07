import React from 'react';
import { Table } from 'react-bootstrap';

const OrderList = ({orders}) => {
    return (
        <div>
            
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td style={{ width: "100px" }}>{orders.email}</td>
                        <td style={{ width: "100px" }}>{orders.name}</td>
                        <td style={{ width: "100px" }}>{orders.total}</td>
                        <td style={{ width: "100px" }}>{orders.orderTime}</td>
                       

                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default OrderList;